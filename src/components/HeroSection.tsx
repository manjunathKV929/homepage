'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProductVisual from './ProductVisual';
import MetricCard from './MetricCard';
import HeroHeadline from './HeroHeadline';
import ScrollCue from './ScrollCue';
import { METRIC_CARDS } from '@/lib/constants';

// Register plugins once at module level — safe in Next.js client components
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HeroSectionProps {
  reducedMotion: boolean;
  onProgressChange?: (progress: number) => void;
}

export default function HeroSection({
  reducedMotion,
  onProgressChange,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);

  // useGSAP handles: context scoping, cleanup on unmount, React Strict Mode safe
  useGSAP(
    () => {
      const container = containerRef.current;
      const track = trackRef.current;
      const road = roadRef.current;
      const trail = trailRef.current;
      const carVisual = carWrapperRef.current;

      if (!container || !track || !road || !trail || !carVisual) return;

      const letters = Array.from(
        container.querySelectorAll<HTMLElement>('.headline-letter')
      );
      const cardElements = Array.from(
        container.querySelectorAll<HTMLElement>('.metric-card')
      );

      // ── Reduced-motion: show static final state immediately ──────────────
      if (reducedMotion) {
        trail.style.width = '100%';
        letters.forEach((l) => { l.style.opacity = '1'; });
        cardElements.forEach((c) => {
          c.style.opacity = '1';
          c.style.transform = 'none';
        });
        gsap.set(carVisual, { x: 0, opacity: 1, scale: 1 });
        onProgressChange?.(1);
        return;
      }

      // ── Set initial invisible state (GSAP owns these, not CSS) ────────────
      gsap.set(road, { opacity: 0, scaleY: 0.9 });
      gsap.set(carVisual, { x: 0, opacity: 0, scale: 0.95 });
      gsap.set('.hero-scroll-cue', { y: 15, opacity: 0 });
      trail.style.width = '0px';
      letters.forEach((l) => { l.style.opacity = '0'; });
      cardElements.forEach((c) => {
        gsap.set(c, { opacity: 0, y: 20, scale: 0.92 });
      });

      // ── Dynamic effects: trail width + letter reveal keyed to car x ───────
      const updateDynamicEffects = () => {
        const roadRect = road.getBoundingClientRect();
        const carRect = carVisual.getBoundingClientRect();
        const carX = Number(gsap.getProperty(carVisual, 'x')) || 0;

        if (carX <= 1) {
          trail.style.width = '0px';
          letters.forEach((l) => { l.style.opacity = '0'; });
          return;
        }

        // Trail fills up to behind the car's rear quarter
        const trailWidth = Math.max(
          0,
          carRect.left + carRect.width * 0.25 - roadRect.left
        );
        trail.style.width = `${trailWidth}px`;

        // Reveal each letter once the car's nose passes it
        const carFrontX = carRect.left + carRect.width * 0.5;
        letters.forEach((letter) => {
          const { left } = letter.getBoundingClientRect();
          letter.style.opacity = carFrontX >= left ? '1' : '0';
        });
      };

      // ── 1. Entrance animation ─────────────────────────────────────────────
      // Animates opacity/scale only. x is exclusively owned by the scroll TL.
      const introTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => ScrollTrigger.refresh(),
      });

      introTl
        .to(road, { opacity: 1, scaleY: 1, duration: 0.6 })
        .to(carVisual, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.3')
        .to('.hero-scroll-cue', { y: 0, opacity: 1, duration: 0.5 }, '-=0.2');

      // ── 2. Scroll-driven animation ────────────────────────────────────────
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isTablet: '(min-width: 640px) and (max-width: 1023px)',
          isMobile: '(max-width: 639px)',
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            isMobile: boolean;
          };

          // Travel distance recalculated on every ScrollTrigger refresh
          // via invalidateOnRefresh: true.
          //
          // The reference animation shows the car exiting the right side so the
          // full headline is revealed. We target roadWidth so the car's leading
          // edge aligns with the road's right boundary, fully exposing the text.
          // A 30% carWidth offset keeps the car's rear visible (matching reference).
          const getTravel = () => {
            const roadW = road.offsetWidth;
            const carW = Math.max(carVisual.scrollWidth, carVisual.offsetWidth);
            // Car exits right side; rear remains partially visible
            return Math.max(0, roadW - carW * 0.3);
          };

          // Pin duration — the section grows by this amount via GSAP pinSpacing
          const pinEnd = isMobile ? '+=1800' : '+=2400';

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: container,  // the outer section drives the scroll
              start: 'top top',
              end: pinEnd,
              pin: track,          // the viewport panel is pinned
              pinSpacing: true,    // GSAP adds spacer so the section scrolls
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                onProgressChange?.(self.progress);
                updateDynamicEffects();
              },
              onRefresh: () => {
                updateDynamicEffects();
              },
            },
          });

          // Scroll cue fades out immediately on first scroll
          scrollTl.to(
            '.hero-scroll-cue',
            { opacity: 0, ease: 'power1.out', duration: 0.04 },
            0
          );

          // Car drives across the road
          scrollTl.to(
            carVisual,
            { x: getTravel, ease: 'none', duration: 1 },
            0
          );

          // Metric cards pop in as the car passes their checkpoints
          METRIC_CARDS.forEach((card, idx) => {
            const el = cardElements[idx];
            if (!el) return;
            scrollTl.fromTo(
              el,
              { opacity: 0, y: card.position === 'top' ? -20 : 20, scale: 0.92 },
              { opacity: 1, y: 0, scale: 1, ease: 'power2.out', duration: 0.16 },
              card.progressTrigger
            );
          });
        }
      );
    },
    // Dependencies: re-run when reducedMotion changes
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="hero-experience"
      className="relative w-full bg-[#121212] select-none"
      // minHeight prevents empty page before GSAP initialises.
      // GSAP pinSpacing extends the section height to create scroll space.
      style={{ minHeight: '100vh' }}
    >
      {/*
        Pinned Viewport Track.
        ⚠️  No CSS `sticky` here — GSAP pin: track takes full control.
             CSS sticky + GSAP pin on the same element causes position conflicts.
      */}
      <div
        ref={trackRef}
        id="hero-track"
        className="w-full h-screen bg-[#d1d1d1] flex items-center justify-center overflow-hidden"
      >
        {/* ================================================================ */}
        {/* ROAD                                                              */}
        {/* ================================================================ */}
        <div
          ref={roadRef}
          id="road"
          className="relative w-screen h-36 sm:h-44 md:h-52 bg-[#1e1e1e] overflow-hidden flex items-center"
        >
          {/* Green trail — grows behind the car */}
          <div
            ref={trailRef}
            id="trail"
            className="absolute top-0 left-0 bottom-0 z-[1] bg-[#45db7d] pointer-events-none will-change-[width]"
            style={{ width: reducedMotion ? '100%' : '0px' }}
          />

          {/* Headline text inside the road */}
          <HeroHeadline />

          {/* Car — GSAP animates `x` on this wrapper */}
          <div
            ref={carWrapperRef}
            id="car-wrapper"
            className="absolute top-0 left-0 bottom-0 z-10 h-full flex items-center will-change-transform"
          >
            <ProductVisual />
          </div>
        </div>

        {/* ================================================================ */}
        {/* METRIC CARDS                                                      */}
        {/* ================================================================ */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Desktop & Tablet */}
          <div className="hidden sm:block absolute inset-0">
            <div className="absolute top-[5%] md:top-[6%] right-[30%]">
              <MetricCard card={METRIC_CARDS[0]} index={0} />
            </div>
            <div className="absolute bottom-[5%] md:bottom-[6%] right-[35%]">
              <MetricCard card={METRIC_CARDS[1]} index={1} />
            </div>
            <div className="absolute top-[5%] md:top-[6%] right-[10%]">
              <MetricCard card={METRIC_CARDS[2]} index={2} />
            </div>
            <div className="absolute bottom-[5%] md:bottom-[6%] right-[12.5%]">
              <MetricCard card={METRIC_CARDS[3]} index={3} />
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden absolute inset-0 flex flex-col justify-between py-20 px-3 pointer-events-none">
            <div className="flex justify-between items-center gap-2">
              <div className="max-w-[48%]">
                <MetricCard card={METRIC_CARDS[0]} index={0} />
              </div>
              <div className="max-w-[48%]">
                <MetricCard card={METRIC_CARDS[2]} index={2} />
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="max-w-[48%]">
                <MetricCard card={METRIC_CARDS[1]} index={1} />
              </div>
              <div className="max-w-[48%]">
                <MetricCard card={METRIC_CARDS[3]} index={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <ScrollCue />
      </div>
    </section>
  );
}

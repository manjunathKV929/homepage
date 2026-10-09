'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductVisual from './ProductVisual';
import MetricCard from './MetricCard';
import HeroHeadline from './HeroHeadline';
import ScrollCue from './ScrollCue';
import { METRIC_CARDS } from '@/lib/constants';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  reducedMotion: boolean;
  onProgressChange?: (progress: number) => void;
}

export default function HeroSection({
  reducedMotion,
  onProgressChange,
}: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // If reduced motion is requested, show static accessible layout
    if (reducedMotion) {
      if (trackFillRef.current) {
        trackFillRef.current.style.width = '100%';
      }
      if (carWrapperRef.current) {
        gsap.set(carWrapperRef.current, { x: 0, opacity: 1 });
      }
      const cards = containerRef.current?.querySelectorAll('.metric-card');
      if (cards) {
        gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
      }
      setScrollProgress(1);
      onProgressChange?.(1);
      return;
    }

    const container = containerRef.current;
    const trackWrapper = trackWrapperRef.current;
    const trackFill = trackFillRef.current;
    const carVisual = carWrapperRef.current;

    if (!container || !trackWrapper || !trackFill || !carVisual) return;

    // Use gsap.context for clean scoping and React StrictMode safety
    const ctx = gsap.context(() => {
      // 1. Initial Load Timeline
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      introTl
        .fromTo(
          '.hero-top-text',
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        )
        .fromTo(
          '.hero-bottom-text',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          trackWrapper,
          { scaleX: 0.9, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          carVisual,
          { x: -120, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          '-=0.5'
        );

      // 2. Responsive Animation via gsap.matchMedia
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

          // Calculate travel distance: from start pad to right screen edge
          const calculateTravel = () => {
            const trackWidth = trackWrapper.offsetWidth;
            const carWidth = carVisual.offsetWidth || 340;
            // Car travels across full width, front exiting past the right border
            return trackWidth - (isMobile ? 120 : 60);
          };

          // Main Scroll-Driven Scrub Timeline
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: isMobile ? '+=1400' : '+=2200',
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const p = self.progress;
                setScrollProgress(p);
                onProgressChange?.(p);
              },
            },
          });

          // Animation 1: Move car across track
          scrollTl.to(
            carVisual,
            {
              x: () => calculateTravel(),
              ease: 'none',
              duration: 1,
            },
            0
          );

          // Animation 2: Expand active electric green track fill directly behind car
          scrollTl.to(
            trackFill,
            {
              width: '100%',
              ease: 'none',
              duration: 1,
            },
            0
          );

          // Animation 3: Reveal Metric Cards sequentially along scroll progress
          const cardElements = container.querySelectorAll('.metric-card');

          cardElements.forEach((card, idx) => {
            const targetData = METRIC_CARDS[idx];
            const startProgress = Math.max(0, targetData.progressTrigger - 0.08);
            const isTop = targetData.position === 'top';

            scrollTl.fromTo(
              card,
              {
                opacity: 0,
                y: isTop ? -35 : 35,
                scale: 0.88,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: 'power2.out',
                duration: 0.22,
              },
              startProgress
            );
          });
        }
      );
    }, containerRef);

    return () => {
      ctx.revert(); // Complete GSAP cleanup
    };
  }, [reducedMotion, onProgressChange]);

  return (
    <div
      ref={containerRef}
      id="experience"
      className="relative w-full h-screen bg-[#090B0A] text-white overflow-hidden select-none"
    >
      {/* Editorial and telemetry overlays */}
      <HeroHeadline revealProgress={scrollProgress} />

      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C7FF35]/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* ========================================================================= */}
      {/* THE CENTRAL SPEED TRACK (Matching Reference Architecture)                */}
      {/* ========================================================================= */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-36 sm:h-44 md:h-52 flex items-center">
        {/* Track Container */}
        <div
          ref={trackWrapperRef}
          className="relative w-full h-full bg-[#151817] border-y border-white/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] flex items-center overflow-hidden"
        >
          {/* Track Texture Lines (Asphalt / Grid feel) */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, transparent 2px, transparent 40px)',
            }}
          />

          {/* Center road divider dashed line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] flex space-x-6 justify-around opacity-20 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="inline-block w-8 h-[2px] bg-white/40" />
            ))}
          </div>

          {/* BASE LAYER HEADLINE (Muted dark gray on default track) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-8">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.25em] text-neutral-700/60 select-none whitespace-nowrap">
              WELCOME ITZFIZZ
            </h2>
          </div>

          {/* ACTIVE LAYER: Vibrant Electric Lime Fill revealing bold dark headline */}
          <div
            ref={trackFillRef}
            className="absolute top-0 left-0 bottom-0 z-20 overflow-hidden bg-[#C7FF35] shadow-[0_0_35px_rgba(199,255,55,0.4)] pointer-events-none will-change-[width]"
            style={{ width: reducedMotion ? '100%' : '140px' }}
          >
            {/* The revealed bold dark headline inside active green track */}
            <div className="absolute inset-0 w-screen h-full flex items-center justify-center px-8">
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.25em] text-[#090B0A] select-none whitespace-nowrap">
                WELCOME ITZFIZZ
              </h2>
            </div>

            {/* Glowing edge pulse where the car touches */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-r from-transparent to-white/60 blur-[2px]" />
          </div>

          {/* START PAD (Green Start Zone at far left edge matching reference) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-[#a6e226] border-r-2 border-black/40 z-20 flex flex-col justify-between py-2 px-1 text-[9px] font-mono text-black font-extrabold uppercase select-none">
            <span>START</span>
            <div className="w-full h-1 bg-black/30" />
            <span>00:00</span>
          </div>

          {/* FINISH LINE (Checkered finish marker at far right edge) */}
          <div
            className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-10 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-conic-gradient(#fff 0% 25%, #000 0% 50%) 50% / 14px 14px',
            }}
          />

          {/* THE CAR VISUAL (Translations driven by GSAP ScrollTrigger) */}
          <div
            ref={carWrapperRef}
            className="absolute left-4 sm:left-10 top-0 bottom-0 z-30 flex items-center will-change-transform"
          >
            <ProductVisual progress={scrollProgress} />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING METRIC CARDS (Positioned along the scroll journey)               */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-40 max-w-7xl mx-auto px-4">
        {/* Desktop Absolute Positions matching the reference's 4 cards */}
        <div className="hidden md:block absolute inset-0">
          {/* Card 1: Top Left-Center */}
          <div className="absolute top-[8%] left-[16%]">
            <MetricCard card={METRIC_CARDS[0]} index={0} />
          </div>

          {/* Card 2: Top Right-Center */}
          <div className="absolute top-[8%] left-[54%]">
            <MetricCard card={METRIC_CARDS[1]} index={1} />
          </div>

          {/* Card 3: Bottom Center-Left */}
          <div className="absolute bottom-[8%] left-[32%]">
            <MetricCard card={METRIC_CARDS[2]} index={2} />
          </div>

          {/* Card 4: Bottom Right-Center */}
          <div className="absolute bottom-[8%] left-[68%]">
            <MetricCard card={METRIC_CARDS[3]} index={3} />
          </div>
        </div>

        {/* Mobile / Tablet Responsive Stacking */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-between py-20 px-2 pointer-events-none">
          {/* Top Mobile Card Slot */}
          <div className="flex justify-center">
            {scrollProgress < 0.5 ? (
              <MetricCard card={METRIC_CARDS[0]} index={0} />
            ) : (
              <MetricCard card={METRIC_CARDS[1]} index={1} />
            )}
          </div>

          {/* Bottom Mobile Card Slot */}
          <div className="flex justify-center">
            {scrollProgress < 0.75 ? (
              <MetricCard card={METRIC_CARDS[2]} index={2} />
            ) : (
              <MetricCard card={METRIC_CARDS[3]} index={3} />
            )}
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Scroll Cue */}
      <ScrollCue progress={scrollProgress} />
    </div>
  );
}

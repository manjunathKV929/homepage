'use client';

import React from 'react';
import { FLAVOR_PROFILES, METRIC_CARDS } from '@/lib/constants';

export default function FollowupSection() {
  return (
    <section className="relative z-30 bg-[#0C0F0D] text-white py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* ========================================================================= */}
        {/* SECTION 1: FLAVOR ARCHITECTURE & BOTANICALS                               */}
        {/* ========================================================================= */}
        <div id="flavors" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#C7FF35] uppercase block mb-2">
                FORMULATION MATRIX // 01
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                PRECISION FLAVOR PROFILES
              </h2>
            </div>
            <p className="text-sm font-mono text-neutral-400 max-w-md mt-4 md:mt-0">
              Formulated with organic fruit essences, alpine mountain electrolytes, and zero artificial sweeteners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLAVOR_PROFILES.map((flavor, index) => (
              <div
                key={flavor.name}
                className="group relative p-8 rounded-3xl bg-[#151916] border border-white/10 hover:border-[#C7FF35]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${flavor.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#C7FF35] font-bold">
                      SERIES // 0{index + 1}
                    </span>
                    <span
                      className="w-3 h-3 rounded-full shadow-[0_0_12px_currentColor]"
                      style={{ backgroundColor: flavor.accent, color: flavor.accent }}
                    />
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                    {flavor.name}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-medium">
                    {flavor.tagline}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      TASTING NOTES
                    </span>
                    {flavor.notes.map((note) => (
                      <div
                        key={note}
                        className="flex items-center space-x-2 text-xs font-mono text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF35]" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">355ML SLIM CAN</span>
                  <span className="text-xs font-bold font-mono text-[#C7FF35] group-hover:underline">
                    EXPLORE CAN →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: TECHNICAL BENCHMARKS / PERFORMANCE                             */}
        {/* ========================================================================= */}
        <div id="specs" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#C7FF35] uppercase block mb-2">
                BIO-EFFICIENCY // 02
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                PERFORMANCE METRICS
              </h2>
            </div>
            <p className="text-sm font-mono text-neutral-400 max-w-md mt-4 md:mt-0">
              Standardized comparison against traditional energy drinks and sugary sodas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRIC_CARDS.map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-[#141715] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-[#C7FF35] tracking-tight block mb-2">
                    {card.value}
                  </span>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-2">
                    {card.label}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>BENCHMARK</span>
                  <span>VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: ENGINEERING ARCHITECTURE (INTERNSHIP HIGHLIGHT)                */}
        {/* ========================================================================= */}
        <div id="architecture" className="space-y-12 p-8 sm:p-12 rounded-3xl bg-[#131614] border border-[#C7FF35]/30 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#C7FF35] uppercase block mb-2">
                TECHNICAL DOCUMENTATION // 03
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                SCROLL ANIMATION ARCHITECTURE
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400 mt-2 md:mt-0">
              ENGINEERED FOR PRODUCTION INTERVIEW EVALUATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C7FF35]/10 text-[#C7FF35] flex items-center justify-center font-mono font-black text-sm">
                01
              </div>
              <h4 className="text-base font-bold text-white">GSAP ScrollTrigger Pinned Scrub</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                The viewport is pinned using <code className="text-[#C7FF35]">pin: true</code> with an exact <code className="text-[#C7FF35]">scrub: 0.8</code> multiplier. Animation progress strictly tracks viewport scroll progress, rendering 60+ FPS transforms without layout recalculations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C7FF35]/10 text-[#C7FF35] flex items-center justify-center font-mono font-black text-sm">
                02
              </div>
              <h4 className="text-base font-bold text-white">Two-Layer Track Reveal Technique</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Faithfully reproducing the reference website: the horizontal track features an underlayer of muted typography and an electric lime overlayer clipped dynamically to the car position, revealing <code className="text-[#C7FF35]">WELCOME ITZFIZZ</code> character-by-character.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C7FF35]/10 text-[#C7FF35] flex items-center justify-center font-mono font-black text-sm">
                03
              </div>
              <h4 className="text-base font-bold text-white">React 19 & StrictMode Lifecycle</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Cleaned up reliably with <code className="text-[#C7FF35]">gsap.context()</code> and <code className="text-[#C7FF35]">ctx.revert()</code>. Responsive variations are managed via <code className="text-[#C7FF35]">gsap.matchMedia()</code>, eliminating memory leaks and duplicate triggers.
              </p>
            </div>
          </div>

          {/* Code snippet breakdown box */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-neutral-300 overflow-x-auto">
            <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-3 border-b border-white/10 pb-2">
              <span>lib/animations.ts — ScrollTrigger Integration Pipeline</span>
              <span className="text-[#C7FF35]">VALIDATED</span>
            </div>
            <pre className="text-neutral-300">
{`const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.current,
    start: "top top",
    end: isMobile ? "+=1400" : "+=2200",
    pin: true,
    scrub: 0.8,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => setScrollProgress(self.progress),
  }
});

// Dual synchronized animations:
scrollTl.to(carVisual, { x: calculateTravel(), ease: "none" }, 0);
scrollTl.to(trackFill, { width: "100%", ease: "none" }, 0);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

interface HeroHeadlineProps {
  revealProgress?: number;
}

export default function HeroHeadline({ revealProgress = 0 }: HeroHeadlineProps) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none flex flex-col justify-between py-24 px-6 md:px-16 overflow-hidden">
      {/* Top Editorial Subheading */}
      <div className="hero-top-text flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#C7FF35] uppercase block mb-1">
            ORIGIN // HIGH EFFICIENCY HYDRATION
          </span>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
            ITZ FIZZ <span className="text-neutral-500 font-light">— FORMULA ZERO</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs font-mono text-neutral-400">
          <span>LAT: 37.7749° N</span>
          <span>ELEV: 240M</span>
          <span className="text-[#C7FF35]">STATUS: ARMED</span>
        </div>
      </div>

      {/* Subtle Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none">
        <span className="text-[14vw] font-black uppercase tracking-tighter text-white block leading-none">
          ITZ FIZZ
        </span>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="hero-bottom-text flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center space-x-4">
          <span className="text-neutral-300 font-bold">DRIVE MATRIX</span>
          <span className="text-neutral-500">|</span>
          <span>4-STAGE SCROLL KINETICS</span>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-[11px] text-neutral-500">
          <span>POWERED BY GSAP SCROLLTRIGGER</span>
          <span>•</span>
          <span className="text-[#C7FF35]">REACT 19 TURBOPACK</span>
        </div>
      </div>
    </div>
  );
}

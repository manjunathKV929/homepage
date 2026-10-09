'use client';

import React from 'react';
import { BRAND_NAME } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-30 bg-[#070807] text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-xl bg-[#C7FF35] flex items-center justify-center font-black text-black text-xl tracking-tighter">
            IF
          </div>
          <div>
            <span className="font-black text-lg tracking-widest text-white uppercase block leading-tight">
              {BRAND_NAME}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              PREMIUM SCROLL-DRIVEN EXPERIENCE
            </span>
          </div>
        </div>

        {/* Replay Interaction Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group px-6 py-3 rounded-full bg-white/5 border border-white/20 hover:border-[#C7FF35] text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 hover:text-black hover:bg-[#C7FF35] transition-all duration-300 flex items-center space-x-3 active:scale-95 shadow-lg"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span>REPLAY EXPERIENCE (BACK TO START)</span>
        </button>

        {/* Credits & Asset Notice */}
        <div className="text-right text-xs font-mono text-neutral-500 space-y-1">
          <p>© 2026 {BRAND_NAME}. Engineered for Technical Evaluation.</p>
          <p>
            Primary Vehicle Asset: <span className="text-neutral-400">main.png</span> (Top-down visual provided).
          </p>
          <p>
            Reference Architecture: <span className="text-[#C7FF35]">paraschaturvedi.github.io/car-scroll-animation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

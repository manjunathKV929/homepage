'use client';

import React from 'react';
import { BRAND_NAME } from '@/lib/constants';

interface NavbarProps {
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  scrollProgress: number;
}

export default function Navbar({
  reducedMotion,
  onToggleReducedMotion,
  scrollProgress,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-[#C7FF35] flex items-center justify-center font-black text-black text-lg tracking-tighter shadow-[0_0_20px_rgba(199,255,55,0.4)]">
            IF
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-widest text-white uppercase block leading-none">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] tracking-widest text-[#C7FF35] uppercase font-mono">
              Electric Hydration
            </span>
          </div>
        </div>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider text-neutral-300 uppercase">
          <a
            href="#experience"
            className="hover:text-[#C7FF35] transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#flavors"
            className="hover:text-[#C7FF35] transition-colors duration-200"
          >
            Flavors
          </a>
          <a
            href="#specs"
            className="hover:text-[#C7FF35] transition-colors duration-200"
          >
            Performance
          </a>
          <a
            href="#architecture"
            className="hover:text-[#C7FF35] transition-colors duration-200"
          >
            Tech Specs
          </a>
        </nav>

        {/* Accessibility & Action controls */}
        <div className="flex items-center space-x-3">
          {/* Reduced Motion Toggle */}
          <button
            type="button"
            onClick={onToggleReducedMotion}
            className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider border transition-all duration-200 flex items-center space-x-1.5 ${
              reducedMotion
                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                : 'bg-white/5 text-neutral-300 border-white/15 hover:border-[#C7FF35]/50 hover:text-white'
            }`}
            title="Toggle reduced motion for accessibility"
            aria-pressed={reducedMotion}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                reducedMotion ? 'bg-amber-400' : 'bg-[#C7FF35] animate-pulse'
              }`}
            />
            <span>{reducedMotion ? 'Motion: OFF' : 'Motion: ON'}</span>
          </button>

          {/* CTA Sample Button */}
          <a
            href="#flavors"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C7FF35] text-black hover:bg-[#b5f022] hover:shadow-[0_0_25px_rgba(199,255,55,0.6)] transition-all duration-200 active:scale-95"
          >
            Order Sample
          </a>
        </div>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7FF35] to-emerald-400 transition-all duration-75"
        style={{ width: `${Math.round(scrollProgress * 100)}%` }}
      />
    </header>
  );
}

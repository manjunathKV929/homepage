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
    <header className="hero-nav-header fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#def54f] border border-black/20 flex items-center justify-center font-black text-black text-sm tracking-tight shadow-sm">
            IF
          </div>
          <div>
            <span className="font-black text-base sm:text-lg tracking-wider text-black uppercase block leading-none">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] tracking-widest text-neutral-600 uppercase font-mono">
              Scroll Experience
            </span>
          </div>
        </div>

        {/* Accessibility control */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={onToggleReducedMotion}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider border transition-all duration-200 flex items-center space-x-2 ${
              reducedMotion
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-black/5 text-neutral-800 border-black/10 hover:bg-black/10'
            }`}
            title="Toggle reduced motion preference"
            aria-pressed={reducedMotion}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                reducedMotion ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
              }`}
            />
            <span>{reducedMotion ? 'Motion: Reduced' : 'Motion: Enabled'}</span>
          </button>
        </div>
      </div>

      {/* Progress indicator line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#45db7d] transition-all duration-75"
        style={{ width: `${Math.round(scrollProgress * 100)}%` }}
      />
    </header>
  );
}

'use client';

import React from 'react';

export default function ScrollCue() {
  return (
    <div className="hero-scroll-cue absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none select-none transition-opacity duration-300">
      <span className="text-[11px] font-mono tracking-widest text-neutral-600 uppercase mb-2">
        Scroll to Drive
      </span>
      <div className="w-5 h-8 rounded-full border-2 border-neutral-500/50 flex items-start justify-center p-1">
        <div className="w-1.5 h-2 rounded-full bg-[#111] animate-bounce" />
      </div>
    </div>
  );
}

'use client';

import React from 'react';

interface ScrollCueProps {
  progress: number;
}

export default function ScrollCue({ progress }: ScrollCueProps) {
  const isStarted = progress > 0.03;
  const speed = Math.round(progress * 165); // Speed simulation in MPH

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none transition-all duration-300">
      {/* Telemetry pill */}
      <div className="flex items-center space-x-4 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-neutral-300 shadow-2xl">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C7FF35] animate-pulse" />
          <span className="text-white font-bold">{speed}</span>
          <span className="text-[10px] text-neutral-400">MPH</span>
        </div>
        <div className="h-3 w-[1px] bg-white/20" />
        <div className="flex items-center space-x-1">
          <span className="text-[10px] text-neutral-400">TRACK:</span>
          <span className="text-[#C7FF35] font-bold">{Math.round(progress * 100)}%</span>
        </div>
      </div>

      {/* Visual mouse indicator that fades as user scrolls down */}
      <div
        className={`flex flex-col items-center mt-3 transition-opacity duration-500 ${
          isStarted ? 'opacity-25' : 'opacity-100'
        }`}
      >
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5 animate-pulse">
          Scroll to Drive
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-[#C7FF35] animate-bounce" />
        </div>
      </div>
    </div>
  );
}

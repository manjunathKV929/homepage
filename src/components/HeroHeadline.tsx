'use client';

import React from 'react';

const HEADLINE_LETTERS = [
  'W', 'E', 'L', 'C', 'O', 'M', 'E',
  '\u00A0',
  'I', 'T', 'Z',
  '\u00A0',
  'F', 'I', 'Z', 'Z'
];

interface HeroHeadlineProps {
  className?: string;
}

export default function HeroHeadline({ className = '' }: HeroHeadlineProps) {
  return (
    <div
      className={`hero-headline-wrapper absolute inset-0 z-5 flex items-center justify-start pl-[28%] sm:pl-[24%] md:pl-[22%] lg:pl-[20%] pointer-events-none select-none overflow-hidden ${className}`}
      aria-label="WELCOME ITZ FIZZ"
    >
      <div className="flex items-center gap-[0.12em] sm:gap-[0.18em] md:gap-[0.22em]">
        {HEADLINE_LETTERS.map((char, index) => (
          <span
            key={index}
            className="headline-letter text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#111] opacity-0 transition-opacity duration-150 will-change-[opacity]"
            aria-hidden="true"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { MetricCardData } from '@/types';

interface MetricCardProps {
  card: MetricCardData;
  index: number;
}

export default function MetricCard({ card }: MetricCardProps) {
  // Color theme styling mapping
  const themeStyles = {
    lime: {
      cardBg: 'bg-[#C7FF35] text-black border-[#b2ec24]',
      badgeBg: 'bg-black/15 text-black',
      valColor: 'text-black',
      labelColor: 'text-black/80',
      descColor: 'text-black/70',
      glow: 'shadow-[0_10px_35px_rgba(199,255,55,0.35)]',
    },
    dark: {
      cardBg: 'bg-[#18181B]/95 text-white border-white/20 backdrop-blur-xl',
      badgeBg: 'bg-white/10 text-neutral-300',
      valColor: 'text-white',
      labelColor: 'text-[#C7FF35]',
      descColor: 'text-neutral-300',
      glow: 'shadow-[0_10px_35px_rgba(0,0,0,0.6)]',
    },
    cyan: {
      cardBg: 'bg-[#4DEEEA] text-black border-[#38deda]',
      badgeBg: 'bg-black/15 text-black',
      valColor: 'text-black',
      labelColor: 'text-black/80',
      descColor: 'text-black/70',
      glow: 'shadow-[0_10px_35px_rgba(77,238,234,0.35)]',
    },
    orange: {
      cardBg: 'bg-[#FF6B35] text-white border-[#f05a20]',
      badgeBg: 'bg-black/20 text-white',
      valColor: 'text-white',
      labelColor: 'text-amber-100',
      descColor: 'text-white/90',
      glow: 'shadow-[0_10px_35px_rgba(255,107,53,0.35)]',
    },
  }[card.theme];

  return (
    <div
      data-metric-id={card.id}
      className={`metric-card pointer-events-auto w-[240px] sm:w-[280px] p-5 sm:p-6 rounded-2xl border transition-all duration-300 select-none ${themeStyles.cardBg} ${themeStyles.glow}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase ${themeStyles.badgeBg}`}>
          METRIC // 0{card.progressTrigger * 10}
        </span>
        <span className="w-2 h-2 rounded-full bg-current opacity-70 animate-ping" />
      </div>

      <div className="flex items-baseline space-x-1.5 mb-1">
        <span className={`text-4xl sm:text-5xl font-black tracking-tighter ${themeStyles.valColor}`}>
          {card.value}
        </span>
      </div>

      <h3 className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-1.5 ${themeStyles.labelColor}`}>
        {card.label}
      </h3>

      <p className={`text-xs leading-relaxed font-medium ${themeStyles.descColor}`}>
        {card.description}
      </p>

      {/* Subtle indicator bar */}
      <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono opacity-60">
        <span>CAMPAIGN BENCHMARK</span>
        <span>VERIFIED</span>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { MetricCardData } from '@/types';

interface MetricCardProps {
  card: MetricCardData;
  index: number;
}

export default function MetricCard({ card }: MetricCardProps) {
  const themeStyles = {
    lime: {
      cardBg: 'bg-[#def54f] text-[#111] shadow-[0_12px_30px_rgba(222,245,79,0.25)]',
      valColor: 'text-[#111]',
      labelColor: 'text-[#111]',
    },
    blue: {
      cardBg: 'bg-[#6ac9ff] text-[#111] shadow-[0_12px_30px_rgba(106,201,255,0.25)]',
      valColor: 'text-[#111]',
      labelColor: 'text-[#111]',
    },
    dark: {
      cardBg: 'bg-[#333333] text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]',
      valColor: 'text-white',
      labelColor: 'text-neutral-100',
    },
    orange: {
      cardBg: 'bg-[#fa7328] text-[#111] shadow-[0_12px_30px_rgba(250,115,40,0.25)]',
      valColor: 'text-[#111]',
      labelColor: 'text-[#111]',
    },
  }[card.theme];

  return (
    <div
      data-metric-id={card.id}
      className={`metric-card pointer-events-auto rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col justify-center items-start gap-1 select-none transition-transform will-change-[transform,opacity] opacity-0 ${themeStyles.cardBg}`}
    >
      <span className={`num-box text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none ${themeStyles.valColor}`}>
        {card.value}
      </span>
      <span className={`text-xs sm:text-sm md:text-base font-medium leading-snug max-w-[190px] ${themeStyles.labelColor}`}>
        {card.label}
      </span>
    </div>
  );
}

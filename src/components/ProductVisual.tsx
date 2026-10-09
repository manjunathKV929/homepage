'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';

interface ProductVisualProps {
  progress?: number;
  className?: string;
}

const ProductVisual = forwardRef<HTMLDivElement, ProductVisualProps>(
  ({ progress = 0, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        id="hero-car-visual"
        className={`absolute z-30 flex items-center justify-center select-none pointer-events-none will-change-transform ${className}`}
        style={{
          // Center vertically on track
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {/* Glow / lighting behind car */}
        <div className="absolute inset-0 -m-8 bg-[#C7FF35]/15 blur-2xl rounded-full opacity-60 pointer-events-none" />

        {/* Headlight beams pointing forward (to the right) */}
        <div
          className="absolute left-[85%] top-1/2 -translate-y-1/2 w-64 h-32 pointer-events-none opacity-40 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(ellipse at left, rgba(255,255,255,0.7) 0%, rgba(199,255,55,0.4) 30%, transparent 70%)',
            clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)',
          }}
        />

        {/* Shadow under car */}
        <div className="absolute w-[240px] md:w-[320px] h-12 bg-black/70 blur-md rounded-full -bottom-2 z-0" />

        {/* The Car Image */}
        <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px] aspect-square flex items-center justify-center">
          <Image
            src="/images/main.png"
            alt="ITZ FIZZ High Performance Vehicle"
            width={400}
            height={400}
            priority
            className="w-full h-full object-contain -rotate-90 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Speed streak particles (visible when moving) */}
        <div
          className="absolute right-full top-1/2 -translate-y-1/2 h-1 bg-gradient-to-l from-[#C7FF35] to-transparent rounded-full transition-all duration-100"
          style={{
            width: `${Math.min(progress * 200, 160)}px`,
            opacity: progress > 0.02 ? 0.8 : 0,
          }}
        />
      </div>
    );
  }
);

ProductVisual.displayName = 'ProductVisual';

export default ProductVisual;

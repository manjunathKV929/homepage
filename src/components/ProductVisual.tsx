'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';

interface ProductVisualProps {
  progress?: number;
  className?: string;
}

const ProductVisual = forwardRef<HTMLDivElement, ProductVisualProps>(
  ({ className = '' }, ref) => {
    return (
      <div
        ref={ref}
        id="hero-car-visual"
        className={`relative z-10 h-full flex items-center select-none pointer-events-none will-change-transform ${className}`}
      >
        {/* The McLaren 720S top view image directly matching the reference */}
        <div className="relative h-full w-auto aspect-[2048/968] flex items-center">
          <Image
            src="/images/car.png"
            alt="McLaren 720S Top View"
            width={423}
            height={200}
            priority
            className="h-full w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    );
  }
);

ProductVisual.displayName = 'ProductVisual';

export default ProductVisual;

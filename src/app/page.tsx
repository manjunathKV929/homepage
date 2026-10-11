'use client';

import React, { useState, useSyncExternalStore, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function Home() {
  const osReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [manualOverride, setManualOverride] = useState<boolean | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const reducedMotion = manualOverride !== null ? manualOverride : osReducedMotion;

  const handleToggleReducedMotion = useCallback(() => {
    setManualOverride((prev) => (prev !== null ? !prev : !osReducedMotion));
  }, [osReducedMotion]);

  return (
    <main className="relative min-h-screen bg-[#121212] text-white selection:bg-[#45db7d] selection:text-black overflow-x-hidden">
      {/* Navigation Header with accessibility control */}
      <Navbar
        reducedMotion={reducedMotion}
        onToggleReducedMotion={handleToggleReducedMotion}
        scrollProgress={scrollProgress}
      />

      {/* Primary Scroll-Driven Hero Experience (Matching Reference) */}
      <HeroSection
        reducedMotion={reducedMotion}
        onProgressChange={setScrollProgress}
      />
    </main>
  );
}

"use client";

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export default function LenisScroll() {
  const pathname = usePathname();
  const [lenisInst, setLenisInst] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    
    setLenisInst(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Force scroll to top on route change
  useEffect(() => {
    if (lenisInst) {
      lenisInst.scrollTo(0, { immediate: true });
      // Fallback for native
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisInst]);

  return null;
}

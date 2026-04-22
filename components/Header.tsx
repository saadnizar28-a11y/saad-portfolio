"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Other pages: Header is ALWAYS visible
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    // Home Page: Header appears AFTER the intro sequence
    const checkScroll = () => {
      // The canvas intro wrapper is 300vh. 
      // After ~250vh scroll distance, the main page becomes visible.
      // We will securely show the header after passing 150vw/vh threshold 
      const triggerThreshold = window.innerHeight * 2;
      
      if (window.scrollY > triggerThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Run once on mount
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 -translate-y-8 pointer-events-none"
      }`}
    >
      {/* Premium Glassmorphism Background */}
      <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-xl border-b border-[var(--accent-cyan)]/10 shadow-[0_4px_40px_rgba(0,0,0,0.5)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-white font-extrabold tracking-[0.2em] uppercase text-sm z-10 flex items-center gap-3 group">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] group-hover:shadow-[0_0_20px_rgba(0,240,255,1)] transition-shadow duration-500" />
          <span className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">SN</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                pathname === link.href 
                  ? "text-[var(--accent-cyan)] font-medium drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]" 
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-[var(--accent-cyan)] transition-colors z-50 relative text-xs tracking-widest uppercase outline-none"
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-3xl z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center items-center ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl tracking-[0.2em] uppercase transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${
                pathname === link.href 
                  ? "text-[var(--accent-cyan)] font-bold drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]" 
                  : "text-white/50 hover:text-white"
              }`}
              style={{ transitionDelay: `${isMobileMenuOpen ? i * 75 + 100 : 0}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

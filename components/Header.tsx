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
    <>
      <header
        className={`fixed z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
          top-0 left-0 right-0 md:bottom-0 md:right-auto md:w-24 md:hover:w-64 md:h-screen pointer-events-none group/desktop ${
          isVisible 
            ? "opacity-100 md:translate-x-0 translate-y-0" 
            : "opacity-0 md:-translate-x-8 -translate-y-8 md:translate-y-0"
        }`}
      >
        {/* Mobile Glassmorphism Background */}
        <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-xl border-b border-[var(--accent-cyan)]/10 shadow-[0_4px_40px_rgba(0,0,0,0.5)] md:hidden pointer-events-auto" />
        
        {/* Removed transparent expanding background to eliminate the border */}

        <div className="relative w-full h-24 md:h-full md:w-full px-6 md:px-0 flex md:flex-col items-center justify-between md:justify-center pointer-events-auto">
          
          {/* Mobile Logo */}
          <Link href="/" className="md:hidden text-white font-extrabold tracking-[0.2em] uppercase text-sm z-10 flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] group-hover:shadow-[0_0_20px_rgba(0,240,255,1)] transition-shadow duration-500" />
            <span className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">SN</span>
          </Link>

          {/* Minimized Desktop Menu Icon */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 transition-all duration-500 group-hover/desktop:opacity-0 group-hover/desktop:scale-75 group-hover/desktop:pointer-events-none">
            <div className="grid grid-cols-2 gap-[5px] opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-2.5 h-2.5 rounded-[4px] border border-white/40 animate-travel-dot" style={{ animationDelay: '0s' }} />
              <div className="w-2.5 h-2.5 rounded-[4px] border border-white/40 animate-travel-dot" style={{ animationDelay: '0.5s' }} />
              <div className="w-2.5 h-2.5 rounded-[4px] border border-white/40 animate-travel-dot" style={{ animationDelay: '1.5s' }} />
              <div className="w-2.5 h-2.5 rounded-[4px] border border-white/40 animate-travel-dot" style={{ animationDelay: '1.0s' }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Menu</span>
          </div>

          {/* Expanded Desktop Nav */}
          <div className="hidden md:flex flex-col items-start justify-center h-full w-64 absolute top-0 left-0 opacity-0 -translate-x-10 group-hover/desktop:opacity-100 group-hover/desktop:translate-x-0 transition-all duration-300 ease-in-out pointer-events-none group-hover/desktop:pointer-events-auto pl-12">
            
            {/* Logo inside expanded menu */}
            <Link href="/" className="absolute top-12 left-12 text-white font-extrabold tracking-[0.2em] uppercase text-sm z-10 flex items-center gap-3 group">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] group-hover:shadow-[0_0_20px_rgba(0,240,255,1)] transition-shadow duration-500" />
              <span className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">SN</span>
            </Link>

            <nav className="flex flex-col items-start gap-10 z-10 w-full mt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative flex items-center gap-6 group transition-all duration-300 w-full"
                  >
                    {/* Circle Icon */}
                    <div className={`relative flex items-center justify-center w-4 h-4 rounded-full border transition-all duration-300 ${isActive ? 'border-[var(--accent-cyan)]' : 'border-white/40 group-hover:border-white/80'}`}>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                      )}
                    </div>

                    {/* Active Line Indicator */}
                    <div className={`absolute left-4 h-[1px] bg-[var(--accent-cyan)] transition-all duration-500 ease-out ${isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'}`} />

                    {/* Label */}
                    <span className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${
                      isActive 
                        ? "text-white font-medium drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] translate-x-8" 
                        : "text-white/40 hover:text-white translate-x-0"
                    }`}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className={`md:hidden text-white hover:text-[var(--accent-cyan)] transition-all z-40 relative text-xs tracking-widest uppercase outline-none ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          Menu
        </button>
      </div>
    </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer (Right Side) */}
      <div 
        className={`fixed top-0 right-0 w-[80vw] max-w-[320px] h-[100dvh] bg-[#050505]/95 backdrop-blur-3xl z-50 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-white/10 flex flex-col pt-10 px-10 shadow-[-20px_0_40px_rgba(0,0,0,0.8)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-16">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[var(--accent-cyan)] hover:text-white transition-colors text-xs tracking-widest uppercase outline-none font-bold"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col items-start gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl tracking-[0.2em] uppercase transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              } ${
                pathname === link.href 
                  ? "text-[var(--accent-cyan)] font-bold drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]" 
                  : "text-white/70 hover:text-white"
              }`}
              style={{ transitionDelay: `${isMobileMenuOpen ? i * 75 + 100 : 0}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

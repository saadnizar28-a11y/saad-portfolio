"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import SkillBar from "@/components/SkillBar";
import HeadingBurst from "@/components/HeadingBurst";
import LiveNewsTicker from "@/components/LiveNewsTicker";
import AmoebaBackground from "@/components/AmoebaBackground";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import FloatingRobot from "@/components/FloatingRobot";
import BlogGrid from "@/components/BlogGrid";

declare global {
  interface Window {
    playTechClick?: () => void;
  }
}

// Global Audio Engine using standard HTML5 Audio (Bulletproof)
let hoverAudio: HTMLAudioElement | null = null;
let windAudio: HTMLAudioElement | null = null;
let isWindPlaying = false;

const getHoverAudio = () => {
  if (typeof window === 'undefined') return null;
  if (!hoverAudio) {
    hoverAudio = new Audio('/hover.mp3');
    hoverAudio.volume = 0.5;
  }
  return hoverAudio;
};

const getWindAudio = () => {
  if (typeof window === 'undefined') return null;
  if (!windAudio) {
    windAudio = new Audio('/wind.mp3');
    windAudio.loop = true;
    windAudio.volume = 0;
  }
  return windAudio;
};

const playTechHover = () => {
  const audio = getHoverAudio();
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
};

const stopTechHover = () => {
  const audio = getHoverAudio();
  if (audio) {
    audio.pause();
  }
};

const startAmbientWind = () => {
  const audio = getWindAudio();
  if (isWindPlaying || !audio) return;
  isWindPlaying = true;
  audio.play().catch(() => { isWindPlaying = false; });
  
  let vol = audio.volume;
  const fade = setInterval(() => {
    vol += 0.05;
    if (vol >= 0.4) {
      clearInterval(fade);
      if (windAudio) windAudio.volume = 0.4;
    } else {
      if (windAudio) windAudio.volume = vol;
    }
  }, 200);
};

const stopAmbientWind = () => {
  if (!isWindPlaying || !windAudio) return;
  
  let vol = windAudio.volume;
  const fade = setInterval(() => {
    vol -= 0.05;
    if (vol <= 0) {
      clearInterval(fade);
      if (windAudio) {
        windAudio.pause();
        windAudio.volume = 0;
      }
      isWindPlaying = false;
    } else {
      if (windAudio) windAudio.volume = vol;
    }
  }, 100);
};

import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spaceRef = useRef<HTMLDivElement>(null);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const totalFrames = 8;

  useEffect(() => {
    // Disable heavy image sequence on mobile to massively improve LCP
    if (window.innerWidth < 768) return;

    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < totalFrames; i++) {
      const img = new window.Image();
      img.src = `/sequence/frame_${i + 7}.webp.jpg`;
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let targetFrame = 0;
    let currentFrame = 0;
    let animationFrameId: number;

    const render = () => {
      // Lerp current frame towards target frame for momentum smoothing
      currentFrame += (targetFrame - currentFrame) * 0.1;
      
      const frameIndex = Math.min(totalFrames - 1, Math.floor(currentFrame));
      const nextFrameIndex = Math.min(totalFrames - 1, frameIndex + 1);
      const blend = currentFrame - frameIndex;

      const img = images[frameIndex];
      const nextImg = images[nextFrameIndex];

      if (img?.complete && img.naturalWidth !== 0) {
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.naturalWidth / img.naturalHeight;
        let drawWidth, drawHeight, drawX, drawY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw current frame
        context.globalAlpha = 1;
        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);

        // Draw next frame over it with opacity = blend
        if (blend > 0.01 && nextImg?.complete && nextImg.naturalWidth !== 0) {
          context.globalAlpha = blend;
          context.drawImage(nextImg, drawX, drawY, drawWidth, drawHeight);
        }
        
        context.globalAlpha = 1;
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    images[0].onload = () => {
      animationFrameId = window.requestAnimationFrame(render);
    };

    // Unlock audio on first interaction
    const unlockAudio = () => {
      if (hoverAudio) hoverAudio.play().then(() => { hoverAudio!.pause(); hoverAudio!.currentTime = 0; }).catch(()=>{});
      if (windAudio) windAudio.play().then(() => { windAudio!.pause(); }).catch(()=>{});
    };
    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          
          if (spaceRef.current) {
            spaceRef.current.style.transform = `translateY(${scrollTop * -0.35}px)`;
          }
          
          const canvasScrollableDistance = window.innerHeight * 2; 
          const scrollFraction = Math.min(1, Math.max(0, scrollTop / canvasScrollableDistance));
          
          // Set target fractional frame based on scroll fraction
          targetFrame = scrollFraction * (totalFrames - 1);
          
          // Manage Audio based on scroll
          if (scrollFraction > 0.8) {
            startAmbientWind();
          } else {
            stopAmbientWind();
          }

          if (canvasRef.current) {
            if (scrollFraction > 0.8) {
              const fade = 1 - ((scrollFraction - 0.8) / 0.2);
              canvasRef.current.style.opacity = Math.max(0, fade).toString();
            } else {
              canvasRef.current.style.opacity = '1';
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    if (images[0]?.complete) {
      animationFrameId = window.requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [images]);

  return (
    <>
      <SocialSidebar />
      <FloatingRobot />
      {/* Ambient Tiny Space Stars spanning the entire background */}
      <div ref={spaceRef} className="fixed top-0 left-0 w-full h-[300vh] z-0 pointer-events-none overflow-hidden mix-blend-screen">
        {/* Deep Space Dots */}
        <div className="absolute top-[5%] left-[10%] w-[3px] h-[3px] rounded-full bg-white tiny-star" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[18%] right-[15%] w-[2px] h-[2px] rounded-full bg-[var(--accent-cyan)] tiny-star" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[32%] left-[20%] w-[3px] h-[3px] rounded-full bg-[var(--accent-pink)] tiny-star" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[48%] right-[25%] w-[4px] h-[4px] rounded-full bg-white tiny-star" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[65%] left-[8%] w-[2px] h-[2px] rounded-full bg-[var(--accent-violet)] tiny-star" style={{ animationDelay: '5s' }} />
        <div className="absolute top-[80%] right-[35%] w-[3px] h-[3px] rounded-full bg-[var(--accent-cyan)] tiny-star" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[92%] left-[45%] w-[2px] h-[2px] rounded-full bg-white tiny-star" style={{ animationDelay: '7s' }} />
        
        {/* Extra Dots for bottom content coverage */}
        <div className="absolute top-[25%] left-[80%] w-[3px] h-[3px] rounded-full bg-[var(--accent-pink)] tiny-star" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[55%] left-[70%] w-[2px] h-[2px] rounded-full bg-[var(--accent-cyan)] tiny-star" style={{ animationDelay: '3.5s' }} />
        <div className="absolute top-[85%] left-[15%] w-[4px] h-[4px] rounded-full bg-[var(--accent-violet)] tiny-star" style={{ animationDelay: '6s' }} />
      </div>

      <div style={{ height: "300vh", background: "#050505" }}>
        <canvas
          ref={canvasRef}
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            height: "100vh",
            opacity: 1,
            transition: "none", // Prevent CSS transition clashes with JS native scrolling
            // This mask creates a flawless, gradual fade at the bottom of the canvas
            // so the hard edge of the image sequence dissolves into the black background.
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 20%)",
            maskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 20%)"
          }}
        />
      </div>

      {/* Main Home Content Below Intro */}
      <section 
        className="min-h-screen bg-transparent flex flex-col items-center justify-center text-center px-6 py-32 relative z-10 w-full"
        style={{ marginTop: "-30vh", paddingTop: "30vh" }}
      >
        
        {/* Floating 3D Social Planets with Interactive HUD */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-hidden perspective-[1000px]">
          
          {/* Instagram Planet (Top Left, near "BUILDING") */}
          <div 
            className="absolute top-[8%] left-[-5%] md:top-[12%] md:left-[5%] lg:left-[10%] opacity-95 mix-blend-screen group pointer-events-auto cursor-pointer" 
            style={{ transform: 'translateZ(100px)' }}
            onMouseEnter={playTechHover}
            onMouseLeave={stopTechHover}
          >
            <div className="animate-float w-32 h-32 md:w-48 md:h-48 lg:w-[220px] lg:h-[220px] relative">
              <Image 
                src="/planet-instagram.jpg" alt="Instagram" fill 
                className="rounded-full object-cover animate-[spin_120s_linear_infinite] brightness-90 contrast-125"
                style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)', maskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)' }}
              />
            </div>
            {/* HUD Popup */}
            <div className="absolute top-1/2 left-[85%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center min-w-[150px] md:min-w-[200px] z-50">
              <div className="w-6 md:w-12 h-[1px] bg-[var(--accent-pink)]/50" />
              <div className="glass-card px-3 py-2 md:px-4 md:py-3 border border-[var(--accent-pink)]/30 rounded-r-lg rounded-bl-lg backdrop-blur-md shadow-[0_0_20px_rgba(217,76,241,0.2)]">
                <p className="text-[8px] md:text-[10px] text-[var(--accent-pink)] font-mono font-bold tracking-[0.2em] uppercase mb-1">INSTAGRAM</p>
                <p className="text-[7px] md:text-[9px] text-white/80 font-mono tracking-widest">POPULATION: 2.35B</p>
                <p className="text-[6px] md:text-[8px] text-[var(--accent-pink)]/60 font-mono tracking-widest mt-0.5">STATUS: HIGH ENGAGEMENT</p>
              </div>
            </div>
          </div>

          {/* LinkedIn Planet (Swapped to Left, near "STRATEGY. DESIGN. EXECUTION.") */}
          <div 
            className="absolute top-[55%] left-[-2%] md:top-[60%] md:left-[2%] lg:left-[5%] opacity-90 mix-blend-screen group pointer-events-auto cursor-pointer" 
            style={{ transform: 'translateZ(50px)' }}
            onMouseEnter={playTechHover}
            onMouseLeave={stopTechHover}
          >
            <div className="animate-float-fast w-24 h-24 md:w-36 md:h-36 lg:w-[180px] lg:h-[180px] relative">
              <Image 
                src="/planet-linkedin.jpg" alt="LinkedIn" fill 
                className="rounded-full object-cover animate-[spin_150s_linear_infinite] brightness-90 contrast-125"
                style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)', maskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)' }}
              />
            </div>
            {/* HUD Popup */}
            <div className="absolute top-1/2 left-[85%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center min-w-[150px] md:min-w-[200px] z-50">
              <div className="w-6 md:w-12 h-[1px] bg-[var(--accent-cyan)]/50" />
              <div className="glass-card px-3 py-2 md:px-4 md:py-3 border border-[var(--accent-cyan)]/30 rounded-r-lg rounded-bl-lg backdrop-blur-md shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                <p className="text-[8px] md:text-[10px] text-[var(--accent-cyan)] font-mono font-bold tracking-[0.2em] uppercase mb-1">LINKEDIN</p>
                <p className="text-[7px] md:text-[9px] text-white/80 font-mono tracking-widest">POPULATION: 900M</p>
                <p className="text-[6px] md:text-[8px] text-[var(--accent-cyan)]/60 font-mono tracking-widest mt-0.5">STATUS: B2B FOCUSED</p>
              </div>
            </div>
          </div>

          {/* Meta Planet (Top Right, extreme edge to avoid text overlap) */}
          <div 
            className="absolute top-[20%] right-[-5%] md:top-[25%] md:right-[2%] lg:right-[5%] opacity-90 mix-blend-screen group pointer-events-auto cursor-pointer" 
            style={{ transform: 'translateZ(0px)' }}
            onMouseEnter={playTechHover}
            onMouseLeave={stopTechHover}
          >
            <div className="animate-float w-28 h-28 md:w-48 md:h-48 lg:w-[220px] lg:h-[220px] relative">
              <Image 
                src="/planet-meta.jpg" alt="Meta" fill 
                className="rounded-full object-cover animate-[spin_180s_linear_infinite] brightness-90 contrast-125"
                style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)', maskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)' }}
              />
            </div>
            {/* HUD Popup (Opening to the LEFT) */}
            <div className="absolute top-1/2 right-[85%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center flex-row-reverse min-w-[150px] md:min-w-[200px] z-50">
              <div className="w-6 md:w-12 h-[1px] bg-blue-500/50" />
              <div className="glass-card px-3 py-2 md:px-4 md:py-3 border border-blue-500/30 rounded-l-lg rounded-br-lg backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] text-right">
                <p className="text-[8px] md:text-[10px] text-blue-400 font-mono font-bold tracking-[0.2em] uppercase mb-1">META (FB)</p>
                <p className="text-[7px] md:text-[9px] text-white/80 font-mono tracking-widest">POPULATION: 3.03B</p>
                <p className="text-[6px] md:text-[8px] text-blue-400/60 font-mono tracking-widest mt-0.5">STATUS: MASS REACH</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Planet (Bottom Right, under Live News widget) */}
          <div 
            className="absolute bottom-[2%] right-[2%] md:bottom-[5%] lg:right-[8%] opacity-85 mix-blend-screen group pointer-events-auto cursor-pointer" 
            style={{ transform: 'translateZ(-50px)' }}
            onMouseEnter={playTechHover}
            onMouseLeave={stopTechHover}
          >
            <div className="animate-float-slow w-20 h-20 md:w-32 md:h-32 lg:w-[160px] lg:h-[160px] relative">
              <Image 
                src="/planet-whatsapp.jpg" alt="WhatsApp" fill 
                className="rounded-full object-cover animate-[spin_100s_linear_infinite_reverse] brightness-90 contrast-125"
                style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)', maskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)' }}
              />
            </div>
            {/* HUD Popup (Opening to the RIGHT) */}
            <div className="absolute top-1/2 left-[85%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center min-w-[150px] md:min-w-[200px] z-50">
              <div className="w-6 md:w-12 h-[1px] bg-green-500/50" />
              <div className="glass-card px-3 py-2 md:px-4 md:py-3 border border-green-500/30 rounded-r-lg rounded-bl-lg backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.2)] text-left">
                <p className="text-[8px] md:text-[10px] text-green-400 font-mono font-bold tracking-[0.2em] uppercase mb-1">WHATSAPP</p>
                <p className="text-[7px] md:text-[9px] text-white/80 font-mono tracking-widest">POPULATION: 2.78B</p>
                <p className="text-[6px] md:text-[8px] text-green-400/60 font-mono tracking-widest mt-0.5">STATUS: DIRECT ACCESS</p>
              </div>
            </div>
          </div>

          {/* Google Ads Planet (Middle Right, above the Live Updates widget) */}
          <div 
            className="absolute top-[45%] right-[2%] md:top-[50%] lg:right-[5%] opacity-70 mix-blend-screen group pointer-events-auto cursor-pointer" 
            style={{ transform: 'translateZ(-200px)' }}
            onMouseEnter={playTechHover}
            onMouseLeave={stopTechHover}
          >
            <div className="animate-float-slow w-16 h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] relative">
              <Image 
                src="/planet-google.jpg" alt="Google Ads" fill 
                className="rounded-full object-cover animate-[spin_80s_linear_infinite] brightness-90 contrast-125"
                style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)', maskImage: 'radial-gradient(circle at center, black 55%, transparent 68%)' }}
              />
            </div>
            {/* HUD Popup */}
            <div className="absolute top-1/2 left-[85%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center min-w-[150px] md:min-w-[200px] z-50">
              <div className="w-6 md:w-12 h-[1px] bg-yellow-500/50" />
              <div className="glass-card px-3 py-2 md:px-4 md:py-3 border border-yellow-500/30 rounded-r-lg rounded-bl-lg backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.2)] text-left">
                <p className="text-[8px] md:text-[10px] text-yellow-400 font-mono font-bold tracking-[0.2em] uppercase mb-1">GOOGLE ADS</p>
                <p className="text-[7px] md:text-[9px] text-white/80 font-mono tracking-widest">POPULATION: 4.3B</p>
                <p className="text-[6px] md:text-[8px] text-yellow-400/60 font-mono tracking-widest mt-0.5">STATUS: SEARCH INTENT</p>
              </div>
            </div>
          </div>
        </div>

        <AmoebaBackground />

        {/* Deep background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-[var(--accent-purple)]/5 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10 py-10">
            <div className="relative inline-block w-full md:text-center mt-10">
              <span className="block mb-10 tracking-[0.3em] text-xs font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-pink)] drop-shadow-[0_0_10px_rgba(142,45,226,0.3)]">
                Waura Marketing & Design Studio
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-[7rem] font-light mb-8 leading-[1.1] relative z-10 text-white flex flex-col md:items-center">
                <span className="block uppercase tracking-tighter font-semibold">Building</span>
                <span className="block italic font-[family-name:var(--font-playfair)] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] drop-shadow-[0_0_20px_rgba(0,210,255,0.3)] my-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Creative
                </span>
                <span className="block uppercase tracking-tight text-white/80 font-medium text-3xl md:text-5xl lg:text-6xl mt-4">
                  Digital Ideas That
                </span>
                <span className="block font-serif italic normal-case text-6xl md:text-7xl lg:text-[7.5rem] text-white/60 tracking-normal mt-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Actually Convert.
                </span>
              </h1>
            </div>
          
          <FadeIn delay={300}>
            <div className="flex flex-col items-center justify-center space-y-8 mt-20 mb-24 relative">
               <div className="w-[1px] h-24 bg-gradient-to-b from-white/30 to-transparent hidden md:block opacity-50" />
               <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-center max-w-2xl leading-loose">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-pink)] drop-shadow-[0_0_15px_rgba(142,45,226,0.2)]">Strategy. Design. Execution.</span> <br/> 
                 <span className="text-white">Architected for real results.</span>
               </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={500} className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full border-t border-white/5 pt-12">
              
              {/* Left Side: Gradient Premium Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/work" 
                  className="inline-flex items-center justify-center px-12 py-5 rounded-full font-bold text-white tracking-[0.15em] uppercase transition-all duration-700 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,210,255,0.2)] hover:shadow-[0_0_40px_rgba(142,45,226,0.4)] whitespace-nowrap text-xs"
                  style={{
                    background: "linear-gradient(45deg, var(--accent-cyan), var(--accent-violet), var(--accent-pink))"
                  }}
                >
                  View My Work
                </Link>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-12 py-5 rounded-full font-semibold text-white tracking-[0.15em] uppercase transition-all duration-700 border border-white/20 hover:border-transparent whitespace-nowrap text-xs backdrop-blur-md relative group overflow-hidden"
                >
                  {/* Subtle hover gradient wash inside the outline button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-violet)] to-[var(--accent-pink)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  <span className="relative z-10 transition-colors duration-500 text-white leading-none flex items-center justify-center h-full">
                     Let's Collaborate
                  </span>
                </Link>
              </div>

              {/* Right Side: News Ticker (Softened for luxury fit) */}
              <div className="w-full lg:w-[400px] text-left opacity-60 hover:opacity-100 transition-opacity duration-700">
                <LiveNewsTicker mini />
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* IMMERSIVE DIGITAL ECOSYSTEM (Parallax Scroll Removed as requested) */}

      {/* Short About Section / Container */}
      <section className="bg-[var(--background)] py-16 px-6 relative z-10 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={100}>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 relative overflow-hidden">
              
              {/* Deep Blue Ambient Glow */}
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[40%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

              {/* Portrait Box */}
              <div className="w-full md:w-[40%] relative">
                <div className="relative overflow-hidden aspect-[4/5] group">
                  <Image src="/saad-new.png" alt="Saad Nizar" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 40vw" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-[10px] uppercase mb-1">Founder / Strategist</div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">Saad Nizar</h3>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[60%] relative z-10 flex flex-col items-start md:pl-6">
                <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-[10px] uppercase mb-6 inline-flex px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5">
                  About Me
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-white">
                  Strategy. Design. <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-blue-600">Execution.</span>
                </h2>
                <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light relative z-10">
                  I don&apos;t believe in random design. From sales floors to digital spaces, I combine high-level strategy with cinematic aesthetics to orchestrate systems that don&apos;t just look pretty—they systematically convert attention into action and drive real business growth.
                </p>
                <Link href="/about" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white tracking-widest text-xs uppercase transition-all duration-300 border border-white/10 hover:border-white/30 hover:bg-white/5 relative z-10">
                  See More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* High-Impact Stats Bar */}
      <section className="bg-black/50 border-y border-[rgba(255,255,255,0.02)] relative z-10 w-full overflow-hidden py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.05)]">
            <FadeIn delay={100} className="py-4">
              <div className="text-5xl font-black text-white tracking-tighter mb-2"><Counter end={50} suffix="+" /></div>
              <p className="text-[var(--accent-cyan)] text-sm tracking-widest uppercase font-bold">Projects Built</p>
            </FadeIn>
            <FadeIn delay={300} className="py-4">
              <div className="text-5xl font-black text-white tracking-tighter mb-2"><Counter end={30} suffix="+" /></div>
              <p className="text-[var(--accent-violet)] text-sm tracking-widest uppercase font-bold">Happy Clients</p>
            </FadeIn>
            <FadeIn delay={500} className="py-4">
              <div className="text-5xl font-black text-white tracking-tighter mb-2"><Counter end={100} suffix="%" /></div>
              <p className="text-[var(--accent-pink)] text-sm tracking-widest uppercase font-bold">Positive Feedback</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Premium Apple / Stripe Bento Box Grid */}
      <section className="bg-[var(--background)] pt-32 pb-20 px-6 relative z-10 w-full overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vh] bg-[var(--accent-purple)]/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              A Complete <span className="text-[var(--accent-cyan)]">Creative Arsenal.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
            
            {/* Bento Block 1: About */}
            <FadeIn delay={100} className="md:col-span-1">
              <div className="glass-card h-full rounded-[2.5rem] p-10 flex flex-col justify-between group hover:border-[var(--accent-violet)]/40 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-violet)]/10 blur-3xl rounded-full" />
                <div>
                  <div className="text-[var(--accent-violet)] font-bold tracking-widest text-xs uppercase mb-6 bg-[var(--accent-violet)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-violet)]/20">The Creator</div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-[var(--accent-violet)] transition-colors">I don’t believe in random design.</h3>
                </div>
                <p className="text-white/50 text-base leading-relaxed mt-8">From sales floors to digital spaces, I combine strategy, design, and marketing to create systems that actually perform.</p>
                <Link href="/about" className="mt-8 text-white/40 group-hover:text-white transition-colors text-sm tracking-widest uppercase flex items-center gap-2 font-semibold">
                  Read My Story <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </FadeIn>

            {/* Bento Block 2: Services Overview */}
            <FadeIn delay={300} className="md:col-span-2">
              <div className="glass-card h-full rounded-[2.5rem] p-10 group hover:border-[var(--accent-pink)]/40 transition-colors relative overflow-hidden flex flex-col md:flex-row gap-8">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-pink)]/5 blur-3xl rounded-full" />
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-[var(--accent-pink)] font-bold tracking-widest text-xs uppercase mb-6 bg-[var(--accent-pink)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-pink)]/20">My Services</div>
                    <h3 className="text-4xl font-bold mb-4 leading-tight group-hover:text-[var(--accent-pink)] transition-colors">Strategy-driven<br/>Execution.</h3>
                  </div>
                  <Link href="/services" className="mt-8 text-white/40 group-hover:text-white transition-colors text-sm tracking-widest uppercase flex items-center gap-2 font-semibold">
                    View All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
                <div className="w-full md:w-1/2 relative space-y-4">
                  <div className="glass-card p-4 rounded-xl border-[rgba(255,255,255,0.05)] shadow-lg -rotate-2 hover:rotate-0 transition-transform">
                    <p className="text-white font-medium text-sm">✦ SEO Optimization</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-[rgba(255,255,255,0.05)] shadow-lg rotate-1 hover:rotate-0 transition-transform ml-8">
                    <p className="text-[var(--accent-cyan)] font-medium text-sm">✦ Poster Making</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-[rgba(255,255,255,0.05)] shadow-lg -rotate-1 hover:rotate-0 transition-transform">
                    <p className="text-[var(--accent-violet)] font-medium text-sm">✦ Social Media Management</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-[rgba(255,255,255,0.05)] shadow-lg rotate-2 hover:rotate-0 transition-transform ml-4">
                    <p className="text-[var(--accent-pink)] font-medium text-sm">✦ Logo Creation</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* NEW: Lead Generation Case Study Block (Now Half Size) */}
            <FadeIn delay={200} className="md:col-span-1">
              <div className="glass-card h-full rounded-[2.5rem] p-10 group hover:border-[#10b981]/40 transition-colors relative overflow-hidden bg-gradient-to-b from-[rgba(20,20,25,0.8)] to-[#10b981]/10">
                <div className="absolute top-0 right-0 w-full h-[50%] bg-[#10b981]/5 blur-3xl pointer-events-none" />
                
                <div className="flex flex-col justify-between relative z-10 w-full h-full gap-8">
                  <div className="w-full">
                    <div className="text-[#10b981] font-bold tracking-widest text-[10px] uppercase mb-6 bg-[#10b981]/10 inline-block px-3 py-1 rounded-full border border-[#10b981]/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]">Case Study</div>
                    <h3 className="text-3xl font-bold mb-2 leading-tight">Lead Gen.<br/>Mastery.</h3>
                    <p className="text-white/60 font-medium text-[11px] uppercase tracking-widest">Real Estate, SaaS</p>
                  </div>
                  
                  <div className="w-full flex flex-col gap-3">
                    <div className="glass-card p-4 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col justify-center items-center relative overflow-hidden pb-5">
                      <p className="text-red-400/80 text-[10px] font-bold tracking-widest uppercase mb-1">Ad Spend 📉</p>
                      <p className="text-xl font-bold text-white/90 tracking-tighter">₹<Counter end={10} suffix="k" /></p>
                    </div>
                    <div className="glass-card p-4 rounded-2xl border border-[#10b981]/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col justify-center items-center relative overflow-hidden group-hover:bg-[#10b981]/10 transition-colors pt-5">
                      <p className="text-[#10b981] text-[10px] font-bold tracking-widest uppercase mb-1">Leads Generated</p>
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#10b981] tracking-tighter drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"><Counter end={230} suffix="+" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* NEW: Growth Shop CTA Block (Taking the other half) */}
            <FadeIn delay={300} className="md:col-span-1">
              <div className="glass-card h-full rounded-[2.5rem] p-10 group hover:border-[var(--accent-pink)]/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all relative overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[rgba(20,20,25,0.6)] to-[rgba(236,72,153,0.05)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-pink)]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[var(--accent-pink)]/20 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="text-[var(--accent-pink)] font-bold tracking-widest text-[10px] uppercase mb-6 bg-[var(--accent-pink)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-pink)]/20 shadow-[0_0_15px_rgba(236,72,153,0.2)]">Growth Shop</div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-[var(--accent-pink)] transition-colors">
                    Need Insta<br/>Followers?
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed mb-6 font-medium">
                    Fully safe, premium follower packages engineered for incredible social proof.
                  </p>
                </div>

                <Link href="/services" className="relative z-10 w-full inline-flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-white tracking-[0.1em] uppercase transition-all duration-300 border border-[var(--accent-pink)]/30 bg-[var(--accent-pink)]/10 hover:bg-[var(--accent-pink)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] text-[10px] sm:text-xs group/btn">
                  <span className="drop-shadow-sm">Explore Shop</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white text-white group-hover/btn:text-[var(--accent-pink)] transition-all transform group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </FadeIn>

            {/* NEW: Tools Expertise Block */}
            <FadeIn delay={400} className="md:col-span-1">
              <div className="glass-card h-full rounded-[2.5rem] p-10 group hover:border-[var(--accent-blue)]/40 transition-colors relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-blue)]/10 blur-3xl rounded-full" />
                <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-[10px] uppercase mb-4 bg-[var(--accent-cyan)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-cyan)]/20 place-self-start">Platforms & Stack</div>
                <h3 className="text-2xl font-bold mb-6">Expertise.</h3>
                <div className="flex flex-wrap gap-2">
                  {['Meta', 'Google Ads', 'Adobe Photoshop', 'Adobe Illustrator', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz Pro', 'Surfer SEO', 'WordPress', 'Claude AI', 'Gemini Pro', 'ChatGPT', 'Antigravity', 'Google Flow'].map(tool => (
                    <span key={tool} className="text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-[var(--accent-cyan)]/20 hover:border-[var(--accent-cyan)]/50 transition-colors cursor-default">{tool}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* NEW: Branding Gallery Showcase Block */}
            <FadeIn delay={400} className="md:col-span-3">
              <div className="glass-card h-full min-h-[400px] rounded-[2.5rem] p-10 group hover:border-[var(--accent-violet)]/40 hover:shadow-[0_0_40px_rgba(142,45,226,0.1)] transition-all bg-gradient-to-br from-[rgba(20,20,25,0.4)] to-[rgba(142,45,226,0.05)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent-violet)]/10 blur-3xl rounded-full pointer-events-none" />
                
                {/* Left: Text Content */}
                <div className="w-full md:w-1/3 z-10">
                  <div className="text-[var(--accent-violet)] font-bold tracking-widest text-xs uppercase mb-6 bg-[var(--accent-violet)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-violet)]/30 shadow-[0_0_10px_rgba(142,45,226,0.2)]">Case Studies</div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-[var(--accent-violet)] transition-colors">
                    Brand <br/> Identity.
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-8">
                    Complete brand ecosystems, luxury packaging, and visual identities crafted for high-end conversion.
                  </p>
                  <Link href="/work/branding" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white tracking-[0.1em] uppercase transition-all duration-300 bg-[var(--accent-violet)]/20 border border-[var(--accent-violet)]/50 hover:bg-[var(--accent-violet)] hover:shadow-[0_0_30px_rgba(142,45,226,0.5)]">
                    View Gallery <span className="ml-2">→</span>
                  </Link>
                </div>

                {/* Right: Tiny Scroll Carousel */}
                <div className="w-full md:w-2/3 relative flex items-center justify-center z-10">
                  <div className="flex gap-4 overflow-x-auto scrollbar-none w-full py-4 px-2 scroll-smooth" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
                    {['/branding_gallery_1.png', '/branding_gallery_2.png', '/branding_gallery_3.png', '/branding_gallery_4.png', '/branding_gallery_5.png', '/branding_gallery_6.png', '/branding_gallery_7.png'].map((src, i) => (
                      <Link href="/work/branding" key={i} className="shrink-0 w-36 h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:scale-105 hover:border-[var(--accent-violet)]/50 transition-all duration-500 cursor-pointer block relative">
                        <Image src={src} alt={`Brand Identity ${i + 1}`} fill className="object-cover" sizes="144px" />
                      </Link>
                    ))}
                    <div className="shrink-0 w-12" /> {/* Spacer */}
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* Bento Block 3: Prompt Gallery / Work showcase */}
            <FadeIn delay={500} className="md:col-span-3">
              <div className="glass-card h-full min-h-[400px] rounded-[2.5rem] p-10 group hover:border-[var(--accent-cyan)]/40 hover:shadow-[0_0_40px_rgba(0,210,255,0.1)] transition-all bg-gradient-to-br from-[rgba(20,20,25,0.4)] to-[rgba(0,210,255,0.05)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent-cyan)]/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="w-full md:w-1/3 z-10">
                  <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-xs uppercase mb-6 bg-[var(--accent-cyan)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-cyan)]/30 shadow-[0_0_10px_rgba(0,210,255,0.2)]">Gallery</div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-[var(--accent-cyan)] transition-colors">
                    Prompt <br/> Gallery.
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-8">
                    Discover projects built with strategy, not just design. Premium outputs blending visuals and high-level AI prompt engineering.
                  </p>
                  <Link href="/prompt-gallery" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[#050505] tracking-[0.1em] uppercase transition-all duration-300 bg-[var(--accent-cyan)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)]">
                    Explore Gallery <span className="ml-2">→</span>
                  </Link>
                </div>

                {/* Abstract Showcase Visual */}
                <div className="w-full md:w-2/3 h-64 md:h-full relative flex items-center justify-center z-10 perspective-[1000px]">
                  <Link href="/prompt-gallery" className="grid grid-cols-2 gap-4 absolute w-[120%] rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out group/grid cursor-pointer">
                     
                     <div className="h-40 rounded-2xl relative overflow-hidden border border-[var(--accent-cyan)]/30 backdrop-blur-md shadow-2xl group-hover/grid:border-[var(--accent-cyan)]/60 transition-all">
                        <Image src="/gta-art.png" alt="GTA VI Filter" fill className="object-cover object-center filter contrast-110" sizes="(max-width: 768px) 50vw, 20vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 pointer-events-none">
                           <p className="text-white font-black text-xs uppercase tracking-widest leading-tight drop-shadow-md">GTA VI<br/>Filter</p>
                        </div>
                     </div>
                     
                     <div className="h-40 rounded-2xl relative overflow-hidden border border-[var(--accent-violet)]/30 backdrop-blur-md shadow-2xl translate-y-8 group-hover/grid:border-[var(--accent-violet)]/60 transition-all">
                        <Image src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop" alt="Natural Light" fill className="object-cover object-center filter contrast-110" sizes="(max-width: 768px) 50vw, 20vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 pointer-events-none">
                           <p className="text-white font-black text-xs uppercase tracking-widest leading-tight drop-shadow-md">Natural<br/>Light</p>
                        </div>
                     </div>
                     
                     <div className="h-40 rounded-2xl relative overflow-hidden border border-[var(--accent-pink)]/30 backdrop-blur-md shadow-2xl -translate-y-8 group-hover/grid:border-[var(--accent-pink)]/60 transition-all">
                        <Image src="/gta-art-new.png" alt="GTA VI Art" fill className="object-cover object-center filter contrast-110" sizes="(max-width: 768px) 50vw, 20vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 pointer-events-none">
                           <p className="text-white font-black text-xs uppercase tracking-widest leading-tight drop-shadow-md">GTA VI<br/>Art</p>
                        </div>
                     </div>

                     <div className="h-40 rounded-2xl relative overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-2xl flex flex-col items-center justify-center group-hover/grid:border-[var(--accent-cyan)]/40 transition-all group-hover/grid:shadow-[0_0_30px_rgba(0,210,255,0.2)]">
                        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" alt="Explore" fill className="object-cover blur-[10px] opacity-30 group-hover/grid:opacity-50 group-hover/grid:scale-110 transition-all duration-700" sizes="(max-width: 768px) 50vw, 20vw" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/80 pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center justify-center">
                           <span className="text-[var(--accent-cyan)] font-bold text-lg tracking-widest drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]">+ EXPLORE</span>
                           <span className="text-[var(--accent-cyan)]/70 font-bold text-xs tracking-widest mt-1">PROMPT GALLERY</span>
                        </div>
                     </div>
                  </Link>
                </div>

              </div>
            </FadeIn>
            
          </div>

          {/* NEW ROW: Identity & Skills Arsenal */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[auto]">
            
            {/* Interactive Portrait Box */}
            <FadeIn delay={100} className="md:col-span-1">
              <div className="glass-card h-full min-h-[400px] rounded-[2.5rem] p-4 group relative overflow-hidden perspective-[1000px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                
                {/* Image Placeholder with Hover Tilt Effect */}
                <div className="absolute inset-4 rounded-[2rem] overflow-hidden transform transition-all duration-700 group-hover:rotate-y-[5deg] group-hover:rotate-x-[5deg] group-hover:scale-105 border border-white/5">
                  
                  {/* Gradual bottom fade to ensure text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-90" />
                  
                  {/* Pure, full-bleed portrait image */}
                  <Image 
                    src="/saad-working.jpg" 
                    alt="Saad Nizarudeen - Digital Marketing Strategist working in Dubai" 
                    fill
                    className="object-cover object-center filter contrast-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Cyberpunk Tracking Border Glow (Fake mouse tracking) */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-cyan)] blur-[80px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-1000 z-10 pointer-events-none" />
                </div>

                <div className="relative z-20 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 mt-auto">
                  <p className="text-white/80 italic text-[11px] md:text-xs leading-relaxed drop-shadow-md">
                    "Design captures attention. <br/>Strategy orchestrates action."
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Skill Arsenal Grid */}
            <FadeIn delay={200} className="md:col-span-3">
              <div className="glass-card h-full rounded-[2.5rem] p-10 group hover:border-[var(--accent-pink)]/30 transition-colors relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[40%] h-full bg-[var(--accent-pink)]/5 blur-3xl pointer-events-none rounded-full" />
                <h3 className="text-2xl font-bold mb-8 text-white relative z-10 tracking-tight">Core Arsenal.</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  <SkillBar title="Web Design & SEO" percentage={92} icon={<svg className="w-5 h-5 text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>} />
                  <SkillBar title="Social Media Management" percentage={96} icon={<svg className="w-5 h-5 text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>} />
                  <SkillBar title="AI Prompt Expertise" percentage={92} icon={<svg className="w-5 h-5 text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>} />
                  <SkillBar title="Content Writing" percentage={82} icon={<svg className="w-5 h-5 text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>} />
                  <SkillBar title="Branding" percentage={92} icon={<svg className="w-5 h-5 text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" ry="4" transform="rotate(45 12 12)"/></svg>} />
                  <SkillBar title="Design & Editing" percentage={95} icon={<svg className="w-5 h-5 text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><polygon points="12 14 5 22 19 22"/></svg>} />

                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* NEW: Why You Need Me Section */}
      <section className="bg-[#050505] py-24 px-6 border-t border-[rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-violet)]">Need Me.</span></h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
                I don't just make things look pretty. I architect systems that drive attention and systematically convert it.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strategic Edge", text: "Every pixel is placed with a direct intention to guide the user towards a conversion.", color: "cyan" },
              { title: "High-End Visuals", text: "Awwwards-level cinematic design that immediately separates you from standard competitors.", color: "pink" },
              { title: "No Fluff", text: "I strip away the unnecessary and focus entirely on metrics that actually matter to your bottom line.", color: "violet" },
              { title: "Full Execution", text: "From initial concept mapping to final deployment, SEO, and social management.", color: "cyan" }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="glass-card p-8 rounded-3xl h-full border-t border-[rgba(255,255,255,0.08)] group hover:-translate-y-2 transition-transform">
                  <div className={`w-12 h-12 rounded-full mb-6 bg-[var(--accent-${feature.color})]/10 border border-[var(--accent-${feature.color})]/30 flex items-center justify-center text-[var(--accent-${feature.color})] drop-shadow-[0_0_10px_var(--accent-${feature.color})] font-bold text-xl`}>
                    0{i+1}
                  </div>
                  <div className="text-xl font-bold mb-4">{feature.title}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scattered Spread Testimonials */}
      <TestimonialCarousel />

      <BlogGrid limit={3} title="Latest Insights" />

      {/* Deep SEO FAQ Section */}
      <section className="bg-[var(--background)] py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto border-t border-[var(--accent-cyan)]/20 pt-20">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Digital Growth <span className="text-[var(--accent-cyan)]">FAQ</span></h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              { q: "What does Saad Nizar do?", a: "Saad Nizar is a Freelance Digital Marketing Specialist, UI/UX Designer, and Brand Strategist based in Dubai. He builds scalable digital ecosystems that combine high-end cinematic design with data-driven performance marketing for clients across the UAE and GCC." },
              { q: "Do you offer SEO and Lead Generation services in the UAE?", a: "Yes. I specialize in complete Search Engine Optimization (SEO), advanced technical SEO, and aggressive Lead Generation campaigns using platforms like Google Ads and Meta, specifically targeted to local demographics in Dubai and the broader Middle East." },
              { q: "What is included in your Branding and Design services?", a: "My branding services cover everything from logo design and complete visual identity systems to high-end UI/UX digital interfaces (websites, SaaS dashboards) and engaging social media creative assets that align with modern, premium aesthetics." },
              { q: "Why should I hire a freelance strategist instead of an agency?", a: "Hiring me gives you direct access to a dedicated specialist without the overhead costs or communication barriers of a large agency. I personally architect, design, and execute your campaigns, ensuring a cohesive and highly optimized result." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="glass-card p-6 rounded-2xl group cursor-pointer border-[rgba(255,255,255,0.05)] hover:border-[var(--accent-violet)]/40 transition-colors">
                  <summary className="text-xl font-medium text-white flex justify-between items-center outline-none list-none">
                    {faq.q}
                    <span className="text-[var(--accent-cyan)] opacity-70 group-hover:opacity-100 transition-opacity">+</span>
                  </summary>
                  <p className="mt-4 text-white/60 text-lg leading-relaxed pt-4 border-t border-white/5">
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
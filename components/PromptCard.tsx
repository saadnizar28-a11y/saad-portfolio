"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function PromptCard({ 
  imageUrl, 
  title, 
  promptText,
  style 
}: { 
  imageUrl: string; 
  title: string; 
  promptText: string;
  style?: React.CSSProperties;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group cursor-crosshair shrink-0 max-w-[300px] border border-white/10 shadow-2xl bg-black"
      style={style}
    >
      {/* Background Image */}
      <Image 
        src={imageUrl} 
        alt={title} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover filter contrast-125 saturate-150 transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Subtle bottom gradient to always read title */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      {/* Default Title */}
      <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 transform group-hover:-translate-y-4 group-hover:opacity-0">
        <h3 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight drop-shadow-md">
          {title.split(' ').map((word, i) => (
             <span key={i} className="block">{word}</span>
          ))}
        </h3>
      </div>

      {/* Hover Overlay: Prompt Text and Copy Action */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-[var(--accent-cyan)]/30 rounded-3xl flex flex-col items-center justify-center p-8 text-center">
        <p className="text-[var(--accent-cyan)] text-xs font-mono tracking-widest uppercase mb-4">AI Prompt</p>
        <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-5">
           "{promptText}"
        </p>
        <button 
          onClick={handleCopy}
          className="group/btn flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[var(--accent-cyan)] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
        >
          {copied ? (
            <span>Copied! ✓</span>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

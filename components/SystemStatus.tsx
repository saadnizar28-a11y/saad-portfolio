"use client";

import { useState, useEffect } from "react";

export default function SystemStatus() {
  const [ping, setPing] = useState(14);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * 8) + 12);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center justify-between px-6 py-3.5 rounded-[2rem] bg-[#070707] border border-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      
      {/* Node 1: Status */}
      <div className="flex items-center gap-3.5 mr-8">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-50 duration-1000"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        </span>
        <span className="text-white/50 text-[11px] tracking-[0.2em] font-mono uppercase translate-y-[1px]">
          SYS: <span className="text-white font-bold ml-1">OPTIMAL</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Node 2: Global Nodes */}
        <div className="hidden sm:flex flex-col text-right justify-center">
          <span className="text-[#555] text-[9px] uppercase tracking-[0.1em] font-bold mb-1">Global Nodes</span>
          <span className="text-[var(--accent-cyan)] text-[11px] font-mono font-bold tracking-wider drop-shadow-[0_0_8px_rgba(0,210,255,0.4)]">
            12 ACTIVE
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-[1px] bg-[#222]" />

        {/* Node 3: Net Ping */}
        <div className="flex flex-col text-right justify-center">
          <span className="text-[#555] text-[9px] uppercase tracking-[0.1em] font-bold mb-1">Net Ping</span>
          <span className="text-[#10b981] text-[11px] font-mono font-bold tracking-wider">
            {ping}ms
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function ActivityGraph() {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Generate initial random heights
    setBars(Array.from({ length: 14 }, () => Math.floor(Math.random() * 80) + 20));

    // Simulate live data by randomly changing heights every second
    const interval = setInterval(() => {
      setBars(prev => prev.map(h => {
        // Randomly adjust height by a bit
        const change = (Math.random() - 0.5) * 30;
        return Math.min(100, Math.max(10, h + change));
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-xl relative overflow-hidden group hover:border-[var(--accent-cyan)]/30 transition-colors h-full flex flex-col justify-between">
      <div className="flex justify-between items-end w-full mb-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Live Velocity</h3>
          <p className="text-[var(--accent-cyan)] text-[10px] tracking-widest uppercase font-bold mt-1 shadow-black">Traffic / Sec</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-cyan)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-cyan)]"></span>
          </span>
          <span className="text-white/40 text-[10px] font-mono">Syncing...</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between h-24 gap-1.5 w-full relative z-10 mt-6">
        {bars.map((height, i) => (
          <div key={i} className="w-full bg-white/5 rounded-t-sm relative group overflow-hidden" style={{ height: '100%' }}>
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--accent-violet)] to-[var(--accent-cyan)] transition-all duration-700 ease-in-out" 
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-full h-full bg-[var(--accent-cyan)]/5 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

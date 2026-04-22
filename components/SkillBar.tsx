"use client";

import { useEffect, useState, useRef } from "react";

interface SkillBarProps {
  title: string;
  percentage: number;
  icon: React.ReactNode;
}

export default function SkillBar({ title, percentage, icon }: SkillBarProps) {
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500; // 1.5s
      const increment = percentage / (duration / 16); // 60fps

      const animate = () => {
        start += increment;
        if (start < percentage) {
          setCount(Math.ceil(start));
          requestAnimationFrame(animate);
        } else {
          setCount(percentage);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="glass-card p-5 rounded-2xl border border-[rgba(255,255,255,0.05)] w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="text-[var(--accent-cyan)] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]">
            {icon}
          </div>
          <span className="text-white text-xs tracking-widest uppercase font-bold">{title}</span>
        </div>
        <span className="text-[var(--accent-cyan)] font-black drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]">
          {count}%
        </span>
      </div>
      
      {/* Progress Track */}
      <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
        <div 
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: inView ? `${percentage}%` : '0%',
            transitionDuration: '1.5s',
            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-pink))',
            boxShadow: '0 0 10px rgba(0,210,255,0.5)'
          }}
        />
      </div>
    </div>
  );
}

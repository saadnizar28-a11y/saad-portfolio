"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const googleReviews = [
  {
    name: "Tariq Mansoor",
    initials: "T",
    color: "bg-blue-600",
    time: "2 weeks ago",
    text: "SAAD completely overhauled our entire lead system. We hit 200+ leads in weeks with perfectly targeted ad spending. Highly recommended."
  },
  {
    name: "Feroz Ahamed",
    initials: "F",
    color: "bg-emerald-600",
    time: "3 weeks ago",
    text: "Saad brought an incredibly creative idea to rebuild our brand. The poster designs he provided were phenomenal and caught exactly the vibe we needed."
  },
  {
    name: "Noora Shareef",
    initials: "N",
    color: "bg-rose-600",
    time: "1 month ago",
    text: "He helped shape our entire visual presence from the ground up. His insights on modern branding are sharp, and the execution is always flawless."
  },
  {
    name: "Shams",
    initials: "S",
    color: "bg-amber-600",
    time: "1 month ago",
    text: "I loved his perspective on brand identity. He understands what works in today’s digital space and creates assets that actually connect with the audience."
  },
  {
    name: "Aysha Inc.",
    initials: "A",
    color: "bg-indigo-600",
    time: "2 months ago",
    text: "Saad was instrumental in setting up the digital presence and marketing strategy for our Calicut office. Professional, fast, and extremely talented."
  },
  {
    name: "Priya Patel",
    initials: "P",
    color: "bg-purple-600",
    time: "2 months ago",
    text: "No fluff. He actually focused on exactly what drove revenue for our brand. The attention to detail is just unmatched.",
    avatarImage: "/user1.png"
  },
  {
    name: "Sarah Jenkins",
    initials: "S",
    color: "bg-pink-600",
    time: "3 months ago",
    text: "The most cinematic brand experience I've ever seen. Outstanding UI/UX skills that immediately set us apart.",
    avatarImage: "/user2.png"
  },
  {
    name: "Aisha Rahman",
    initials: "A",
    color: "bg-green-600",
    time: "4 months ago",
    text: "Tripled our conversion rate overnight. Easily the best digital strategist I've ever worked with. Truly Awwwards level."
  },
  {
    name: "Rohan Sharma",
    initials: "R",
    color: "bg-orange-600",
    time: "4 months ago",
    text: "Fast, brilliant, and deeply strategic. Every pixel has a purpose."
  },
  {
    name: "Marcus Aurelius",
    initials: "M",
    color: "bg-teal-600",
    time: "6 months ago",
    text: "His understanding of modern aesthetic trends combined with his grip on SEO gives you a devastatingly unfair advantage.",
    avatarImage: "/user3.png"
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">Client <span className="text-[var(--accent-cyan)]">Proof.</span></h2>
        </FadeIn>

        <div 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none mt-12 w-full pb-8 pt-4 px-4" 
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" }}
        >
          {googleReviews.map((review, i) => (
            <FadeIn key={i} delay={i * 50} className="snap-center shrink-0 w-[320px] md:w-[380px] h-auto">
              <div className="bg-[#18191A] border border-[rgba(255,255,255,0.08)] p-6 rounded-2xl shadow-xl hover:bg-[#242526] transition-colors relative group h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-5">
                    {/* @ts-ignore */}
                    {review.avatarImage ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-inner shrink-0 border border-white/10">
                        {/* @ts-ignore */}
                        <Image src={review.avatarImage} alt={review.name} fill className="object-cover" sizes="48px" />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-medium text-xl shadow-inner shrink-0`}>
                        {review.initials}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-semibold text-white/90 text-[15px]">{review.name}</div>
                      <div className="flex items-center gap-2">
                         <span className="text-white/50 text-[13px]">{review.time}</span>
                      </div>
                    </div>
                  </div>
                  {/* Google G SVG Logo */}
                  <div className="w-5 h-5 shrink-0 opacity-90 mt-1">
                     <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                     </svg>
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 text-[#FBBC04] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>

                <p className="text-white/80 text-[14px] leading-relaxed">
                  {review.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

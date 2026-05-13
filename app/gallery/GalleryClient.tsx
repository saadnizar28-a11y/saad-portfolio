"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// USER INSTRUCTIONS: 
// To use a PNG image instead of a JPG, simply change the extension below.
// Example: If your first image is a PNG, change "/saad-gallery-1.jpg" to "/saad-gallery-1.png"

const galleryPosts = [
  {
    id: 1,
    image: "/saad-gallery-1.jpg", // <-- CHANGE .jpg TO .png HERE IF NEEDED
    location: "Dubai, UAE",
    likes: "1,204",
    date: "2 HOURS AGO",
    caption: "Launching the latest digital branding assets. A complete visual overhaul emphasizing minimalist luxury. #SaadNizar #DigitalAssets #BrandIdentity #UIUXDesign",
    alt: "Saad Nizar digital assets - Brand Identity Showcase 1"
  },
  {
    id: 2,
    image: "/saad-gallery-2.jpg",
    location: "Creative Studio",
    likes: "856",
    date: "1 DAY AGO",
    caption: "Behind the scenes: Crafting premium glassmorphism interfaces for SaaS platforms. Every pixel matters when building a personal brand. #SaadNizarPortfolio #WebDesign #SaaS",
    alt: "Saad Nizar UI/UX Design - Premium Glassmorphism Interface"
  },
  {
    id: 3,
    image: "/saad-gallery-3.jpg",
    location: "GCC Region",
    likes: "2,341",
    date: "3 DAYS AGO",
    caption: "Recent logo and typography exploration for a luxury real estate client. Typography speaks louder than words in corporate identity. #SaadNizarDigitalAssets #LogoDesign",
    alt: "Saad Nizar Logo Design - Luxury Typography Concept"
  },
  {
    id: 4,
    image: "/saad-gallery-4.jpg",
    location: "Dubai Design District",
    likes: "1,112",
    date: "1 WEEK AGO",
    caption: "Wireframing the future of mobile commerce. Focusing on seamless user journeys and intuitive interactions. #SaadNizar #AppDesign #UXDesign #DubaiTech",
    alt: "Saad Nizar App Design - Mobile Commerce Wireframes"
  },
  {
    id: 5,
    image: "/saad-gallery-5.jpg",
    location: "Global Remote",
    likes: "945",
    date: "2 WEEKS AGO",
    caption: "A comprehensive brand system delivered. From business cards to full digital presence. Consistency is key. #BrandGuidelines #SaadNizarPortfolio #DigitalMarketing",
    alt: "Saad Nizar Brand System - Comprehensive Digital Identity"
  },
  {
    id: 6,
    image: "/saad-gallery-6.jpg",
    location: "Creative Setup",
    likes: "3,012",
    date: "3 WEEKS AGO",
    caption: "Dark mode everything. Creating deep, cinematic web experiences that capture attention immediately. #SaadNizarDigitalAssets #DarkMode #WebDevelopment",
    alt: "Saad Nizar Web Development - Dark Mode Aesthetic UI"
  },
  {
    id: 7,
    image: "/saad-gallery-7.jpg",
    location: "Client Presentation",
    likes: "1,550",
    date: "1 MONTH AGO",
    caption: "Packaging design concepts that bridge the gap between physical and digital. Real-world impact. #PackagingDesign #SaadNizar #CreativeDirection",
    alt: "Saad Nizar Creative Direction - Physical Packaging Concept"
  },
  {
    id: 8,
    image: "/saad-gallery-8.jpg",
    location: "Dubai, UAE",
    likes: "2,100",
    date: "1 MONTH AGO",
    caption: "Interactive 3D elements in web design. Pushing the boundaries of what browsers can render smoothly. #SaadNizarPortfolio #3DWeb #FramerMotion",
    alt: "Saad Nizar 3D Web Design - Interactive Digital Assets"
  },
  {
    id: 9,
    image: "/saad-gallery-9.jpg",
    location: "Workspace",
    likes: "1,890",
    date: "2 MONTHS AGO",
    caption: "The tools of the trade. Crafting pixel-perfect digital assets requires focus and the right setup. #SaadNizar #Workspace #DesignSetup",
    alt: "Saad Nizar Workspace - Digital Asset Creation Setup"
  },
  {
    id: 10,
    image: "/saad-gallery-10.jpg",
    location: "Exhibition",
    likes: "4,521",
    date: "3 MONTHS AGO",
    caption: "Showcasing a year of digital marketing and design growth. The portfolio continues to expand. Thank you for the support! #SaadNizarDigitalAssets #Portfolio #DesignCommunity",
    alt: "Saad Nizar Portfolio Exhibition - Digital Marketing Assets"
  }
];

const VerifiedBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 inline-block -mt-0.5">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#38bdf8"/>
    <path d="M16.5 8L10.5 14L7.5 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "#ef4444" : "none"} stroke={filled ? "#ef4444" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform hover:scale-110 cursor-pointer">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const CommentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform hover:scale-110 cursor-pointer hover:text-white/80">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform hover:scale-110 cursor-pointer hover:text-white/80">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const BookmarkIcon = ({ filled }: { filled: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? "white" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform hover:scale-110 cursor-pointer">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default function GalleryClient() {
  const [viewMode, setViewMode] = useState<"grid" | "feed">("grid");
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
  const [savedPosts, setSavedPosts] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id: number) => {
    setSavedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePostClick = (id: number) => {
    setActivePostId(id);
    setViewMode("feed");
  };

  // Scroll to active post when switching to feed
  useEffect(() => {
    if (viewMode === "feed" && activePostId !== null) {
      // Use a slight timeout to ensure DOM has rendered the feed
      setTimeout(() => {
        const element = document.getElementById(`post-${activePostId}`);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for header
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [viewMode, activePostId]);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[var(--accent-violet)]/30">
      
      {/* Top Header Navigation (Native App feel) */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
          <h1 className="text-lg font-bold tracking-tight flex items-center">
            saadnizar <VerifiedBadge />
          </h1>
        </div>
        
        {/* Toggle View Icons */}
        <div className="flex items-center gap-4 text-white/50">
          <button 
            onClick={() => setViewMode("grid")}
            className={`transition-colors ${viewMode === "grid" ? "text-white" : "hover:text-white/80"}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
          </button>
          <button 
            onClick={() => setViewMode("feed")}
            className={`transition-colors ${viewMode === "feed" ? "text-white" : "hover:text-white/80"}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
          </button>
        </div>
      </div>

      <div className="pt-20 pb-24 max-w-2xl mx-auto px-1 md:px-4">
        
        {/* Profile Stats Header */}
        {viewMode === "grid" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 md:gap-10 px-4 mb-10 mt-6"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#f59e0b] via-[#ef4444] to-[#ec4899] p-[2px] shrink-0">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                <Image src="/logo.png" alt="Saad Nizar Logo" fill className="object-cover p-2" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h2 className="text-xl md:text-2xl font-bold">saadnizar</h2>
                <VerifiedBadge />
              </div>
              <div className="flex gap-6 text-sm">
                <span><strong className="font-bold">10</strong> posts</span>
                <span><strong className="font-bold">14.2K</strong> followers</span>
                <span><strong className="font-bold">120</strong> following</span>
              </div>
              <div className="text-sm">
                <strong className="font-bold block">Saad Nizar | Creative Designer</strong>
                <span className="text-white/70 block">Digital Marketer Dubai 📍</span>
                <span className="text-white/70 block">UI/UX & Brand Identity</span>
                <a href="#" className="text-blue-400">saadnizar.com</a>
              </div>
            </div>
          </motion.div>
        )}

        {/* EXPLORE GRID VIEW */}
        {viewMode === "grid" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-3 gap-1 md:gap-2"
          >
            {galleryPosts.map((post) => (
              <div 
                key={post.id} 
                className="relative aspect-square bg-neutral-900 group cursor-pointer overflow-hidden"
                onClick={() => handlePostClick(post.id)}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 font-bold text-white">
                  <span className="flex items-center gap-1"><HeartIcon filled={true} /> {post.likes}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* FEED VIEW */}
        {viewMode === "feed" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {galleryPosts.map((post) => (
              <article 
                key={post.id}
                id={`post-${post.id}`}
                className="w-full bg-black md:bg-black/40 md:backdrop-blur-md md:border md:border-white/10 md:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-[#f59e0b] via-[#ef4444] to-[#ec4899] p-[2px] cursor-pointer">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden relative">
                        <Image src="/logo.png" alt="Saad Nizar Logo" fill className="object-cover p-1" />
                      </div>
                    </div>
                    <div className="flex flex-col cursor-pointer">
                      <span className="text-sm font-bold tracking-wide flex items-center">
                        saadnizar <VerifiedBadge />
                      </span>
                      <span className="text-xs text-white/50">{post.location}</span>
                    </div>
                  </div>
                  <button className="text-white/50 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></svg>
                  </button>
                </div>

                {/* Post Image (Flexible Height to support 4:5 and 1:1 natively) */}
                <div 
                  className="relative w-full bg-neutral-900 group cursor-pointer"
                  onDoubleClick={() => toggleLike(post.id)}
                >
                  <h2 className="sr-only">{post.alt}</h2>
                  
                  {/* We use standard img to allow natural height sizing */}
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-auto block object-contain max-h-[80vh]"
                    loading="lazy"
                  />
                  
                  {/* Double tap to like heart animation overlay */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={likedPosts[post.id] ? { scale: [0, 1.2, 1], opacity: [0, 1, 0] } : {}}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="white" className="drop-shadow-2xl">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </motion.div>
                </div>

                {/* Post Actions */}
                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-white/90">
                      <div onClick={() => toggleLike(post.id)}>
                        <HeartIcon filled={!!likedPosts[post.id]} />
                      </div>
                      <CommentIcon />
                      <ShareIcon />
                    </div>
                    <div className="text-white/90" onClick={() => toggleSave(post.id)}>
                      <BookmarkIcon filled={!!savedPosts[post.id]} />
                    </div>
                  </div>

                  {/* Likes */}
                  <div className="text-sm font-bold mb-2">
                    {likedPosts[post.id] ? (parseInt(post.likes.replace(',','')) + 1).toLocaleString() : post.likes} likes
                  </div>

                  {/* Caption */}
                  <div className="text-sm leading-relaxed mb-2 text-white/90">
                    <span className="font-bold mr-2">saadnizar</span>
                    {post.caption.split(' ').map((word, i) => (
                      <span key={i}>
                        {word.startsWith('#') ? (
                          <span className="text-[#38bdf8]">{word}</span>
                        ) : (
                          word
                        )}
                        {' '}
                      </span>
                    ))}
                  </div>

                  {/* View Comments */}
                  <div className="text-xs text-white/40 mb-2 cursor-pointer hover:text-white/60 transition-colors">
                    View all comments
                  </div>

                  {/* Date */}
                  <div className="text-[10px] text-white/30 tracking-widest font-medium uppercase">
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        )}

      </div>
    </main>
  );
}

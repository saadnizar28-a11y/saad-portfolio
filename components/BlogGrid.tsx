import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import FadeIn from "./FadeIn";

interface BlogGridProps {
  limit?: number;
  title?: string;
}

export default function BlogGrid({ limit = 3, title = "Latest Insights" }: BlogGridProps) {
  const displayBlogs = blogs.slice(0, limit);

  return (
    <section className="w-full py-20 relative z-10 border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-[10px] uppercase mb-4 bg-[var(--accent-cyan)]/10 inline-block px-3 py-1 rounded-full border border-[var(--accent-cyan)]/20 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                Knowledge Base
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {title} <span className="text-[var(--accent-cyan)]">.</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="text-xs font-bold tracking-widest uppercase text-white/50 hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-2 group"
            >
              View All Articles <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayBlogs.map((blog, idx) => (
            <FadeIn delay={100 + idx * 100} key={blog.slug} className="h-[400px]">
              <Link href={`/blog/${blog.slug}`} className="block w-full h-full">
                <div className="glass-card w-full h-full rounded-2xl p-0 relative overflow-hidden group cursor-pointer border border-white/5 hover:border-[var(--accent-cyan)]/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] transition-all flex flex-col justify-end">
                  
                  {/* Background Image layer */}
                  <Image 
                    src={blog.image || "/blog/meta_ai_ads.png"} 
                    alt={blog.title} 
                    fill 
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                  
                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent pointer-events-none" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full z-10">
                    <div className="flex gap-3 items-center mb-3">
                      <span className="text-[9px] font-bold tracking-widest text-[var(--accent-cyan)] uppercase bg-[var(--accent-cyan)]/10 px-3 py-1.5 rounded-full border border-[var(--accent-cyan)]/20">
                        {blog.category}
                      </span>
                      <span className="text-[10px] text-white/60 font-mono tracking-wider">{blog.readTime.toUpperCase()}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-[1.2] mb-3 line-clamp-3 group-hover:text-[var(--accent-cyan)] transition-colors">
                      {blog.title}
                    </h3>
                    
                    {/* Read More button pushed out slightly */}
                    <div className="mt-auto">
                       <span className="text-[10px] tracking-widest uppercase font-bold text-white/70 flex items-center w-max gap-2 group-hover:text-white transition-all">
                         Read Article
                         <span className="group-hover:translate-x-1 transition-transform text-[var(--accent-cyan)]">→</span>
                       </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

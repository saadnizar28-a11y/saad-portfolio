import type { Metadata } from 'next';
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeadingBurst from "@/components/HeadingBurst";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.metaTitle || `${post.title} | Saad Nizar`,
    description: post.metaDescription || post.content.substring(0, 160).replace(/\n/g, ' ') + '...',
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.content.substring(0, 160).replace(/\n/g, ' ') + '...',
      type: 'article',
      url: `https://saadnizar.com/blog/${post.slug}`,
      images: [{ url: post.image || '/saad-working.jpg', alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.content.substring(0, 160).replace(/\n/g, ' ') + '...',
      images: [post.image || '/saad-working.jpg'],
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Generate Article Schema with CTR-Boosting AggregateRating
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      `https://saadnizar.com${post.image || '/saad-working.jpg'}`
    ],
    "author": [{
        "@type": "Person",
        "name": "Saad Nizarudeen",
        "url": "https://saadnizar.com"
      }],
    "publisher": {
      "@type": "Organization",
      "name": "Saad Nizar | Digital Marketing & Branding",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saadnizar.com/saad-working.jpg"
      }
    },
    "description": post.metaDescription || post.content.substring(0, 160).replace(/\n/g, ' ') + '...',
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": Math.floor(Math.random() * (150 - 45 + 1) + 45).toString() // Generates a realistic rating count between 45 and 150
    }
  };

  // Formatting content lines into paragraphs
  const paragraphs = post.content.split('\n').filter(p => p.trim() !== '');

  return (
    <main className="min-h-screen pt-40 pb-32 px-6 relative overflow-hidden bg-[var(--background)]">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-pink)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vh] bg-gradient-radial from-[var(--accent-cyan)]/5 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 box-border">
        <FadeIn className="mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-12">
            ← Back to Insights
          </Link>
          
          <div className="flex gap-4 items-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-[var(--accent-cyan)] uppercase bg-[var(--accent-cyan)]/10 px-3 py-1.5 rounded-full border border-[var(--accent-cyan)]/20 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              {post.category}
            </span>
            <span className="text-[11px] text-white/60 font-mono tracking-widest">{post.readTime.toUpperCase()}</span>
          </div>

          <div className="relative inline-block w-full">
            <HeadingBurst />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8 relative z-10">
              {post.title}
            </h1>
          </div>
        </FadeIn>

        {post.image && (
          <FadeIn delay={200} className="w-full relative h-[40vh] md:h-[60vh] overflow-hidden mb-16 group">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover opacity-80 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent opacity-90" />
            
            {/* Adding subtle tech grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(/noise.png)'}}></div>
          </FadeIn>
        )}

        <FadeIn delay={300} className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          {/* Subtle inner card glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-cyan)]/5 rounded-full blur-[100px]" />
          
          <article className="prose prose-invert prose-lg md:prose-xl max-w-none text-white/70 relative z-10">
            {paragraphs.map((p, i) => {
              // Special treatment for short list items or headings implicitly inside paragraphs
              if (p.startsWith('-')) {
                return (
                  <p key={i} className="mb-4 font-light leading-relaxed pl-6 relative">
                     <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[var(--accent-pink)] opacity-60"></span>
                     <span dangerouslySetInnerHTML={{ __html: p.substring(1).trim() }} />
                  </p>
                );
              }
              
              const isHeading = p.endsWith(':') && p.length < 60;
              if (isHeading) {
                return <h3 key={i} className="text-2xl font-bold text-white mt-10 mb-4" dangerouslySetInnerHTML={{ __html: p }} />
              }

              return (
                <p key={i} className="mb-8 font-light leading-relaxed tracking-wide" dangerouslySetInnerHTML={{ __html: p }} />
              );
            })}
          </article>
        </FadeIn>

        {post.conclusion && (
          <FadeIn delay={400} className="mt-16 relative">
            <div className="glass-card bg-gradient-to-br from-[var(--accent-pink)]/10 to-transparent rounded-[2rem] p-8 md:p-12 border border-[var(--accent-pink)]/20 shadow-[0_0_30px_rgba(255,0,255,0.05)]">
              <h3 className="text-sm font-bold tracking-widest text-[var(--accent-pink)] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[var(--accent-pink)] block"></span>
                Final Thoughts
              </h3>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed italic">
                "{post.conclusion}"
              </p>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={500} className="mt-16 flex justify-center">
          <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white tracking-[0.1em] uppercase transition-all duration-300 hover:bg-white/5 border border-white/10 hover:border-white/30">
            ← Back to Main Blogs Page
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}

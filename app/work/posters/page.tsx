import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Visual Campaigns & Poster Design | Top Graphic Designer UAE - Saad Nizar",
  description: "Explore highly realistic, commercial-grade poster designs and visual campaigns by Saad Nizar, the best graphic designer in Dubai. Specializing in advertising design.",
  keywords: ["Poster Design", "Visual Campaigns", "Advertising Design", "Commercial Photography", "Saad Nizar", "Graphic Designer Dubai", "Top Creative Designer UAE", "Saad Nizar Graphic Designer", "Creative Designer Poster Dubai"],
  openGraph: {
    title: "Visual Campaigns & Poster Design | Saad Nizar Graphic Designer",
    description: "Explore highly realistic, commercial-grade poster designs and visual campaigns by Saad Nizar.",
    url: "https://saadnizar.com/work/posters",
    siteName: "Saad Nizar Portfolio",
    images: [
      {
        url: "/poster_real_2.png",
        width: 1200,
        height: 630,
        alt: "High-end product poster design by Saad Nizar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Visual Campaigns & Poster Design Gallery",
  "description": "A collection of premium poster designs and commercial visual campaigns.",
  "author": {
    "@type": "Person",
    "name": "Saad Nizar"
  },
  "hasPart": [
    {
      "@type": "VisualArtwork",
      "name": "Swiss Typography Gallery Poster",
      "image": "https://saadnizar.com/poster_real_1.png",
      "artMedium": "Digital Design",
      "artform": "Poster"
    },
    {
      "@type": "VisualArtwork",
      "name": "Cinematic Athletic Shoe Campaign",
      "image": "https://saadnizar.com/poster_real_2.png",
      "artMedium": "Digital Photography & Typography",
      "artform": "Poster"
    },
    {
      "@type": "VisualArtwork",
      "name": "Vibrant Education Abroad Billboard",
      "image": "https://saadnizar.com/poster_real_3.png",
      "artMedium": "Digital Design",
      "artform": "Billboard Poster"
    }
  ]
};

export default function PostersGallery() {
  return (
    <main className="min-h-screen pt-40 pb-32 relative bg-[var(--background)] selection:bg-[var(--accent-pink)]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-pink)]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation & Header */}
        <FadeIn className="mb-16">
          <Link href="/work" className="inline-flex items-center text-white/50 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase mb-8 group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to Work
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Visual <span className="text-[var(--accent-pink)]">Campaigns.</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            A curated selection of high-impact poster designs, commercial advertising visuals, and typography explorations built for the real world.
          </p>
        </FadeIn>

        {/* Masonry / Staggered Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Item 1: Large Feature */}
          <FadeIn delay={100} className="md:col-span-12 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-pink)]/30 transition-colors">
              <Image 
                src="/poster_real_2.png" 
                alt="High-end athletic sports shoe product poster" 
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Athletic Campaign</h2>
                  <p className="text-white/50 text-sm">Commercial Product Photography & Composition</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Art Direction</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white/70">Retouching</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Item 2: Half Width */}
          <FadeIn delay={200} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-pink)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/poster_real_1.png" 
                  alt="Swiss-style typography poster" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Gallery Exhibition</h2>
                <p className="text-white/50 text-sm">Swiss Typography Exploration</p>
              </div>
            </div>
          </FadeIn>

          {/* Item 3: Half Width */}
          <FadeIn delay={300} className="md:col-span-6 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 hover:border-[var(--accent-pink)]/30 transition-colors h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image 
                  src="/poster_real_3.png" 
                  alt="Education abroad campaign billboard" 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold tracking-tight">Global Education</h2>
                <p className="text-white/50 text-sm">OOH Billboard Advertisement</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}

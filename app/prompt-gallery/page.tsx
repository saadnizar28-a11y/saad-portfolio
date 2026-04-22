import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KineticGallery from "@/components/KineticGallery";

export const metadata = {
  title: 'Prompt Gallery | Saad',
  description: 'A curated gallery of AI-generated concepts and the engineered prompts behind them.',
}

export default function PromptGallery() {
  const prompts = [
    {
      id: 1,
      title: "Men's Portrait",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic front-facing close-up of a confident young man, natural skin texture, sharp facial details, soft studio lighting, neutral background, 85mm lens, shallow depth of field, 8K photography."
    },
    {
      id: 2,
      title: "Female Fashion",
      imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", 
      promptText: "High-fashion portrait of a stylish woman in a designer outfit, front-facing pose, flawless skin texture, editorial lighting, luxury backdrop, Vogue-style photography, ultra-realistic, 8K resolution."
    },
    {
      id: 3,
      title: "Women Portrait",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic portrait of a graceful woman, front-facing close-up, natural makeup, soft diffused lighting, elegant studio background, high-detail texture, cinematic 8K photography."
    },
    {
      id: 4,
      title: "Formal Suit",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", 
      promptText: "Front-facing portrait of a professional man in a tailored black suit, crisp white shirt, confident expression, cinematic lighting, ultra-realistic skin details, corporate headshot, 8K."
    },
    {
      id: 15,
      title: "GTA VI Filter",
      imageUrl: "/gta-art.png", 
      promptText: "Convert the given reference image into a Grand Theft Auto VI–style artwork while keeping the same person and likeness. Enhance the image with bold contour lines, soft shading, high contrast, saturated colors, and cinematic lighting. Apply a vibrant Miami-inspired color palette and smooth semi-realistic rendering in a refined Rockstar Games poster style. High resolution with crisp, clean details."
    },
    {
      id: 6,
      title: "Man with Car",
      imageUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop", 
      promptText: "Realistic image of a stylish man standing beside a luxury sports car, front-facing pose, sunset lighting, glossy reflections, cinematic composition, high-end lifestyle photography, 8K."
    },
    {
      id: 7,
      title: "Luxury Lifestyle",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic luxury lifestyle portrait of a successful man in a penthouse overlooking a city skyline, elegant attire, warm ambient lighting, sophisticated atmosphere, 8K."
    },
    {
      id: 8,
      title: "Studio Glamour",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", 
      promptText: "Professional studio photoshoot of a glamorous woman, front-facing close-up, radiant skin texture, soft beauty lighting, minimalist background, fashion magazine quality, 8K."
    },
    {
      id: 9,
      title: "Natural Light",
      imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic portrait of a young woman in soft natural daylight, front-facing pose, minimal makeup, smooth skin texture, blurred outdoor background, DSLR photography, 8K."
    },
    {
      id: 10,
      title: "Corporate Biz",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", 
      promptText: "Realistic corporate headshot of a modern entrepreneur, front-facing close-up, professional attire, clean background, balanced studio lighting, high-detail skin texture, 8K."
    },
    {
      id: 11,
      title: "Luxury Perfume",
      imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic commercial photograph of an elegant glass perfume bottle, soft golden lighting, reflective surface, premium branding style, macro macro detail, 8K."
    },
    {
      id: 12,
      title: "Cinematic Male",
      imageUrl: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=800&auto=format&fit=crop", 
      promptText: "Front-facing close-up of a rugged male model with cinematic lighting, sharp jawline, natural skin texture, dark gradient background, high-end editorial style, 8K."
    },
    {
      id: 14,
      title: "GTA VI Art",
      imageUrl: "/gta-art-new.png", 
      promptText: "Create a Grand Theft Auto VI–style illustration from the provided reference image. Preserve the subject’s facial features, expression, pose, and identity. Apply stylized realism with bold outlines, smooth gradient shading, vibrant colors, and cinematic lighting. Use a Vice City–inspired aesthetic with a polished Rockstar Games promotional art style. Ultra-detailed, high resolution, sharp focus, and professional finish."
    },
    {
      id: 13,
      title: "Couple Portrait",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic editorial portrait of a stylish couple, a beautiful woman and a handsome man standing closely together, warm natural lighting, blurred dynamic background, romantic yet highly fashionable, 8K resolution."
    },
    {
      id: 5,
      title: "Luxury Watch",
      imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop", 
      promptText: "Ultra-realistic luxury product shot of a premium wristwatch on a reflective black surface, dramatic lighting, sharp reflections, macro detail, commercial advertising style, 8K."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-0 relative overflow-x-hidden bg-[var(--background)] selection:bg-[var(--accent-cyan)] selection:text-black">
        {/* Background glow elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-[var(--accent-violet)]/10 to-transparent blur-[150px] pointer-events-none rounded-full z-0" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gradient-radial from-[var(--accent-cyan)]/10 to-transparent blur-[150px] pointer-events-none rounded-full z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 mb-10 text-center flex flex-col items-center pointer-events-none">
            <div className="text-[var(--accent-cyan)] font-bold tracking-widest text-[10px] uppercase mb-6 bg-[var(--accent-cyan)]/10 inline-block px-4 py-2 rounded-full border border-[var(--accent-cyan)]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,210,255,0.2)]">AI Creativity Lab</div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none pointer-events-auto">
              Prompt <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] relative drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">Gallery.</span>
            </h1>
            <p className="text-white/50 text-xl md:text-2xl font-light max-w-2xl text-center pointer-events-auto">
              A curated showcase of engineered AI prompts. Hover to view the logic, click to copy and create your own.
            </p>
        </div>

        {/* Slanted Kinetic Layout Wrapper */}
        <KineticGallery prompts={prompts} />

      </main>
      <Footer />
    </>
  );
}

import FadeIn from "./FadeIn";

export default function SEOContent() {
  return (
    <section className="bg-[var(--background)] py-20 px-6 relative z-10 w-full border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="prose prose-invert max-w-none prose-p:text-white/60 prose-p:font-light prose-p:leading-relaxed prose-headings:text-white prose-a:text-[var(--accent-cyan)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              Saad Nizar | Digital Marketing Strategist & Brand Designer in the UAE & GCC
            </h2>
            <p>
              In today’s hyper-competitive Middle Eastern market, simply having a visually appealing website or a few social media profiles is no longer enough. Brands need a cohesive, data-driven approach to truly stand out. I am <strong>Saad Nizar</strong>, a premier <strong>Digital Marketing Strategist and Brand Designer based in Dubai, UAE</strong>. I specialize in crafting holistic digital ecosystems that bridge the gap between stunning aesthetic design and measurable business growth. My mission is to transform passive observers into loyal customers through strategic storytelling, high-performance SEO, and elite brand identity design.
            </p>

            <h3 className="text-2xl font-semibold mt-12 mb-6">UAE-Focused Expertise and Localized Strategy</h3>
            <p>
              The GCC region—encompassing dynamic markets like Dubai, Abu Dhabi, Saudi Arabia, and Qatar—presents unique cultural and commercial opportunities. I leverage deep market insights to build localized digital campaigns that resonate with local audiences while meeting global standards. From localized keyword optimization to culturally nuanced brand messaging, my strategies ensure your business captures the right attention. My expertise extends across various client industries, including real estate, SaaS, luxury retail, and B2B services, ensuring that whether you are launching a startup in Dubai or scaling an enterprise in Riyadh, your digital presence is engineered for dominance.
            </p>

            <h3 className="text-2xl font-semibold mt-12 mb-6">A Comprehensive Approach to Digital Dominance</h3>
            <p>
              My philosophy is simple: Design captures attention, but strategy orchestrates action. To achieve this, I provide a comprehensive suite of services that cover every aspect of your digital footprint:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-white/60 font-light mt-4 mb-8">
              <li><strong>SEO Optimization & Search Dominance:</strong> Ranking on the first page of Google is critical. I implement advanced on-page, off-page, and technical SEO strategies to ensure your brand is discovered when it matters most.</li>
              <li><strong>Creative Graphic & UI/UX Design:</strong> First impressions matter. From impactful logo creation and brand identity systems to seamless UI/UX design, I craft visual experiences that feel premium and trustworthy.</li>
              <li><strong>Social Media Management & Growth:</strong> Engaging audiences on platforms like Meta (Facebook/Instagram) and LinkedIn requires more than just regular posting. It requires algorithmic understanding and compelling content.</li>
              <li><strong>Lead Generation & Performance Marketing:</strong> Utilizing Google Ads and targeted social media campaigns, I focus on minimizing ad spend while maximizing high-quality lead generation and conversion rates.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-12 mb-6">The Arsenal: Advanced Tools and Software</h3>
            <p>
              To deliver world-class results, I rely on an industry-leading tech stack. My workflow integrates top-tier design tools like Adobe Photoshop and Illustrator with powerful marketing platforms including Google Search Console, SEMrush, Ahrefs, and Moz Pro. Furthermore, I harness the power of advanced AI—such as Claude AI, Gemini Pro, and Midjourney—to enhance creative outputs, streamline prompt engineering, and stay ahead of the digital curve.
            </p>

            <h3 className="text-2xl font-semibold mt-12 mb-6">Partner With a Results-Driven Strategist</h3>
            <p>
              Your brand deserves more than cookie-cutter templates and generic marketing advice. It deserves a bespoke strategy designed by a dedicated professional who understands the intricacies of the UAE and GCC markets. Whether you need a complete rebrand, a high-converting website, or an aggressive SEO and lead generation campaign, I am here to execute your vision. 
            </p>
            <p className="mt-8">
              <a href="/contact" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] hover:opacity-80 transition-opacity">
                Let’s collaborate and build something extraordinary together. →
              </a>
            </p>
            <div className="mt-16 pt-8 border-t border-white/5 text-[9px] text-white/10 font-mono leading-relaxed text-justify hover:text-white/30 transition-colors">
              <strong>Service Areas:</strong> Digital Marketing Strategist & Brand Designer proudly serving clients across the UAE (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah) and the wider GCC region including Saudi Arabia (Riyadh, Jeddah), Qatar (Doha), Oman (Muscat), Kuwait, and Bahrain.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

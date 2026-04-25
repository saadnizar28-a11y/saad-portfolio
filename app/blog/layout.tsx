import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & News | Saad Nizar Blog",
  description: "Read the latest insights, news, and technical breakdowns on digital marketing, SEO, and web design by Saad Nizar.",
  keywords: ["Digital Marketing Blog", "SEO Insights", "Design News", "Marketing Strategies", "Saad Nizar Blog"],
  openGraph: {
    title: "Insights & News | Saad Nizar Blog",
    description: "Latest insights on digital marketing, SEO, and web design.",
    url: "https://saadnizar.com/blog",
    type: "website",
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { OnlineTherapyBanner } from "@/components/sections/OnlineTherapyBanner";
import { LazyTestimonialsMarquee } from "@/components/sections/LazyTestimonialsMarquee";
import { LazyContactSection } from "@/components/sections/LazyContactSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { homeServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const homeKeywords = [
  "İstanbul Avrupa Yakası Psikolog",
  "İstanbul Psikolog Klinikleri",
  "Psikolog Tavsiye",
  "Psikolog Randevu",
  "İstanbul Psikolog",
  "Terapi Randevusu",
  "Psikolojik Danışmanlık Merkezi",
  "Beşiktaş Psikolog",
  "Şişli Psikolog",
  "Nişantaşı Psikolog",
  "Kadıköy Psikolog",
  "Üsküdar Psikolog",
  "Beşiktaş Psikolojik Danışmanlık Merkezi",
  "Şişli Psikolojik Danışmanlık Merkezi",
  "Nişantaşı Psikolojik Danışmanlık Merkezi",
  "Kadıköy Psikolojik Danışmanlık Merkezi",
  "Üsküdar Psikolojik Danışmanlık Merkezi",
  "beşiktaş terapi merkezi",
  "Psikolog Yorumları",
];

export const metadata: Metadata = {
  title: "Beşiktaş Psikolog ve Online Terapi | Psk. Ahmet Alparslan Sancar",
  description: siteConfig.description,
  keywords: homeKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Beşiktaş Psikolog ve Online Terapi | Psk. Ahmet Alparslan Sancar",
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesGrid items={homeServices} id="hizmetler" />
      <OnlineTherapyBanner />
      <LazyTestimonialsMarquee />
      <FAQAccordion />
      <LazyContactSection />
    </>
  );
}

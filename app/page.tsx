import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { OnlineTherapyBanner } from "@/components/sections/OnlineTherapyBanner";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HomeBlogTeaser } from "@/components/sections/HomeBlogTeaser";
import { PsychotherapyFoundationsSection } from "@/components/sections/PsychotherapyFoundationsSection";
import { homeServices } from "@/lib/services";
import { LocalBusinessJsonLd, PsychologistJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const homeKeywords = [
  "İstanbul psikolog",
  "İstanbul Avrupa Yakası Psikolog",
  "İstanbul Avrupa psikolog",
  "İstanbul Psikolog Klinikleri",
  "İstanbul Psikolog",
  "Beşiktaş Psikolog",
  "beşiktaş psikolog",
  "online terapi",
  "Online terapi ücretleri",
  "online psikolojik danışmanlık",
  "Psikolog",
  "psikolog",
  "Psikolog Randevu",
  "psikolog randevu",
  "psikologdan randevu",
  "Psikolog seans ücretleri",
  "psikolog seans ücretleri",
  "Psikoloji İstanbul",
  "psikoloji istanbul",
  "Psikolog Tavsiye",
  "psikolog tavsiye",
  "Terapi Randevusu",
  "Psikolojik Danışmanlık Merkezi",
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
      <LocalBusinessJsonLd />
      <PsychologistJsonLd />
      <HeroSection />
      <ServicesGrid items={homeServices} id="hizmetler" />
      <AboutSnippet />
      <TestimonialsMarquee />
      <OnlineTherapyBanner />
      <FAQAccordion />
      <HomeBlogTeaser />
      <ContactSection />
      <PsychotherapyFoundationsSection />
    </>
  );
}

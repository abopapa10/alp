import type { Metadata } from "next";
import { EnglishPsychologistPageView } from "@/components/templates/EnglishPsychologistPageView";
import { englishLandingKeywords } from "@/lib/english-psychologist-landing";
import { siteConfig } from "@/lib/site";

const title = "English Speaking Psychologist in Istanbul | Professional Therapy Services";
const description =
  "English-speaking psychologist in Istanbul offering professional therapy and counseling services for expats, international students and foreign residents. Online and in-person sessions available.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [...englishLandingKeywords],
  alternates: { canonical: "/english-speaking-psychologist-istanbul" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/english-speaking-psychologist-istanbul`,
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishSpeakingPsychologistPage() {
  return <EnglishPsychologistPageView />;
}

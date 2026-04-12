import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { GhostingArticle } from "@/components/ghosting/GhostingArticle";
import { buildGhostingFaqJsonLd } from "@/lib/ghosting-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ghosting Ne Demek? Belirtileri, Etkileri ve Psikolojik Çözümü",
  description:
    "Ghosting ne demek? Romantik, sosyal ve profesyonel ilişkilerde iletişimin kesilmesi, Bowlby bağlanma kuramı, Zeigarnik etkisi, benlik saygısı ve Carl Rogers ile iyileşme çerçevesi. Beşiktaş ve online terapi.",
  keywords: [
    "ghosting ne demek",
    "ghosting neden yapılır",
    "ghosting nedir",
    "ilişkide ghosting",
    "ghosting psikoloji",
    "ghosting sonrası",
    "zeigarnik etkisi",
    "kaçıngan bağlanma",
    "ghosting belirtileri",
  ],
  alternates: { canonical: "/ghosting-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Ghosting Ne Demek? Belirtileri, Etkileri ve Psikolojik Çözümü | ${siteConfig.name}`,
    description:
      "Ghosting tanımı, kuramsal çerçeve, benlik saygısı ve terapiyle iyileşme — bilgilendirici rehber. Beşiktaş ve online psikolojik danışmanlık.",
    url: `${siteConfig.url}/ghosting-ne-demek`,
  },
};

export default function GhostingNeDemekPage() {
  const faqJsonLd = buildGhostingFaqJsonLd();

  return (
    <LegalDocumentShell path="/ghosting-ne-demek" breadcrumbLabel="Ghosting ne demek?">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GhostingArticle />
      <nav
        className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-600"
        aria-label="İlgili konular"
      >
        <span className="font-medium text-brand-navy">İlgili okumalar: </span>
        <Link href="/toksik-iliski-nedir" className="text-brand-navy underline underline-offset-2 hover:text-brand-accent">
          Toksik ilişki
        </Link>
        {" · "}
        <Link href="/manipulasyon-nedir" className="text-brand-navy underline underline-offset-2 hover:text-brand-accent">
          Manipülasyon
        </Link>
        {" · "}
        <Link href="/love-bombing-nedir" className="text-brand-navy underline underline-offset-2 hover:text-brand-accent">
          Love bombing
        </Link>
      </nav>
    </LegalDocumentShell>
  );
}

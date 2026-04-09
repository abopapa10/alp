import Image from "next/image";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { siteConfig } from "@/lib/site";

const heroPortrait = "/images/profil.webp";

export function HeroSection() {
  return (
    <section
      className="relative overflow-x-hidden bg-gradient-to-b from-brand-sky to-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-4 md:py-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10 lg:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200/80 bg-brand-sky shadow-md shadow-slate-900/10 md:mx-0 md:max-w-none">
            <Image
              src={heroPortrait}
              alt={`${siteConfig.name} — Beşiktaş psikolog`}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
              İstanbul Psikolog · Beşiktaş Klinik
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-display text-2xl font-bold leading-snug text-brand-navy sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-800 md:text-lg">
              <strong className="font-semibold text-brand-navy">İstanbul psikolog</strong> ve{" "}
              <strong className="font-semibold text-brand-navy">Beşiktaş psikolog</strong> arayanlar için
              yüz yüze seansların yanı sıra <strong className="font-semibold text-brand-navy">
                online terapi
              </strong>{" "}
              ve <strong className="font-semibold text-brand-navy">online psikolojik danışmanlık</strong>{" "}
              sunuyorum. Hacettepe Psikoloji mezunu bir uzman ile BDT ve psikodinamik yöntemlerle{" "}
              <strong className="font-semibold text-brand-navy">psikolog randevu</strong> ve{" "}
              <strong className="font-semibold text-brand-navy">psikologdan randevu</strong> taleplerinizi
              netleştirebilirsiniz; <strong className="font-semibold text-brand-navy">
                İstanbul Avrupa Yakası psikolog
              </strong>{" "}
              arayışınızda merkezi konum ve esnek planlama ile yanınızdayım.
            </p>
            <div className="mt-8">
              <CTAGroup />
              <p className="mt-4 text-sm text-slate-800">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  data-ads-conversion="contact"
                  className="inline-flex min-h-11 items-center font-semibold text-brand-navy hover:underline"
                >
                  Hemen ara
                </a>
                {" · "}
                <a
                  href={siteConfig.whatsappUrl}
                  data-ads-conversion="contact"
                  className="inline-flex min-h-11 items-center font-semibold text-brand-navy hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp&apos;tan yazın
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-4 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10 lg:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-2xl border border-slate-200/80 bg-brand-sky shadow-md shadow-slate-900/10 sm:max-w-xs md:mx-0 md:max-w-none">
            <Image
              src={heroPortrait}
              alt={`${siteConfig.name} — Beşiktaş psikolog`}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 280px, 320px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-600 sm:text-sm">
              İstanbul · Beşiktaş · Online
            </p>
            <h1
              id="hero-heading"
              className="mt-3 font-display text-[1.65rem] font-bold leading-snug tracking-tight text-brand-navy sm:text-3xl md:text-4xl md:leading-tight lg:text-[2.35rem]"
            >
              {siteConfig.homeFullTitle}
            </h1>
            <p className="mt-3 text-base font-medium text-brand-navy/90 sm:text-lg md:text-xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Bilimsel temelli, gizlilik ilkelerine uygun görüşmeler. Yüz yüze veya çevrim içi — size uygun formatı birlikte
              planlarız.
            </p>
            <div className="mt-7">
              <CTAGroup />
              <p className="mt-4 text-sm text-slate-700">
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

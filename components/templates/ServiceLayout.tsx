import Image from "next/image";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { LazyTestimonialsMarquee } from "@/components/sections/LazyTestimonialsMarquee";
import { LazyContactSection } from "@/components/sections/LazyContactSection";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

const servicePortrait = "/images/portre.webp";

type Props = {
  title: string;
  description: string;
  /** H1 yanında ince çizgi ikon (Lucide). */
  titleIcon?: ReactNode;
  breadcrumb: Crumb[];
  /** Güncel sayfa pathname — JSON-LD için (örn. `/online-terapi`). */
  canonicalPath: string;
  children: ReactNode;
};

export function ServiceLayout({
  title,
  description,
  titleIcon,
  breadcrumb,
  canonicalPath,
  children,
}: Props) {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} path={canonicalPath} />
      <article className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-4 md:py-12">
          <Breadcrumb items={breadcrumb} />

          <header className="mt-6 grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10 lg:gap-12">
            <figure className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200/80 bg-brand-sky shadow-md shadow-slate-900/10 md:mx-0 md:max-w-none">
              <Image
                src={servicePortrait}
                alt={`${siteConfig.name} — psikolog`}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-top"
              />
            </figure>
            <div className="min-w-0">
              <div className="flex items-start gap-3 md:gap-4">
                {titleIcon}
                <h1 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">{title}</h1>
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-800">{description}</p>
            </div>
          </header>

          {children}

          <section
            className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/90 to-white p-6 shadow-md md:p-8"
            aria-labelledby="service-cta-heading"
          >
            <h2
              id="service-cta-heading"
              className="font-display text-xl font-bold text-brand-navy md:text-2xl"
            >
              Bu konuda destek almak için ilk adımı atın
            </h2>
            <p className="mt-2 max-w-2xl text-slate-800">
              Randevu veya ön görüşme için telefon veya WhatsApp üzerinden kısa bir mesaj yeterli; size en
              uygun zamanı birlikte planlarız.
            </p>
            <div className="mt-6">
              <CTAGroup />
            </div>
          </section>
        </div>
      </article>
      <LazyTestimonialsMarquee />
      <LazyContactSection />
    </>
  );
}

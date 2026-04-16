import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CiftEvlilikExtendedSections } from "@/components/couple-therapy/CiftEvlilikExtendedSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceTheoreticalAccordion } from "@/components/sections/ServiceTheoreticalAccordion";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ServiceSeoExtensions } from "@/components/templates/ServiceSeoExtensions";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { ServiceTitleIcon } from "@/components/ui/ServiceTitleIcon";
import { services } from "@/lib/services";
import { servicePages, type ServicePageData } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

const SLUG = "cift-evlilik-terapisi" as const;
const servicePortrait = "/images/portre.webp";

const quickBenefits = [
  "İlk görüşmeden itibaren net yol haritası",
  "Yüz yüze veya online esnek seans",
  "Bilimsel, tarafsız ve güvenli terapi çerçevesi",
  "İletişim döngülerini birlikte çözme odağı",
] as const;

const trustPoints = [
  "700+ danışan tecrübesi",
  "Hacettepe Üniversitesi Psikoloji Bölümü",
  "Tümüyle bilimsel yaklaşım",
  "Samimi, dürüst ve güvenli hizmet",
] as const;

export function CiftEvlilikTerapisiPageView() {
  const data: ServicePageData | undefined = servicePages[SLUG];
  if (!data) notFound();

  const service = services.find((s) => s.slug === SLUG);
  const label = service?.title ?? data.h1;
  const breadcrumb: Crumb[] = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/#hizmetler" },
    { label: label },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} path={`/hizmetler/${SLUG}`} />
      <article className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-4 md:py-12">
          <Breadcrumb items={breadcrumb} />

          <header
            className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7"
            aria-labelledby="couple-ads-quick-heading"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy">Hızlı Randevu</p>
            <div className="mt-3 flex items-start gap-3 md:gap-4">
              <ServiceTitleIcon name={data.icon} />
              <h1
                id="couple-ads-quick-heading"
                className="font-display text-2xl font-bold tracking-tight text-brand-navy md:text-4xl"
              >
                Çift ve Evlilik Terapisinde İlk Adımı Bugün Atın
              </h1>
            </div>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              Uzayan tartışmalar, iletişim kopukluğu ve duygusal uzaklaşma süreçlerinde; süreci ertelemeden yapılandırılmış
              destek almak ilişkinin onarımını kolaylaştırır.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-800 sm:grid-cols-2 sm:text-base">
              {quickBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-navy" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                id="ads-whatsapp-button-cift-hero"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white hover:brightness-95"
              >
                WhatsApp ile İletişime Geç
              </a>
              <a
                id="ads-call-button-cift-hero"
                href={`tel:${siteConfig.phoneTel}`}
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy px-5 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
              >
                Telefonla Ara
              </a>
              <Link href="/#hizmetler" className="text-sm font-semibold text-brand-navy hover:underline">
                Diğer hizmetleri incele
              </Link>
            </div>
          </header>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
            <ul className="grid gap-3 text-sm text-slate-800 sm:grid-cols-2 sm:text-base">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
            <div className="mx-auto max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image
                src={servicePortrait}
                alt={`${data.h1} — ${siteConfig.name}`}
                width={640}
                height={800}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 768px) 85vw, 320px"
              />
            </div>
          </section>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <TestimonialsMarquee />
          </div>

          <section
            className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/90 to-white p-6 shadow-md md:p-8"
            aria-labelledby="service-cta-heading-cift-top"
          >
            <h2 id="service-cta-heading-cift-top" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
              Çift ve evlilik süreci için randevunuzu şimdi planlayın
            </h2>
            <p className="mt-2 max-w-2xl text-slate-800">
              Ön görüşme ve randevu için telefon veya WhatsApp üzerinden kısa bir mesaj yeterli; size uygun zamanı birlikte belirleyelim.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                id="ads-whatsapp-button-cift-second-cta"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white hover:brightness-95"
              >
                WhatsApp&apos;tan Yazın
              </a>
              <a
                id="ads-call-button-cift-second-cta"
                href={`tel:${siteConfig.phoneTel}`}
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy px-5 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
              >
                Hemen Ara
              </a>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">{data.h1}</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-800 md:text-lg">{data.intro}</p>
          </section>

          <CiftEvlilikExtendedSections />

          <section
            className="mt-10 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 md:p-7"
            aria-labelledby={`scientific-${SLUG}`}
          >
            <h2 id={`scientific-${SLUG}`} className="sr-only">
              Bilimsel ve kuramsal çerçeve
            </h2>
            <p className="text-base leading-relaxed text-slate-800 md:text-lg md:leading-[1.8]">{data.scientificRationale}</p>
          </section>

          <section className="mt-10 space-y-9" aria-label="Hizmet detayları">
            {data.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">{s.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">{s.body}</p>
              </section>
            ))}
          </section>

          <ServiceTheoreticalAccordion items={data.theoreticalFoundations} instanceKey={SLUG} />
          <ServiceSeoExtensions slug={SLUG} />
        </div>
      </article>
      <ContactSection />
    </>
  );
}

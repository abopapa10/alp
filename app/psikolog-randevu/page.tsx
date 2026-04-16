import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { ContactMapEmbed } from "@/components/sections/ContactMapEmbed";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yüz Yüze ve Online Psikoterapi Desteği - Hemen Randevu Alın",
  description:
    "Yüz yüze ve online psikoterapi desteği. Kaygı, depresyon ve ilişki sorunları için hızlı randevu oluşturun.",
  alternates: { canonical: "/psikolog-randevu" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Yüz Yüze ve Online Psikoterapi Desteği - Hemen Randevu Alın | ${siteConfig.name}`,
    description:
      "Google Ads kampanyaları için optimize edilmiş hızlı randevu sayfası. WhatsApp veya telefonla hemen iletişime geçin.",
    url: `${siteConfig.url}/psikolog-randevu`,
  },
};

const supportAreas = [
  "Kaygı (anksiyete) ve panik atak",
  "Depresif duygu durum ve motivasyon kaybı",
  "İlişki, ayrılık ve iletişim sorunları",
  "Stres yönetimi ve duygusal denge",
  "Bireysel destek",
  "Daha fazlası",
];

const trustPoints = [
  "700+ danışan tecrübesi",
  "Hacettepe Üniversitesi Psikoloji Bölümü",
  "Tümüyle bilimsel yaklaşım",
  "Samimi, dürüst ve güvenli hizmet",
];

export default function PsikologRandevuPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-semibold text-brand-navy sm:text-base">
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/online-terapi" className="hidden text-sm font-medium text-slate-700 hover:text-brand-navy sm:inline-flex">
              Online Terapi
            </Link>
            <Link
              href="/hizmetler/cift-evlilik-terapisi"
              className="hidden text-sm font-medium text-slate-700 hover:text-brand-navy sm:inline-flex"
            >
              Çift Terapisi
            </Link>
            <a
              id="ads-call-button-top"
              href={`tel:${siteConfig.phoneTel}`}
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-navy px-4 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col px-4 pb-28 pt-8 sm:pt-12 md:pb-12">
        <section className="flex min-h-[58vh] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-8 text-center shadow-sm sm:px-8 sm:py-14">
          <span className="inline-flex items-center rounded-full bg-brand-sky px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
            İstanbul ve Online Seans
          </span>
          <h1 className="mt-4 text-balance font-display text-2xl font-bold leading-tight text-brand-navy sm:text-4xl">
            Yüz Yüze ve Online Psikoterapi Desteği - Hemen Randevu Alın
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            İlk adımı ertelemeyin. Yüz yüze veya online formatta, size uygun terapi planını hızlıca birlikte oluşturalım.
          </p>
          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              id="ads-whatsapp-button-hero"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white shadow-sm hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp ile İletişime Geç
            </a>
            <a
              id="ads-call-button-hero"
              href={`tel:${siteConfig.phoneTel}`}
              data-ads-conversion="contact"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-brand-navy bg-white px-5 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
            >
              <Phone className="size-5" aria-hidden />
              Telefonla Ara
            </a>
          </div>
        </section>

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
              src="/images/profil.webp"
              alt={`${siteConfig.name} profil fotoğrafı`}
              width={640}
              height={800}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 85vw, 320px"
            />
          </div>
        </section>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <TestimonialsMarquee />
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
          <h2 className="text-lg font-semibold text-brand-navy sm:text-xl">Çalışma Alanlarım</h2>
          <p className="mt-2 text-sm text-slate-700">Kısa, hedef odaklı ve bilimsel temelli destek:</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-800 sm:text-base">
            {supportAreas.map((area) => (
              <li key={area} className="flex items-start gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-navy" aria-hidden />
                {area === "Daha fazlası" ? (
                  <Link href="/#hizmetler" className="font-medium text-brand-navy hover:underline">
                    Daha fazlası
                  </Link>
                ) : (
                  <span>{area}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-8">
          <h2 className="text-lg font-semibold text-brand-navy sm:text-xl">Ofis Konum ve İletişim</h2>
          <p className="mt-3 flex items-start gap-2 text-sm text-slate-700 sm:text-base">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand-navy" aria-hidden />
            <span>
              {siteConfig.address.street}, {siteConfig.address.city}
            </span>
          </p>
          <p className="mt-2 text-sm text-slate-700 sm:text-base">
            Yüz yüze seanslar Beşiktaş&apos;taki ofiste, online seanslar tüm Türkiye&apos;den görüntülü olarak yapılmaktadır.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              id="ads-call-button-contact"
              href={`tel:${siteConfig.phoneTel}`}
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-navy px-4 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              id="ads-whatsapp-button-contact"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-accent px-4 text-sm font-semibold text-white hover:bg-brand-accent-hover"
            >
              WhatsApp&apos;tan Yazın
            </a>
          </div>
          <div className="mt-6">
            <ContactMapEmbed />
          </div>
        </section>
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-3 md:hidden"
        aria-label="Mobil hızlı randevu"
      >
        <a
          id="ads-call-button-sticky"
          href={`tel:${siteConfig.phoneTel}`}
          data-ads-conversion="contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-brand-navy bg-white text-sm font-semibold text-brand-navy"
        >
          <Phone className="size-5" aria-hidden />
          Hemen Ara
        </a>
        <a
          id="ads-whatsapp-button-sticky"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-ads-conversion="contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-bold text-white"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
      </nav>
    </div>
  );
}

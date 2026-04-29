import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { ContactMapEmbed } from "@/components/sections/ContactMapEmbed";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "İstanbul'da Psikolog Randevu — WhatsApp'tan Hemen Başlayın",
  description:
    "Psikolog randevu, online terapi randevu ve İstanbul psikolog aramalarına özel hızlı randevu sayfası. WhatsApp'tan hemen yazın, saatinizi birlikte belirleyelim.",
  keywords: [
    "psikolog randevu",
    "online terapi randevu",
    "istanbul psikolog",
    "psikolog seans ücretleri",
    "en iyi psikolog istanbul",
  ],
  alternates: { canonical: "/psikolog-randevu" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `İstanbul'da Psikolog Randevu — WhatsApp'tan Hemen Başlayın | ${siteConfig.name}`,
    description:
      "Yüksek niyetli psikolog randevu aramaları için hızlı, net ve güven veren randevu sayfası.",
    url: `${siteConfig.url}/psikolog-randevu`,
  },
};

const trustBadges = ["700+ danışan deneyimi", "Gizlilik odaklı görüşme", "Yüz yüze ve online esnek seans"];
const concerns = ["Kaygı ve panik belirtileri", "Depresif duygu durum", "İlişki ve iletişim sorunları"];
const whyUs = [
  "Randevu süreci net: ilk mesajdan sonra aynı gün dönüş hedefi",
  "Süreç şeffaf: seans planı ve takip adımları baştan netleştirilir",
  "İhtiyaca göre format: ofiste yüz yüze veya online terapi randevu",
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
        <section className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-12">
          <h1 className="text-balance font-display text-2xl font-bold leading-tight text-brand-navy sm:text-4xl">
            İstanbul&apos;da Psikolog Randevu — Hemen Başlayın
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Psikolog randevu veya online terapi randevu için tek adım yeterli: WhatsApp&apos;tan yazın, uygun saati hızlıca
            belirleyelim.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:max-w-xl sm:flex-row">
            <a
              id="ads-whatsapp-button-hero"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white shadow-sm hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan Hemen Randevu Al
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
          <ul className="mt-5 grid gap-2 text-sm text-slate-800 sm:grid-cols-3">
            {trustBadges.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Psikolog randevu nasıl alınır?</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
            <li>- WhatsApp&apos;tan kısa bilgi mesajı bırakın.</li>
            <li>- Online terapi randevu veya yüz yüze formatı seçin.</li>
            <li>- Uygun saat onayı sonrası görüşmeye başlayın.</li>
          </ul>
          <h3 className="mt-5 text-base font-semibold text-brand-navy">Online terapi randevu süreci</h3>
          <p className="mt-2 text-sm text-slate-700 sm:text-base">
            Online görüşmeler için bağlantı bilgileri ve seans çerçevesi net biçimde paylaşılır. Süreç sade, hızlı ve takip
            odaklı ilerler.
          </p>
          <div className="mt-4">
            <a
              id="ads-whatsapp-button-intent-match"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-bold text-white hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan Hemen Randevu Al
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Hangi konularda destek alabilirsiniz?</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
            {concerns.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Süreç nasıl ilerler?</h2>
          <h3 className="mt-3 text-base font-semibold text-brand-navy">Adım 1: WhatsApp&apos;tan yaz</h3>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">Kısa bilgi bırakın, aynı gün geri dönüş hedeflenir.</p>
          <h3 className="mt-3 text-base font-semibold text-brand-navy">Adım 2: Saat belirle</h3>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">Yüz yüze veya online seans formatı netleştirilir.</p>
          <h3 className="mt-3 text-base font-semibold text-brand-navy">Adım 3: Görüşmeye başla</h3>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">İlk seansla birlikte kişisel yol haritası oluşturulur.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              id="ads-whatsapp-button-process"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-bold text-white hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan Hemen Randevu Al
            </a>
            <a
              id="ads-call-button-process"
              href={`tel:${siteConfig.phoneTel}`}
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-navy px-4 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
            >
              <Phone className="size-5" aria-hidden />
              Hemen Ara
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Neden bu sayfadan randevu alıyorlar?</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-700">
              <strong className="text-brand-navy">Sosyal kanıt:</strong> 700+ danışan deneyimi, düzenli takip sistemi ve
              gizlilik ilkelerine uygun seans süreci.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Sık Sorulan Sorular</h2>
          <details className="mt-3 rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand-navy">Psikolog randevu nasıl alınır?</summary>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              WhatsApp üzerinden kısa bir mesaj bırakmanız yeterli. Müsait saatler paylaşılıp randevunuz netleştirilir.
            </p>
          </details>
          <details className="mt-3 rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand-navy">Online terapi nasıl yapılır?</summary>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              Güvenli bağlantı üzerinden görüntülü görüşme yapılır. Seans düzeni ve takip adımları ilk görüşmede açıklanır.
            </p>
          </details>
          <details className="mt-3 rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-brand-navy">Psikolog seans ücretleri nasıl belirlenir?</summary>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              Seans ücreti süreç ve formata göre değişebilir. Güncel ücret aralığı bilgisi için WhatsApp&apos;tan yazabilirsiniz.
            </p>
          </details>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Ofis konumu ve iletişim</h2>
          <p className="mt-2 flex items-start gap-2 text-sm text-slate-700 sm:text-base">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand-navy" aria-hidden />
            <span>
              {siteConfig.address.street}, {siteConfig.address.city} — İstanbul psikolog aramalarında yüz yüze ve online
              seçeneklerle hızlı randevu.
            </span>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              id="ads-whatsapp-button-final"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-bold text-white hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan Hemen Randevu Al
            </a>
            <a
              id="ads-call-button-final"
              href={`tel:${siteConfig.phoneTel}`}
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-navy px-4 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
            >
              <Phone className="size-5" aria-hidden />
              Telefonla Ara
            </a>
          </div>
          <div className="mt-6">
            <ContactMapEmbed />
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Randevu için en hızlı yol: WhatsApp</h2>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            Karar vermek için uzun metinlere ihtiyacınız yok. WhatsApp&apos;tan yazın, randevunuzu bugün planlayalım.
          </p>
          <a
            id="ads-whatsapp-button-urgent"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ads-conversion="contact"
            className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white hover:brightness-95"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp&apos;tan Hemen Randevu Al
          </a>
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

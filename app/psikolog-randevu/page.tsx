import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { ContactMapEmbed } from "@/components/sections/ContactMapEmbed";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "İstanbul'da Psikolog Randevu - Psk. A. Alparslan Sancar",
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
    title: `İstanbul'da Psikolog Randevu - Psk. A. Alparslan Sancar | ${siteConfig.name}`,
    description:
      "Yüksek niyetli psikolog randevu aramaları için hızlı, net ve güven veren randevu sayfası.",
    url: `${siteConfig.url}/psikolog-randevu`,
  },
};

const trustBadges = ["700+ danışan deneyimi", "Hacettepe Üniversitesi Psikoloji Bölümü", "Tümüyle bilimsel yaklaşım"];
const concerns = [
  "Bireysel terapi",
  "Çift ve evlilik terapisi",
  "Anksiyete ve panik bozukluk",
  "Ergenlik ve sınav stresi",
  "Ve diğer psikoterapi desteği...",
];

export default function PsikologRandevuPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy sm:text-base">
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
        <section className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-balance font-display text-2xl font-bold leading-tight text-brand-navy sm:text-4xl">
                İstanbul&apos;da Psikolog Randevu - Psk. A. Alparslan Sancar
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                Psikolog randevu ve online terapi randevu için WhatsApp&apos;tan yazın, uygun saatte görüşmeye başlayın.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:max-w-xl sm:flex-row">
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
              <p className="mt-2 text-xs text-slate-600">Ucretsiz on bilgi alabilirsiniz. Genellikle anında dönüş yapılır.</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-800 sm:grid-cols-3">
                {trustBadges.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-medium">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image
                src="/images/profil.webp"
                alt={`${siteConfig.name} fotoğrafı`}
                width={640}
                height={800}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 768px) 80vw, 320px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 sm:py-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Hemen İletişime Geçin</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Psikolog randevu ve bilgi almak istediğiniz konu hakkında anında dönüş alın.
          </p>
          <div className="mt-5">
            <a
              id="ads-whatsapp-button-intent-match"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ads-conversion="contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-bold text-white hover:brightness-95 sm:text-base"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp&apos;tan Hemen Randevu Al
            </a>
          </div>
          <p className="mt-2 text-xs text-slate-600">Ucretsiz on bilgi alabilirsiniz.</p>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-5 py-9 sm:px-8 sm:py-11">
          <div className="flex justify-center">
            <Image
              src="/images/a. alparslan sancar logo.webp"
              alt="A. Alparslan Sancar logosu"
              width={520}
              height={520}
              className="h-auto w-full max-w-[360px] sm:max-w-[520px]"
            />
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 sm:py-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Hangi Konuda terapi alabilirsiniz?</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 sm:text-base">
            {concerns.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 sm:py-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Ofisimiz</h2>
          <div className="mt-4 flex snap-x gap-3 overflow-x-auto pb-2">
            <Image src="/images/ofis1.webp" alt="Ofis fotoğrafı 1" width={280} height={180} className="h-44 w-72 shrink-0 snap-start rounded-xl border border-slate-200 object-cover" />
            <Image src="/images/ofis2.webp" alt="Ofis fotoğrafı 2" width={280} height={180} className="h-44 w-72 shrink-0 snap-start rounded-xl border border-slate-200 object-cover" />
            <Image src="/images/ofis3.webp" alt="Ofis fotoğrafı 3" width={280} height={180} className="h-44 w-72 shrink-0 snap-start rounded-xl border border-slate-200 object-cover" />
            <Image src="/images/ofis4.webp" alt="Ofis fotoğrafı 4" width={280} height={180} className="h-44 w-72 shrink-0 snap-start rounded-xl border border-slate-200 object-cover" />
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 sm:py-8">
          <Image
            src="/images/psi logo.webp"
            alt="İşletme logosu"
            width={56}
            height={56}
            className="mx-auto mb-3 rounded-lg"
          />
          <h2 className="text-center font-display text-xl font-bold text-brand-navy md:text-2xl">Randevu nasıl oluşturulur?</h2>
          <h3 className="mt-4 text-base font-semibold text-brand-navy">Adım 1: WhatsApp&apos;tan yaz</h3>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">Kısa bilgi bırakın, anında dönüş hedeflenir.</p>
          <h3 className="mt-3 text-base font-semibold text-brand-navy">Adım 2: Saat belirle</h3>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">Yüz yüze veya online seans formatı netleştirilir.</p>
          <h3 className="mt-3 text-base font-semibold text-brand-navy">Adım 3: Görüşmeye başla</h3>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">İlk seansla birlikte kişisel yol haritası oluşturulur.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
          <p className="mt-2 text-xs text-slate-600">Ucretsiz on bilgi alabilirsiniz.</p>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white px-5 py-7 sm:px-8 sm:py-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Hakkımda</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image
                src="/images/portre.webp"
                alt={`${siteConfig.name} ikinci fotoğraf`}
                width={640}
                height={800}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 768px) 70vw, 260px"
              />
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              <p>
                Ben Psk. A. Alparslan SANCAR. Bursa BTSO Sosyal Bilimler lisesi mezunu olarak, 2015 yılında <strong>Hacettepe
                Üniversitesi Psikoloji Bölümü</strong>&apos; nü kazandım. Mezuniyetimden bugüne psikoterapi hizmeti vermekteyim.
              </p>
              <p>
                Şu anda Beşiktaş, İstanbulda kendi ofisimde terapi hizmeti vermekteyim. Bugüne kadar <strong>700&apos; ün üzerinde danışanla çalıştım</strong>{" "}
                ve terapi içerisinde önemli başarılar gösterme fırsatı yakaladım.
              </p>
              <p>
                Terapi yöntemimi, yaratıcılığımı ve zekamı ön plana çıkaracağını düşündüğüm <strong>Birey Odaklı Psikoterapi</strong>{" "}
                (Danışan Merkezli Psikoterapi) tekniğine evrilttim. Bununla birlikte <strong>BDT</strong> (Bilişsel Davranışçı Terapi) ve{" "}
                <strong>Psikodinamik</strong> Yaklaşımlı Terapi tekniklerini de kullanmaktayım.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <TestimonialsMarquee />
        </div>

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
              Seans ücreti 3000 TL&apos;dir. Süreç boyunca şeffaf ve sabit fiyat uygulanır.
            </p>
          </details>
          <p className="mt-3 text-xs text-slate-600">Ön bilgi almak için WhatsApp&apos;tan yazabilirsiniz.</p>
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
          <p className="mt-2 text-xs text-slate-600">Ucretsiz on bilgi alabilirsiniz.</p>
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

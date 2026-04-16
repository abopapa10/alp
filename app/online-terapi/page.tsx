import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ContactSection } from "@/components/sections/ContactSection";
import { OnlineTerapiEnrichedSection } from "@/components/sections/OnlineTerapiEnrichedSection";
import { generateOnlineTerapiMetadata } from "@/lib/service-metadata";
import { siteConfig } from "@/lib/site";

const trustPoints = [
  "700+ danışan tecrübesi",
  "Hacettepe Üniversitesi Psikoloji Bölümü",
  "Tümüyle bilimsel yaklaşım",
  "Samimi, dürüst ve güvenli hizmet",
] as const;

const quickBenefits = [
  "İlk görüşmede net süreç ve seans planı",
  "Online ve yüz yüze arasında esnek geçiş",
  "Mahremiyet ve etik çerçevede güvenli görüşme",
  "Düzenli takip ile sürdürülebilir ilerleme",
] as const;

export async function generateMetadata(): Promise<Metadata> {
  return generateOnlineTerapiMetadata();
}

export default function OnlineTerapiPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Online Terapi" },
        ]}
        path="/online-terapi"
      />
      <article className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-4 md:py-12">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Online Terapi" },
            ]}
          />

          <header className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy">Hızlı Randevu</p>
            <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-navy md:text-4xl">
              Online Psikolog Desteğine Hemen Başlayın
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              Coğrafi engel olmadan düzenli psikoterapi desteği için online görüşme planlayabilir, ihtiyaç halinde yüz yüze
              seansa geçebilirsiniz.
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
                id="ads-whatsapp-button-online-hero"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white hover:brightness-95"
              >
                WhatsApp ile İletişime Geç
              </a>
              <a
                id="ads-call-button-online-hero"
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
                src="/images/portre.webp"
                alt={`${siteConfig.name} online terapi`}
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

          <section className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/90 to-white p-6 shadow-md md:p-8">
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
              Online terapi randevunuzu şimdi planlayın
            </h2>
            <p className="mt-2 max-w-2xl text-slate-800">
              İlk görüşme ve randevu için telefon veya WhatsApp üzerinden kısa bir mesaj yeterli; size en uygun zamanı birlikte belirleyelim.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                id="ads-whatsapp-button-online-second-cta"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white hover:brightness-95"
              >
                WhatsApp&apos;tan Yazın
              </a>
              <a
                id="ads-call-button-online-second-cta"
                href={`tel:${siteConfig.phoneTel}`}
                data-ads-conversion="contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy px-5 text-sm font-semibold text-brand-navy hover:bg-brand-sky"
              >
                Hemen Ara
              </a>
            </div>
          </section>

          <section className="mt-10 space-y-8" aria-label="Online terapi bilgileri">
            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
                Online Terapi ve Online Psikolog Randevusu
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
                Online psikoterapi ve online psikolojik danışmanlık ile coğrafi engel olmadan düzenli seans. Görüntülü
                görüşme için stabil internet, gizli ve sakin bir ortam ve randevu disiplini öneriyorum.
              </p>
            </section>
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Online psikoterapi merkezi kalitesinde süreç
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Online psikolog tavsiye arayanlar için ilk görüşmede formatı netleştiririz: seans süresi, gizlilik ve
            acil durum planlaması. Online terapi randevusu oluşturmak için telefon veya WhatsApp hattımızı
            kullanabilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Kimler için uygun?</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Seyahat, iş yoğunluğu veya İstanbul dışında yaşayan danışanlar için online psikoterapi pratik bir
            çözümdür. Yüz yüze terapiye dönüş her zaman mümkündür; ana sayfamızdan yüz yüze hizmetler hakkında
            bilgi alabilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Güvenli ve mahrem ortam
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Görüntülü görüşmelerde güvenilir platformlar tercih edilmeli, ortamın dinlenmeye kapalı olduğundan emin
            olunmalıdır. Seans içeriği mesleki gizlilik ve etik kurallar çerçevesinde ele alınır; ilk görüşmede
            format ve acil durum planlaması birlikte netleştirilir.
          </p>
        </section>
      </section>
          <OnlineTerapiEnrichedSection />
        </div>
      </article>
      <ContactSection />
    </>
  );
}

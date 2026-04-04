import type { ReactNode } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { ContactMapEmbed } from "@/components/sections/ContactMapEmbed";
import { siteConfig } from "@/lib/site";

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 md:text-xs">
      {children}
    </span>
  );
}

export function ContactSection() {
  return (
    <section
      id="iletisim"
      className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/40 py-10 md:border-0 md:bg-white md:bg-none md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-4">
        <h2
          id="contact-heading"
          className="font-display text-[1.375rem] font-bold leading-tight text-brand-navy md:text-3xl"
        >
          İletişim ve Lokasyon
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-800 md:mt-3 md:text-base">
          Beşiktaş Sinanpaşa bölgesindeki klinik için haritadan yön alabilir veya doğrudan arayarak randevu
          oluşturabilirsiniz.
        </p>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div className="order-2 space-y-3 lg:order-1">
            <ContactMapEmbed />
            <a
              href={siteConfig.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-brand-navy shadow-sm transition-colors hover:border-slate-300 hover:bg-brand-sky/40"
            >
              <ExternalLink className="size-4 shrink-0 text-slate-700" strokeWidth={2} aria-hidden />
              Haritada aç
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none">
              <div className="flex items-start gap-3 border-b border-slate-100 pb-5 md:border-0 md:pb-0">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/80 text-brand-navy">
                  <MapPin className="size-4" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <Label>Klinik adresi</Label>
                  <p className="mt-1.5 text-base font-semibold leading-snug text-brand-navy md:text-xl lg:text-2xl">
                    {siteConfig.address.street}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-800 md:text-base">
                    {siteConfig.address.region}, {siteConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-b border-slate-100 pb-5 md:mt-8 md:border-0 md:pb-0">
                <Label>Telefon</Label>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="mt-2 block text-xl font-bold tracking-tight text-brand-navy hover:underline md:text-2xl lg:text-3xl"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="mt-5 space-y-3 md:mt-8">
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent-hover md:min-h-12 md:rounded-lg md:text-base"
                >
                  <Navigation className="size-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
                  Yol tarifi al
                </a>
                <div className="pt-1">
                  <CTAGroup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

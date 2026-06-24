import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { englishWhatsappUrl } from "@/lib/english-psychologist-landing";
import { siteConfig } from "@/lib/site";

const ContactMapEmbed = dynamic(
  () =>
    import("@/components/sections/ContactMapEmbed").then((mod) => ({
      default: mod.ContactMapEmbed,
    })),
  {
    loading: () => (
      <div
        className="flex aspect-[16/10] min-h-[200px] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 text-sm text-slate-700 shadow-sm sm:min-h-[220px] md:aspect-[4/3] md:min-h-[280px] md:rounded-2xl lg:aspect-video lg:min-h-[320px]"
        aria-hidden
      >
        Loading map…
      </div>
    ),
  },
);

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 md:text-xs">
      {children}
    </span>
  );
}

export function EnglishContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/40 py-10 md:border-0 md:bg-white md:bg-none md:py-20"
      aria-labelledby="english-contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-4">
        <h2
          id="english-contact-heading"
          className="font-display text-[1.375rem] font-bold leading-tight text-brand-navy md:text-3xl"
        >
          Contact & Location
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-800 md:mt-3 md:text-base">
          Find directions to the Beşiktaş clinic on Google Maps, or contact us directly to book an in-person or
          online appointment.
        </p>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div className="order-2 space-y-3 lg:order-1">
            <ContactMapEmbed />
            <a
              href={siteConfig.googleMapsPlaceUrl}
              data-ads-location-conversion="true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-brand-navy shadow-sm transition-colors hover:border-slate-300 hover:bg-brand-sky/40"
            >
              <ExternalLink className="size-4 shrink-0 text-slate-700" strokeWidth={2} aria-hidden />
              Open in Google Maps
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none">
              <div className="flex items-start gap-3 border-b border-slate-100 pb-5 md:border-0 md:pb-0">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-sky/80 text-brand-navy">
                  <MapPin className="size-4" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <Label>Clinic address</Label>
                  <p className="mt-1.5 text-base font-semibold leading-snug text-brand-navy md:text-xl lg:text-2xl">
                    {siteConfig.address.street}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-800 md:text-base">
                    {siteConfig.address.region}, {siteConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-b border-slate-100 pb-5 md:mt-8 md:border-0 md:pb-0">
                <Label>Phone</Label>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  data-ads-conversion="contact"
                  className="mt-2 block text-xl font-bold tracking-tight text-brand-navy hover:underline md:text-2xl lg:text-3xl"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="mt-5 space-y-3 md:mt-8">
                <a
                  href={siteConfig.directionsUrl}
                  data-ads-location-conversion="true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent-hover md:min-h-12 md:rounded-lg md:text-base"
                >
                  <Navigation className="size-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
                  Get directions
                </a>
                <div className="flex flex-row flex-nowrap items-stretch gap-2 pt-1 md:flex-wrap md:gap-3">
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    data-ads-conversion="contact"
                    className="inline-flex min-w-0 flex-1 basis-0 items-center justify-center gap-1.5 rounded-lg border-2 border-brand-navy bg-white px-2 py-3 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-sky sm:gap-2 sm:px-3 sm:text-sm md:min-h-12 md:flex-initial md:basis-auto md:px-5 md:text-base"
                  >
                    <Phone className="size-4 shrink-0" aria-hidden />
                    Call now
                  </a>
                  <a
                    href={englishWhatsappUrl}
                    data-ads-conversion="contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-0 flex-1 basis-0 items-center justify-center gap-1.5 rounded-lg bg-brand-accent px-2 py-3 text-xs font-bold text-white shadow-md transition-colors hover:bg-brand-accent-hover sm:gap-2 sm:px-3 sm:text-sm md:min-h-12 md:flex-initial md:basis-auto md:px-5 md:text-base"
                  >
                    <WhatsAppIcon className="size-4 shrink-0" />
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

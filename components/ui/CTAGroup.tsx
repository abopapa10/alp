import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Props = { className?: string; dense?: boolean };

export function CTAGroup({ className = "", dense }: Props) {
  const padMobile = dense
    ? "min-h-11 px-2 py-2.5 text-xs sm:px-3 sm:text-sm"
    : "min-h-11 px-2 py-3 text-xs sm:px-3 sm:text-sm";
  const padDesktop = dense
    ? "md:min-h-12 md:px-4 md:py-2.5 md:text-sm"
    : "md:min-h-12 md:px-5 md:py-3.5 md:text-base";

  return (
    <div
      className={`flex flex-row flex-nowrap items-stretch gap-2 md:flex-wrap md:gap-3 ${className}`}
    >
      <a
        href={`tel:${siteConfig.phoneTel}`}
        data-ads-conversion="contact"
        className={`inline-flex min-w-0 flex-1 basis-0 items-center justify-center gap-1.5 rounded-lg border-2 border-brand-navy bg-white font-semibold text-brand-navy transition-colors hover:bg-brand-sky sm:gap-2 ${padMobile} ${padDesktop} md:flex-initial md:basis-auto`}
      >
        <Phone className="size-4 shrink-0" aria-hidden />
        Hemen Ara
      </a>
      <a
        href={siteConfig.whatsappUrl}
        data-ads-conversion="contact"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-w-0 flex-1 basis-0 items-center justify-center gap-1.5 rounded-lg bg-brand-accent font-bold text-white shadow-md transition-colors hover:bg-brand-accent-hover sm:gap-2 ${padMobile} ${padDesktop} md:flex-initial md:basis-auto`}
      >
        Randevu Al
      </a>
    </div>
  );
}

"use client";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

/** Yalnızca mobilde sabit alt CTA — dokunma hedefleri ≥44px. */
export function MobileStickyCTA() {
  const pathname = usePathname();

  if (pathname === "/psikolog-randevu") {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[45] flex gap-2 border-t border-slate-200/90 bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Hızlı iletişim"
    >
      <a
        href={`tel:${siteConfig.phoneTel}`}
        data-ads-conversion="contact"
        className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-brand-navy bg-white text-sm font-semibold text-brand-navy active:bg-brand-sky"
      >
        <Phone className="size-5 shrink-0" aria-hidden />
        <span>Hemen Ara</span>
      </a>
      <a
        href={siteConfig.whatsappUrl}
        data-ads-conversion="contact"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-bold text-white active:brightness-95"
      >
        <WhatsAppIcon className="size-5 shrink-0" />
        <span>Randevu Al</span>
      </a>
    </div>
  );
}

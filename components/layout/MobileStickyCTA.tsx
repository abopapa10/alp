"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

/** Yalnızca mobilde sabit alt CTA — dokunma hedefleri ≥44px. */
export function MobileStickyCTA() {
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
        className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-accent text-sm font-bold text-white active:bg-brand-accent-hover"
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden />
        <span>Randevu Al</span>
      </a>
    </div>
  );
}

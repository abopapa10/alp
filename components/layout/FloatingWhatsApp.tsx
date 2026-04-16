"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  if (pathname === "/psikolog-randevu") {
    return null;
  }

  return (
    <a
      href={siteConfig.whatsappUrl}
      data-ads-conversion="contact"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent md:flex"
      aria-label="WhatsApp üzerinden yazın"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent md:flex"
      aria-label="WhatsApp üzerinden yazın"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}

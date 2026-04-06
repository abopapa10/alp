import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { LocalBusinessJsonLd, PsychologistJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/**
 * Türkçe: latin + latin-ext. display: optional — CLS azaltma (yedek font metrikleri).
 */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "optional",
  weight: ["400", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const defaultKeywords = [
  "İstanbul psikolog",
  "Beşiktaş psikolog",
  "psikoterapi",
  "psikolojik danışmanlık merkezi",
  "terapi randevusu",
];

export const viewport: Viewport = {
  themeColor: "#0f2744",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Beşiktaş Psikolog & Online Terapi`,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Beşiktaş Psikolog`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head />
      <body className="min-h-screen bg-white font-sans antialiased text-slate-900">
        <Script id="google-ads-gtag-lazy" strategy="afterInteractive">
          {`(function () {
  if (window.__adsBootstrapped) return;
  window.__adsBootstrapped = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
  window.gtag('js', new Date());

  var loaded = false;
  function loadAdsScript() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17606132701';
    s.onload = function () {
      window.gtag('config', 'AW-17606132701');
    };
    document.head.appendChild(s);
  }

  function onInteraction() {
    loadAdsScript();
    window.removeEventListener('pointerdown', onInteraction, true);
    window.removeEventListener('touchstart', onInteraction, true);
    window.removeEventListener('keydown', onInteraction, true);
    window.removeEventListener('scroll', onInteraction, true);
  }

  window.addEventListener('pointerdown', onInteraction, true);
  window.addEventListener('touchstart', onInteraction, true);
  window.addEventListener('keydown', onInteraction, true);
  window.addEventListener('scroll', onInteraction, true);

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAdsScript, { timeout: 4000 });
  } else {
    setTimeout(loadAdsScript, 4000);
  }

  document.addEventListener('click', function (event) {
    var target = event.target && event.target.closest
      ? event.target.closest('[data-ads-conversion="contact"]')
      : null;
    if (!target || typeof window.gtag !== 'function') return;
    loadAdsScript();
    window.gtag('event', 'conversion', { send_to: 'AW-17606132701/uUm1CKncgpccEN2HoctB' });
  });
})();`}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <LocalBusinessJsonLd />
        <PsychologistJsonLd />
        <Header />
        <main
          id="main-content"
          className="pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0"
        >
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

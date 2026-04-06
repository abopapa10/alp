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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17606132701"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('set', 'allow_google_signals', false);
gtag('set', 'allow_ad_personalization_signals', false);
gtag('config', 'AW-17606132701');`}
        </Script>
        <Script id="google-ads-conversion-clicks" strategy="afterInteractive">
          {`document.addEventListener('click', function (event) {
  var target = event.target && event.target.closest
    ? event.target.closest('[data-ads-conversion="contact"]')
    : null;
  if (!target || typeof gtag !== 'function') return;
  gtag('event', 'conversion', { send_to: 'AW-17606132701/uUm1CKncgpccEN2HoctB' });
});`}
        </Script>
        <Script id="google-ads-location-conversion" strategy="afterInteractive">
          {`function gtag_report_location_conversion(url, target) {
  var redirected = false;
  var callback = function () {
    if (redirected) return;
    redirected = true;
    if (typeof url !== 'undefined' && url) {
      if (target === '_blank') {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
    }
  };

  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: 'AW-17606132701/wkfmCLeAkpccEN2HoctB',
      event_callback: callback,
      event_timeout: 1200
    });
    setTimeout(callback, 1300);
  } else {
    callback();
  }

  return false;
}

window.gtag_report_location_conversion = gtag_report_location_conversion;

document.addEventListener('click', function (event) {
  var link = event.target && event.target.closest
    ? event.target.closest('[data-ads-location-conversion="true"]')
    : null;
  if (!link) return;

  event.preventDefault();
  var href = link.getAttribute('href') || undefined;
  var target = link.getAttribute('target') || undefined;
  gtag_report_location_conversion(href, target);
});`}
        </Script>
        <Script id="google-ads-review-reading-conversion" strategy="afterInteractive">
          {`function gtag_report_conversion(url, target) {
  var redirected = false;
  var callback = function () {
    if (redirected) return;
    redirected = true;
    if (typeof url !== 'undefined' && url) {
      if (target === '_blank') {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
    }
  };

  if (typeof gtag !== 'function') {
    if (url) callback();
    return false;
  }

  gtag('event', 'conversion', {
    send_to: 'AW-17606132701/Pz3eCObm_ZYcEN2HoctB',
    event_callback: url ? callback : undefined,
    event_timeout: 1200
  });
  if (url) {
    setTimeout(callback, 1300);
  }

  return false;
}

window.gtag_report_conversion = gtag_report_conversion;

document.addEventListener('click', function (event) {
  var el = event.target && event.target.closest
    ? event.target.closest('[data-ads-review-conversion="true"]')
    : null;
  if (!el || typeof gtag !== 'function') return;

  var tag = el.tagName && el.tagName.toLowerCase();
  if (tag === 'a') {
    event.preventDefault();
    var href = el.getAttribute('href') || undefined;
    var target = el.getAttribute('target') || undefined;
    gtag_report_conversion(href, target);
    return;
  }

  if (el.getAttribute('aria-expanded') === 'true') {
    return;
  }

  gtag('event', 'conversion', {
    send_to: 'AW-17606132701/Pz3eCObm_ZYcEN2HoctB',
    event_timeout: 1200
  });
}, true);`}
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

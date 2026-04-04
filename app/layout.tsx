import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { LocalBusinessJsonLd, PsychologistJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/**
 * Türkçe: latin + latin-ext. Yalnızca kullanılan ağırlıklar (indirme boyutu).
 * Aynı kökene preconnect gerekmez (gereksiz kritik yol).
 */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
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
      <head>
        <link rel="preload" href="/images/profil.webp" as="image" type="image/webp" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased text-slate-900">
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

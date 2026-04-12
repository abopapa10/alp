import type { Metadata } from "next";
import { onlineTerapiMeta } from "@/lib/services";
import { servicePages } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

export function servicePageMetadata(slug: keyof typeof servicePages): Metadata {
  const data = servicePages[slug];
  const url = `${siteConfig.url}/hizmetler/${slug}`;
  const ogTitle = `${data.metaTitle} | ${siteConfig.name}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords.split(",").map((k) => k.trim()),
    alternates: { canonical: `/hizmetler/${slug}` },
    openGraph: {
      title: ogTitle,
      description: data.metaDescription,
      url,
    },
  };
}

/** Hizmet sayfaları — `generateMetadata` ile kullanım (önbellek / açık API) */
export async function generateServicePageMetadata(
  slug: keyof typeof servicePages,
): Promise<Metadata> {
  return servicePageMetadata(slug);
}

/** Online terapi sayfası */
export async function generateOnlineTerapiMetadata(): Promise<Metadata> {
  const url = `${siteConfig.url}/online-terapi`;
  const ogTitle = `${onlineTerapiMeta.title} | ${siteConfig.name}`;
  return {
    title: onlineTerapiMeta.title,
    description: onlineTerapiMeta.description,
    keywords: onlineTerapiMeta.keywords.split(",").map((k) => k.trim()),
    alternates: { canonical: "/online-terapi" },
    openGraph: {
      title: ogTitle,
      description: onlineTerapiMeta.description,
      url,
    },
  };
}

import type { Metadata } from "next";
import { servicePages } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

export function servicePageMetadata(slug: keyof typeof servicePages): Metadata {
  const data = servicePages[slug];
  const url = `${siteConfig.url}/hizmetler/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords.split(",").map((k) => k.trim()),
    alternates: { canonical: `/hizmetler/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
    },
  };
}

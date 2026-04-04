import { siteConfig } from "@/lib/site";
import type { Crumb } from "@/components/ui/Breadcrumb";

type Props = { items: Crumb[]; path: string };

/** BreadcrumbList JSON-LD — `path` güncel sayfanın pathname’i (örn. `/hizmetler/cift-evlilik-terapisi`). */
export function BreadcrumbJsonLd({ items, path }: Props) {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const itemListElement = items.map((crumb, i) => {
    const itemUrl =
      crumb.href != null
        ? `${base}${crumb.href.startsWith("/") ? crumb.href : `/${crumb.href}`}`
        : `${base}${normalizedPath}`;

    return {
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: itemUrl,
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

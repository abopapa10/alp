import { siteConfig } from "./site";

const baseUrl = siteConfig.url.replace(/\/$/, "");

/** Yerel işletme şeması — yalnızca ana sayfada basılmalı (diğer URL’lerde tekrarı doğrulayıcı hatası üretir). */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: [`${baseUrl}/images/profil.webp`],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "İstanbul Avrupa Yakası",
    },
    sameAs: [siteConfig.googleBusinessProfileUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PsychologistJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "@id": `${baseUrl}/#psychologist`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    image: `${baseUrl}/images/profil.webp`,
    jobTitle: "Beşiktaş Psikolog · Online Terapi",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Hacettepe Üniversitesi",
    },
    worksFor: { "@id": `${baseUrl}/#business` },
    telephone: siteConfig.phoneTel,
    sameAs: [siteConfig.googleBusinessProfileUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

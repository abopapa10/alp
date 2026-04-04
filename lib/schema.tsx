import { siteConfig } from "./site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    "@id": `${siteConfig.url}/#business`,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    medicalSpecialty: "Psychotherapy",
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
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    jobTitle: "Beşiktaş Psikolog · Online Terapi",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Hacettepe Üniversitesi",
    },
    worksFor: { "@id": `${siteConfig.url}/#business` },
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
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

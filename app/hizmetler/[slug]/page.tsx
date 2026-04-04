import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLayout } from "@/components/templates/ServiceLayout";
import { services } from "@/lib/services";
import { servicePages } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  const service = services.find((s) => s.slug === slug);
  const label = service?.title ?? data.h1;

  return (
    <ServiceLayout
      title={data.h1}
      description={data.intro}
      canonicalPath={`/hizmetler/${slug}`}
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hizmetler", href: "/#hizmetler" },
        { label: label },
      ]}
    >
      <div>
        {data.sections.map((s) => (
          <section key={s.heading} className="mt-8 first:mt-0">
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
              {s.heading}
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </ServiceLayout>
  );
}

import { notFound } from "next/navigation";
import { ServiceLayout } from "@/components/templates/ServiceLayout";
import { services } from "@/lib/services";
import { servicePages, type ServicePageData } from "@/lib/service-pages";

type Props = { slug: keyof typeof servicePages };

export function ServicePageView({ slug }: Props) {
  const data: ServicePageData | undefined = servicePages[slug];
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

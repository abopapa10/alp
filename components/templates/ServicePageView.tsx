import { notFound } from "next/navigation";
import { ServiceLayout } from "@/components/templates/ServiceLayout";
import { ServiceTheoreticalAccordion } from "@/components/sections/ServiceTheoreticalAccordion";
import { ServiceSeoExtensions, type ServiceSeoSlug } from "@/components/templates/ServiceSeoExtensions";
import { ServiceTitleIcon } from "@/components/ui/ServiceTitleIcon";
import { services } from "@/lib/services";
import { servicePages, type ServicePageData } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

type Props = { slug: keyof typeof servicePages };

export function ServicePageView({ slug }: Props) {
  const data: ServicePageData | undefined = servicePages[slug];
  if (!data) notFound();

  const service = services.find((s) => s.slug === slug);
  const label = service?.title ?? data.h1;

  return (
    <ServiceLayout
      title={data.h1}
      titleIcon={<ServiceTitleIcon name={data.icon} />}
      description={data.intro}
      portraitAlt={`${data.h1} — Beşiktaş psikolog ve online terapi | ${siteConfig.name}`}
      canonicalPath={`/hizmetler/${slug}`}
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hizmetler", href: "/#hizmetler" },
        { label: label },
      ]}
    >
      <section
        className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 md:p-7"
        aria-labelledby={`scientific-${slug}`}
      >
        <h2 id={`scientific-${slug}`} className="sr-only">
          Bilimsel ve kuramsal çerçeve
        </h2>
        <p className="text-base leading-[1.75] text-slate-800 md:text-[17px] md:leading-[1.8]">
          {data.scientificRationale}
        </p>
      </section>

      <section className="mt-10 space-y-9" aria-label="Hizmet detayları">
        {data.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">{s.heading}</h2>
            <p className="mt-3 text-base leading-[1.75] text-slate-700 md:leading-[1.8]">{s.body}</p>
          </section>
        ))}
      </section>

      <ServiceTheoreticalAccordion items={data.theoreticalFoundations} instanceKey={slug} />

      <ServiceSeoExtensions slug={slug as ServiceSeoSlug} />
    </ServiceLayout>
  );
}

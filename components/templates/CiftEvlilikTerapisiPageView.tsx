import { notFound } from "next/navigation";
import { CiftEvlilikExtendedSections } from "@/components/couple-therapy/CiftEvlilikExtendedSections";
import { ServiceLayout } from "@/components/templates/ServiceLayout";
import { ServiceTheoreticalAccordion } from "@/components/sections/ServiceTheoreticalAccordion";
import { ServiceSeoExtensions } from "@/components/templates/ServiceSeoExtensions";
import { ServiceTitleIcon } from "@/components/ui/ServiceTitleIcon";
import { services } from "@/lib/services";
import { servicePages, type ServicePageData } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";

const SLUG = "cift-evlilik-terapisi" as const;

export function CiftEvlilikTerapisiPageView() {
  const data: ServicePageData | undefined = servicePages[SLUG];
  if (!data) notFound();

  const service = services.find((s) => s.slug === SLUG);
  const label = service?.title ?? data.h1;

  return (
    <ServiceLayout
      title={data.h1}
      titleIcon={<ServiceTitleIcon name={data.icon} />}
      description={data.intro}
      portraitAlt={`${data.h1} — Beşiktaş psikolog ve online terapi | ${siteConfig.name}`}
      canonicalPath={`/hizmetler/${SLUG}`}
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hizmetler", href: "/#hizmetler" },
        { label: label },
      ]}
    >
      <CiftEvlilikExtendedSections />

      <section
        className="mt-10 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 md:p-7"
        aria-labelledby={`scientific-${SLUG}`}
      >
        <h2 id={`scientific-${SLUG}`} className="sr-only">
          Bilimsel ve kuramsal çerçeve
        </h2>
        <p className="text-lg leading-relaxed text-slate-800 md:leading-[1.8]">{data.scientificRationale}</p>
      </section>

      <section className="mt-10 space-y-9" aria-label="Hizmet detayları">
        {data.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">{s.heading}</h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-700">{s.body}</p>
          </section>
        ))}
      </section>

      <ServiceTheoreticalAccordion items={data.theoreticalFoundations} instanceKey={SLUG} />

      <ServiceSeoExtensions slug={SLUG} />
    </ServiceLayout>
  );
}

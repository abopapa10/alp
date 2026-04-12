import { EnrichedTheoryAccordions } from "@/components/content/EnrichedTheoryAccordions";
import { ScienceQuote } from "@/components/content/ScienceQuote";
import { TherapySchoolTabs } from "@/components/content/TherapySchoolTabs";
import { serviceEnrichedBlocks } from "@/lib/service-enriched-blocks";
import { serviceSeoDeep } from "@/lib/service-seo-deep";

type ServiceSeoSlug = keyof typeof serviceSeoDeep;

export function ServiceEnrichedBlocks({ slug }: { slug: ServiceSeoSlug }) {
  const block = serviceEnrichedBlocks[slug];
  if (!block) return null;

  return (
    <>
      <ScienceQuote quote={block.quote.text} attribution={block.quote.attribution} />
      <TherapySchoolTabs
        sectionLabel="Terapi ekollerinin bakış açıları"
        tabs={block.tabs}
        className="mt-10"
      />
      <EnrichedTheoryAccordions
        headingId={block.accordions.headingId}
        heading={block.accordions.heading}
        description={block.accordions.description}
        items={block.accordions.items}
        className="mt-12"
      />
    </>
  );
}

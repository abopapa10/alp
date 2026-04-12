import { EnrichedTheoryAccordions } from "@/components/content/EnrichedTheoryAccordions";
import { ScienceQuote } from "@/components/content/ScienceQuote";
import { TherapySchoolTabs } from "@/components/content/TherapySchoolTabs";
import { articleEnrichedBlocks, type ArticleEnrichmentId } from "@/lib/article-enriched-content";

type Props = {
  pageId: ArticleEnrichmentId;
  className?: string;
};

/** Bilgi sayfalarına kuramsal derinlik: alıntı + sekmeler + akordeon — metin/kod oranını yükseltir */
export function ArticlePsychologyEnrichment({ pageId, className = "" }: Props) {
  const block = articleEnrichedBlocks[pageId];
  if (!block) return null;

  return (
    <section
      className={`my-12 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 md:p-8 ${className}`}
      aria-labelledby={`enriched-${pageId}-h`}
    >
      <h2
        id={`enriched-${pageId}-h`}
        className="font-display text-xl font-bold text-brand-navy md:text-2xl"
      >
        Kuramsal çerçeve ve terapi ekolleri
      </h2>
      <p className="mt-2 text-base leading-relaxed text-slate-600 md:text-lg">
        Aşağıdaki bloklar akademik özet niteliğindedir; tanı veya tedavi önerisi değildir.
      </p>
      <ScienceQuote quote={block.quote.text} attribution={block.quote.attribution} />
      <TherapySchoolTabs
        sectionLabel="Ekollerin yaklaşımı"
        tabs={block.tabs}
        className="mt-2"
      />
      <EnrichedTheoryAccordions
        headingId={block.accordions.headingId}
        heading={block.accordions.heading}
        description={block.accordions.description}
        items={block.accordions.items}
        className="mt-10"
      />
    </section>
  );
}

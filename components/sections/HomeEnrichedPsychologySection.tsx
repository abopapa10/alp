import { EnrichedTheoryAccordions } from "@/components/content/EnrichedTheoryAccordions";
import { ScienceQuote } from "@/components/content/ScienceQuote";
import { TherapySchoolTabs } from "@/components/content/TherapySchoolTabs";
import { homeEnrichedAccordions, homeEnrichedQuote, homeEnrichedTabs } from "@/lib/home-enriched-content";

export function HomeEnrichedPsychologySection() {
  return (
    <article
      className="border-t border-slate-200 bg-slate-50/40 py-14 md:py-20"
      aria-labelledby="home-enriched-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <h2
          id="home-enriched-heading"
          className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
        >
          Psikoterapi yaklaşımları ve bilimsel çerçeve
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          Aşağıdaki bölümlerde kanıta dayalı çizgiyi, farklı terapi ekollerinin bakışını ve sık merak edilen kuramsal
          başlıkları bilimsel ve kanıtlanmış temeller üzerinden özetliyorum.
        </p>
        <ScienceQuote quote={homeEnrichedQuote.text} attribution={homeEnrichedQuote.attribution} />
        <TherapySchoolTabs sectionLabel="Ekollerin odak noktaları" tabs={homeEnrichedTabs} className="mt-6" />
        <EnrichedTheoryAccordions
          headingId={homeEnrichedAccordions.headingId}
          heading={homeEnrichedAccordions.heading}
          description={homeEnrichedAccordions.description}
          items={homeEnrichedAccordions.items}
          className="mt-12"
          variant="expanded"
          expandedCardClassName="border-amber-200/90 bg-amber-50"
        />
      </div>
    </article>
  );
}

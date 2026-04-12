import { EnrichedTheoryAccordions } from "@/components/content/EnrichedTheoryAccordions";
import { ScienceQuote } from "@/components/content/ScienceQuote";
import { TherapySchoolTabs } from "@/components/content/TherapySchoolTabs";
import {
  onlineTerapiAccordions,
  onlineTerapiQuote,
  onlineTerapiTabs,
} from "@/lib/online-terapi-enriched";

export function OnlineTerapiEnrichedSection() {
  return (
    <article className="mt-12 border-t border-slate-200 pt-10" aria-labelledby="online-enriched-h">
      <h2 id="online-enriched-h" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
        Online terapinin bilimsel ve etik çerçevesi
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
        Uzun akademik metinleri sekmeler ve açılır kutularla sundum; böylece hem metin hacmi artar hem de sayfa okunabilir
        kalır.
      </p>
      <ScienceQuote quote={onlineTerapiQuote.text} attribution={onlineTerapiQuote.attribution} />
      <TherapySchoolTabs sectionLabel="Format ve ekol uyumu" tabs={onlineTerapiTabs} className="mt-4" />
      <EnrichedTheoryAccordions
        headingId={onlineTerapiAccordions.headingId}
        heading={onlineTerapiAccordions.heading}
        items={onlineTerapiAccordions.items}
        className="mt-10"
      />
    </article>
  );
}

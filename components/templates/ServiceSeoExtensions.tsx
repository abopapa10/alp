import { ContentCallout } from "@/components/content/ContentCallout";
import { FiveReflectionQuestions } from "@/components/content/FiveReflectionQuestions";
import { ServiceEnrichedBlocks } from "@/components/templates/ServiceEnrichedBlocks";
import { ServiceFormatComparison } from "@/components/templates/ServiceFormatComparison";
import { buildServiceSeoFaqJsonLd, serviceSeoFaqs } from "@/lib/service-seo-faqs";
import { serviceSeoDeep } from "@/lib/service-seo-deep";

export type ServiceSeoSlug = keyof typeof serviceSeoDeep;

export function ServiceSeoExtensions({ slug }: { slug: ServiceSeoSlug }) {
  const deep = serviceSeoDeep[slug];
  const faqs = serviceSeoFaqs[slug];
  const faqJsonLd = buildServiceSeoFaqJsonLd(slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <ServiceEnrichedBlocks slug={slug} />

      <ServiceFormatComparison />

      <section className="mt-12" aria-labelledby={`literature-${slug}`}>
        <details className="group rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm open:shadow-md md:px-5">
          <summary
            id={`literature-${slug}`}
            className="flex min-h-12 cursor-pointer list-none items-center py-3 font-display text-xl font-bold text-brand-navy marker:hidden md:text-2xl [&::-webkit-details-marker]:hidden"
          >
            {deep.literature.heading}
          </summary>
          <div className="max-w-3xl space-y-4 pb-5 text-base leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">
            {deep.literature.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      </section>

      <div className="mt-10">
        <ContentCallout title={deep.scenario.title} variant="accent">
          {deep.scenario.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ContentCallout>
      </div>

      <section className="mt-10" aria-labelledby={`selfhelp-${slug}`}>
        <h2
          id={`selfhelp-${slug}`}
          className="font-display text-xl font-bold text-brand-navy md:text-2xl"
        >
          Psiko-eğitim: {deep.selfHelp.title}
        </h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-700 md:text-[17px]">
          {deep.selfHelp.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <FiveReflectionQuestions questions={deep.reflectionQuestions} />

      <section className="mt-12" aria-labelledby={`faq-seo-${slug}`}>
        <h2 id={`faq-seo-${slug}`} className="font-display text-xl font-bold text-brand-navy md:text-2xl">
          Sıkça sorulan sorular
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 text-left text-base font-semibold text-brand-navy md:text-lg marker:hidden [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="pb-4 text-base leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

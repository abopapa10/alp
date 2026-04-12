type Item = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Props = {
  /** Sayfada benzersiz olmalı (örn. `ergen-derinlik`) */
  headingId: string;
  heading: string;
  description?: string;
  items: Item[];
  className?: string;
  /** `expanded`: kartlar her zaman açık, tıklanmaz (ör. ana sayfa teorik blok) */
  variant?: "accordion" | "expanded";
  /** `variant="expanded"` iken kart kapsayıcı sınıfları */
  expandedCardClassName?: string;
};

function ItemBody({ item }: { item: Item }) {
  return (
    <div className="space-y-3 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
      {item.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {item.bullets?.length ? (
        <ul className="list-disc space-y-2 pl-5">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/** Teorik derinlik — accordion (`details`) veya daima açık kartlar */
export function EnrichedTheoryAccordions({
  headingId,
  heading,
  description,
  items,
  className = "",
  variant = "accordion",
  expandedCardClassName = "border-amber-200/90 bg-amber-50",
}: Props) {
  if (!items.length) return null;

  const cardBase =
    "rounded-xl border px-5 py-4 shadow-sm ring-1 ring-amber-100/80";

  return (
    <section className={className} aria-labelledby={headingId}>
      <h2 id={headingId} className="font-display text-xl font-bold text-brand-navy md:text-2xl">
        {heading}
      </h2>
      {description ? (
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>
      ) : null}

      {variant === "expanded" ? (
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <article key={item.title} className={`${cardBase} ${expandedCardClassName}`}>
              <h3 className="font-display text-lg font-bold text-brand-navy md:text-xl">{item.title}</h3>
              <div className="mt-3">
                <ItemBody item={item} />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <details
              key={item.title}
              className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 text-left text-base font-semibold text-brand-navy marker:hidden md:text-lg [&::-webkit-details-marker]:hidden">
                {item.title}
              </summary>
              <div className="pb-4">
                <ItemBody item={item} />
              </div>
            </details>
          ))}
        </div>
      )}
    </section>
  );
}

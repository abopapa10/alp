type Props = {
  items: string[];
  instanceKey: string;
};

/** Hizmet sayfası sonunda E-E-A-T için kuramsal çerçeve özeti (native details, ek JS yok). */
export function ServiceTheoreticalAccordion({ items, instanceKey }: Props) {
  return (
    <section className="mt-10 scroll-mt-24" aria-labelledby={`theoretical-${instanceKey}`}>
      <h2 id={`theoretical-${instanceKey}`} className="sr-only">
        Kuramsal temeller ve kaynakça
      </h2>
      <details className="group rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-1 shadow-sm open:bg-white open:shadow-md">
        <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 font-display text-base font-semibold text-brand-navy marker:hidden [&::-webkit-details-marker]:hidden md:text-lg">
          Kuramsal temeller ve kaynakça
        </summary>
        <ul className="mb-4 space-y-2.5 border-t border-slate-200/80 pt-4 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
          {items.map((item, i) => (
            <li key={`${instanceKey}-ref-${i}`} className="pl-1">
              <span className="text-brand-navy/80" aria-hidden>
                ·{" "}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

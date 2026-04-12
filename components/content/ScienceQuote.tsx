type Props = {
  quote: string;
  /** Kaynak veya dipnot (isteğe bağlı) */
  attribution?: string;
  className?: string;
};

/** Literatür / istatistik vurgusu — semantik blockquote */
export function ScienceQuote({ quote, attribution, className = "" }: Props) {
  return (
    <figure className={`my-8 ${className}`}>
      <blockquote className="rounded-r-xl border-l-4 border-brand-accent bg-amber-50/70 py-4 pl-5 pr-4 text-base italic leading-relaxed text-slate-800 shadow-sm md:text-lg md:leading-relaxed">
        {quote}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-2 text-right text-sm text-slate-600 md:text-base">— {attribution}</figcaption>
      ) : null}
    </figure>
  );
}

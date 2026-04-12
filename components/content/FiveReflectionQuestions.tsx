type Props = { title?: string; questions: readonly string[] };

export function FiveReflectionQuestions({
  title = "Kendinize sormanız faydalı olabilecek 5 soru",
  questions,
}: Props) {
  return (
    <section
      className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mt-12 md:p-7"
      aria-labelledby="reflection-heading"
    >
      <h2 id="reflection-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[15px]">
        Bu sorular tanı aracı değildir; farkındalık ve terapide konuşma başlıkları önerir.
      </p>
      <ol className="mt-6 space-y-4">
        {questions.map((q, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 md:gap-4 md:p-5"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-sm font-bold text-brand-navy">
              {i + 1}
            </span>
            <p className="pt-0.5 text-sm font-medium leading-relaxed text-slate-800 md:text-[15px]">{q}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

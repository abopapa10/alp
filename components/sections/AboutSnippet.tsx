import Link from "next/link";
import { aboutBody, aboutOpening } from "@/lib/site";

export function AboutSnippet() {
  return (
    <section className="bg-white py-12 md:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <h2
          id="about-heading"
          className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
        >
          Hakkımda
        </h2>
        <div className="mt-8 max-w-3xl space-y-4">
          <p className="text-base font-medium leading-relaxed text-slate-800 md:text-lg">{aboutOpening}</p>
          <p className="text-base leading-relaxed text-slate-800 md:text-lg">{aboutBody}</p>
          <Link
            href="/#hizmetler"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-accent hover:underline"
          >
            Uzmanlık alanlarını inceleyin →
          </Link>
        </div>
      </div>
    </section>
  );
}

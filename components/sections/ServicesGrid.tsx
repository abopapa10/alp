import Link from "next/link";
import type { ServiceItem } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export function ServicesGrid({ items, id }: { items: ServiceItem[]; id?: string }) {
  return (
    <section
      id={id}
      className="bg-blue-50/30 py-12 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <h2
          id="services-heading"
          className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
        >
          Uzmanlık Alanlarımız ve Terapi Hizmetleri
        </h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          İstanbul Avrupa Yakası ve çevre ilçelerde yüz yüze; Türkiye genelinde online terapi ile
          psikoterapi desteği.
        </p>
        <p className="mt-2 text-sm text-slate-700 md:hidden">
          Hizmetleri yatay kaydırarak inceleyebilirsiniz.
        </p>
        <div className="-mx-6 md:mx-0">
          <ul
            role="list"
            className="mt-8 flex flex-nowrap gap-4 overflow-x-auto overscroll-x-contain px-6 pb-3 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory [scrollbar-width:thin] md:mt-10 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:snap-none lg:grid-cols-3 lg:justify-items-stretch"
          >
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.slug}
                className="w-[min(calc(100vw-3.5rem),300px)] shrink-0 snap-center snap-always md:w-auto md:min-w-0 md:max-w-none md:snap-none"
              >
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="group flex h-full min-h-[260px] flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-brand-accent hover:shadow-lg md:min-h-0 md:items-stretch md:text-left"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-sky md:self-start">
                    <Icon
                      className="size-5 text-brand-accent"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-brand-navy group-hover:underline md:text-lg">
                    {s.cardHeading}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-800">{s.short}</p>
                  <span className="mt-4 inline-flex min-h-11 items-center justify-center gap-1 text-sm font-semibold text-brand-accent md:justify-start">
                    Detaylı Bilgi
                    <ArrowRight
                      className="size-4 shrink-0 text-brand-accent"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </section>
  );
}

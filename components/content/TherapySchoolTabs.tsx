"use client";

import { useId, useState } from "react";

export type TherapyTabItem = {
  id: string;
  label: string;
  paragraphs: string[];
};

type Props = {
  /** Erişilebilir bölüm etiketi */
  sectionLabel: string;
  tabs: TherapyTabItem[];
  className?: string;
};

/**
 * BDT / psikodinamik / sistemik gibi ekolleri aynı blokta sunar; metin ağırlığı yüksek sayfalarda yazı duvarını önler.
 */
export function TherapySchoolTabs({ sectionLabel, tabs, className = "" }: Props) {
  const baseId = useId();
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  if (!tabs.length) return null;

  return (
    <section className={className} aria-labelledby={`${baseId}-heading`}>
      <h2 id={`${baseId}-heading`} className="font-display text-xl font-bold text-brand-navy md:text-2xl">
        {sectionLabel}
      </h2>
      <p className="mt-2 text-sm text-slate-600 md:text-base">
        Sekmeler arasında geçiş yaparak farklı terapi çerçevelerinin bakış açılarını okuyabilirsiniz.
      </p>
      <div
        role="tablist"
        aria-label={sectionLabel}
        className="mt-5 flex flex-wrap gap-2 border-b border-slate-200 pb-2"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              id={`${baseId}-tab-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={`rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors md:text-base ${
                selected
                  ? "bg-brand-navy text-white"
                  : "bg-slate-100 text-brand-navy hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <section
          key={tab.id}
          id={`${baseId}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={active !== tab.id}
          className="mt-6 rounded-b-xl rounded-tr-xl border border-t-0 border-slate-200 bg-white p-5 shadow-sm md:p-6"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">
            {tab.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

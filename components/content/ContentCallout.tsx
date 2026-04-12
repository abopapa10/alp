import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  variant?: "default" | "accent";
};

export function ContentCallout({ title, children, variant = "default" }: Props) {
  const border =
    variant === "accent"
      ? "border-l-4 border-brand-accent bg-amber-50/60"
      : "border-l-4 border-brand-navy/40 bg-slate-50/90";

  return (
    <aside className={`rounded-r-xl p-5 shadow-sm ring-1 ring-slate-200/60 md:p-6 ${border}`}>
      <h3 className="font-display text-base font-bold text-brand-navy md:text-lg">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
        {children}
      </div>
    </aside>
  );
}

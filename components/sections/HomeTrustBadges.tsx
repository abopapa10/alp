import { CheckCircle2 } from "lucide-react";

const defaultTrustItems = [
  "Hacettepe Üniversitesi Psikoloji Bölümü",
  "700' den fazla danışan tecrübesi.",
  "Tümüyle Bilimsel Yaklaşım",
] as const;

type Props = {
  items?: readonly string[];
  ariaLabel?: string;
};

export function HomeTrustBadges({
  items = defaultTrustItems,
  ariaLabel = "Güven unsurları",
}: Props) {
  return (
    <section className="border-y border-slate-200 bg-white py-6 md:py-8" aria-label={ariaLabel}>
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 sm:text-base"
            >
              <CheckCircle2 className="size-5 shrink-0 text-emerald-600" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

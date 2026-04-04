import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Sayfa konumu" className="text-sm text-slate-800">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-navy hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-brand-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

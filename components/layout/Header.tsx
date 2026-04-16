"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { services } from "@/lib/services";

const primaryLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/online-terapi", label: "Online Terapi" },
  { href: "/psikolog-randevu", label: "Psikolog Randevu" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/psikolog-randevu") {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-brand-navy md:text-xl"
        >
          Psk. Ahmet Alparslan Sancar
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana menü">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-navy"
            >
              {l.label}
            </Link>
          ))}
          <details className="group relative">
            <summary className="cursor-pointer list-none text-sm font-medium text-slate-700 marker:hidden hover:text-brand-navy [&::-webkit-details-marker]:hidden">
              Hizmetler
            </summary>
            <ul className="absolute right-0 mt-2 max-h-[70vh] w-64 overflow-auto rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-sky"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link
            href="/#sss"
            className="text-sm font-medium text-slate-700 hover:text-brand-navy"
          >
            Sık Sorulan Sorular
          </Link>
          <Link
            href="/#iletisim"
            className="text-sm font-medium text-slate-700 hover:text-brand-navy"
          >
            İletişim
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 text-brand-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="mx-auto max-h-[calc(100vh-4rem)] max-w-6xl space-y-1 overflow-auto px-4 py-3">
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-brand-sky"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Hizmetler
            </li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-brand-sky"
                  onClick={() => setOpen(false)}
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#sss"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-brand-sky"
                onClick={() => setOpen(false)}
              >
                Sık Sorulan Sorular
              </Link>
            </li>
            <li>
              <Link
                href="/#iletisim"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-brand-sky"
                onClick={() => setOpen(false)}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

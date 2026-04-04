"use client";

import Link from "next/link";
import { useState } from "react";
import { googleReviews } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site";

const GOOGLE_G_PX = "h-[14px] w-[14px]";

function GoogleGLogo({ className = GOOGLE_G_PX }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function GoogleStars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${n} üzerinden 5 yıldız`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="size-4 shrink-0" viewBox="0 0 24 24" aria-hidden>
          <path
            fill={i < n ? "#FBBF24" : "#E5E7EB"}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}

function initialFromName(name: string) {
  const t = name.trim();
  return t ? t[0].toUpperCase() : "?";
}

const MIN_CHARS_FOR_TOGGLE = 130;

function ReviewCard({ r }: { r: (typeof googleReviews)[number] }) {
  const [open, setOpen] = useState(false);
  const needsToggle = r.text.length > MIN_CHARS_FOR_TOGGLE;

  return (
    <article
      role="listitem"
      className={`relative flex w-[min(calc(100vw-3rem),360px)] shrink-0 snap-center snap-always flex-col rounded-xl border border-slate-200 bg-white p-4 pt-5 shadow-sm md:w-[340px] ${
        open ? "min-h-[300px]" : "h-[300px]"
      }`}
    >
      <GoogleGLogo
        className={`pointer-events-none absolute right-3 top-3 z-10 opacity-90 ${GOOGLE_G_PX}`}
      />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 pr-7">
        <div className="flex items-start gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-brand-navy"
            aria-hidden
          >
            {initialFromName(r.name)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold leading-tight text-slate-900">{r.name}</p>
            <p className="mt-0.5 text-xs text-slate-800">{r.time}</p>
          </div>
        </div>

        <GoogleStars n={r.stars} />

        <div className="flex min-h-0 flex-1 flex-col">
          <p
            className={`text-sm leading-relaxed text-slate-800 ${
              !open && needsToggle ? "line-clamp-4" : ""
            }`}
          >
            {r.text}
          </p>
          {needsToggle && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? `${r.name} yorumunu kısalt` : `${r.name} yorumunun tamamını göster`}
              className="mt-2 self-start text-left text-sm font-semibold text-brand-navy hover:text-brand-accent hover:underline"
            >
              {open ? "Daha az göster" : "Devamını oku"}
            </button>
          )}
        </div>

        <p className="mt-auto pt-3 text-[11px] font-medium uppercase tracking-wide text-slate-800">
          Google · kullanıcı yorumu
        </p>
      </div>
    </article>
  );
}

type Props = {
  showGoogleReviewsLink?: boolean;
  googleReviewsUrl?: string;
};

export function TestimonialsMarquee({
  showGoogleReviewsLink = true,
  googleReviewsUrl = siteConfig.googleBusinessProfileUrl,
}: Props) {
  return (
    <section className="bg-slate-50 py-12 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex items-center gap-2.5">
          <GoogleGLogo className="h-4 w-4" />
          <h2
            id="reviews-heading"
            className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
          >
            Google yorumları
          </h2>
        </div>
        <p className="mt-2 text-slate-800">
          Danışanlarımızın Google&apos;da bıraktığı gerçek değerlendirmeler. Kartları yatay kaydırarak
          okuyabilirsiniz.
        </p>
      </div>

      <div
        className="relative mt-8 flex gap-4 overflow-x-auto overscroll-x-contain px-6 pb-4 pt-1 [scrollbar-width:thin] md:px-4 snap-x snap-mandatory scroll-pl-6 md:scroll-pl-4"
        role="list"
        aria-label="Kaydırılabilir Google yorumları"
      >
        {googleReviews.map((r, idx) => (
          <ReviewCard key={`${r.name}-${r.time}-${idx}`} r={r} />
        ))}
      </div>

      {showGoogleReviewsLink && (
        <div className="mx-auto mt-6 max-w-6xl px-6 text-center md:px-4">
          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google işletme profilindeki tüm yorumları yeni sekmede aç"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border-2 border-brand-navy bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-sky"
          >
            <GoogleGLogo className={GOOGLE_G_PX} />
            Google&apos;daki tüm yorumları oku
          </Link>
        </div>
      )}
    </section>
  );
}

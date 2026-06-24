"use client";

import Link from "next/link";
import { useState } from "react";
import { GoogleGLogo } from "@/components/ui/icons/GoogleGLogo";
import { StarRating } from "@/components/ui/icons/StarIcon";
import { googleReviews } from "@/lib/google-reviews";
import { siteConfig } from "@/lib/site";

const G_PX = "h-[14px] w-[14px]";

function initialFromName(name: string) {
  const t = name.trim();
  return t ? t[0].toUpperCase() : "?";
}

const MIN_CHARS_FOR_TOGGLE = 130;

type ReviewLabels = {
  readMore: string;
  readLess: string;
  googleTag: string;
};

const turkishReviewLabels: ReviewLabels = {
  readMore: "Devamını oku",
  readLess: "Daha az göster",
  googleTag: "Google · kullanıcı yorumu",
};

const englishReviewLabels: ReviewLabels = {
  readMore: "Read more",
  readLess: "Show less",
  googleTag: "Google · client review",
};

function expandAriaFor(name: string, expanded: boolean, locale: "tr" | "en") {
  if (locale === "en") {
    return expanded ? `Collapse review by ${name}` : `Expand full review by ${name}`;
  }
  return expanded ? `${name} yorumunu kısalt` : `${name} yorumunun tamamını göster`;
}

function ReviewCard({
  r,
  labels,
  locale,
}: {
  r: (typeof googleReviews)[number];
  labels: ReviewLabels;
  locale: "tr" | "en";
}) {
  const [open, setOpen] = useState(false);
  const needsToggle = r.text.length > MIN_CHARS_FOR_TOGGLE;

  return (
    <article
      role="listitem"
      className={`relative flex w-[min(calc(100vw-3rem),360px)] shrink-0 snap-center snap-always flex-col rounded-xl border border-slate-200 bg-white p-4 pt-5 shadow-sm md:w-[340px] ${
        open ? "min-h-[300px]" : "h-[300px]"
      }`}
    >
      <GoogleGLogo className={`pointer-events-none absolute right-3 top-3 z-10 opacity-90 ${G_PX}`} />

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

        <StarRating value={r.stars} />

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
              aria-label={expandAriaFor(r.name, open, locale)}
              data-ads-review-conversion={open ? undefined : "true"}
              className="mt-2 self-start text-left text-sm font-semibold text-brand-navy hover:text-brand-accent hover:underline"
            >
              {open ? labels.readLess : labels.readMore}
            </button>
          )}
        </div>

        <p className="mt-auto pt-3 text-[11px] font-medium uppercase tracking-wide text-slate-800">
          {labels.googleTag}
        </p>
      </div>
    </article>
  );
}

type Props = {
  showGoogleReviewsLink?: boolean;
  googleReviewsUrl?: string;
  reviews?: (typeof googleReviews)[number][];
  heading?: string;
  description?: string;
  listAriaLabel?: string;
  linkAriaLabel?: string;
  linkText?: string;
  locale?: "tr" | "en";
  reviewLabels?: Partial<ReviewLabels>;
};

export function TestimonialsMarquee({
  showGoogleReviewsLink = true,
  googleReviewsUrl = siteConfig.googleBusinessProfileUrl,
  reviews = googleReviews,
  heading = "Google yorumları",
  description = "Danışanlarımızın Google'da bıraktığı gerçek değerlendirmeler. Kartları yatay kaydırarak okuyabilirsiniz.",
  listAriaLabel = "Kaydırılabilir Google yorumları",
  linkAriaLabel = "Google işletme profilindeki tüm yorumları yeni sekmede aç",
  linkText = "Google'daki tüm yorumları oku",
  locale = "tr",
  reviewLabels,
}: Props) {
  const baseLabels = locale === "en" ? englishReviewLabels : turkishReviewLabels;
  const labels: ReviewLabels = { ...baseLabels, ...reviewLabels };

  return (
    <section className="bg-slate-50 py-12 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex items-center gap-2.5">
          <GoogleGLogo className="h-4 w-4" />
          <h2
            id="reviews-heading"
            className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
          >
            {heading}
          </h2>
        </div>
        <p className="mt-2 text-slate-800">{description}</p>
      </div>

      <div
        className="relative mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-pl-6 px-6 pb-4 pt-1 [scrollbar-width:thin] md:scroll-pl-4 md:px-4"
        role="list"
        aria-label={listAriaLabel}
      >
        {reviews.map((r, idx) => (
          <ReviewCard key={`${r.name}-${r.time}-${idx}`} r={r} labels={labels} locale={locale} />
        ))}
      </div>

      {showGoogleReviewsLink && (
        <div className="mx-auto mt-6 max-w-6xl px-6 text-center md:px-4">
          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ads-review-conversion="true"
            aria-label={linkAriaLabel}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border-2 border-brand-navy bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-sky"
          >
            <GoogleGLogo className={G_PX} />
            {linkText}
          </Link>
        </div>
      )}
    </section>
  );
}

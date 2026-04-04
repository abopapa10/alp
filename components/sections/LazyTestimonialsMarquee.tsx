"use client";

import dynamic from "next/dynamic";

type Props = {
  showGoogleReviewsLink?: boolean;
  googleReviewsUrl?: string;
};

const Dyn = dynamic(
  () =>
    import("@/components/sections/TestimonialsMarquee").then((m) => ({
      default: m.TestimonialsMarquee,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-96 w-full max-w-6xl mx-auto shrink-0 bg-slate-100 animate-pulse"
        aria-hidden
      />
    ),
  },
);

export function LazyTestimonialsMarquee(props: Props) {
  return <Dyn {...props} />;
}

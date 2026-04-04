"use client";

import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((m) => ({
      default: m.ContactSection,
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

export function LazyContactSection() {
  return <ContactSection />;
}

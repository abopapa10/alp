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
        className="h-64 w-full max-w-6xl mx-auto shrink-0 animate-pulse bg-gray-100"
        aria-hidden
      />
    ),
  },
);

export function LazyContactSection() {
  return <ContactSection />;
}

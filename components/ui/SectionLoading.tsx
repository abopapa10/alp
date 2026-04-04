/** Dinamik yüklenen bölümler için hafif yer tutucu (Lighthouse / bundle split). */
export function SectionLoading({ label = "Yükleniyor…" }: { label?: string }) {
  return (
    <p
      className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-700 md:px-4"
      role="status"
      aria-live="polite"
    >
      {label}
    </p>
  );
}

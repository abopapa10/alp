/** Küçük dekoratif SVG’ler — DOM’da tekrar kullanım için ayrı bileşenler. */

export function IconCommunicationWall(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className ?? "size-8"}
      aria-hidden
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
      <path d="M17 17h2a2 2 0 002-2v-6" opacity={0.45} />
    </svg>
  );
}

export function IconTrustRepair(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className ?? "size-8"}
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconParentingBalance(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className ?? "size-8"}
      aria-hidden
    >
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M17 11.5a3 3 0 013 3V21" />
    </svg>
  );
}

export function IconEmotionalDistance(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className ?? "size-8"}
      aria-hidden
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="3" />
      <path d="M6 13h.01M18 13h.01" opacity={0.45} />
      <path d="M9 17h6" opacity={0.35} />
    </svg>
  );
}

/** Ghosting sayfası — inline SVG’ler ayrı bileşenlerde (sayfa DOM’unda tekrar kullanım). */

export function GhostingPageIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? "size-9 md:size-10"}
      aria-hidden
    >
      <path
        d="M12 3a7 7 0 00-7 7v1.5a2.5 2.5 0 002.5 2.5h.5a1 1 0 001-1v-1a1 1 0 011-1h6a1 1 0 011 1v1a1 1 0 001 1h.5A2.5 2.5 0 0019 11.5V10a7 7 0 00-7-7z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="0.9" fill="currentColor" />
      <circle cx="15" cy="9" r="0.9" fill="currentColor" />
      <path
        d="M9 14c1.2 1.5 2.5 2 3 2s1.8-.5 3-2"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
      />
      <path
        d="M5 20c1-2 3.5-3.5 7-3.5s6 1.5 7 3.5"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.35}
      />
    </svg>
  );
}

export function IconWhyGhost(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className ?? "size-6"} aria-hidden>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M12 6v4l2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function IconFeelGhost(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className ?? "size-6"} aria-hidden>
      <path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

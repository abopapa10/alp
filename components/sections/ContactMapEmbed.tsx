"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

/**
 * Harita iframe'ini yalnızca bölüm görünür alana yaklaştığında bağlar (üçüncü taraf
 * betik/çerez yükünü ve ana iş parçacığı üzerindeki maliyeti geciktirir).
 * Geometri ölçümü yalnızca IntersectionObserver ile yapılır; zorunlu yeniden düzenleme riski azaltılır.
 */
export function ContactMapEmbed() {
  const [mountIframe, setMountIframe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) {
          requestAnimationFrame(() => {
            setMountIframe(true);
          });
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "280px 0px", threshold: 0 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-sm md:rounded-2xl"
    >
      {mountIframe ? (
        <iframe
          title="Beşiktaş Psikolog A. Alparslan Sancar — Google Haritalar"
          src={siteConfig.mapEmbedUrl}
          className="aspect-[16/10] w-full min-h-[200px] border-0 sm:min-h-[220px] md:aspect-[4/3] md:min-h-[280px] lg:aspect-video lg:min-h-[320px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div
          className="flex aspect-[16/10] min-h-[200px] w-full items-center justify-center bg-slate-100 text-sm text-slate-700 sm:min-h-[220px] md:aspect-[4/3] md:min-h-[280px] lg:aspect-video lg:min-h-[320px]"
          aria-hidden
        >
          Harita yükleniyor…
        </div>
      )}
    </div>
  );
}

import type { ComponentType } from "react";
import { Frown, RotateCcw, ShieldOff, Zap } from "lucide-react";
import { ServiceLayout } from "@/components/templates/ServiceLayout";
import { ServiceTheoreticalAccordion } from "@/components/sections/ServiceTheoreticalAccordion";
import { ServiceTitleIcon } from "@/components/ui/ServiceTitleIcon";
import { services } from "@/lib/services";
import { servicePages } from "@/lib/service-pages";

const slug = "travma-terapisi" as const;

const tssbSigns: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
}[] = [
  {
    icon: RotateCcw,
    title: "İstilacı düşünceler ve flashbackler",
    text: "Olayın zihinde veya bedende yeniden canlanması, kabuslar ve tetikleyicilere karşı ani yoğun kaygı; TSSB’nin istilacı belirtileri arasında sık görülür.",
  },
  {
    icon: ShieldOff,
    title: "Kaçınma davranışları",
    text: "Hatırlatıcı yerlere, kişilere veya konuşmalardan kaçınma; duyguları uyuşturma veya ilişkiyi uzaklaştırma çabaları.",
  },
  {
    icon: Frown,
    title: "Duygu durum değişiklikleri",
    text: "Sürekli olumsuz duygu durumu, umutsuzluk, suçluluk veya duygulara uzaklaşma (duyusal körlük) gibi belirtiler.",
  },
  {
    icon: Zap,
    title: "Aşırı uyarılma (tetikte kalma)",
    text: "Kolay irkilme, uyku güçlüğü, konsantrasyon sorunu, aşırı tetikte olma ve beklenmedik öfke patlamaları.",
  },
];

export function TravmaServicePageView() {
  const data = servicePages[slug];
  const service = services.find((s) => s.slug === slug);
  const label = service?.title ?? data.h1;

  return (
    <ServiceLayout
      title={data.h1}
      titleIcon={<ServiceTitleIcon name={data.icon} />}
      description={data.intro}
      canonicalPath={`/hizmetler/${slug}`}
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Hizmetler", href: "/#hizmetler" },
        { label: label },
      ]}
      ctaHeading="Travma ve TSSB konusunda yanınızdayız"
      ctaDescription="Travmanın izlerini tek başına taşımak zorunda değilsiniz. Beşiktaş’taki kliniğimizde yüz yüze veya online terapi ile bu süreci birlikte yönetebiliriz."
    >
      <section
        className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 md:p-7"
        aria-labelledby="travma-bilim-heading"
      >
        <h2 id="travma-bilim-heading" className="sr-only">
          Bilimsel çerçeve
        </h2>
        <p className="text-base leading-[1.75] text-slate-800 md:text-[17px] md:leading-[1.8]">
          {data.scientificRationale}
        </p>
      </section>

      <section className="mt-10" aria-labelledby="tssb-belirtileri-heading">
        <h2
          id="tssb-belirtileri-heading"
          className="font-display text-xl font-bold text-brand-navy md:text-2xl"
        >
          TSSB belirtileri (özet)
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
          Aşağıdaki başlıklar tanı koydurmaz;{" "}
          <strong className="text-brand-navy">travma sonrası stres bozukluğu</strong> ve travma yanıtları
          hakkında genel farkındalık sunar. Değerlendirme için uzman görüşmesi önemlidir.
        </p>
        <ul className="mt-6 space-y-4">
          {tssbSigns.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm md:gap-5 md:p-5"
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-brand-navy ring-1 ring-slate-200/80 md:size-12"
                  aria-hidden
                >
                  <Icon className="size-5 text-slate-600 md:size-6" strokeWidth={1.25} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10 space-y-9" aria-label="Travma terapisi detayları">
        {data.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">{s.heading}</h2>
            <p className="mt-3 text-base leading-[1.75] text-slate-700 md:leading-[1.8]">{s.body}</p>
          </section>
        ))}
      </section>

      <ServiceTheoreticalAccordion items={data.theoreticalFoundations} instanceKey={slug} />
    </ServiceLayout>
  );
}

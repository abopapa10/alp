import Link from "next/link";
import { MonitorSmartphone } from "lucide-react";

export function OnlineTherapyBanner() {
  return (
    <section
      className="border-y border-slate-200 bg-gradient-to-br from-brand-navy to-[#1a3a5c] py-12 text-white md:py-16"
      aria-labelledby="online-banner-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-4">
        <div className="flex gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <MonitorSmartphone className="size-6" aria-hidden />
          </span>
          <div>
            <h2 id="online-banner-heading" className="font-display text-xl font-bold md:text-2xl">
              Online Terapi
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-white md:text-lg">
              Dünyanın her yerinden, evinizin konforunda terapiye başlayın.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
              KVKK ve gizlilik önceliğiyle güvenli görüşme alışkanlıkları; esnek randevu ile süreklilik.
            </p>
          </div>
        </div>
        <Link
          href="/online-terapi"
          className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-brand-accent px-6 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-brand-accent-hover"
        >
          Online Terapi Detayları
        </Link>
      </div>
    </section>
  );
}

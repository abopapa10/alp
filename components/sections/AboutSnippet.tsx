import Link from "next/link";
import { Blend, CircleCheck, MapPin } from "lucide-react";

const aboutMain =
  "Hacettepe Üniversitesi Psikoloji bölümü mezunu bir psikolog olarak, bugüne kadar 700'den fazla danışanla çalışma fırsatı buldum. Birey Odaklı Psikoterapi (Danışan Merkezli Psikoterapi) tekniği kullanıyorum. Beşiktaş'taki kliniğimde ve online platformlarda, bilimsel temelli ve kişiye özel terapi süreçleri yürütüyorum.";

const highlights = [
  {
    icon: CircleCheck,
    title: "Yaklaşımım",
    text: "Temel olarak Carl Rogers'ın geliştirdiği Birey Odaklı (Danışan Merkezli) Psikoterapi ekolünü benimsiyorum.",
  },
  {
    icon: Blend,
    title: "Destekleyici yöntemler",
    text: "Danışanın ihtiyacına göre Psikodinamik Terapi ve BDT tekniklerini de sürece entegre ediyorum.",
  },
  {
    icon: MapPin,
    title: "Lokasyon / hizmet",
    text: "Beşiktaş'ta yüz yüze terapi ve tüm dünyaya yönelik online danışmanlık hizmeti.",
  },
] as const;

export function AboutSnippet() {
  return (
    <section className="bg-white py-12 md:py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <h2
          id="about-heading"
          className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
        >
          Hakkımda
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          {aboutMain}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 shadow-sm transition-colors hover:border-brand-navy/15"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-navy shadow-sm ring-1 ring-slate-200/80">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold text-brand-navy md:text-base">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700 md:text-[15px]">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link
            href="/#hizmetler"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-accent hover:underline"
          >
            Uzmanlık alanlarını inceleyin →
          </Link>
        </p>
      </div>
    </section>
  );
}

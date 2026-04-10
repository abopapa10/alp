import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    href: "/panseksuel-ne-demek",
    title: "Panseksüel ne demek? Bi farkı, Kinsey, Butler ve kapsayıcı rehber",
  },
  {
    href: "/histerik-ne-demek",
    title: "Histerik ne demek? Histeri, Freud, konversiyon ve histriyonik kişilik",
  },
  {
    href: "/manipulasyon-nedir",
    title: "Manipülasyon rehberi: duygusal, cinsel ve sosyal boyutlar",
  },
  {
    href: "/regresyon-nedir",
    title: "Regresyon nedir? Psikolojide savunma mekanizması olarak regresyon",
  },
  {
    href: "/kompulsif-ne-demek",
    title: "Kompulsif ne demek? Obsesyon ve kompulsiyon farkı",
  },
  {
    href: "/durtusel-ne-demek",
    title: "Dürtüsel ne demek? Dürtüsellik ve dürtü kontrolü",
  },
  {
    href: "/narsizm-ne-demek",
    title: "Narsizm ne demek? Narsist ve narsisistik kişilik hakkında",
  },
  {
    href: "/toksik-iliski-nedir",
    title: "Toksik ilişki nedir? Belirtileri ve kurtulma yolları",
  },
  {
    href: "/tukenmislik-sendromu",
    title: "Tükenmişlik sendromu (burnout): belirtiler ve bilimsel çerçeve",
  },
  {
    href: "/ghosting-ne-demek",
    title: "Ghosting ne demek, neden yapılır? Psikolojik etkiler",
  },
  {
    href: "/othello-sendromu",
    title: "Othello sendromu (aşırı kıskançlık): sanrısal kıskançlık ve etkiler",
  },
  {
    href: "/love-bombing-nedir",
    title: "Love bombing (aşk bombardımanı) nedir? Belirtileri",
  },
  {
    href: "/uykuya-dalamama-neden-olur",
    title: "Uykuya dalamama (insomnia): nedenleri ve çözümler",
  },
] as const;

const linkClassName =
  "group flex h-full min-h-[108px] items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-brand-navy/30 hover:bg-brand-sky/40";

export function HomeBlogTeaser() {
  return (
    <section className="bg-slate-50 py-12 md:py-16" aria-labelledby="home-blog-heading">
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex items-center gap-3">
          <BookOpen className="size-8 shrink-0 text-slate-500 md:size-9" strokeWidth={1} aria-hidden />
          <h2 id="home-blog-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Bilgilendirici yazılar
          </h2>
        </div>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-800 md:text-[17px]">
          Yazılar menüsü hem mobilde hem masaüstünde iki kart yüksekliğinde yatay kaydırılır; diğer başlıklar
          için alanı yana kaydırabilirsiniz.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl px-6 md:px-4">
        <div
          className="overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin]"
          aria-label="Yana kaydırılabilir bilgilendirici yazı ızgarası"
        >
          <ul className="grid max-h-[240px] min-w-max grid-flow-col grid-rows-2 gap-4 pr-1">
            {posts.map((post) => (
              <li key={post.href} className="w-[min(86vw,360px)] md:w-[320px]">
                <Link href={post.href} className={linkClassName}>
                  <span className="font-semibold text-brand-navy group-hover:underline">{post.title}</span>
                  <ArrowRight
                    className="size-5 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}



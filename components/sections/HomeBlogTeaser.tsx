import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
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
    title: "Othello sendromu (aşırı kıskançlık): sanrısal kıskançlık ve ilişkide etkileri",
  },
  {
    href: "/love-bombing-nedir",
    title: "Love bombing (aşk bombardımanı) nedir? Belirtileri ve manipülasyon",
  },
  {
    href: "/uykuya-dalamama-neden-olur",
    title: "Uykuya dalamama (insomnia): nedenleri, uyku hijyeni ve psikolojik çözümler",
  },
] as const;

const linkClassName =
  "group flex min-h-[52px] h-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-colors hover:border-brand-navy/30 hover:bg-brand-sky/40 md:snap-start md:snap-always";

export function HomeBlogTeaser() {
  return (
    <section
      className="bg-slate-50 py-12 md:py-16"
      aria-labelledby="home-blog-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex items-center gap-3">
          <BookOpen className="size-8 shrink-0 text-slate-500 md:size-9" strokeWidth={1} aria-hidden />
          <h2
            id="home-blog-heading"
            className="font-display text-2xl font-bold text-brand-navy md:text-3xl"
          >
            Bilgilendirici yazılar
          </h2>
        </div>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-800 md:text-[17px]">
          Psikoloji ve ilişkiler üzerine akademik çerçevede özet bilgilendirme metinleri yayınlıyorum;
          içerikler zamanla genişleyecek. Geniş ekranda liste alanını kaydırarak tüm başlıklara
          ulaşabilirsiniz.
        </p>
      </div>

      {/*
        Mobil: iç overflow yok — sayfa ile kayar, dokunuş tuzağı olmaz.
        md+: sınırlı yükseklik + dikey kaydırma (yorumlar şeridinin dik hali).
      */}
      <div className="relative mx-auto mt-8 max-w-6xl px-6 md:px-4">
        <div
          className="md:snap-y md:snap-mandatory md:max-h-[min(23rem,42vh)] md:overflow-y-auto md:overscroll-y-contain md:pr-1 md:[scrollbar-width:thin]"
          aria-label="Bilgilendirici yazı başlıkları"
        >
          <ul className="grid max-w-5xl grid-cols-1 gap-4 pb-1 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.href} className="min-h-0">
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

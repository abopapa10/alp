import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Gift, Heart, MessageCircleHeart, Sparkles, UserX } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildLoveBombingFaqJsonLd, loveBombingFaqs } from "@/lib/love-bombing-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Love Bombing Nedir? Aşk Bombardımanı Belirtileri ve Manipülasyon | Psk. Ahmet Alparslan Sancar",
  description:
    "Love bombing (aşk bombardımanı) nedir, belirtileri nelerdir? Sağlıklı ilgiden farkı, ilişkide manipülasyon ve iyileşme. Genel bilgilendirme; Beşiktaş ve online terapi.",
  keywords: [
    "love bombing nedir",
    "love bombing",
    "aşk bombardımanı",
    "aşk bombardımanı nedir",
    "love bombing belirtileri",
    "ilişkide love bombing",
    "manipülatif ilişki",
    "hızlı bağlanma ilişki",
  ],
  alternates: { canonical: "/love-bombing-nedir" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Love Bombing (Aşk Bombardımanı) Nedir?",
    description:
      "Aşk bombardımanı ve ilişkide yoğun ilgi örüntüleri hakkında özet bilgilendirme metni.",
    url: `${siteConfig.url}/love-bombing-nedir`,
  },
};

const aspects: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
}[] = [
  {
    icon: Sparkles,
    title: "Aşırı ve hızlı yoğunluk",
    text: "Kısa sürede aşırı övgü, sürekli mesaj ve ‘eşsizsin’ benzeri ifadeler sık tekrarlanır; tempo genellikle karşı tarafın hazır olduğundan hızlıdır.",
  },
  {
    icon: Gift,
    title: "Hediye ve jest yağmuru",
    text: "Büyük jestler veya sürekli küçük hediyeler, bazen suçluluk veya minnet borcu yaratacak şekilde hissedilir.",
  },
  {
    icon: MessageCircleHeart,
    title: "İdealizasyon ve bütünleşme baskısı",
    text: "‘Biz bir bütünüz’ vurgusu, günlük rutin ve arkadaşlıklardan uzaklaşma baskısıyla birleşebilir.",
  },
  {
    icon: UserX,
    title: "Geri çekilme ve ceza döngüsü",
    text: "Yoğun ilgi fazından sonra sessizlik, soğuma veya suçlayıcı geri dönüşler döngüyü güçlendirebilir; bu örüntü toksik ilişki literatüründe sık tartışılır.",
  },
];

export default function LoveBombingNedirPage() {
  const faqJsonLd = buildLoveBombingFaqJsonLd();

  return (
    <LegalDocumentShell path="/love-bombing-nedir" breadcrumbLabel="Love bombing nedir?">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mt-6">
        <div className="flex items-start gap-3">
          <Heart
            className="mt-1 size-9 shrink-0 text-slate-500 md:size-10"
            strokeWidth={1}
            aria-hidden
          />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Love Bombing (Aşk Bombardımanı) Nedir?
          </h1>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="font-semibold text-brand-navy">Love bombing nedir</strong> sorusu, ilişkinin
          başında görülen aşırı ilgi ve hızlandırılmış yakınlık örüntülerini tanımlamak için kullanılır. Türkçede
          sıkça <strong className="font-semibold text-brand-navy">aşk bombardımanı</strong> olarak da anılır.
          Bu sayfa <strong>genel bilgilendirme</strong> sunar; tanı koymaz ve kişisel değerlendirmenin yerine
          geçmez.
        </p>

        <section className="mt-10" aria-labelledby="lb-tanim">
          <h2 id="lb-tanim" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Tanım ve bağlam
          </h2>
          <div className="mt-4 space-y-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            <p>
              <strong>Love bombing</strong>, popüler psikoloji dilinde; karşı tarafın duygusal olarak hızla
              bağlanmasını sağlamak için yoğun ilgi, iltifat ve jestlerin kullanıldığı bir ilişki açılışı
              örüntüsü olarak özetlenir. Her tutkulu başlangıç love bombing değildir: kültür, kişilik, yaşam
              temposu ve karşılıklı rıza bağlamı birlikte okunmalıdır.
            </p>
            <p>
              <strong>Aşk bombardımanı nedir</strong> araması yapan çoğu kişi aslında ‘bu tempo sağlıklı mı?’
              veya ‘sınırlarım ihlal ediliyor mu?’ sorularına yanıt arar. Terapide bu sorular netleştirilir;
              internet üzerinden kesin hüküm vermek yerine uzman görüşmesi önerilir.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="lb-dort">
          <h2 id="lb-dort" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Dört sık görülen boyut
          </h2>
          <ul className="mt-6 space-y-4">
            {aspects.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4 md:p-5"
                >
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80 md:size-12"
                    aria-hidden
                  >
                    <Icon className="size-5 text-slate-600 md:size-6" strokeWidth={1.2} />
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

        <section className="mt-10" aria-labelledby="lb-saglikli">
          <h2 id="lb-saglikli" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sağlıklı ilgi ile karıştırılmaması
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            Açık iletişim, karşı tarafın hızına saygı, ‘hayır’a uyum ve sosyal çevreyi desteklemek sağlıklı ilginin
            sık işaretlerindendir. <strong>Love bombing belirtileri</strong> şüphesi varsa günlük tutmak,
            güvendiğiniz birinden geri bildişim almak ve terapiste danışmak faydalı olabilir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="lb-terapi">
          <h2 id="lb-terapi" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Terapi ve iyileşme
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            BDT ve şema terapisi gibi yaklaşımlarla bağlanma, sınır, öz-değer ve ilişki örüntüleri çalışılabilir.
            Toksik ilişki döngüsünden çıkmak zaman alabilir; profesyonel destek süreci yapılandırır. Beşiktaş
            klinikte veya <strong>online terapi</strong> ile randevu planlayabilirsiniz.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="lb-sss">
          <h2 id="lb-sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {loveBombingFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 text-left font-semibold text-brand-navy marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/90 to-white p-6 shadow-md md:p-8"
          aria-labelledby="lb-cta"
        >
          <h2 id="lb-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            İlişki örüntüleri hakkında konuşalım mı?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
            {siteConfig.name} olarak sınır, bağlanma ve özsaygı üzerine çalışabiliriz. Randevu için telefon veya
            WhatsApp üzerinden yazmanız yeterli.
          </p>
          <div className="mt-6 max-w-md">
            <CTAGroup />
          </div>
          <a
            href="/online-terapi"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-brand-navy bg-white px-6 text-base font-bold text-brand-navy transition-colors hover:bg-white/90"
          >
            Online terapi
          </a>
        </section>
      </article>
    </LegalDocumentShell>
  );
}

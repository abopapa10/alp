import type { Metadata } from "next";
import type { ComponentType } from "react";
import { AlertTriangle, Brain, Eye, Heart, Scale, Shield } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildOthelloFaqJsonLd, othelloFaqs } from "@/lib/othello-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Othello Sendromu Nedir? Aşırı Kıskançlık ve Sanrısal Kıskançlık | Psk. Ahmet Alparslan Sancar",
  description:
    "Othello sendromu (aşırı kıskançlık hastalığı) ve sanrısal kıskançlık nedir? Belirtiler, normal kıskançlıktan farkı, ilişkide etkileri ve profesyonel destek. Beşiktaş ve online terapi bilgilendirmesi.",
  keywords: [
    "othello sendromu",
    "othello sendromu nedir",
    "aşırı kıskançlık hastalığı",
    "sanrısal kıskançlık",
    "sanrısal kıskançlık nedir",
    "morbid kıskançlık",
    "delüzyonel kıskançlık",
    "kıskançlık bozukluğu",
    "ilişkide aşırı kıskançlık",
  ],
  alternates: { canonical: "/othello-sendromu" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Othello Sendromu ve Sanrısal Kıskançlık",
    description:
      "Aşırı kıskançlık ve Othello sendromu hakkında genel bilgilendirme; tanı koymaz, uzman görüşmesinin yerini tutmaz.",
    url: `${siteConfig.url}/othello-sendromu`,
  },
};

const aspects: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
}[] = [
  {
    icon: Eye,
    title: "Gerçek dışı sadakat inançları",
    text: "Partnerin sadakatsizliğine dair kanıtlar zayıf olsa veya karşı taraf açıklama yapsa bile inanç sürer; ‘aldatılıyorum’ düşüncesi merkezde kalabilir.",
  },
  {
    icon: Brain,
    title: "Zihinsel arama ve yorumlama",
    text: "Mesajlar, gecikmeler veya sosyal etkileşimler sık sık ‘kanıt’ olarak okunur; belirsizlik kaygıyı besler.",
  },
  {
    icon: Heart,
    title: "İlişki dinamiği",
    text: "Sürekli sorgulama, kontrol veya suçlama güveni aşındırır; çiftin iletişimi tek konuya kilitlenebilir.",
  },
  {
    icon: Shield,
    title: "Güvenlik ve sınır",
    text: "Bazı durumlarda tehdit, takip veya şiddet riski doğabilir; güvenlik planı ve acil destek hatları önceliklidir.",
  },
];

export default function OthelloSendromuPage() {
  const faqJsonLd = buildOthelloFaqJsonLd();

  return (
    <LegalDocumentShell path="/othello-sendromu" breadcrumbLabel="Othello sendromu">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mt-6">
        <div className="flex items-start gap-3">
          <Scale
            className="mt-1 size-9 shrink-0 text-slate-500 md:size-10"
            strokeWidth={1}
            aria-hidden
          />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Othello Sendromu (Aşırı Kıskançlık) ve Sanrısal Kıskançlık
          </h1>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="font-semibold text-brand-navy">Othello sendromu</strong> ve{" "}
          <strong className="font-semibold text-brand-navy">aşırı kıskançlık hastalığı</strong> ifadeleri,
          popüler dilde partnerin sadakatine ilişkin inatçı ve genellikle gerçek dışı inançları anlatmak için
          kullanılır. Bu metin <strong>bilgilendirme</strong> amaçlıdır; tanı veya tedavi planı yerine geçmez,
          kişisel durumunuz için <strong className="text-brand-navy">psikiyatrist veya psikolog</strong>{" "}
          görüşmesi esastır.
        </p>

        <section className="mt-10" aria-labelledby="othello-tanim">
          <h2 id="othello-tanim" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Othello sendromu nedir?
          </h2>
          <div className="mt-4 space-y-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            <p>
              Literatürde ve halk sağlığı iletişiminde <strong>Othello sendromu</strong> terimi, Shakespeare&apos;in
              Othello karakterinde görülen yoğun kıskançlık ve yanlış inanç temasıyla ilişkilendirilir. Klinik
              pratikte benzer tablolar; <strong>sanrısal (delüzyonel) kıskançlık</strong> başlığı altında veya
              eşlik eden başka bir ruhsal durumun parçası olarak ele alınabilir. Hangi sınıflandırmanın uygun
              olduğunu yalnızca uzman belirleyebilir.
            </p>
            <p>
              <strong>Sanrısal kıskançlık ne demek</strong> sorusunun kısa yanıtı: kişinin partnerinin
              kendisini aldattığına dair inançlarının, karşı kanıtlara rağmen sürmesidir. Bu, sıradan ilişki
              endişesinden farklılık gösterebilir; ayrımı netleştirmek için değerlendirme gerekir.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="othello-belirti">
          <h2 id="othello-belirti" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Belirtiler ve ilişkide görünüm
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            Aşağıdaki başlıklar özet niteliğindedir; tek başına checklist olarak kullanılmamalıdır.{" "}
            <strong>Aşırı kıskançlık</strong> her zaman Othello sendromu anlamına gelmez; bağlam, süre ve işlev
            kaybı birlikte değerlendirilir.
          </p>
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

        <section className="mt-10" aria-labelledby="othello-uyari">
          <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50/90 p-4 md:p-5">
            <AlertTriangle
              className="mt-0.5 size-6 shrink-0 text-amber-700"
              strokeWidth={1.5}
              aria-hidden
            />
            <div>
              <h2
                id="othello-uyari"
                className="font-display text-lg font-bold text-brand-navy md:text-xl"
              >
                Önemli uyarı
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-[15px] md:leading-relaxed">
                Şiddet, tehdit, izinsiz takip veya dijital şantaj varsa önce güvenliğinizi sağlayın. Türkiye’de{" "}
                <strong>183</strong> Sosyal Hizmetler Danışma hattı ve <strong>155</strong> Polis İmdat hattı acil
                durumlarda kullanılabilir. Bu sayfa acil müdahalenin yerine geçmez.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="othello-destek">
          <h2 id="othello-destek" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Profesyonel destek ve terapi çerçevesi
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            Değerlendirme sıklıkla hem <strong>psikiyatrik</strong> (sanrıların ve eşlik eden durumların
            incelenmesi) hem de <strong>psikoterapötik</strong> (ilişki örüntüleri, bağlanma, bilişsel çerçeve)
            boyutları içerir. Çift terapisi her vakada uygun değildir; güvenlik ve net sınırlar önce
            konuşulmalıdır. Beşiktaş’taki kliniğimde veya <strong>online terapi</strong> ile başvuru sürecinizi
            birlikte netleştirebiliriz.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="othello-sss">
          <h2 id="othello-sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {othelloFaqs.map((item) => (
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
          aria-labelledby="othello-cta"
        >
          <h2 id="othello-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kıskançlık ve ilişki kaygısı hakkında konuşmak ister misiniz?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
            {siteConfig.name} olarak kaygı, sınır, iletişim ve özsaygı üzerine yapılandırılmış çalışma
            sunuyorum. Randevu için telefon veya WhatsApp üzerinden yazmanız yeterli.
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

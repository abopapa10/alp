import type { Metadata } from "next";
import type { ComponentType } from "react";
import { EyeOff, Ghost, HeartCrack, MessageCircleX, UserX } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildGhostingFaqJsonLd, ghostingFaqs } from "@/lib/ghosting-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ghosting Ne Demek? Neden Yapılır? Psikolojik Etkiler | Psk. Ahmet Alparslan Sancar",
  description:
    "Ghosting ne demek, ghosting neden yapılır? İlişkide aniden sessiz kalma, psikolojik etkiler ve iyileşme. Ghosting sonrası psikolog desteği Beşiktaş ve online terapi.",
  keywords: [
    "ghosting ne demek",
    "ghosting neden yapılır",
    "ghosting nedir",
    "ilişkide ghosting",
    "ghosting psikoloji",
    "ghosting sonrası",
    "neden ghosting yapılır",
  ],
  alternates: { canonical: "/ghosting-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ghosting Ne Demek? Neden Yapılır?",
    description: "Ghosting ve ilişkide ani iletişim kesintisi hakkında bilgilendirici rehber.",
    url: `${siteConfig.url}/ghosting-ne-demek`,
  },
};

const aspects: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
}[] = [
  {
    icon: MessageCircleX,
    title: "İletişimin kesilmesi",
    text: "Mesajların yanıtsız kalması, planların iptal edilmesi ve açıklama olmadan uzaklaşma ghosting dinamiğinin çekirdeğidir.",
  },
  {
    icon: EyeOff,
    title: "Belirsizlik ve zihin okuma",
    text: "Karşı tarafın niyetini tahmin etmeye çalışmak kaygıyı besler; ‘ghosting neden yapılır’ sorusu sık tekrarlanır.",
  },
  {
    icon: HeartCrack,
    title: "Duygusal etki",
    text: "Reddedilme ve önemsenmemişlik hissi özsaygıyı zorlayabilir; yas süreci yarım kalmış gibi hissedilebilir.",
  },
  {
    icon: UserX,
    title: "Sınır ve öz-değer",
    text: "Terapide enerjiyi karşı tarafı ikna etmekten çok kendi ihtiyaç ve sınırlarınıza döndürmek hedeflenir.",
  },
];

export default function GhostingNeDemekPage() {
  const faqJsonLd = buildGhostingFaqJsonLd();

  return (
    <LegalDocumentShell path="/ghosting-ne-demek" breadcrumbLabel="Ghosting ne demek?">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mt-6">
        <div className="flex items-start gap-3">
          <Ghost
            className="mt-1 size-9 shrink-0 text-slate-500 md:size-10"
            strokeWidth={1}
            aria-hidden
          />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Ghosting Ne Demek? Neden Yapılır?
          </h1>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="font-semibold text-brand-navy">Ghosting ne demek</strong> sorusu, dijital çağda
          çok sık duyulan bir ilişki dinamiğini tanımlar: karşı tarafın bir süre sonra haber vermeden
          iletişimi kesmesi veya ‘görünmez’ olması. Bu metin bilgilendirme amaçlıdır; kişisel durumunuz için{" "}
          <strong className="text-brand-navy">psikolog</strong> ile görüşmek en sağlıklı adımdır.
        </p>

        <section className="mt-10" aria-labelledby="ghosting-tanim">
          <h2 id="ghosting-tanim" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Ghosting nedir?
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            <strong>Ghosting nedir</strong> dendiğinde genellikle romantik ilişkilerde ani sessizlik
            kastedilir; ancak arkadaşlık, aile veya iş yazışmalarında da benzer örüntüler görülebilir.
            Önemli olan teknik tanım değil, sizin yaşadığınız belirsizlik ve duygusal yüktür.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="ghosting-neden">
          <h2 id="ghosting-neden" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Ghosting neden yapılır?
          </h2>
          <div className="mt-4 space-y-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            <p>
              <strong>Ghosting neden yapılır</strong> sorusunun yanıtı tek bir cümle değildir. Bazı kişiler
              çatışma ve yüzleşme kaygısıyla kaçınmayı seçer; bazıları ilişkiyi bitirmenin utancını taşıyamaz.
              Yoğunluk, başka bir ilişki veya duygusal olarak hazır olmama da sık anlatılan nedenler arasındadır.
              Bu açıklamalar <strong>ghosting davranışını meşru kılmaz</strong>; karşı tarafa saygı için net
              iletişim her zaman daha etiktir.
            </p>
            <p>
              “<strong>Neden ghosting yapılır</strong>” araması yapan birçok kişi aslında kendi acısını
              anlamlandırmaya çalışır. Sebep ne olursa olsun, sizin iyileşme süreciniz birinci önceliktir.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="ghosting-boyut">
          <h2 id="ghosting-boyut" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            İlişkide ghosting: dört boyut
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

        <section className="mt-10" aria-labelledby="ghosting-iyilesme">
          <h2 id="ghosting-iyilesme" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Ghosting sonrası iyileşme ve psikolog desteği
          </h2>
          <p className="mt-4 text-base leading-[1.8] text-slate-700 md:text-[17px]">
            <strong>Ghosting psikoloji</strong> literatüründe sıklıkla reddedilme, belirsizlik ve öz-değer
            temalarıyla çalışılır. BDT ile düşünce kalıpları, kaçınma ve tekrarlayan kontrol davranışları
            ele alınır; gerektiğinde yas ve bağlanma odaklı çalışmalar eklenir.{" "}
            <strong>İlişkide ghosting</strong> yaşadıysanız yalnız olmadığınızı hatırlatmak isterim;
            Beşiktaş’taki kliniğimde veya <strong>online terapi</strong> ile bu süreci yapılandırılmış biçimde
            işleyebiliriz.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="ghosting-sss">
          <h2 id="ghosting-sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {ghostingFaqs.map((item) => (
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
          aria-labelledby="ghosting-cta"
        >
          <h2 id="ghosting-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Ghosting sonrası konuşmak ister misiniz?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
            {siteConfig.name} olarak ilişki kayıpları, sınırlar ve özsaygı üzerinde çalışabiliriz. Randevu için
            telefon veya WhatsApp üzerinden yazmanız yeterli.
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

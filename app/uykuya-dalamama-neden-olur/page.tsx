import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  AlarmClock,
  Brain,
  CheckCircle2,
  Coffee,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildUykuyaDalamamaFaqJsonLd, uykuyaDalamamaFaqs } from "@/lib/uykuya-dalamama-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Uykuya Dalamama (İnsomnia) Neden Olur? Psikolojik Çözümler | Psk. Ahmet Alparslan Sancar",
  description:
    "Uykuya dalamama nedenleri, insomnia nedir, uyku hijyeni ve BDT-U. Uykusuzluk için psikolog, uyku bozukluğu tedavisi Beşiktaş ve online terapi — bilgilendirici rehber.",
  keywords: [
    "uykuya dalamama nedenleri",
    "insomnia nedir",
    "uyku hijyeni",
    "uykusuzluk için psikolog",
    "uyku bozukluğu tedavisi beşiktaş",
    "BDT-U",
    "uykusuzluk",
  ],
  alternates: { canonical: "/uykuya-dalamama-neden-olur" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Uykuya Dalamama ve İnsomnia | Psikolojik Çözümler",
    description:
      "Uykusuzluk, uyku hijyeni ve terapi seçenekleri — sakin ve okunaklı bilgilendirme.",
    url: `${siteConfig.url}/uykuya-dalamama-neden-olur`,
  },
};

const symptoms: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
}[] = [
  {
    icon: Moon,
    title: "Uykuya dalmakta güçlük çekmek",
    text: "Yatakta uzun süre dönüp kalma, zihnin durmaması ve bedenin gergin kalması.",
  },
  {
    icon: AlarmClock,
    title: "Gece sık sık uyanmak ve geri dalamamak",
    text: "Hafif uyarılmalara bile uyanma ve tekrar uykuya geçişte zorlanma.",
  },
  {
    icon: Sun,
    title: "Sabah çok erken uyanmak ve yorgun hissetmek",
    text: "Terminal insomnia olarak da bilinen erken uyanma ve gün boyu bitkinlik.",
  },
  {
    icon: Brain,
    title: "Gün içinde odaklanma sorunu ve sinirlilik",
    text: "Bellek, dikkat ve duygu düzenlemede zorluk; performans ve ilişkilerde yıpranma.",
  },
];

const hygieneRules: { title: string; detail: string }[] = [
  {
    title: "Mavi ışık ve ekran sınırı",
    detail:
      "Yatmadan önce telefon ve bilgisayar ekranını kısıtlamak veya gece modu kullanmak melatonin ritmini destekler.",
  },
  {
    title: "Sabit yatış / kalkış rutini",
    detail:
      "Hafta içi ve hafta sonu arasında aşırı fark olmayacak şekilde düzenli saatler uyku saatini güçlendirir.",
  },
  {
    title: "Yatak = uyku ve dinlenme",
    detail:
      "Yatakta iş, tartışma veya uzun süreli uykusuz bekleyiş yerine uykunuz gelince yatağa dönmek BDT-U ile de uyumludur.",
  },
  {
    title: "Kafein ve alkol zamanlaması",
    detail:
      "Öğleden sonra güçlü kafein ve yatışa yakın alkol uyku mimarisini bozabilir; kişisel duyarlılığa göre ayarlayın.",
  },
  {
    title: "Ortam: karanlık, serin, sessiz",
    detail:
      "Perde, kulak tıkacı veya beyaz gürültü ile uyarıları azaltmak tetikte kalmayı düşürmeye yardımcı olabilir.",
  },
];

export default function UykuyaDalamamaPage() {
  const faqJsonLd = buildUykuyaDalamamaFaqJsonLd();

  return (
    <LegalDocumentShell path="/uykuya-dalamama-neden-olur" breadcrumbLabel="Uykuya dalamama">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mt-6 rounded-2xl bg-[#f7f4ef] px-4 py-8 shadow-sm ring-1 ring-stone-200/80 md:px-8 md:py-10">
        <h1 className="font-display text-[1.65rem] font-bold leading-tight text-[#1a2f45] md:text-4xl md:leading-tight">
          Uykuya Dalamama (İnsomnia) Neden Olur? Psikolojik Çözümler ve Öneriler
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#2d3e4f] md:text-xl md:leading-relaxed">
          Uykusuzluk yalnızca “fiziksel yorgunluk” değildir; sıklıkla zihnin{" "}
          <strong className="font-semibold text-[#1a2f45]">tetikte kalma</strong> haliyle birlikte gelir.
          Endişe döngüsü uyku baskısını artırır; uykuya çabaladıkça kaçan uyku hissi güçlenebilir. Bu sayfa
          bilgilendirme sunar; tanı ve tedavi planı için uzman görüşmesi önemlidir.
        </p>

        <section className="mt-12" aria-labelledby="insomnia-belirtileri">
          <h2
            id="insomnia-belirtileri"
            className="font-display text-xl font-bold text-[#1a2f45] md:text-2xl"
          >
            İnsomnia belirtileri
          </h2>
          <ul className="mt-6 space-y-4">
            {symptoms.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-stone-200/90 bg-white/90 p-4 md:gap-5 md:p-5"
                >
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#e8eef5] text-[#1a2f45]"
                    aria-hidden
                  >
                    <Icon className="size-6" strokeWidth={1.15} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#1a2f45]">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-[#3d4f60]">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="neden-uyuyamiyoruz">
          <h2
            id="neden-uyuyamiyoruz"
            className="font-display text-xl font-bold text-[#1a2f45] md:text-2xl"
          >
            Neden uyuyamıyoruz? Psikolojik nedenler
          </h2>
          <div className="mt-5 space-y-4 text-base leading-[1.8] text-[#3d4f60] md:text-[17px]">
            <p>
              <strong className="text-[#1a2f45]">Kaygı ve aşırı düşünme (overthinking)</strong> uyku başlatma
              sistemini uyanık tutar; “uyumazsam yarın mahvolurum” düşüncesi bedende gerginlik yaratır.{" "}
              <strong className="text-[#1a2f45]">Depresyon</strong> erken uyanma veya uyku süresinde azalmayla
              örtüşebilir. <strong className="text-[#1a2f45]">Stres ve travma yanıtları</strong> gece
              kabusları veya hiperuyarılmışlık ile uyku bütünlüğünü böler.
            </p>
            <p>
              <strong className="text-[#1a2f45]">İnsomnia nedir</strong> sorusunun yanıtı bazen tıbbi
              (örneğin uyku apnesi, huzursuz bacak) veya ilaç yan etkileri ile de ilişkilidir; bu nedenle
              süreğen şikayette hekim değerlendirmesi göz ardı edilmemelidir.
            </p>
          </div>
        </section>

        <section
          className="mt-12 rounded-2xl border border-stone-200/80 bg-white/95 p-5 md:p-8"
          aria-labelledby="uyku-hijyeni"
        >
          <h2
            id="uyku-hijyeni"
            className="flex items-center gap-3 font-display text-xl font-bold text-[#1a2f45] md:text-2xl"
          >
            <Sparkles className="size-7 shrink-0 text-slate-500 md:size-8" strokeWidth={1} aria-hidden />
            Uyku hijyeni için 5 altın kural
          </h2>
          <ul className="mt-6 space-y-4">
            {hygieneRules.map((rule) => (
              <li key={rule.title} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 size-6 shrink-0 text-[#3d6b8a]"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-[#1a2f45]">{rule.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-[#3d4f60]">{rule.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="ne-zaman-uzman">
          <h2 id="ne-zaman-uzman" className="font-display text-xl font-bold text-[#1a2f45] md:text-2xl">
            Ne zaman uzman desteği alınmalı?
          </h2>
          <div className="mt-5 space-y-4 text-base leading-[1.8] text-[#3d4f60] md:text-[17px]">
            <p>
              Uykusuzluk haftalarca sürüyorsa, gündüz işlevselliğiniz ciddi düşüyorsa veya uyku korkusu
              hayatınızı kısıtlıyorsa <strong className="text-[#1a2f45]">uykusuzluk için psikolog</strong> veya
              psikiyatrist değerlendirmesi düşünülmelidir. Özellikle{" "}
              <strong className="text-[#1a2f45]">BDT-U</strong> (uykusuzluk odaklı bilişsel davranışçı terapi),
              uyarılmışlığı düşürme, uyku kısıtlaması ve bilişsel çarpıtmalar üzerine çalışmayı içerir.
            </p>
            <p>
              <strong className="text-[#1a2f45]">Uyku bozukluğu tedavisi Beşiktaş</strong> ve online seçenek
              ile yüz yüze süreç planlanabilir; tıbbi tedavi gerektiren durumlarda iş birliği esastır.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="insomnia-sss">
          <h2 id="insomnia-sss" className="font-display text-xl font-bold text-[#1a2f45] md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {uykuyaDalamamaFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-stone-200 bg-white/90 px-4 py-1 shadow-sm open:shadow-md"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 text-left font-semibold text-[#1a2f45] marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="pb-4 text-base leading-relaxed text-[#3d4f60]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="mt-12 rounded-2xl bg-gradient-to-br from-[#e4edf5] via-[#f0ebe3] to-[#f7f4ef] p-6 shadow-md ring-1 ring-stone-200/60 md:p-8"
          aria-labelledby="insomnia-cta"
        >
          <h2 id="insomnia-cta" className="font-display text-xl font-bold text-[#1a2f45] md:text-2xl">
            Uykusuz geceler kaderiniz değil
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#2d3e4f]">
            Zihninizi dinlendirmeyi öğrenmek ve kaliteli bir uykuya kavuşmak için Beşiktaş kliniğimizden
            randevu alabilirsiniz; <strong className="text-[#1a2f45]">online terapi</strong> ile de uyku
            odaklı çalışma sürdürülebilir.
          </p>
          <div className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAGroup />
          </div>
          <a
            href="/online-terapi"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-[#1a2f45] bg-white px-6 text-base font-bold text-[#1a2f45] transition-colors hover:bg-white/90"
          >
            Online terapi hakkında
          </a>
        </section>

        <p className="mt-8 flex items-start gap-2 text-sm leading-relaxed text-[#5c6b7a]">
          <Coffee className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} aria-hidden />
          <span>
            Bu içerik tıbbi tanı yerine geçmez. Şiddetli gündüz uykululuğu, solunum durması veya depresyon
            belirtileri için lütfen hekim veya acil servise başvurun.
          </span>
        </p>
      </article>
    </LegalDocumentShell>
  );
}

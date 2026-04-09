import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  Activity,
  BatteryLow,
  Brain,
  Briefcase,
  Coffee,
  Flame,
  HeartCrack,
  Moon,
  Sprout,
  TrendingDown,
  UserX,
} from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import {
  buildTukenmislikFaqJsonLd,
  tukenmislikSendromuFaqs,
} from "@/lib/tukenmislik-sendromu-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tükenmişlik Sendromu (Burnout) Nedir? Belirtileri ve Bilimsel Çerçeve | Psk. Ahmet Alparslan Sancar",
  description:
    "Tükenmişlik sendromu nedir, burnout belirtileri nelerdir? ICD-11, Maslach boyutları, mesleki stres, duygusal tükenme ve iyileşme — bilgilendirici akademik özet.",
  keywords: [
    "tükenmişlik sendromu",
    "burnout",
    "burnout belirtileri",
    "tükenmişlik belirtileri",
    "mesleki tükenmişlik",
    "duygusal tükenme",
    "Maslach",
    "iş stresi",
    "tükenmişlik tedavisi",
  ],
  alternates: { canonical: "/tukenmislik-sendromu" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Tükenmişlik Sendromu (Burnout) | Psk. Ahmet Alparslan Sancar",
    description:
      "Burnout ve tükenmişlik sendromu: belirtiler, bilimsel çerçeve ve profesyonel destek.",
    url: `${siteConfig.url}/tukenmislik-sendromu`,
  },
};

const signs: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  title: string;
  text: string;
}[] = [
  {
    icon: BatteryLow,
    title: "Sürekli enerji ve yorgunluk hissi",
    text: "Dinlensem de toparlanamama, güne zor başlama; tükenmişlik belirtileri arasında en sık başvurulanlardandır.",
  },
  {
    icon: Moon,
    title: "Uyku düzensizliği",
    text: "Uykuya dalamama, erken uyanma veya uyku kalitesinde bozulma; kronik stres ve burnout ile sık ilişkilendirilir.",
  },
  {
    icon: Brain,
    title: "Bilişsel bulanıklık ve dikkat güçlüğü",
    text: "Konsantrasyon, karar verme ve bellekte belirgin düşüş; iş performansını etkileyebilir.",
  },
  {
    icon: HeartCrack,
    title: "Duygusal tükenme",
    text: "Maslach çerçevesinde merkezi boyutlardan biri; duygusal kaynakların tükenmiş olduğu hissi.",
  },
  {
    icon: Briefcase,
    title: "İşe veya role karşı kinizm",
    text: "Önceden anlamlı bulunan görevlere karşı soğuma, alaycı tutum veya mesafeli davranış (duyarsızlaşma boyutuyla örtüşebilir).",
  },
  {
    icon: TrendingDown,
    title: "Kişisel başarı duygusunda azalma",
    text: "“Yeterince iyi değilim” algısı, öz-yeterlikte düşüş; üç boyutlu modelde üçüncü bileşen olarak özetlenir.",
  },
  {
    icon: Flame,
    title: "İrritabilite ve öfke dalgaları",
    text: "Küçük uyaranlara aşırı tepki; stres hormonları ve uyku eksikliği ile birleşebilir.",
  },
  {
    icon: Activity,
    title: "Bedensel gerginlik ve somatik şikayetler",
    text: "Baş ağrısı, boyun-sırt ağrısı, çarpıntı hissi gibi belirtiler tıbbi değerlendirme gerektirebilir.",
  },
  {
    icon: UserX,
    title: "Sosyal çekilme",
    text: "Arkadaşlık ve aile etkinliklerinden uzaklaşma; yeniden şarj olma kapasitesinin azalmasıyla bağlantılı olabilir.",
  },
  {
    icon: Coffee,
    title: "Motivasyon ve ilgi kaybı",
    text: "Hobilerden zevk alamama, iş dışı aktivitelere zaman ayıramama; depresyon örüntüsüyle örtüşebilir—ayırıcı değerlendirme önemlidir.",
  },
];

export default function TukenmislikSendromuPage() {
  const faqJsonLd = buildTukenmislikFaqJsonLd();

  return (
    <LegalDocumentShell path="/tukenmislik-sendromu" breadcrumbLabel="Tükenmişlik sendromu">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mt-6">
        <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-[2.125rem] md:leading-tight">
          Tükenmişlik Sendromu (Burnout): Belirtileri ve Bilimsel Çerçeve
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-800">
          <strong className="font-semibold text-brand-navy">Tükenmişlik sendromu</strong> ve yaygın İngilizce
          karşılığı <strong className="font-semibold text-brand-navy">burnout</strong>, modern iş yaşamında sık
          araştırılan ve klinikte sık başvuru nedeni olan bir stres örüntüsüdür. Bu sayfa tanı koymaz; akademik
          ve sınıflama çerçevesinde özet bilgi sunar.
        </p>

        <section className="mt-10" aria-labelledby="tanim-heading">
          <h2 id="tanim-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Tükenmişlik sendromu nedir?
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              Literatürde burnout; uzun süreli, yönetilmesi zor iş veya rol talepleri sonucunda gelişen ve{" "}
              <strong>duygusal tükenme</strong>, <strong>kinik veya uzak bir iş tutumu</strong> ve{" "}
              <strong>kişisel başarı algısında düşüş</strong> ile karakterize edilen bir sendrom olarak
              tanımlanır. Bu üç bileşen, Maslach ve arkadaşlarının yaygın kuramsal modelinde öne çıkar ve
              araştırmalarda sık kullanılır.
            </p>
            <p>
              <strong>Dünya Sağlık Örgütü (WHO) ICD-11</strong> sınıflamasında burnout,{" "}
              <strong>mesleki bağlamda</strong> tanımlanan bir fenomen olarak yer alır; kronik iş stresinin
              başarılı bir şekilde yönetilememesi sonucu ortaya çıktığı vurgulanır. Tanı ve ayırıcı değerlendirme
              için bireysel klinik görüşme ve gerektiğinde çok disiplinli yaklaşım esastır.
            </p>
            <p>
              <strong>Burnout belirtileri</strong> ile major depresyon, anksiyete bozuklukları veya somatik
              rahatsızlıklar örtüşebilir; bu nedenle öz-değerlendirme yerine uzman değerlendirmesi önerilir.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="boyutlar-heading">
          <h2 id="boyutlar-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Üç boyutlu çerçeve: duygusal tükenme, duyarsızlaşma, kişisel başarı
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              <strong>Duygusal tükenme:</strong> “Artık dayanacak gücüm kalmadı” hissi, enerji rezervuarının
              boşalması. <strong>Duyarsızlaşma / depersonalizasyon (iş bağlamında):</strong> Hizmet verilen
              kişilere veya iş süreçlerine karşı mesafe ve soğukluk.{" "}
              <strong>Kişisel başarıda düşüş:</strong> Verimlilik ve yeterlilik algısında belirgin azalma.
            </p>
            <p>
              Bu boyutlar bireyde farklı düzeylerde bir arada görülebilir; <strong>mesleki tükenmişlik</strong>{" "}
              terimi de aynı çerçeveyi işaret eder. Ölçekler (ör. Maslach Envanteri) araştırma ve tarama
              amaçlıdır, tek başına tanı aracı değildir.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="belirtiler-heading">
          <h2 id="belirtiler-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Tükenmişlik (burnout) belirtileri: 10 yaygın işaret
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
            Aşağıdaki liste tanı kriteri değildir; <strong>tükenmişlik belirtileri</strong> hakkında farkındalık
            için özetlenmiştir.
          </p>
          <ol className="mt-8 space-y-5">
            {signs.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={`${item.title}-${index}`}
                  className="flex gap-4 rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 md:gap-5 md:p-5"
                >
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-navy shadow-sm ring-1 ring-slate-200/80 md:size-12"
                    aria-hidden
                  >
                    <Icon className="size-5 text-slate-600 md:size-6" strokeWidth={1.25} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-display text-base font-bold text-brand-navy md:text-lg">
                      <span className="mr-2 text-slate-500 tabular-nums">{index + 1}.</span>
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mt-12" aria-labelledby="risk-heading">
          <h2 id="risk-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Risk faktörleri ve koruyucu stratejiler
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              <strong>İş stresi</strong> kaynakları: aşırı iş yükü, zaman baskısı, rol belirsizliği, düşük özerklik,
              adaletsizlik algısı ve zayıf örgütsel destek burnout riskini artırabilir. Duygusal emek yoğun
              meslekler (sağlık, eğitim, müşteri hizmetleri) literatürde sık incelenir.
            </p>
            <p>
              Koruyucu tarafta: net <strong>iş-yaşam sınırları</strong>, mikro molalar, fiziksel aktivite, uyku
              hijyeni, sosyal bağlar ve gerektiğinde görev yeniden düzenleme önemlidir. Bu öneriler tıbbi tedavi
              yerine geçmez.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="terapi-heading">
          <h2
            id="terapi-heading"
            className="flex items-start gap-3 font-display text-xl font-bold text-brand-navy md:text-2xl"
          >
            <Sprout className="mt-1 size-7 shrink-0 text-slate-500 md:size-8" strokeWidth={1} aria-hidden />
            <span>Terapi ve iyileşme süreci</span>
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              Bilişsel davranışçı terapi (BDT) ve stres yönetimi teknikleri; düşünce-davranış döngülerini,
              kaçınma ve mükemmeliyetçilik gibi sürdürücü faktörleri çalışmada kullanılabilir.{" "}
              <strong>Tükenmişlik sendromu tedavisi</strong> kişinin yaşam bağlamına göre kişiselleştirilir;
              eşlik eden depresyon veya anksiyete varsa bütüncül plan gerekir.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="sss-heading">
          <h2 id="sss-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            Burnout ve tükenmişlik sendromu hakkında sık sorulan soruların kısa yanıtları.
          </p>
          <div className="mt-6 space-y-3">
            {tukenmislikSendromuFaqs.map((item) => (
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
          aria-labelledby="burnout-cta-heading"
        >
          <h2
            id="burnout-cta-heading"
            className="font-display text-xl font-bold text-brand-navy md:text-2xl"
          >
            Tükenmişlikle başa çıkmak için profesyonel destek
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
            Beşiktaş kliniğimde veya <strong>online terapi</strong> ile stres, sınırlar ve duygusal yük
            üzerinde çalışabiliriz. İlk adım için aşağıdaki butonlarla iletişime geçebilirsiniz.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="min-w-[min(100%,280px)] max-w-md flex-1">
              <CTAGroup />
            </div>
            <a
              href="/online-terapi"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-lg border-2 border-brand-navy bg-white px-6 py-3 text-center text-base font-bold text-brand-navy shadow-sm transition-colors hover:bg-white/90"
            >
              Online terapi sayfası
            </a>
          </div>
        </section>

        <p className="mt-8 text-xs leading-relaxed text-slate-800">
          Bu içerik bilgilendirme amaçlıdır; tıbbi veya psikiyatrik tanı yerine geçmez. Acil durumda 112’yi
          arayınız.
        </p>
      </article>
    </LegalDocumentShell>
  );
}

import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  Ban,
  CloudLightning,
  EyeOff,
  Frown,
  HeartCrack,
  Lock,
  MessageSquareWarning,
  Scale,
  ShieldAlert,
  Sprout,
  UserX,
} from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildToksikIliskiFaqJsonLd, toksikIliskiFaqs } from "@/lib/toksik-iliski-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Toksik İlişki Nedir? Belirtileri ve Çözümleri | Psk. Ahmet Alparslan Sancar",
  description:
    "Toksik ilişki nedir, toksik ilişki belirtileri nelerdir? Gaslighting ne demek, love bombing ve manipülasyon teknikleri. Duygusal istismar, narsist ilişki ve sağlıklı sınırlar hakkında bilgilendirici rehber.",
  keywords: [
    "toksik ilişki nedir",
    "toksik ilişki belirtileri",
    "manipülasyon teknikleri",
    "gaslighting ne demek",
    "narsist ilişki",
    "sağlıklı sınırlar",
    "duygusal istismar",
    "love bombing",
  ],
  alternates: { canonical: "/toksik-iliski-nedir" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Toksik İlişki Nedir? Belirtileri ve Kurtulma | Psk. Ahmet Alparslan Sancar",
    description:
      "Toksik ilişki belirtileri, gaslighting, manipülasyon ve iyileşme yolları — genel bilgilendirme.",
    url: `${siteConfig.url}/toksik-iliski-nedir`,
  },
};

const signs: { icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>; title: string; text: string }[] = [
  {
    icon: MessageSquareWarning,
    title: "Sürekli eleştiri ve küçümseme",
    text: "Başarınız, görünümünüz veya duygularınız sık sık aşağılanır; pozitif geri bildirim ise koşullu veya manipülatif olabilir.",
  },
  {
    icon: Frown,
    title: "Suçluluk ve utanç ile yönetme",
    text: "İhtiyaç duyduğunuzda ‘bencil’ veya ‘hassas’ olduğunuz söylenerek ihtiyaçlarınız iptal edilir; duygusal istismar örüntüsü güçlenebilir.",
  },
  {
    icon: UserX,
    title: "Sosyal izolasyon baskısı",
    text: "Aileniz, arkadaşlarınız veya iş çevreniz ‘kötü etki’ olarak çerçevelenerek yalnızlaşmanız istenebilir.",
  },
  {
    icon: Lock,
    title: "Kontrol ve denetim",
    text: "Mesajlar, harcamalar veya günlük planlar üzerinde aşırı müdahale; özerkliğinizi daraltan kurallar.",
  },
  {
    icon: EyeOff,
    title: "Gerçeklik algısının sarsılması (gaslighting)",
    text: "Yaşadıklarınız inkâr edilir veya çarpıtılır; gaslighting ne demek sorusunun pratikte sık görülen yüzüdür.",
  },
  {
    icon: CloudLightning,
    title: "Duygusal iniş çıkışlar ve tutarsızlık",
    text: "Bir gün aşırı ilgi (love bombing), ertesi gün soğukluk; güven ve öngörülebilirlik zedelenir.",
  },
  {
    icon: ShieldAlert,
    title: "Tehdit, aşağılama veya korkutma",
    text: "Ayrılık, itibar veya güvenlik tehditleri; duygusal istismarın ciddi biçimlerinden biridir.",
  },
  {
    icon: Scale,
    title: "Çifte standart",
    text: "Kendisine tanınan haklar sizin için geçerli tutulmaz; manipülasyon teknikleri arasında sık anlatılır.",
  },
  {
    icon: Ban,
    title: "Duygularınızın sürekli geçersiz kılınması",
    text: "Üzüntü veya korkunuz ‘abartı’ sayılır; empati yerine suçlama gelir.",
  },
  {
    icon: HeartCrack,
    title: "İlişkide sürekli tükenmişlik",
    text: "Kendinizi sürekli ‘yetersiz’ veya ‘yorgun’ hissediyor; toksik ilişki belirtileri arasında en sık başvuru nedenlerindendir.",
  },
];

export default function ToksikIliskiPage() {
  const faqJsonLd = buildToksikIliskiFaqJsonLd();

  return (
    <LegalDocumentShell path="/toksik-iliski-nedir" breadcrumbLabel="Toksik ilişki">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <article className="mt-6">
        <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-[2.125rem] md:leading-tight">
          Toksik İlişki Nedir? Belirtileri ve Kurtulma Yolları
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-800">
          <strong className="font-semibold text-brand-navy">Toksik ilişki nedir</strong> sorusu, yakın
          ilişkide güven ve saygı yerine kontrol, küçümseme veya{" "}
          <strong className="font-semibold text-brand-navy">duygusal istismar</strong> örüntülerinin
          baskın olduğu dinamikleri anlamak isteyen danışanlar tarafından sık sorulur. Bu metin bilgilendirme
          amaçlıdır; tanı veya hukuki danışmanlık yerine geçmez.
        </p>

        <section className="mt-10" aria-labelledby="tanim-heading">
          <h2 id="tanim-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Toksik ilişki nedir?
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              Toksik ilişki; partner, aile veya yakın çevre ilişkilerinde karşılıklı güvenli bağ yerine
              sürekli gerilim üreten etkileşim kalıplarını ifade eder. Tek bir tartışma değil,{" "}
              <strong>zaman içinde tekrarlayan</strong> küçümseme, kontrol, inkâr veya korkutma gibi
              davranışların bir araya gelmesi söz konusudur. <strong>Toksik ilişki belirtileri</strong>{" "}
              kişiden kişiye değişir; önemli olan kendi güvenliğiniz ve öz-değerinizin korunmasıdır.
            </p>
            <p>
              <strong>Narsist ilişki</strong> ile toksik ilişki kavramları bazen birlikte anılır; ancak
              kişilik yapıları yalnızca klinik görüşmeyle değerlendirilir. Etiketlemeden önce sınırlarınızı
              ve ihtiyaçlarınızı netleştirmek, gerektiğinde{" "}
              <strong className="text-brand-navy">profesyonel destek</strong> almak en sağlıklı adımdır.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="belirtiler-heading">
          <h2 id="belirtiler-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Toksik ilişkinin 10 net belirtisi
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
            Aşağıdaki maddeler tanı listesi değildir; farkındalık için özetlenmiştir. Birkaçını yoğun
            yaşıyorsanız destek almayı düşünebilirsiniz.
          </p>
          <ol className="mt-8 space-y-5">
            {signs.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
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

        <section className="mt-12" aria-labelledby="psikoloji-heading">
          <h2 id="psikoloji-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Psikolojik etkiler: gaslighting, love bombing ve manipülasyon teknikleri
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              <strong>Gaslighting ne demek</strong> sorusunun yanıtı, gerçeklik algınızın sürekli
              sorgulanmasıdır: olaylar inkâr edilir, duygularınız küçümsenir, hatırlarınız “yanlış”
              ilan edilir. Bu örüntü zamanla özgüven kaybına ve kaygıya katkıda bulunabilir.
            </p>
            <p>
              <strong>Love bombing</strong>; aşırı ilgi ve hızlı yakınlaşma ile bağ oluşturduktan sonra
              kontrol veya geri çekilme ile dengeyi bozma dinamiği olarak anlatılır.{" "}
              <strong>Manipülasyon teknikleri</strong> arasında suçluluk yüklemek, sessiz kalma, tehdit ve
              sosyal izolasyon da yaygındır. Bu başlıklar <strong>duygusal istismar</strong> çerçevesinde
              ele alınır.
            </p>
          </div>
        </section>

        <section
          className="mt-10 rounded-2xl border border-slate-200 bg-[#f0f4f8] p-5 shadow-sm md:p-7"
          aria-labelledby="gaslight-test-heading"
        >
          <h2
            id="gaslight-test-heading"
            className="font-display text-lg font-bold text-[#1e3a4c] md:text-xl"
          >
            Kendinizi test edin: Partneriniz iletişiminde gaslighting sıklığı
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-800 md:text-[15px] md:leading-relaxed">
            Aşağıdaki cümleler <strong>bilgilendirme</strong> içindir; kesin ölçüm veya tanı aracı değildir.
            Partneriniz sizinle olan iletişiminde ne sıklıkla benzer ifadeleri kullanıyor? Sık tekrarlanan
            örüntüler, <strong>toksik ilişki belirtileri</strong> ve <strong>gaslighting</strong> açısından
            profesyonel görüş için bir işaret olabilir.
          </p>
          <ul className="mt-5 space-y-3 rounded-xl bg-white/90 p-4 text-sm leading-relaxed text-slate-800 ring-1 ring-slate-200/80 md:p-5 md:text-[15px]">
            <li className="flex gap-2">
              <span className="font-semibold text-[#1e3a4c]" aria-hidden>
                1.
              </span>
              <span>“Aslında hiç öyle demedim; sen uyduruyorsun veya abartıyorsun.”</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-[#1e3a4c]" aria-hidden>
                2.
              </span>
              <span>“Hassassın; her şeyi kişisel alıyorsun, sorun sende.”</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-[#1e3a4c]" aria-hidden>
                3.
              </span>
              <span>“Kimse sana inanmaz; aklını kaçırmış gibisin.”</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-[#1e3a4c]" aria-hidden>
                4.
              </span>
              <span>“O an öyle olmadı; sen yanlış hatırlıyorsun.” (Olay netken sürekli inkâr.)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-[#1e3a4c]" aria-hidden>
                5.
              </span>
              <span>“Sen olmasan daha mutlu olurdum; hep senin yüzünden böyle.”</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-700">
            Bu tür cümleler <strong>manipülasyon teknikleri</strong> ve duygusal istismar bağlamında
            sıkça çalışılır. Kendinizi güvende hissetmiyorsanız yerel destek hatları ve acil durumlarda 112
            hattını kullanın.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="iyilesme-heading">
          <h2 id="iyilesme-heading" className="flex items-start gap-3 font-display text-xl font-bold text-brand-navy md:text-2xl">
            <Sprout
              className="mt-1 size-7 shrink-0 text-slate-500 md:size-8"
              strokeWidth={1}
              aria-hidden
            />
            <span>İyileşme süreci ve sağlıklı sınırlar</span>
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              <strong>Sağlıklı sınırlar</strong>; net, tutarlı ve uygulanabilir ifadelerle ihtiyaçlarınızı
              söylemeyi, kabul edilemez davranışlara dur demeyi ve gerektiğinde fiziksel veya duygusal mesafe
              koymayı içerir. Terapide öz-değer, iletişim becerileri ve güvenli ilişki örüntüleri üzerinde
              çalışılabilir.
            </p>
            <p>
              İyileşme; bazen ilişkiyi yeniden çerçevelemek, bazen güvenli ayrılık ve yas sürecini
              işlemek anlamına gelir. <strong>Narsist ilişki</strong> veya yoğun kontrol dinamiklerinde
              profesyonel eşlik, kararlarınızı yargılamadan netleştirmenize yardımcı olabilir.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="sss-heading">
          <h2 id="sss-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            Toksik ilişki, gaslighting ve sınırlar hakkında sık yöneltilen soruların kısa yanıtları.
          </p>
          <div className="mt-6 space-y-3">
            {toksikIliskiFaqs.map((item) => (
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
          className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-[#e8eef4] via-brand-sky/90 to-white p-6 shadow-md md:p-8"
          aria-labelledby="toksik-cta-heading"
        >
          <h2
            id="toksik-cta-heading"
            className="font-display text-xl font-bold text-brand-navy md:text-2xl"
          >
            Profesyonel desteğe mi ihtiyacınız var?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
            Beşiktaş kliniğimizde veya online olarak yanınızdayız. İlk adım için randevu veya kısa bir ön
            görüşme talebi oluşturabilirsiniz; <strong>toksik ilişki</strong> ve{" "}
            <strong>sağlıklı sınırlar</strong> üzerine terapötik çerçevede birlikte çalışabiliriz.
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
          Acil risk veya şiddet durumunda 112&apos;yi arayınız. Bu içerik tıbbi/psikiyatrik tanı veya hukuki
          tavsiye niteliği taşımaz.
        </p>
      </article>
    </LegalDocumentShell>
  );
}

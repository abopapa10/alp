import type { Metadata } from "next";
import { AlertTriangle, BookOpen, ShieldCheck } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildNarsizmFaqJsonLd, narsizmFaqs } from "@/lib/narsizm-faq";
import { siteConfig } from "@/lib/site";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Narsizm Nedir? Freud, Kohut ve Kernberg ile Akademik Rehber | Psk. Ahmet Alparslan Sancar",
  description:
    "Narsizm nedir? Heinz Kohut narsizm kuramı, narsistik kişilik bozukluğu, narsistik yaralanma ve narsist belirtileri üzerine bilimsel ve kapsamlı rehber.",
  keywords: [
    "narsizm nedir",
    "narsist belirtileri",
    "heinz kohut narsizm",
    "narsistik kişilik bozukluğu",
    "narsistik yaralanma nedir",
  ],
  alternates: { canonical: "/narsizm-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Narsizm Nedir? Kendilik Regülasyonu ve Patolojik Narsizm",
    description:
      "Freud (1914), Kohut (1971) ve Kernberg (1975) perspektifleriyle narsizmi akademik derinlikte ele alan rehber.",
    url: `${siteConfig.url}/narsizm-ne-demek`,
  },
};

export default function NarsizmNeDemekPage() {
  const faqJsonLd = buildNarsizmFaqJsonLd();

  return (
    <LegalDocumentShell path="/narsizm-ne-demek" breadcrumbLabel="Narsizm nedir?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Narsizm Nedir?
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          Narsizm, yalnızca "kendini beğenmişlik" değildir; daha derinde <strong className="text-brand-navy">kendilik
          regülasyonu</strong> sorunudur. Kişinin özdeğerini sürdürebilmek için dış onaya, hayranlığa ve ilişkisel
          kontrol stratejilerine aşırı ihtiyaç duymasıyla karakterize olabilir. Bu yazıda narsizmi, Freud'un libidinal
          modelinden başlayarak Heinz Kohut'un kendilik psikolojisi ve Otto Kernberg'in nesne ilişkileri kuramı
          üzerinden akademik bir çerçevede ele alacağım.
        </p>

        <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
          Arama motorlarında "narsizm nedir" diye soran çoğu kişi, yalnızca tanım değil; yaşadığı ilişkinin
          neden bu kadar yorucu olduğunu anlamak ister. Bu nedenle hedefimiz etiketlemek değil; örüntüyü anlamak,
          sınırları korumak ve gerektiğinde profesyonel destekle dönüşüm alanı açmaktır.
        </p>

        <section className="mt-10" aria-labelledby="freud-birincil-narsizm">
          <h2 id="freud-birincil-narsizm" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Freud ve birincil narsizm: Libidinal enerji nesneden egoya döndüğünde
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Freud, "Narsisizm Üzerine Bir Giriş" metninde (1914/1957) narsizmi, libidinal yatırımın nesnelerden
            (öteki insanlardan) egoya yönelmesi bağlamında tartışır. Birincil narsizm, gelişimin erken dönemlerinde
            benliğin doğal örgütlenme basamağı olarak düşünülebilir; sorun, bu yapının katılaşması ve gerçeklik
            sınamalarıyla esneyememesidir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Klinik düzlemde bu, kişinin kırılgan özdeğerini dış hayranlıkla regüle etmeye çalışması, eleştiride
            orantısız çökkünlük veya öfke yaşaması ve ilişkileri karşılıklılık yerine özsaygı desteği için kullanması
            şeklinde görünebilir. Freud'un çerçevesi, narsizmi ahlaki kusurdan çok ruhsal ekonomi sorunu olarak
            anlamamıza yardım eder.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="kohut-kendilik-psikolojisi">
          <h2 id="kohut-kendilik-psikolojisi" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Heinz Kohut ve kendilik psikolojisi: Narsizm bir gelişimsel duraklama mı?
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Kohut'a göre narsistik örüntülerin merkezi, "kötü niyet" değil; yeterince bütünleşememiş kendilik
            yapısıdır (Kohut, 1971). Çocuk, sağlıklı özdeğer gelişimi için bakım verenle belirli kendilik deneyimlerine
            ihtiyaç duyar. Bu ihtiyaçlar kronik olarak karşılanmadığında narsistik yaralanma gelişebilir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Kohut'un üç temel kendilik ihtiyacı</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li><strong>Aynalama (mirroring):</strong> "Görüldüm, değerlendirildim" deneyimi</li>
            <li><strong>İdealleştirme:</strong> Güçlü ve güvenilir bir figüre yaslanabilme</li>
            <li><strong>İkizleşme (twinship):</strong> "Biri bana benziyor, yalnız değilim" hissi</li>
          </ul>

          <div className="mt-5 rounded-xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/80 to-white p-5">
            <h4 className="font-display text-base font-bold text-brand-navy md:text-lg">Uzman Notu: Aynalama (Mirroring) ne demek?</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-[15px] md:leading-relaxed">
              Basitçe, çocuğun duygusu ve başarısının bakım veren tarafından "senin sevincini görüyorum",
              "üzgün olduğunu fark ettim" gibi tutarlı bir biçimde karşılanmasıdır. Aynalama eksikse kişi ileriki
              yaşamda özdeğerini içeriden değil, sürekli dış onaydan kurmaya çalışabilir.
            </p>
          </div>

          <p className="mt-5 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Kohut'un modelinde narsistik birey çoğu zaman grandiyöz görünse de içeride kırılgan, utanca açık ve
            parçalanma kaygısı taşıyan bir kendilik örgütlenmesi barındırır. Terapide temel hedef, bu kırılgan
            yapıyı empatik bir ilişki içinde daha bütünlüklü hale getirmektir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="kernberg-patolojik-narsizm">
          <h2 id="kernberg-patolojik-narsizm" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Otto Kernberg ve patolojik narsizm: Eksiklikten çok çatışma modeli
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Kernberg, narsizmi yalnızca gelişimsel eksiklik değil; yoğun iç çatışmaların savunma örgütlenmesi
            olarak ele alır (Kernberg, 1975). Bu modelde idealizasyon-değersizleştirme, bölme (splitting),
            kıskançlık ve saldırganlığın düzenlenememesi daha merkezi yer tutar. Kişi, kırılgan benliği korumak
            için grandiyöz bir kendilik kabuğu geliştirebilir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Kohut ve Kernberg farkı (özet tablo)</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Başlık</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Heinz Kohut</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Otto Kernberg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Temel sorun</td>
                  <td className="px-4 py-3">Gelişimsel eksiklik / kendilik kırılganlığı</td>
                  <td className="px-4 py-3">İç çatışma / patolojik savunma örgütlenmesi</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Klinik vurgu</td>
                  <td className="px-4 py-3">Empatik aynalama ve kendilik bütünleşmesi</td>
                  <td className="px-4 py-3">Bölme, idealizasyon-değersizleştirme, saldırganlık</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Terapötik odak</td>
                  <td className="px-4 py-3">Kendilik işlevlerini güçlendirme</td>
                  <td className="px-4 py-3">Savunma analizleri ve nesne ilişkileri entegrasyonu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="saglikli-patolojik-narsizm">
          <h2 id="saglikli-patolojik-narsizm" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sağlıklı narsisizm vs. patolojik narsisizm
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Her narsistik yatırım patolojik değildir. Sağlıklı narsisizm; gerçekçi özgüven, hedef koyma, üretkenlik
            ve yaratıcılık için gereklidir. Sorun, özdeğerin tek kaynağının dış hayranlık haline gelmesi ve eleştiri
            karşısında bütünlüğün hızla dağılmasıdır.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Sağlıklı narsisizmde kişi hem kendini önemser hem ötekinin ayrı bir özne olduğunu kabul eder. Patolojik
            narsizmde ise ilişki çoğu zaman "ayna" ilişkisine döner: öteki, kişinin benlik düzenlemesi için araçsallaşır.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="dsm-tani">
          <h2 id="dsm-tani" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Klinik belirtiler ve DSM-5 perspektifi: Dıştaki grandiyözlük, içteki kırılganlık
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            DSM-5-TR çerçevesinde narsistik kişilik bozukluğu; grandiyözite, hayranlık ihtiyacı ve empati zorlukları
            ekseninde tanımlanır. Ancak klinik odada yalnızca dış davranışa bakmak yeterli değildir. Birçok vakada
            görünür kibirin altında değersizlik korkusu, boşluk hissi, utanç hassasiyeti ve narsistik yaralanma sonrası
            çöküş/öfke döngüleri bulunur.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Bu nedenle "narsist belirtileri" listesini mekanik bir check-list gibi kullanmak yanıltıcı olabilir.
            Tanı, uzunlamasına örüntü, işlev kaybı, ilişkisel işleyiş ve ayırıcı değerlendirme ile konur. Özellikle
            travma, bipolar spektrum, madde kullanımı veya başka kişilik örgütlenmeleriyle karışabileceği için
            uzman muayenesi şarttır.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="narsistik-yaralanma">
          <h2 id="narsistik-yaralanma" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Narsistik yaralanma nedir?
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Narsistik yaralanma, kişinin ideal benlik kurgusunun eleştiri, reddedilme, başarısızlık veya statü kaybı
            gibi durumlarla sarsılması sonucu yaşadığı yoğun kırılganlık halidir. Bu durumda iki uç tepki görülebilir:
            (1) dışa dönük narsistik öfke, küçümseme, suçlama; (2) içe çekilme, utanç, çökkünlük ve değersizlik.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Klinik çalışmada amaç, yaralanma anlarını "karakter kusuru" diye yargılamak değil; tetikleyici-belirti-
            savunma zincirini fark edip daha esnek düzenleme yolları geliştirmektir.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-amber-200/90 bg-amber-50/90 p-5" aria-labelledby="uyari">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 size-6 shrink-0 text-amber-700" aria-hidden />
            <div>
              <h2 id="uyari" className="font-display text-lg font-bold text-brand-navy md:text-xl">Önemli klinik uyarı</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-[15px] md:leading-relaxed">
                Bu içerik eğitim amaçlıdır; çevrenizdeki bir kişiye tanı koymak için kullanılamaz. İlişkide şiddet,
                tehdit, ekonomik kontrol veya dijital takip varsa önce güvenlik planı gerekir. Acil risk durumunda
                112'yi arayın.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8" aria-labelledby="cta">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 size-7 shrink-0 text-brand-navy" aria-hidden />
            <div>
              <h2 id="cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                Narsistik örüntüler terapide değişebilir
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                Narsistik yapıların dönüşümü mümkündür; ancak bu süreç kısa "taktik" önerilerden çok, güvenli bir
                terapötik ilişkide uzunlamasına çalışma gerektirir. Beşiktaş'taki kliniğimde ve online seanslarda,
                kendilik regülasyonu, ilişki sınırları, empati kapasitesi ve narsistik yaralanma döngülerini birlikte
                çalışıyoruz.
              </p>
              <div className="mt-6 max-w-md">
                <CTAGroup />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="faq">
          <h2 id="faq" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {narsizmFaqs.map((item) => (
              <details key={item.question} className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md">
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

        <section className="mt-10" aria-labelledby="kaynakca">
          <h2 id="kaynakca" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kaynakça (APA)
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            <li>American Psychiatric Association. (2022). Diagnostic and statistical manual of mental disorders (5th ed., text rev.; DSM-5-TR). APA Publishing.</li>
            <li>Freud, S. (1957). On narcissism: An introduction. In J. Strachey (Ed. & Trans.), The standard edition (Vol. 14, pp. 67-102). Hogarth Press. (Original work published 1914)</li>
            <li>Kernberg, O. F. (1975). Borderline conditions and pathological narcissism. Jason Aronson.</li>
            <li>Kohut, H. (1971). The analysis of the self. International Universities Press.</li>
            <li>Kohut, H. (1977). The restoration of the self. International Universities Press.</li>
            <li>Ronningstam, E. (2016). Pathological narcissism and narcissistic personality disorder: Recent research and clinical implications. Current Behavioral Neuroscience Reports, 3, 34-42.</li>
          </ul>
        </section>
      </article>
    </LegalDocumentShell>
  );
}

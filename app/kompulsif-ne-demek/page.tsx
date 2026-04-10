import type { Metadata } from "next";
import { Brain, BookOpen } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildKompulsifFaqJsonLd, kompulsifFaqs } from "@/lib/kompulsif-faq";
import { siteConfig } from "@/lib/site";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Kompulsif Ne Demek? Obsesyon ve Kompulsiyon Farkı | Psk. Ahmet Alparslan Sancar",
  description:
    "Kompulsif ne demek? Obsesif ve kompulsif farkı, kompulsif davranış örnekleri, OKB savunma mekanizmaları ve nörobiyolojik temel üzerine bilimsel rehber.",
  keywords: [
    "kompulsif ne demek",
    "obsesif ve kompulsif farkı",
    "kompulsif davranış örnekleri",
    "okb savunma mekanizmaları",
    "takıntı ve zorlantı nedir",
  ],
  alternates: { canonical: "/kompulsif-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Kompulsif Ne Demek? OKB'de Takıntı ve Zorlantı Rehberi",
    description:
      "Obsesyon-kompulsiyon ayrımı, Freud ve Salkovskis kuramı, Brain Lock modeli ve ERP tedavisi üzerine kapsamlı içerik.",
    url: `${siteConfig.url}/kompulsif-ne-demek`,
  },
};

export default function KompulsifNeDemekPage() {
  const faqJsonLd = buildKompulsifFaqJsonLd();

  return (
    <LegalDocumentShell path="/kompulsif-ne-demek" breadcrumbLabel="Kompulsif ne demek?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Kompulsif Ne Demek? Obsesyon ve Kompulsiyon Döngüsünü Bilimsel Olarak Anlamak
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="text-brand-navy">Kompulsif ne demek</strong> sorusunu soran pek çok kişi aslında
          "Aklıma gelen düşünceler normal mi?" ve "Bu ritüeller neden durmuyor?" sorularına yanıt arıyor. OKB ve
          kaygı bozukluklarıyla çalışan bir klinik psikolog olarak bu metinde, takıntı-zorlantı döngüsünü suçlayıcı
          olmayan, bilimsel ve anlaşılır bir çerçevede ele alacağım.
        </p>

        <section className="mt-10" aria-labelledby="kavramsal-ayrim">
          <h2 id="kavramsal-ayrim" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Obsesyon ve kompulsiyon ayrımı: Döngünün kalbi
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            <strong>Obsesyon</strong>, kişinin istemsiz gelen, benliğine yabancı bulduğu, çoğu zaman tehdit içerikli
            düşünce, imge veya dürtüleridir. <strong>Kompulsiyon</strong> ise bu obsesyonun yarattığı kaygıyı azaltmak
            için yapılan ritüel niteliğindeki davranış veya zihinsel eylemdir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Buradaki kritik ilke: <strong>düşünce eylemin provası değildir</strong>. Aklımıza bir düşünce gelmesi,
            onu yapacağımız anlamına gelmez. Sorun, düşüncenin varlığı değil; düşünceye atfedilen tehdit değeri ve
            tehdidi "nötralize etmek" için geliştirilen kompulsif yanıtlardır.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Snippet için kısa yanıt</h3>
          <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 md:text-base">
            <strong>Takıntı (obsesyon)</strong>, istemsiz ve rahatsız edici düşüncedir; <strong>zorlantı (kompulsiyon)</strong>
            ise bu düşüncenin kaygısını azaltmak için yapılan ritüeldir. Kısa rahatlama sağlasa da uzun vadede döngüyü
            güçlendirir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="freud-okb">
          <h2 id="freud-okb" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Psikanalitik bakış: Sigmund Freud ve zorlantı nevrozu
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Freud, OKB'ye karşılık gelen tabloyu "zorlantı nevrozu" başlığı altında incelemiş ve özellikle çatışmalı
            dürtülerin savunmalarla düzenlenmesine odaklanmıştır (Freud, 1909/1955). "Fare Adam" vakasında görüldüğü
            gibi kişi, kabul edemediği dürtü ve fantezilerle baş etmek için düşünceyi duygudan ayıran, katı ve ritüelize
            savunmalara yönelebilir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">
            Duygunun yalıtılması (isolation of affect)
          </h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Kişi düşünceyi bilişsel olarak ifade eder ama o düşünceye bağlı duyguyu hissedemez ya da bastırır.
            Duygudan kopuk bir zihinsellik, ritüel davranışlarla "kontrol" hissi aramaya zemin hazırlayabilir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">
            Karşıt tepki geliştirme (reaction formation)
          </h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Kabul edilmesi zor dürtülerin tam tersi yönde aşırı tutum geliştirilir. Örneğin agresif dürtülerden
            yoğun kaygı duyan kişi, aşırı kuralcılık veya ahlaki katılık geliştirebilir. Freud'un anal dönem
            saplanmalarıyla ilişkilendirdiği kontrol, düzen ve katılık temaları burada kısaca anılabilir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="bdt-salkovskis">
          <h2 id="bdt-salkovskis" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Bilişsel davranışçı yaklaşım: Beck'ten Salkovskis'e
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            BDT perspektifinde istemsiz düşünceler herkesin zihnine gelebilir. Farkı yaratan, bu düşüncelerin nasıl
            değerlendirildiğidir. Beck'in bilişsel modelinin OKB'ye uyarlanmış biçiminde, Paul Salkovskis (1985)
            özellikle <strong>aşırı sorumluluk algısı</strong>na dikkat çeker: "Bu düşünce bende olduğuna göre, olumsuz
            sonuçtan ben sorumluyum" inancı kompulsiyonları tetikler.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Bu nedenle kişi, düşünceyi nötralize etmek için kontrol etme, yıkama, tekrar etme, zihinden dua sayma
            gibi ritüeller geliştirir. Ritüel kısa süreli rahatlatır; ama beyin "tehlike gerçekten vardı" sonucunu
            öğrenir. Böylece obsesyon-kompulsiyon döngüsü giderek sıklaşır.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">OKB döngüsü (özet)</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li>İstemsiz düşünce/imge/dürtü ortaya çıkar</li>
            <li>Düşünce tehdit olarak yorumlanır ("ya olursa?")</li>
            <li>Kaygı ve sorumluluk hissi yükselir</li>
            <li>Kompulsiyon devreye girer</li>
            <li>Kısa rahatlama olur</li>
            <li>Uzun vadede obsesyonun gücü artar</li>
          </ol>
        </section>

        <section className="mt-10" aria-labelledby="brain-lock">
          <h2 id="brain-lock" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Nörobiyolojik temel: "Brain Lock" ve hata sinyali kilitlenmesi
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Jeffrey Schwartz (1996), OKB'yi "beyinde kilitlenme" metaforuyla açıklarken orbitofrontal korteks,
            singulat korteks ve kaudat çekirdek arasındaki devreye odaklanır. Basitleştirilmiş haliyle sistem,
            "bir şey yanlış" alarmını gereğinden uzun süre açık tutar. Kişi mantıksal olarak riskin düşük olduğunu
            bilse de, bedensel ve duygusal alarm sönmez.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Bu yüzden OKB'de sorun yalnızca "yanlış düşünce" değildir; aynı zamanda beyindeki tehdit izleme sisteminin
            aşırı duyarlılığıdır. Psikoterapi (özellikle ERP) bu devrenin yeniden öğrenmesine katkı verir: kişi ritüel
            yapmadan kaygıyla kalmayı öğrenir ve alarm sistemi zamanla yeniden kalibre olur.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="kompulsiyon-turleri">
          <h2 id="kompulsiyon-turleri" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kompulsiyon türleri: Zihinsel ve fiziksel ritüeller
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Tür</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Örnekler</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Döngüdeki işlevi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Zihinsel kompulsiyon</td>
                  <td className="px-4 py-3">İçinden sayı sayma, dua etme, "doğru" cümleyi tekrarlama, zihinsel kontrol listesi</td>
                  <td className="px-4 py-3">Düşünceyi nötralize etme ve geçici rahatlama</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Fiziksel kompulsiyon</td>
                  <td className="px-4 py-3">El yıkama, kapı/ocak kontrol etme, simetri-düzen ritüelleri, tekrar etme</td>
                  <td className="px-4 py-3">Tehdit algısını davranışla azaltma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="obsesif-kompulsif-fark">
          <h2 id="obsesif-kompulsif-fark" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Obsesif ve kompulsif farkı: Sık karıştırılan noktalar
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">"Obsesifim, çünkü titizim" yanılgısı</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Titizlik, düzen sevgisi veya planlı olmak tek başına OKB değildir. OKB'de esas belirleyici olan; istemsiz
            düşünceler, yoğun kaygı, zorlayıcı ritüeller ve işlevsellik kaybıdır. Kişi çoğu zaman bu döngünün anlamsız
            olduğunun farkındadır ama durdurmakta zorlanır.
          </p>

          <h4 className="mt-5 text-base font-semibold text-brand-navy md:text-lg">Ne zaman uzmana başvurmalı?</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li>Ritüeller günlük yaşamda bir saatten fazla zaman alıyorsa</li>
            <li>İş/okul/ilişki işlevselliği düşüyorsa</li>
            <li>Kaçınma davranışları artıyorsa</li>
            <li>Kaygı ve suçluluk duygusu belirginleşiyorsa</li>
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8" aria-labelledby="erp-onemi">
          <div className="flex items-start gap-3">
            <Brain className="mt-1 size-7 shrink-0 text-brand-navy" aria-hidden />
            <div>
              <h2 id="erp-onemi" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                Döngüyü kıran yöntem: Maruz Bırakma ve Tepki Önleme (ERP)
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                OKB tedavisinde ERP'nin önemi, kişiye "kaygıdan kaçmadan" kalabilmeyi öğretmesidir. Kişi obsesyonu
                tetikleyen durumla kontrollü biçimde karşılaşır; kompulsiyonu ertelemeyi ve yapmamayı öğrenir. Zamanla
                beyin, beklenen felaketin gerçekleşmediğini ve kaygının ritüelsiz de sönebileceğini deneyimler.
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                Beşiktaş/İstanbul'daki klinik pratiğimde ve online terapide ERP'yi, danışanın ihtiyaçlarına göre
                psikodinamik formülasyon ve bilişsel tekniklerle entegre ederek planlıyorum.
              </p>
              <div className="mt-6 max-w-md">
                <CTAGroup />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="kompulsif-sss">
          <h2 id="kompulsif-sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {kompulsifFaqs.map((item) => (
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

        <section className="mt-10" aria-labelledby="kompulsif-kaynakca">
          <h2 id="kompulsif-kaynakca" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kaynakça (APA)
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            <li>Beck, A. T. (1976). Cognitive therapy and the emotional disorders. International Universities Press.</li>
            <li>Freud, S. (1955). Notes upon a case of obsessional neurosis. In J. Strachey (Ed. & Trans.), The standard edition (Vol. 10). Hogarth Press. (Original work published 1909)</li>
            <li>Freud, A. (1966). The ego and the mechanisms of defense (Rev. ed.). International Universities Press. (Original work published 1936)</li>
            <li>Salkovskis, P. M. (1985). Obsessional-compulsive problems: A cognitive-behavioural analysis. Behaviour Research and Therapy, 23(5), 571-583.</li>
            <li>Schwartz, J. M. (1996). Brain lock: Free yourself from obsessive-compulsive behavior. HarperCollins.</li>
            <li>Abramowitz, J. S., McKay, D., & Storch, E. A. (Eds.). (2017). The Wiley handbook of obsessive compulsive disorders. Wiley.</li>
            <li>American Psychiatric Association. (2022). Diagnostic and statistical manual of mental disorders (5th ed., text rev.; DSM-5-TR). APA Publishing.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 md:text-sm">
          Bu içerik bilgilendirme amaçlıdır; tanı yerine geçmez. Acil risk, kendine zarar düşüncesi veya yoğun kriz
          durumunda 112'yi arayınız.
        </section>
      </article>
    </LegalDocumentShell>
  );
}

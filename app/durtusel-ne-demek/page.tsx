import type { Metadata } from "next";
import { Gauge, ShieldCheck } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildDurtusellikFaqJsonLd, durtusellikFaqs } from "@/lib/durtusellik-faq";
import { siteConfig } from "@/lib/site";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Dürtüsel Ne Demek? Yönetim",
  description:
    "Dürtüsel ne demek? Dürtüsellik nedir, dürtüsel davranış örnekleri, Freud haz ilkesi, prefrontal korteks-limbik sistem dengesi ve dürtü kontrolü teknikleri.",
  keywords: [
    "dürtüsel ne demek",
    "dürtüsellik nedir",
    "dürtüsel davranış örnekleri",
    "dürtü kontrolü nasıl sağlanır",
    "freud haz ilkesi ve dürtüsellik",
  ],
  alternates: { canonical: "/durtusel-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Dürtüsel Ne Demek? Yönetim | ${siteConfig.name}`,
    description:
      "Psikanalitik, nöropsikolojik ve bilişsel davranışçı çerçevede dürtüsellik: neden olur, nasıl yönetilir?",
    url: `${siteConfig.url}/durtusel-ne-demek`,
  },
};

export default function DurtuselNeDemekPage() {
  const faqJsonLd = buildDurtusellikFaqJsonLd();

  return (
    <LegalDocumentShell path="/durtusel-ne-demek" breadcrumbLabel="Dürtüsel ne demek?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <Gauge className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Dürtüsel Ne Demek? Dürtüselliği Bilimsel Olarak Anlamak ve Yönetmek
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="text-brand-navy">Dürtüsel ne demek</strong> sorusu, çoğu zaman "ani tepki veriyorum,
          kendimi durduramıyorum" cümlesinin bilimsel karşılığını arayan kişilerin sorusudur. Dürtüsellik, karakter
          zayıflığı değil; duygu düzenleme, karar verme ve davranış inhibisyonu süreçlerinin birleşimindeki bir
          denge sorunudur. Bu yazıda dürtüselliği, psikanalitik kuramdan nöropsikolojiye ve BDT'ye uzanan bir çerçevede
          ele alacağız.
        </p>

        <section className="mt-10" aria-labelledby="durtusellik-vs-spontanlik">
          <h2 id="durtusellik-vs-spontanlik" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Dürtüsellik vs. spontanlık: Aynı şey değiller
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Spontanlık, bağlama uygun esnek davranabilme ve canlılık kapasitesidir. Dürtüsellik ise sonuç hesabı
            zayıf, gecikmiş tatmine tahammülü düşük ve çoğu zaman "önce davran-sonra düşün" örüntüsüdür. En kısa
            ifadeyle dürtüsellik, bir <strong>fren mekanizması sorunu</strong>dur.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Spontan davranan kişi sonradan pişmanlık duymadan da hareket edebilir; çünkü eylem bağlamla uyumludur.
            Dürtüsel davranışta ise kısa vadeli rahatlama veya haz sonrası, uzun vadeli zarar ve pişmanlık sık görülür.
            Bu ayrımı yapmak önemlidir; çünkü müdahale stratejisi de buna göre değişir.
          </p>

          <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 md:text-base">
            <strong>Hızlı tanım:</strong> Dürtüsellik, anlık dürtüye karşı davranışı erteleyememe; spontanlık ise
            esnek ama bağlama uygun hareket edebilme kapasitesidir.
          </div>
        </section>

        <section className="mt-10" aria-labelledby="freud-haz-ilkesi">
          <h2 id="freud-haz-ilkesi" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Psikanalitik temel: Freud, haz ilkesi ve id-ego-superego dengesi
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">Haz ilkesi ne söyler?</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Freud'a göre ruhsallıkta ilkel düzeyde işleyen sistem, haz ilkesine göre "hemen doyum" arar (Freud,
            1923/1961). Id anlık tatmin ister; ego gerçeklik koşullarını değerlendirir; süperego ise etik/sosyal
            çerçeveyi temsil eder. Dürtüsellikte sorun, çoğu zaman egonun id'den gelen anlık talepleri yeterince
            erteleyememesi veya düzenleyememesidir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Bu model bugün birebir biyolojik açıklama olarak kullanılmasa da klinik sezgi açısından değerlidir:
            kişi anlık hazla uzun vadeli iyilik hali arasında sıkışır. "Şimdi rahatla" çağrısı, "yarın bedel öde"
            sonucuna dönüşebilir. Bu nedenle dürtüsellik çalışmaları, yalnızca davranışı değil; içsel çatışmayı da
            anlamayı hedefler.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="noro-fren-gaz">
          <h2 id="noro-fren-gaz" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Nörobiyolojik bakış: Freni bozuk araba metaforu
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">
            Prefrontal korteks (fren) ve limbik sistem (gaz)
          </h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Prefrontal korteks; planlama, sonuç öngörme, davranış inhibisyonu ve bilişsel esneklikten sorumludur.
            Limbik sistem ise duygusal önem atama ve hızlı tepki verme süreçlerinde aktiftir. Dürtüsellikte çoğu zaman
            "gaz" sistemi baskın, "fren" sistemi gecikmeli çalışır. Özellikle yüksek stres, uyku yoksunluğu, alkol/
            madde kullanımı veya yoğun duygusal yük altında bu dengesizlik artabilir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Dopamin ve anlık ödül arayışı</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Dopamin sadece "haz hormonu" değildir; daha doğru ifadeyle ödül beklentisi, motivasyon ve öğrenme
            sinyallerinde rol alır. Dürtüsel davranış sonrası gelen anlık ödül, beyne "bu yolu tekrar kullan"
            mesajı verebilir. Bu nedenle dürtü kontrolünde amaç dopamini yok etmek değil; ödül sistemini kısa vadeli
            patlamalar yerine sürdürülebilir hedeflere yönlendirmektir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="barratt-bdt">
          <h2 id="barratt-bdt" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Modern psikoloji: Barratt sınıflandırması ve BDT döngüsü
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">Barratt'a göre dürtüsellik boyutları</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li><strong>Motor dürtüsellik:</strong> düşünmeden harekete geçme</li>
            <li><strong>Plan yapmama:</strong> geleceği hesaba katmadan karar verme</li>
            <li><strong>Dikkat dürtüselliği:</strong> odaklanma zorluğu, zihinsel dağınıklık</li>
          </ul>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Bu üç boyut, günlük yaşamda farklı biçimlerde görünür ve aynı kişide birlikte bulunabilir (Barratt,
            1994). Klinik değerlendirmede bu ayrım, tedavi planının kişiselleştirilmesine yardım eder.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">BDT perspektifi: Tetikleyici-davranış-sonuç</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            BDT'de dürtüsellik döngüsü çoğu zaman şu şekilde okunur: tetikleyici (duygu/durum) -&gt; otomatik düşünce
            ("şimdi yapmazsam kaçırırım") -&gt; dürtüsel davranış -&gt; kısa rahatlama/ödül -&gt; uzun vadeli bedel. Müdahale,
            bu zincirin "tetikleyici-davranış" arasına düzenleyici bir durak koymayı hedefler.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="yasam-alanlari">
          <h2 id="yasam-alanlari" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Yaşam alanlarında dürtüselliğin yansımaları
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Alan</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Dürtüsel davranış örnekleri</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Olası sonuç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Finansal</td>
                  <td className="px-4 py-3">Gereksiz harcama, anlık alışveriş, borçlanma</td>
                  <td className="px-4 py-3">Bütçe bozulması, suçluluk, stres</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Sosyal</td>
                  <td className="px-4 py-3">Patavatsız konuşma, söz kesme, ani tepki</td>
                  <td className="px-4 py-3">İlişki çatışmaları, pişmanlık</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Duygusal</td>
                  <td className="px-4 py-3">Ani öfke patlaması, kapıyı çarpma, ilişkiyi bitirme tehdidi</td>
                  <td className="px-4 py-3">Yakın ilişkilerde güven kaybı</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="pratik-teknikler">
          <h2 id="pratik-teknikler" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Dürtüselliği yönetmek için 3 pratik teknik
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">1) 10 dakikalık geciktirme kuralı</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Dürtü geldiğinde davranışı hemen yapmak yerine 10 dakika erteleyin. Bu küçük ara, prefrontal korteksin
            devreye girmesi için nöropsikolojik bir pencere açar.
          </p>

          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">2) Tetikleyici günlüğü</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Hangi saatlerde, hangi duyguda, hangi ortamda dürtüsellik arttığını yazın. Örüntü görünür olduğunda,
            müdahale kişiye özel hale gelir.
          </p>

          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">3) Eğer-o halde planı</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            "Eğer şu tetikleyici olursa, o halde şu davranışı yapacağım" cümlesi kurun. Örnek: "Eğer online mağazada
            anlık indirim görürsem, o halde 24 saat beklemeden satın almayacağım." Bu yöntem davranışsal freni güçlendirir.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8" aria-labelledby="umut-cta">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 size-7 shrink-0 text-brand-navy" aria-hidden />
            <div>
              <h2 id="umut-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                Dürtü kontrolü bir kastır ve geliştirilebilir
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                Dürtüsellik kader değildir. Doğru değerlendirme, düzenli egzersizler ve terapötik destekle belirgin
                iyileşme mümkündür. Beşiktaş'taki klinik uygulamamda ve online terapide, dürtü kontrolünü bilimsel
                ve kişiselleştirilmiş bir programla güçlendirmeyi hedefliyoruz.
              </p>
              <div className="mt-6 max-w-md">
                <CTAGroup />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="durtusellik-sss">
          <h2 id="durtusellik-sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {durtusellikFaqs.map((item) => (
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

        <section className="mt-10" aria-labelledby="durtusellik-kaynakca">
          <h2 id="durtusellik-kaynakca" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kaynakça (APA)
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            <li>Barratt, E. S. (1994). Impulsiveness and aggression. In J. Monahan & H. J. Steadman (Eds.), Violence and mental disorder.</li>
            <li>Bechara, A. (2005). Decision making, impulse control and loss of willpower to resist drugs. Nature Neuroscience, 8(11), 1458-1463.</li>
            <li>Freud, S. (1961). The ego and the id. W. W. Norton. (Original work published 1923)</li>
            <li>Goldstein, R. Z., & Volkow, N. D. (2011). Dysfunction of the prefrontal cortex in addiction. Nature Reviews Neuroscience, 12(11), 652-669.</li>
            <li>Patton, J. H., Stanford, M. S., & Barratt, E. S. (1995). Factor structure of the Barratt impulsiveness scale. Journal of Clinical Psychology, 51(6), 768-774.</li>
            <li>Swann, A. C., Lijffijt, M., Lane, S. D., Steinberg, J. L., & Moeller, F. G. (2009). Trait impulsivity and response inhibition. Psychiatry Research, 169(1), 37-42.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 md:text-sm">
          Bu metin bilgilendirme amaçlıdır; tanı koymaz. Kriz, kendine zarar düşüncesi veya acil risk durumunda 112'yi arayınız.
        </section>
      </article>
    </LegalDocumentShell>
  );
}

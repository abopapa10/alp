import type { Metadata } from "next";
import { Activity, Brain, MoonStar, ShieldAlert, Sparkles, Waves } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { ContentCallout } from "@/components/content/ContentCallout";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildInsomniaFaqJsonLd, insomniaFaqs } from "@/lib/insomnia-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "İnsomnia Ne Demek? Nedenleri, Nörobilim ve Bilimsel Tedavi Yaklaşımları",
  description:
    "İnsomnia nedir? Uykusuzluğun biyolojik ve psikolojik mekanizmaları, EEG/fMRI bulguları, BDT-U ve klinik tedavi seçenekleri ile mit-gerçek ayrımı.",
  keywords: [
    "insomnia ne demek",
    "insomnia nedir",
    "uykusuzluk",
    "uyku bozukluğu",
    "BDT-U",
    "uyku hijyeni",
    "istanbul psikolog",
  ],
  alternates: { canonical: "/insomnia-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `İnsomnia Ne Demek? Bilimsel Rehber | ${siteConfig.name}`,
    description:
      "İnsomnia için kapsamlı bilimsel rehber: tanım, beyin bulguları, kullanım alanları, mitler ve kanıta dayalı tedavi yaklaşımları.",
    url: `${siteConfig.url}/insomnia-ne-demek`,
  },
};

const references = [
  "American Academy of Sleep Medicine. (2021). Clinical practice guideline for the pharmacologic treatment of chronic insomnia in adults.",
  "Baglioni, C., Battagliese, G., Feige, B., Spiegelhalder, K., Nissen, C., Voderholzer, U., Lombardo, C., & Riemann, D. (2011). Insomnia as a predictor of depression: A meta-analytic evaluation. Journal of Affective Disorders, 135(1-3), 10-19.",
  "Buysse, D. J. (2013). Insomnia. JAMA, 309(7), 706-716.",
  "Edinger, J. D., & Means, M. K. (2005). Cognitive-behavioral therapy for primary insomnia. Clinical Psychology Review, 25(5), 539-558.",
  "Frase, L., Nissen, C., Riemann, D., & Spiegelhalder, K. (2018). Neuroimaging findings in insomnia. Sleep Medicine Clinics, 13(1), 37-45.",
  "Gehrman, P., & Perlis, M. (2010). Behavioral treatment of insomnia. Current Psychiatry Reports, 12(6), 512-519.",
  "Harvey, A. G. (2002). A cognitive model of insomnia. Behaviour Research and Therapy, 40(8), 869-893.",
  "Morin, C. M., Benca, R., & Espie, C. A. (2023). Insomnia and its management. The Lancet, 401(10379), 1807-1820.",
  "Perlis, M. L., Smith, M. T., & Pigeon, W. R. (2005). Etiology and pathophysiology of insomnia. In Kryger, M. H. et al. Principles and Practice of Sleep Medicine.",
  "Riemann, D., Nissen, C., Palagini, L., Otte, A., Perlis, M., & Spiegelhalder, K. (2015). The neurobiology, investigation, and treatment of chronic insomnia. The Lancet Neurology, 14(5), 547-558.",
  "van Straten, A., van der Zweerde, T., Kleiboer, A., Cuijpers, P., Morin, C. M., & Lancee, J. (2018). Cognitive and behavioral therapies in the treatment of insomnia: A meta-analysis. Sleep Medicine Reviews, 38, 3-16.",
  "Winkelman, J. W., Plante, D. T., Schoerning, L., Benson, K. L., Buxton, O. M., O'Connor, S. P., Jensen, J. E., Renshaw, P. F., & Gonenc, A. (2013). Increased rostral anterior cingulate cortex volume in chronic primary insomnia. Sleep, 36(7), 991-998.",
];

export default function InsomniaNeDemekPage() {
  const faqJsonLd = buildInsomniaFaqJsonLd();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "İnsomnia Ne Demek? Nedenleri, Beyin Bulguları ve Tedavi Yaklaşımları",
    description:
      "İnsomnianın bilimsel tanımını, nörobiyolojik bulgularını ve kanıta dayalı tedavi seçeneklerini ele alan kapsamlı içerik.",
    inLanguage: "tr-TR",
    author: { "@type": "Person", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/insomnia-ne-demek`,
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    articleSection: ["Uyku Psikolojisi", "İnsomnia", "Klinik Psikoloji"],
    keywords: "insomnia, uykusuzluk, BDT-U, uyku bozukluğu",
  };

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "İnsomnia Ne Demek?",
    about: { "@type": "MedicalCondition", name: "Insomnia Disorder" },
    audience: { "@type": "PeopleAudience", suggestedMinAge: 16 },
    lastReviewed: "2026-04-23",
    mainContentOfPage: { "@type": "WebPageElement", cssSelector: "#insomnia-icerik" },
    url: `${siteConfig.url}/insomnia-ne-demek`,
  };

  return (
    <LegalDocumentShell path="/insomnia-ne-demek" breadcrumbLabel="İnsomnia ne demek?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }} />

      <article id="insomnia-icerik" className="mt-6">
        <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-brand-sky/40 to-white p-6 md:p-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
            İnsomnia Ne Demek? Nedenleri, Nörobilim ve Bilimsel Tedavi Yaklaşımları
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg">
            İnsomnia, yalnızca gece az uyuma sorunu değil; gün içinde dikkat, hafıza, duygudurum ve işlevsellik alanlarını
            etkileyebilen bir klinik tablodur. Bu sayfada insomnia kavramını mistik veya tek nedenli açıklamalardan uzak, kanıta
            dayalı bir çerçevede ele alacağız. Uykusuzluk döngüsünün nasıl sürdüğünü, beyinde hangi ağların rol oynadığını,
            BDT-U gibi psikolojik tedavilerin neden etkili olduğunu ve “uykuya zorlamak” yerine hangi davranışların iyileşmeyi
            desteklediğini adım adım inceleyeceğiz.
          </p>
        </header>

        <section className="mt-8" aria-labelledby="insomnia-tanim">
          <div className="flex items-center gap-2">
            <MoonStar className="size-5 text-brand-navy" aria-hidden />
            <h2 id="insomnia-tanim" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              İnsomnia: bilimsel tanım ve klinik çerçeve
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Klinik literatürde insomnia; uykuya dalmada güçlük, gece sık uyanma veya sabah erken uyanma belirtilerinden
            birinin/sayısının sürmesi ve bunun gündüz işlevselliğini bozması ile tanımlanır (Buysse, 2013). Tanı açısından
            temel nokta, sorunun yalnızca “az uyuma” değil, “uyku fırsatı olmasına rağmen uykuya geçememe” olmasıdır. Yani kişi
            yatacak ortamı ve zamanı bulsa da zihinsel/fizyolojik uyarılmışlık nedeniyle yeterli, onarıcı uykuya ulaşamaz.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            İnsomnia ne demek sorusunun pratik yanıtı şudur: Uyku, istemli bir performans görevi değildir; “hemen uyumalıyım”
            baskısı arttıkça performans kaygısı yükselir ve uyku daha da zorlaşır. Harvey’nin bilişsel modelinde bu döngü,
            tehdit odaklı dikkat, uykuya dair felaketleştirme, güvenlik davranışları (gündüz aşırı telafi uykusu, yatağa erken
            girme, saati sürekli kontrol etme) ve seçici bellek önyargıları ile sürdürülür (Harvey, 2002).
          </p>
          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">
            Geçici uykusuzluk ile kronik insomnia farkı
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Sınav dönemi, yas, iş stresi veya sağlık sorunu gibi dönemlerde birkaç gün-hafta süren geçici uykusuzluk sık
            görülür. Kronik insomnia ise belirtilerin daha uzun sürmesi ve kişinin yaşam kalitesini kalıcı biçimde etkilemesiyle
            ayrışır. Bu ayrım tedavi planı açısından kritiktir: geçici dönemde destekleyici düzenlemeler yeterli olabilirken,
            kronik tabloda davranışsal ve bilişsel düzeyde yapılandırılmış müdahale gerekir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-tarihce">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-brand-navy" aria-hidden />
            <h2 id="insomnia-tarihce" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              İnsomnia kavramının tarihsel dönüşümü
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Erken dönemlerde uykusuzluk çoğunlukla ikincil bir belirti olarak ele alınırken, modern uyku tıbbı insomnia
            bozukluğunu kendi başına değerlendirilmesi gereken bir klinik durum olarak tanımlar. Bu dönüşüm, tedavide de
            paradigmayı değiştirmiştir. Eskiden temel yaklaşım yalnızca sedatif farmakolojiye yaslanırken, güncel kılavuzlar
            davranışsal tedavileri merkez alır; farmakolojik müdahaleler vaka bazlı, süre sınırlı ve risk-fayda dengesine göre
            planlanır (Morin et al., 2023).
          </p>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-norobilim">
          <div className="flex items-center gap-2">
            <Brain className="size-5 text-brand-navy" aria-hidden />
            <h2 id="insomnia-norobilim" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Nörobilim bulguları: insomnia sırasında beyinde neler olur?
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            İnsomnia, “sadece kötü alışkanlık” ile açıklanamaz. Nörobilim çalışmaları, artmış uyarılmışlık (hyperarousal)
            modelini destekler: kişi gece yatakta olsa bile beyin ve beden “dinlenme moduna” tam geçemez (Riemann et al., 2015).
            Bu durum otonom aktivasyon, bilişsel tetikte kalma ve duygusal ağlarda hassasiyet ile ilişkilidir.
          </p>
          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">EEG bulguları</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            EEG çalışmalarında insomnia olgularında yüksek frekans aktivitesinin (beta/gamma) artışı ve derin uyku ile ilişkili
            paternlerde farklılaşma bildirilebilir. Klinik karşılığı, “beden yorgun ama zihin açık” deneyimidir. Bu bulgular
            tüm bireylerde aynı değildir; ancak uyarılmışlık modelini destekleyen önemli bir biyolojik zemin sağlar.
          </p>
          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">fMRI bulguları</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            fMRI literatürü, ön singulat, insula, limbik ağlar ve yürütücü kontrol ağları arasındaki düzenleme farklarına işaret
            eder (Frase et al., 2018). Bazı çalışmalarda duygusal uyarana karşı artmış yanıt ve dinlenme ağlarında farklı
            bağlantısallık rapor edilmiştir. Bu, insomnia yaşayan kişinin gece zihinsel olarak “tehdit tarama” modunda kalmasını
            açıklayabilir. Yine de görüntüleme bulguları grup düzeyi eğilimdir; bireysel tanı/tedavi kararını tek başına
            belirlemez.
          </p>
          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">
            Klinik sınırlılıklar ve yorum
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Nörogörüntüleme, insomnia için “tek bölge bozukluğu” modeli sunmaz; çok ağlı bir düzenleme sorunu işaret eder.
            Klinik olarak bu, sadece bir semptomu bastırmak yerine davranış, düşünce ve fizyolojik ritmi birlikte hedefleyen
            bütüncül planların daha rasyonel olduğu anlamına gelir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-tedavi">
          <div className="flex items-center gap-2">
            <Activity className="size-5 text-brand-navy" aria-hidden />
            <h2 id="insomnia-tedavi" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              İnsomnia tedavi yaklaşımları ve kanıt düzeyi
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            İnsomnia tedavisinde güncel yaklaşım kişiselleştirilmiş ve basamaklıdır. İlk hedef, uyku performans kaygısını
            azaltmak; ikinci hedef, sirkadiyen ritmi ve uyku basıncını yeniden düzenlemektir. Bu amaçla BDT-U, uyku hijyeni
            düzenlemeleri ve gerektiğinde farmakolojik/psikiyatrik destek bir arada planlanabilir.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-full border-collapse text-left text-sm md:text-base">
              <caption className="px-4 py-3 text-left text-xs text-slate-600 md:text-sm">
                İnsomnia için başlıca müdahaleler: etki mekanizması, kanıt düzeyi ve sınırlılıklar
              </caption>
              <thead className="bg-slate-50 text-brand-navy">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Yöntem
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Kanıt düzeyi
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Güçlü yön
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Sınırlılık
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">BDT-U</td>
                  <td className="px-4 py-3">Güçlü</td>
                  <td className="px-4 py-3">Kalıcı etki, nüks önleme, beceri kazandırma</td>
                  <td className="px-4 py-3">Düzenli uygulama ve takip gerektirir</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">Uyku hijyeni eğitimi</td>
                  <td className="px-4 py-3">Düşük-orta</td>
                  <td className="px-4 py-3">Temel davranış risklerini azaltır</td>
                  <td className="px-4 py-3">Tek başına kronik olguda yetersiz kalabilir</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">Kısa süreli ilaç tedavisi</td>
                  <td className="px-4 py-3">Orta</td>
                  <td className="px-4 py-3">Akut dönemde semptom hafifletme</td>
                  <td className="px-4 py-3">Tolerans/yan etki riski, uzun süre planlanmaz</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">Kombine yaklaşım</td>
                  <td className="px-4 py-3">Orta-güçlü</td>
                  <td className="px-4 py-3">Eş tanılarla uyumlu esnek plan</td>
                  <td className="px-4 py-3">Koordinasyon ve düzenli değerlendirme gerekir</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Meta-analizler, BDT-U&apos;nun uykuya dalma süresi, toplam uyku süresi ve uyku kalitesi üzerinde anlamlı iyileşme
            sağladığını gösterir (van Straten et al., 2018). Ayrıca depresyon ve kaygı belirtilerinin eşlik ettiği vakalarda
            duygudurum kazanımlarına da katkı bildirilmiştir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-mitler">
          <div className="flex items-center gap-2">
            <Waves className="size-5 text-brand-navy" aria-hidden />
            <h2 id="insomnia-mitler" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              İnsomnia hakkında mitler ve gerçekler
            </h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ContentCallout title="Mit: Herkes tam 8 saat uyumalı." variant="accent">
              <p>
                Uyku gereksinimi bireysel değişkenlik gösterir. Klinik açıdan belirleyici olan sayı değil, gündüz işlevselliği
                ve kişinin dinlenmişlik düzeyidir.
              </p>
            </ContentCallout>
            <ContentCallout title="Mit: Yatakta daha uzun kalmak uykuyu telafi eder." variant="accent">
              <p>
                Yatakta uzun kalmak, uyku verimliliğini düşürüp performans kaygısını artırabilir. BDT-U&apos;da kontrollü yatak
                süresi düzenlemesi bu nedenle önemlidir.
              </p>
            </ContentCallout>
            <ContentCallout title="Mit: Alkol uyku için iyi bir çözümdür." variant="accent">
              <p>
                Alkol başlangıçta sedasyon hissi verebilir; ancak gecenin ikinci yarısında uyku bütünlüğünü bozabilir ve
                sık uyanmayı artırabilir.
              </p>
            </ContentCallout>
            <ContentCallout title="Mit: İnsomnia tamamen psikolojiktir." variant="accent">
              <p>
                İnsomnia biyolojik ritim, davranışsal alışkanlık, bilişsel süreçler ve tıbbi etkenlerin etkileşimiyle ortaya
                çıkar; tek boyutlu açıklamalar çoğu olguda yetersizdir.
              </p>
            </ContentCallout>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-guvenlik">
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-5 text-brand-navy" aria-hidden />
            <h2 id="insomnia-guvenlik" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Güvenlik, etik ve değerlendirme sınırları
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Uykusuzluk değerlendirmesinde etik yaklaşım, kişinin semptomunu küçümsemeden çok boyutlu ele almaktır. İntihar
            düşüncesi, mani/psikoz bulguları, ciddi gündüz uyuklama ve uyku apnesi şüphesi gibi tablolar varsa önce tıbbi/
            psikiyatrik güvenlik değerlendirmesi yapılmalıdır. Psikolojik müdahale bu güvenlik planıyla koordineli yürür.
          </p>
          <ContentCallout title="Klinik uyarı" variant="theory">
            <p>
              Bu içerik bilgilendirme amaçlıdır. Acil risk, solunum bozukluğu şüphesi veya belirgin nörolojik semptomlarda
              gecikmeden tıbbi destek alınmalıdır.
            </p>
          </ContentCallout>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-sss">
          <h2 id="insomnia-sss" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-4 space-y-3">
            {insomniaFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-semibold text-brand-navy marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="insomnia-kaynakca">
          <h2 id="insomnia-kaynakca" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Kaynakça / Akademik Referanslar
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
            {references.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section
          className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8"
          aria-labelledby="insomnia-cta"
        >
          <h2 id="insomnia-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            İnsomnia ve uyku düzeni için bilimsel değerlendirme planlayın
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Uykusuzluk döngüsünü kırmak için kişiselleştirilmiş bir yol haritası oluşturmak mümkündür. Telefon veya WhatsApp
            üzerinden ön görüşme planlayabilir, yüz yüze veya online formatta sürece başlayabilirsiniz.
          </p>
          <div className="mt-5">
            <CTAGroup />
          </div>
        </section>
      </article>
    </LegalDocumentShell>
  );
}

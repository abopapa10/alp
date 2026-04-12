import type { Metadata } from "next";
import { BookOpen, ShieldAlert } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildManipulasyonFaqJsonLd, manipulasyonFaqs } from "@/lib/manipulasyon-faq";
import { siteConfig } from "@/lib/site";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Manipülasyon ve Gaslighting",
  description:
    "Manipülasyon nedir? Duygusal, cinsel ve sosyal manipülasyon teknikleri; gaslighting, love bombing, ghosting, breadcrumbing, sinir sistemi etkileri ve sınır koyma stratejileri.",
  keywords: [
    "manipülasyon nedir",
    "duygusal manipülasyon",
    "cinsel manipülasyon",
    "sosyal manipülasyon",
    "gaslighting",
    "love bombing",
    "ghosting",
    "breadcrumbing",
    "sınır koyma",
  ],
  alternates: { canonical: "/manipulasyon-nedir" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Manipülasyon ve Gaslighting | ${siteConfig.name}`,
    description:
      "Akademik temelli, klinik çerçevede kapsamlı manipülasyon rehberi: kuramlar, teknikler, sinir sistemi ve korunma stratejileri.",
    url: `${siteConfig.url}/manipulasyon-nedir`,
  },
};

export default function ManipulasyonRehberiPage() {
  const faqJsonLd = buildManipulasyonFaqJsonLd();

  return (
    <LegalDocumentShell path="/manipulasyon-nedir" breadcrumbLabel="Manipülasyon nedir?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-8 shrink-0 text-slate-500 md:size-9" strokeWidth={1} aria-hidden />
          <div>
            <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
              Manipülasyon Rehberi: Duygusal, Cinsel ve Sosyal Boyutlar
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-800 md:text-xl">
              Bu rehber, manipülasyonu sözlük tanımlarının ötesinde; klinik psikoloji, sosyal psikoloji ve ilişki
              dinamikleri üzerinden değerlendirir. Hedef, korku üretmek değil; kavramsal netlik, öz-farkındalık
              ve sınır koyma kapasitesini artırmaktır.
            </p>
          </div>
        </div>

        <section className="mt-10" aria-labelledby="giris">
          <h2 id="giris" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Neden manipülasyon bu kadar geç fark edilir?
          </h2>
          <div className="mt-4 space-y-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            <p>
              Manipülasyon çoğu zaman yüksek sesli bir saldırı gibi başlamaz; nazik görünen ama giderek artan
              bir kontrol iklimi olarak ilerler. İlişkilerde zihnimiz, bağ kurma ihtiyacıyla risk değerlendirmesini
              birlikte yürütür. Bu nedenle kişi, rahatsızlık veren ilk işaretleri "yanlış anlama", "kötü gün"
              ya da "ben de hatalıyım" diyerek normalize edebilir. Klinik gözlemde bu, ilişkiyi sürdürme motivasyonu
              ile güvenlik ihtiyacının çatışmasıdır.
            </p>
            <p>
              Manipülasyonun görünmez kalmasının bir nedeni de dil stratejisidir. Manipülatif kişi, davranışını
              çoğu zaman bakım, sevgi, fedakarlık veya dürüstlük kisvesiyle sunar. "Seni düşündüğüm için", "beni
              kaybetmek istemiyorsan" gibi cümleler, dışarıdan bakıldığında masum; içeriden bakıldığında ise
              özerkliği daraltıcı olabilir. Burada mesele niyet tahmini değil, tekrarlayan davranış örüntüsüdür.
            </p>
            <p>
              Erich Fromm'un ifadesiyle, "Sevgi bir duygu değil; bir eylemdir, bir pratiktir." Sevgi pratikse,
              manipülasyon da bir pratiktir: tekrar eder, sınar, kişiyi kendinden uzaklaştırır. Terapide ilk adım,
              bu örüntüyü isimlendirmektir. İsim koymak, dramatizasyon değil; bilişsel netleşmedir.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="teorik-temel">
          <h2 id="teorik-temel" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Teorik temel: Machiavellianism ve Social Exchange Theory
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">Machiavellianism (Karanlık Üçlü)</h3>
          <p className="mt-3 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Machiavellianism, ilişkilerde stratejik hesapçılık, araçsallaştırma ve duygusal mesafeyi vurgular.
            Her stratejik düşünme manipülatif değildir; fakat kişi, karşısındakinin özerkliğini sistematik şekilde
            ihlal ederek ilişkiyi tek taraflı kazanç alanına çeviriyorsa klinik risk yükselir. Bu çerçeve, özellikle
            "neden bu kadar planlı davranıyor?" sorusuna yanıt verir.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">
            Social Exchange Theory (Sosyal Değişim Kuramı)
          </h3>
          <p className="mt-3 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Sosyal Değişim Kuramı'na göre insanlar ilişkilerde ödül-maliyet hesabı yapar. Manipülasyonda kritik
            bozulma, maliyetlerin görünmezleşmesidir: kısa vadede ilgi, aitlik ve onay ödül gibi algılanırken;
            uzun vadede kaygı, özsaygı kaybı, karar yorgunluğu ve sosyal izolasyon maliyeti büyür. Terapötik
            müdahale, duygusal regülasyon kadar bu görünmez maliyet hesabını görünür kılmayı da içerir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="duygusal-manipulasyon">
          <h2 id="duygusal-manipulasyon" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Duygusal manipülasyon: Cialdini ve Skinner ile klinik okuma
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Robert Cialdini'nin ikna prensipleri (karşılıklılık, tutarlılık, sosyal kanıt, beğenilme, otorite,
            kıtlık) normal sosyal yaşamda işlevseldir. Problem, bu prensiplerin şeffaflık olmadan ve özerkliği
            daraltacak şekilde kullanılmasıdır. Örneğin karşılıklılık ilkesi "senin için bunu yaptım" cümlesiyle
            duygusal borç mekanizmasına dönüştürülebilir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            B.F. Skinner'ın operant koşullanma yaklaşımında değişken pekiştirme, davranışın sönmesini zorlaştırır.
            İlişkide bunun karşılığı şöyledir: bir dönem yoğun ilgi, sonra geri çekilme, sonra yeniden yakınlık.
            Beyin, öngörülemez ödül düzeninde bir sonraki "iyi anı" beklemeye koşullanır. Bu döngü, "bile bile"
            kalma halinde suçluluk üretir; oysa süreç çoğunlukla ahlaki zayıflık değil, öğrenilmiş bir bağlanma
            davranışıdır.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Neden açık hale geliriz?</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li>Belirsizlik karşısında kapanış ihtiyacı</li>
            <li>Reddedilme korkusu ve ilişkiyi idealize etme</li>
            <li>Dış onaya bağımlı öz-değer düzeni</li>
            <li>Geçmiş ilişkisel şemaların tetiklenmesi</li>
            <li>Sosyal destek ağının zayıflığı</li>
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="cinsel-manipulasyon">
          <h2 id="cinsel-manipulasyon" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Cinsel manipülasyon: Onay (consent), güç dinamikleri ve sınır ihlali
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Cinsel alanda temel kriter, özgür ve geri çekilebilir rızadır. Baskı, tehdit, utandırma, terk edilme
            korkusu veya duygusal şantaj altında verilen "evet", etik ve klinik olarak sorunludur. Cinsel
            manipülasyon çoğu zaman fiziksel zorlamadan önce duygusal alanı ele geçirir: kişi, "hayır" dediğinde
            suçluluk ya da cezalandırılma bekler hale gelebilir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Foucault'nun iktidar analizine göre güç, yalnızca yasak koyan bir merkezde değil; gündelik etkileşimde
            dolaşan mikro pratiklerde işler. Cinsellik, bu nedenle hem yakınlığın hem de denetimin sahası olabilir.
            Klinik bakış, "kim kazandı?" sorusundan çok "kimin özerkliği daraldı?" sorusuna odaklanır.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Klinik kırmızı bayraklar</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Davranış</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Olası psikolojik etki</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Koruyucu adım</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Hayır cevabını küçümseme</td>
                  <td className="px-4 py-3">Öz-sınırda aşınma</td>
                  <td className="px-4 py-3">Net sınır cümlesi + mesafe</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Duygusal şantajla rıza alma</td>
                  <td className="px-4 py-3">Suçluluk, dissosiyatif kopukluk</td>
                  <td className="px-4 py-3">Güvenlik planı + destek ağı</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Mahremiyet ihlali</td>
                  <td className="px-4 py-3">Utanç, hiperuyanıklık</td>
                  <td className="px-4 py-3">Hukuki danışma değerlendirmesi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="sosyal-manipulasyon">
          <h2 id="sosyal-manipulasyon" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sosyal manipülasyon: İtibar yönetimi, izolasyon ve rol tersine çevirme
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Sosyal manipülasyon, kişinin yalnızca partneriyle değil; arkadaş, aile ve iş çevresiyle ilişkisini de
            hedef alır. "Senin iyiliğin için" söylemiyle çevreden koparma, üçüncü kişilere seçici anlatım,
            mağdur fail tersine çevirme ve itibar zedeleme bu alanda sık görülür. Sonuçta kişi, gerçeği anlatacak
            güvenli bir tanık bulmakta zorlanabilir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Carl Jung'un "Kişinin gölgesi, bilinçli kişiliğinden daha büyüktür" ifadesi bu bağlamda önemli bir
            hatırlatma sunar: manipülasyon, çoğu zaman yalnızca karşı tarafın niyetiyle değil; kişinin kendi
            görülmemiş yaralarıyla da temas eder. Bu yüzden iyileşme süreci, yalnızca ilişkiden çıkmak değil,
            içsel örüntüyü anlamayı da içerir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="teknikler-ornekler">
          <h2 id="teknikler-ornekler" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Teknikler ve sinir sistemi etkileri: Gaslighting, Love Bombing, Ghosting, Breadcrumbing
          </h2>
          <div className="mt-5 space-y-5 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            <p>
              <strong>Gaslighting:</strong> Gerçeklik algısını sistematik biçimde aşındırır. Kişi, hafızasına ve
              sezgisine güvenini kaybedebilir. HPA aksı sürekli aktive olduğunda kortizol yükü artar, uyku ve
              dikkat bozulabilir.
            </p>
            <p>
              <strong>Love bombing:</strong> Erken dönemde aşırı idealizasyon ve hızlı yakınlıkla dopamin odaklı
              beklenti döngüsü kurar. Ardından gelen geri çekilme, kişiyi "eski iyi hal" için daha çok yatırım
              yapmaya iter.
            </p>
            <p>
              <strong>Ghosting:</strong> Ani iletişim kesintisi, kapanış yaşanmasını engeller. Belirsizlik,
              ruminasyonu artırır; kortizol yüksek kalabilir, kişi sürekli zihinsel senaryo üretir.
            </p>
            <p>
              <strong>Breadcrumbing:</strong> Küçük ama stratejik ilgi kırıntılarıyla bağı tamamen koparmadan
              sürdürür. Bu model, düzensiz pekiştirme nedeniyle dopamin beklenti sistemini meşgul eder; kişi
              ilişkisel yatırımını sonlandıramaz.
            </p>
          </div>

          <h3 className="mt-7 text-lg font-semibold text-brand-navy md:text-xl">Kısa karşılaştırma</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Teknik</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Ana mesaj</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Sık görülen sonuç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Gaslighting</td>
                  <td className="px-4 py-3">"Gördüğün şey gerçek değil"</td>
                  <td className="px-4 py-3">Öz-güven ve gerçeklik testinde aşınma</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Love bombing</td>
                  <td className="px-4 py-3">"Seni çok seviyorum, şimdi ve hemen"</td>
                  <td className="px-4 py-3">Hızlı bağlanma ve bağımlı bekleyiş</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Ghosting</td>
                  <td className="px-4 py-3">"Açıklama yapmadan kayboluyorum"</td>
                  <td className="px-4 py-3">Kapanış eksikliği, yoğun ruminasyon</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Breadcrumbing</td>
                  <td className="px-4 py-3">"Tam değil, az ama hep"</td>
                  <td className="px-4 py-3">Bitirememe, duygusal askıda kalma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="akademik-sozler">
          <h2 id="akademik-sozler" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Özgürlük, sevgi ve irade: üç hatırlatma
          </h2>
          <blockquote className="mt-4 rounded-xl border-l-4 border-brand-navy bg-slate-50 p-4 text-slate-700">
            "Stimulus ile response arasında bir boşluk vardır. O boşlukta seçim özgürlüğümüz ve gelişimimiz
            yatar." — Viktor E. Frankl
          </blockquote>
          <blockquote className="mt-4 rounded-xl border-l-4 border-brand-navy bg-slate-50 p-4 text-slate-700">
            "Sevgi, sevilen kişiye yönelmiş aktif bir ilgidir; bakım, sorumluluk, saygı ve bilgiyi içerir." —
            Erich Fromm
          </blockquote>
          <blockquote className="mt-4 rounded-xl border-l-4 border-brand-navy bg-slate-50 p-4 text-slate-700">
            "Kişi gölgesiyle yüzleşmedikçe ona kader der." — Carl G. Jung
          </blockquote>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Bu alıntılar, manipülasyonla mücadelede üç temel yön verir: (1) tepki vermeden önce durma ve seçme,
            (2) sevgi ile kontrolü ayırma, (3) kendi örüntülerini fark ederek tekrar döngüsünü kırma.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="savunma-mekanizmalari">
          <h2 id="savunma-mekanizmalari" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Savunma mekanizmaları ve profesyonel öneriler
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">1) Sınır koyma (boundary setting)</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li>Davranışa odaklanan kısa cümleler kullanın: "Bu tonda konuşmayı kabul etmiyorum."</li>
            <li>Sınır ihlalinde sonuç belirtin: "Devam ederse görüşmeyi sonlandıracağım."</li>
            <li>Tartışmayı kişilik savaşına çevirmeyin; gözlenebilir olguda kalın.</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">2) Öz-şefkat</h3>
          <p className="mt-3 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Öz-şefkat, hatayı meşrulaştırmak değil; suçluluk ve utançla donanmış sinir sistemini düzenlemektir.
            "Neden fark etmedim?" yerine "O anki kaynaklarımla en iyisini yapmaya çalıştım" çerçevesi, iyileşme
            motivasyonunu artırır.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">3) Radikal kabul</h3>
          <p className="mt-3 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Radikal kabul, olanı onaylamak değil; olanın varlığını inkarsız görmek demektir. "Bu ilişki beni
            yoruyor" cümlesiyle gerçekliği kabul etmek, değişim için gerekli enerjiyi serbest bırakır. Direnç,
            çoğu zaman acıyı uzatır; kabul, eylem planını mümkün kılar.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">4) Güvenlik planı</h3>
          <p className="mt-3 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Tehdit, takip veya şiddet riski varsa güvenlik planı klinik önceliktir: güvenli kişi listesi, acil
            iletişim, dijital güvenlik adımları ve gerekirse hukuki destek. Psikolojik iyileşme, fiziksel güvenlik
            sağlandıktan sonra daha etkili yürür.
          </p>
        </section>

        <section
          className="mt-12 rounded-2xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8"
          aria-labelledby="cta-sinirlar"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-1 size-7 shrink-0 text-brand-navy" aria-hidden />
            <div>
              <h2 id="cta-sinirlar" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                Sınırlarınız Ne Kadar Güçlü?
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                İlişkide sürekli belirsizlik, suçluluk ve öz-değer kaybı yaşıyorsanız; bu sadece "zor bir dönem"
                olmayabilir. Beşiktaş'taki kliniğimde veya online terapi seanslarında sınır koyma, duygu düzenleme
                ve ilişkisel karar netliği üzerine yapılandırılmış bir plan oluşturabiliriz.
              </p>
              <div className="mt-6 max-w-md">
                <CTAGroup />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="sss">
          <h2 id="sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {manipulasyonFaqs.map((item) => (
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

        <section className="mt-10" aria-labelledby="kaynakca">
          <h2 id="kaynakca" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kaynakça (APA)
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            <li>Buss, D. M., & Abbott, M. (1990). Machiavellianism and close relationships. Journal of Personality.</li>
            <li>Cialdini, R. B. (2009). Influence: Science and practice (5th ed.). Pearson.</li>
            <li>Foucault, M. (1978). The history of sexuality, Vol. 1. Pantheon.</li>
            <li>Frankl, V. E. (2006). Man's search for meaning. Beacon Press.</li>
            <li>Fromm, E. (1956). The art of loving. Harper & Row.</li>
            <li>Jung, C. G. (1959). Aion: Researches into the phenomenology of the self. Princeton University Press.</li>
            <li>Skinner, B. F. (1953). Science and human behavior. Macmillan.</li>
            <li>Thibaut, J. W., & Kelley, H. H. (1959). The social psychology of groups. Wiley.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 md:text-sm">
          Bu metin bilgilendirme amaçlıdır; tanı veya acil müdahale yerine geçmez. Acil risk durumunda 112'yi
          arayınız.
        </section>
      </article>
    </LegalDocumentShell>
  );
}


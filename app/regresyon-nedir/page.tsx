import type { Metadata } from "next";
import { Brain, BookOpen } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildRegresyonFaqJsonLd, regresyonFaqs } from "@/lib/regresyon-faq";
import { siteConfig } from "@/lib/site";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Regresyon Nedir? Kısa Rehber",
  description:
    "Regresyon nedir? Psikolojide regresyon, savunma mekanizması olarak regresyon, yetişkinlerde regresyon belirtileri ve Freudyen kuramla bilimsel açıklama.",
  keywords: [
    "regresyon nedir",
    "psikolojide regresyon",
    "savunma mekanizması regresyon",
    "yetişkinlerde regresyon belirtileri",
    "freudyen regresyon teorisi",
  ],
  alternates: { canonical: "/regresyon-nedir" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Regresyon Nedir? Kısa Rehber | ${siteConfig.name}`,
    description:
      "Regresyonu Freud, Anna Freud ve modern psikodinamik çerçeveyle açıklayan kapsamlı rehber.",
    url: `${siteConfig.url}/regresyon-nedir`,
  },
};

export default function RegresyonNedirPage() {
  const faqJsonLd = buildRegresyonFaqJsonLd();

  return (
    <LegalDocumentShell path="/regresyon-nedir" breadcrumbLabel="Regresyon nedir?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Regresyon Nedir? Psikolojide Regresyonu Bilimsel Temelleriyle Anlamak
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="text-brand-navy">Regresyon nedir</strong> sorusu, internette çoğu zaman bilimsel
          psikolojiyle ilgisi sınırlı içeriklerle yanıtlanıyor. Oysa klinik psikolojide regresyon; kişinin yoğun
          stres, kaygı veya çatışma altında daha erken gelişim dönemlerine ait başa çıkma biçimlerine dönmesi olarak
          tanımlanan bir <strong className="text-brand-navy">savunma mekanizmasıdır</strong>. Bu yazıda, Beşiktaş'ta
          danışan gören bir klinik psikolog perspektifiyle, regresyonu Freud'dan modern kuramlara uzanan çizgide
          ele alacağız.
        </p>

        <section className="mt-10" aria-labelledby="regresyon-tanim-ayrim">
          <h2 id="regresyon-tanim-ayrim" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Regresyonun tanımı ve kritik ayrım: Klinik regresyon vs. popüler "regresyon terapisi"
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Klinik psikolojide regresyon; ego kapasitesi zorlandığında bireyin daha ilkel, daha erken ve çoğunlukla
            daha az esnek savunma örüntülerine geri dönmesi anlamına gelir. Örneğin yetişkin bir kişinin yoğun
            reddedilme korkusu altında "ya hep ya hiç" tepkiler vermesi, aşırı bağımlı davranması, sorumluluk
            almaktan kaçınması veya öfke patlamaları göstermesi bu çerçevede değerlendirilebilir.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Buna karşılık popüler kültürdeki "geçmiş yaşam regresyonu" gibi uygulamalar, klinik psikolojideki
            regresyon kavramıyla aynı şey değildir. Bu uygulamaların etkililiğine dair güçlü, tekrarlanabilir,
            yüksek kalite bilimsel kanıtlar sınırlıdır. Etik bir ruh sağlığı yaklaşımı, danışana bilimsel desteği
            olan yöntemleri önermeyi gerektirir. Bu nedenle "regresyon" kelimesi kullanılıyor diye her yaklaşımın
            klinik olarak eşdeğer kabul edilmesi doğru değildir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Snippet için kısa tanım</h3>
          <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 md:text-base">
            <strong>Psikolojide regresyon</strong>, bireyin stres altında daha erken gelişim dönemlerine ait duygu
            düzenleme ve davranış kalıplarına dönmesiyle ortaya çıkan bir savunma mekanizmasıdır; tek başına hastalık
            değildir, fakat işlevselliği bozuyorsa profesyonel değerlendirme gerekir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="freud-regresyon">
          <h2 id="freud-regresyon" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sigmund Freud ve libidinal regresyon: Psikoseksüel gelişim bağlamı
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            <strong>Freudyen regresyon teorisi</strong>, ruhsallığın doğrusal bir olgunlaşma değil, çatışmalarla
            şekillenen dinamik bir süreç olduğunu vurgular. Freud'un psikoseksüel gelişim modelinde (oral, anal,
            fallik, latent, genital dönemler), erken dönem çatışmalar tamamen çözülmezse belirli temalara ilişkin
            saplanmalar (fixation) gelişebilir. Stres arttığında ego, daha önce kısmen "işe yaramış" erken dönem
            örüntülere geri dönebilir (Freud, 1917/1963).
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Örneğin oral dönem temalarında yoğunluğu olan bir birey, terk edilme ve yalnızlık durumlarında aşırı
            güvence arama, bağımlı ilişki dinamikleri veya "yatıştırıcı" davranışlara (aşırı yeme, tütün kullanımı,
            kompulsif dijital tüketim) yönelebilir. Anal temalar ağırlıklı bir örüntüde ise kontrol, inat, katılık
            ve mükemmeliyetçilik biçiminde regresif savunmalar öne çıkabilir. Buradaki amaç bireyi etiketlemek değil,
            stres altında devreye giren otomatik savunma yollarını kavramaktır.
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Gelişimsel tema</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Regresif örnek</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Klinik odak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Oral</td>
                  <td className="px-4 py-3">Aşırı güvence arama, bağımlı tutunma</td>
                  <td className="px-4 py-3">Ayrışma-bireyleşme, öz-sakinleştirme</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Anal</td>
                  <td className="px-4 py-3">Katı kontrol, inat, pasif-agresyon</td>
                  <td className="px-4 py-3">Esneklik, tolerans, belirsizlikle kalabilme</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Fallik/ödipal</td>
                  <td className="px-4 py-3">Rekabetçi kıyas, onay arayışı</td>
                  <td className="px-4 py-3">Öz-değer ve ilişki sınırları</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="anna-freud">
          <h2 id="anna-freud" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Anna Freud: Regresyonun savunma mekanizması olarak sistemleştirilmesi
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Anna Freud, savunma mekanizmalarını ego psikolojisi çerçevesinde sistematik biçimde ele alarak regresyonu
            yalnızca teorik bir kavram değil, klinik gözlemle izlenebilir bir fenomen olarak tanımlamıştır (A. Freud,
            1936/1966). Çocuk kliniklerinde gözlenen regresif belirtiler (alt ıslatma, parmak emme, ayrılık anksiyetesi
            artışı, konuşma/uyku düzeninde gerileme) çoğu zaman yeni bir stresörle ilişkilidir: kardeş doğumu,
            okul değişimi, ebeveyn çatışması, bakım veren kaybı vb.
          </p>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Yetişkinlerde ise regresyon daha sembolik görünür: yoğun eleştiri karşısında "küsen" iletişim, sorumluluğu
            bir başkasına devretme, değersizlik tetiklenince dramatik öfke veya yoğun bağımlılık talebi gibi. Bu noktada
            klinik sorumuz "neden böyle davrandın?" değil, "hangi stres altında ego hangi savunmayı devreye soktu?"
            olur. Böyle bir çerçeve, suçlamadan çok anlayış ve değişim imkanı sağlar.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="modern-yaklasim">
          <h2 id="modern-yaklasim" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Modern yaklaşım: Ernst Kris ve "egonun hizmetindeki regresyon"
          </h2>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Regresyon her zaman patolojik değildir. Ernst Kris'in "regression in the service of the ego" kavramı,
            kontrollü ve geçici regresif esnemenin yaratıcılık, oyun, hayal kurma ve sembolleştirme süreçlerinde işlevsel
            olabileceğini savunur (Kris, 1952). Sanat, yazı, mizah veya yaratıcı problem çözme sırasında kişi katı mantıksal
            örgütlenmeden kısa süreli uzaklaşıp daha çağrışımsal bir alana geçer; ardından tekrar organize düşünceye döner.
          </p>

          <div className="mt-5 rounded-xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/70 to-white p-5">
            <h3 className="font-display text-lg font-bold text-brand-navy md:text-xl">Uzman Notu: Egonun Hizmetindeki Regresyon</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-[15px] md:leading-relaxed">
              Yaratıcılıkta görülen geçici regresif hareket, ego denetiminin tamamen kaybı değildir. Sağlıklı işleyişte
              birey, çağrışımsal alana girip tekrar gerçeklik testine dönebilir. Klinik risk, bu dönüş kapasitesinin
              bozulduğu ve regresyonun kalıcı bir kaçış stratejisine dönüştüğü durumlarda artar.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="klinik-ornekler">
          <h2 id="klinik-ornekler" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Klinik gerçeklikten kurgusal örnekler: Çocuk ve yetişkin regresyonu
          </h2>

          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">Örnek 1: Yeni kardeş sonrası çocukta regresyon</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            6 yaşındaki bir çocuk, kardeş doğumundan sonra gece altını ıslatmaya ve anneden ayrılırken yoğun ağlama
            yaşamaya başlıyor. Aile bu davranışı "inat" olarak etiketlediğinde çocukta utanç artıyor. Psikodinamik
            çerçevede bu tablo, dikkat ve güvenlik kaybı algısına verilen regresif bir yanıttır. Müdahale; cezalandırma
            yerine güvence, rutin, oyun temelli ifade alanı ve ebeveyn tutarlılığıyla planlandığında belirtiler azalır.
          </p>

          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">Örnek 2: Yetişkinde stresle çocuksu tepkiler</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            34 yaşındaki bir yetişkin, işyerinde eleştiri aldığı dönemlerde partnerine karşı küskünlük, kapıyı çarpma,
            "beni anlamıyorsun" temalı dramatik çekilme ve ertesi gün aşırı yakınlık talebi gösteriyor. BDT ve
            psikodinamik formülasyon birlikte kullanıldığında; eleştiri-tetiklenme-çocuksu savunma döngüsü görünür hale
            geliyor. Duygu düzenleme, zihinselleştirme ve sınır çalışmalarıyla regresif tepkiler yerini daha olgun iletişime
            bırakabiliyor.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="yetiskin-belirtiler">
          <h2 id="yetiskin-belirtiler" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Yetişkinlerde regresyon belirtileri: Ne zaman destek alınmalı?
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li>Aşırı bağımlılık talebi ve terk edilme korkusunda belirgin artış</li>
            <li>Eleştiri veya çatışma anında yoğun çocuksu öfke ve küskünlük</li>
            <li>Sorumluluktan kaçınma, karar verememe, erteleme döngüsü</li>
            <li>Tekrarlayan pasif-agresif iletişim (susma, cezalandırıcı geri çekilme)</li>
            <li>İş, ilişki ve günlük işlevsellikte belirgin bozulma</li>
          </ul>
          <p className="mt-4 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Belirtiler haftalar boyunca sürüyor, ilişkileri bozuyor veya umutsuzluk/yoğun kaygı yaratıyorsa profesyonel
            destek önerilir. Regresyonun altında depresyon, travma sonrası tetiklenme, kişilik örüntüleri veya bağlanma
            temelli zorluklar bulunabilir; ayırıcı değerlendirme bu nedenle önemlidir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="tedavi-yaklasimlari">
          <h2 id="tedavi-yaklasimlari" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Tedavi ve çalışma planı: Psikodinamik + BDT entegrasyonu
          </h2>
          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">Psikodinamik odak</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Regresyonu tetikleyen içsel çatışmaları, erken bağlanma temalarını ve ilişki içinde tekrar eden aktarım
            örüntülerini anlamayı hedefler. Amaç, savunmayı "susturmak" değil; onun hangi ihtiyacı korumaya çalıştığını
            keşfederek daha esnek ego işlevleri geliştirmektir.
          </p>

          <h3 className="mt-5 text-lg font-semibold text-brand-navy md:text-xl">BDT odak</h3>
          <p className="mt-2 text-base leading-[1.85] text-slate-700 md:text-[17px]">
            Tetikleyici düşünce-duygu-davranış zincirini görünür kılar; duygu düzenleme, dürtü kontrolü, bilişsel yeniden
            yapılandırma ve iletişim becerileriyle regresif davranışları azaltır. En etkili sonuçlar, çoğu zaman bu iki
            yaklaşımın danışanın ihtiyacına göre entegrasyonuyla elde edilir.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/90 to-white p-6 shadow-md md:p-8" aria-labelledby="regresyon-cta">
          <div className="flex items-start gap-3">
            <Brain className="mt-1 size-7 shrink-0 text-brand-navy" aria-hidden />
            <div>
              <h2 id="regresyon-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                Regresif döngüyü fark etmek değişimin ilk adımıdır
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                Beşiktaş'taki kliniğimde ve online terapi seanslarında; psikolojide regresyon örüntülerini, ilişki
                dinamiklerinizi ve duygu düzenleme becerilerinizi birlikte çalışabiliriz. Amaç, savunmaları yargılamak
                değil; daha olgun, daha sürdürülebilir baş etme yolları geliştirmektir.
              </p>
              <div className="mt-6 max-w-md">
                <CTAGroup />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="regresyon-sss">
          <h2 id="regresyon-sss" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Sıkça sorulan sorular
          </h2>
          <div className="mt-5 space-y-3">
            {regresyonFaqs.map((item) => (
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

        <section className="mt-10" aria-labelledby="regresyon-kaynakca">
          <h2 id="regresyon-kaynakca" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kaynakça (APA)
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            <li>Freud, A. (1966). The ego and the mechanisms of defense (Rev. ed.). International Universities Press. (Original work published 1936)</li>
            <li>Freud, S. (1963). Introductory lectures on psycho-analysis (J. Strachey, Trans.). W. W. Norton. (Original lectures delivered 1915-1917)</li>
            <li>Kris, E. (1952). Psychoanalytic explorations in art. International Universities Press.</li>
            <li>Laplanche, J., & Pontalis, J.-B. (1973). The language of psycho-analysis. W. W. Norton.</li>
            <li>McWilliams, N. (2011). Psychoanalytic diagnosis (2nd ed.). Guilford Press.</li>
            <li>Perry, J. C., & Bond, M. (2012). Defense mechanisms and adaptive functioning. In M. R. Leary & J. P. Tangney (Eds.), Handbook of self and identity.</li>
            <li>Vaillant, G. E. (1992). Ego mechanisms of defense: A guide for clinicians and researchers. American Psychiatric Press.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 md:text-sm">
          Bu içerik bilgilendirme amaçlıdır; tanı yerine geçmez. Şiddet riski, kendine zarar düşüncesi veya acil psikiyatrik kriz durumlarında 112'yi arayınız.
        </section>
      </article>
    </LegalDocumentShell>
  );
}

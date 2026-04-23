import type { Metadata } from "next";
import { Activity, Brain, FlaskConical, ShieldAlert, Sparkles, Waves } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { ContentCallout } from "@/components/content/ContentCallout";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildHipnozFaqJsonLd, hipnozFaqs } from "@/lib/hipnoz-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hipnoz Nedir? Bilimsel Tanım, Mitler ve Hipnoterapi Kullanım Alanları",
  description:
    "Hipnoz nedir? Hipnozun nörobilimsel temeli, EEG/fMRI bulguları, hipnoterapinin klinik kullanım alanları, mitler ve gerçekler ile güvenlik-etik çerçevesi.",
  keywords: [
    "hipnoz nedir",
    "hipnoterapi",
    "hipnoz bilimsel açıklama",
    "hipnoz beyin",
    "EEG hipnoz",
    "fMRI hipnoz",
    "hipnoz mitler",
    "klinik hipnoz",
    "istanbul psikolog",
  ],
  alternates: { canonical: "/hipnoz-nedir" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Hipnoz Nedir? Bilimsel Tanım ve Klinik Kullanım | ${siteConfig.name}`,
    description:
      "Hipnozu bilimsel literatürle ele alan kapsamlı rehber: tanım, beyin bulguları, hipnoterapi endikasyonları, mitler ve güvenlik ilkeleri.",
    url: `${siteConfig.url}/hipnoz-nedir`,
  },
};

const references = [
  "American Psychological Association. (2014). Hypnosis for pain management, anxiety, and health behavior: A review of clinical evidence.",
  "Barnier, A. J., & Nash, M. R. (2008). The Oxford Handbook of Hypnosis: Theory, Research, and Practice. Oxford University Press.",
  "Dienes, Z., & Hutton, S. (2013). Understanding hypnosis metacognitively: rTMS applied to left DLPFC increases hypnotic suggestibility. Cortex, 49(2), 386-392.",
  "Elkins, G. R., Barabasz, A. F., Council, J. R., & Spiegel, D. (2015). Advancing research and practice: The revised APA Division 30 definition of hypnosis. International Journal of Clinical and Experimental Hypnosis, 63(1), 1-9.",
  "Faymonville, M. E., Laureys, S., Degueldre, C., Del Fiore, G., Luxen, A., Franck, G., Lamy, M., & Maquet, P. (2000). Neural mechanisms of antinociceptive effects of hypnosis. Anesthesiology, 92(5), 1257-1267.",
  "Gruzelier, J. H. (1998). A working model of the neurophysiology of hypnosis: A review of the evidence. Contemporary Hypnosis, 15(1), 3-21.",
  "Jensen, M. P., Adachi, T., & Hakimian, S. (2015). Brain oscillations, hypnosis, and hypnotizability. American Journal of Clinical Hypnosis, 57(3), 230-253.",
  "Kirsch, I. (1996). Hypnotic enhancement of cognitive-behavioral weight loss treatments: Another meta-reanalysis. Journal of Consulting and Clinical Psychology, 64(3), 517-519.",
  "Lynn, S. J., Kirsch, I., Hallquist, M. N., & Lilienfeld, S. O. (2008). Social cognitive theories of hypnosis. In Nash, M. R., & Barnier, A. J. (Eds.), The Oxford Handbook of Hypnosis.",
  "Oakley, D. A., & Halligan, P. W. (2013). Hypnotic suggestion: opportunities for cognitive neuroscience. Nature Reviews Neuroscience, 14(8), 565-576.",
  "Patterson, D. R., & Jensen, M. P. (2003). Hypnosis and clinical pain. Psychological Bulletin, 129(4), 495-521.",
  "Raz, A., Shapiro, T., Fan, J., & Posner, M. I. (2002). Hypnotic suggestion and the modulation of Stroop interference. Archives of General Psychiatry, 59(12), 1155-1161.",
  "Schaefert, R., Klose, P., Moser, G., & Häuser, W. (2014). Efficacy, tolerability, and safety of hypnosis in adult irritable bowel syndrome: Systematic review and meta-analysis. Psychosomatic Medicine, 76(5), 389-398.",
  "Spiegel, D., Bierre, P., & Rootenberg, J. (1989). Hypnotic alteration of somatosensory perception. American Journal of Psychiatry, 146(6), 749-754.",
  "Terhune, D. B., Cardeña, E., & Lindgren, M. (2011). Dissociative tendencies and individual differences in high hypnotic suggestibility. Cognitive Neuropsychiatry, 16(2), 113-135.",
];

export default function HipnozNedirPage() {
  const faqJsonLd = buildHipnozFaqJsonLd();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hipnoz Nedir? Bilimsel Tanım, Beyin Bulguları ve Klinik Kullanım Alanları",
    description:
      "Hipnozun bilimsel çerçevesini, nörobilim bulgularını, hipnoterapinin kullanım alanlarını ve mit-gerçek ayrımını ele alan kapsamlı içerik.",
    inLanguage: "tr-TR",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/hipnoz-nedir`,
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    articleSection: ["Klinik Psikoloji", "Hipnoterapi", "Nörobilim"],
    keywords: "hipnoz, hipnoterapi, EEG, fMRI, klinik psikoloji",
  };

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Hipnoz Nedir?",
    about: {
      "@type": "MedicalCondition",
      name: "Hipnotik durum ve hipnoterapi uygulamaları",
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 18,
    },
    lastReviewed: "2026-04-23",
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#hipnoz-icerik",
    },
    url: `${siteConfig.url}/hipnoz-nedir`,
  };

  return (
    <LegalDocumentShell path="/hipnoz-nedir" breadcrumbLabel="Hipnoz Nedir?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd) }} />

      <article id="hipnoz-icerik" className="mt-6">
        <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-brand-sky/40 to-white p-6 md:p-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
            Hipnoz Nedir? Bilimsel Tanım, Beyin Bulguları ve Klinik Kullanım Alanları
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg">
            Hipnoz, popüler kültürde çoğu zaman gizemli veya büyüsel bir süreç gibi anlatılır; oysa klinik ve deneysel
            literatürde hipnoz, dikkat düzenleme, telkine yanıt verme ve öznel deneyim modülasyonu ile ilişkili bir zihinsel
            durum olarak ele alınır. Bu sayfada hipnozu mistik iddialardan ayırarak; nörobilim verileri, klinik kullanım
            alanları, güvenlik ilkeleri ve yanlış bilinen mitler üzerinden objektif biçimde değerlendireceğiz. Amaç, hipnozu
            “her şeyi çözen sihirli teknik” gibi sunmak değil; hangi koşullarda anlamlı, hangi sınırlar içinde uygulanabilir
            ve hangi durumlarda dikkatli olunmalı sorularına kanıta dayalı yanıt vermektir.
          </p>
        </header>

        <section className="mt-8" aria-labelledby="bilimsel-tanim">
          <div className="flex items-center gap-2">
            <Brain className="size-5 text-brand-navy" aria-hidden />
            <h2 id="bilimsel-tanim" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Hipnozun bilimsel tanımı
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Modern tanımlarda hipnoz, bir profesyonelin veya standardize bir prosedürün yardımıyla bireyin dikkatini belirli
            bir iç/dış uyarana yönlendirdiği, çevresel uyaranlardan göreli olarak ayrıştığı ve telkinlere daha seçici biçimde
            yanıt verdiği bir süreç olarak tarif edilir (Elkins et al., 2015). Burada kritik nokta “seçici yanıt”tır:
            hipnotik durum, pasif bir teslimiyet değil; belirli bir zihinsel çerçevede, belirli hedeflere odaklanan aktif bir
            bilişsel yeniden örgütlenmedir. Bu nedenle hipnozu anlamanın en doğru yolu, onu “uyku”, “bilinç kaybı” veya “irade
            iptali” kavramlarıyla değil; dikkat kontrolü, beklenti etkisi, anlam atama ve telkin işleme mekanizmalarıyla
            açıklamaktır.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Hipnozun tek bir kuramla açıklanması güçtür. Neodissosiyatif yaklaşımlar, hipnoz sırasında üst düzey kontrol
            işlevlerinin bir kısmında ayrışma olabileceğini öne sürerken; sosyal-bilişsel yaklaşımlar, beklenti, bağlam,
            terapötik ilişki ve rol alma süreçlerinin belirleyici olduğunu vurgular (Lynn et al., 2008). Güncel yaklaşım,
            bu iki kutup arasında daha bütünleşik bir modeldir: hipnotik yanıt hem nörobilişsel yatkınlık hem de bağlamsal/
            kişilerarası etmenlerin etkileşimiyle ortaya çıkar. Bu bakış, klinikte “herkes aynı şekilde hipnotize olur”
            varsayımını geçersiz kılar ve kişiselleştirilmiş protokol ihtiyacını öne çıkarır.
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">
            Dikkat, telkin ve dissosiyatif odak mekanizmaları
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Hipnotik süreçte dikkat, geniş çevresel taramadan daha dar bir zihinsel hedefe kaydırılır. Bu hedef bazen bedensel
            duyum (ör. ağrı algısı), bazen duygusal regülasyon, bazen de bilişsel bir çerçeve değişikliğidir. Telkinler, bu
            daralmış dikkat alanında anlam kazanır ve bireyin öznel deneyimini etkileyebilir. Örneğin ağrı yönetiminde, ağrı
            duyumunun şiddeti kadar “rahatsız edicilik” boyutunda da azalma bildirilebilir (Patterson & Jensen, 2003). Bu
            durum, hipnozun yalnızca semptomu bastırmakla kalmayıp semptomun zihinsel temsiline müdahale edebildiğini gösterir.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Dissosiyatif odak ifadesi, hipnoz sırasında kişinin bazı zihinsel içerikleri arka plana atarken belirli içeriği
            ön plana çıkarmasını anlatır. Bu süreç patolojik dissosiyasyonla aynı değildir; birçok kişide işlevsel ve geçici
            bir odaklanma biçimi olarak görülür (Terhune et al., 2011). Klinik pratikte önemli olan, bu odaklanmanın danışanın
            hedefleriyle uyumlu şekilde yapılandırılması ve seans sonrası günlük yaşam genellemesinin planlanmasıdır.
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">
            Hipnoz ile meditasyon veya gevşeme aynı şey midir?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Hipnoz, gevşeme ve meditasyonla bazı yüzeysel benzerlikler taşısa da yöntemsel hedefleri farklıdır. Gevşeme
            protokolleri otonom sinir sistemi aktivasyonunu azaltmaya odaklanırken, hipnotik protokoller daha yapılandırılmış
            telkinlerle algı, dikkat veya davranış örüntüsünde değişim hedefler. Meditasyon ise çoğu yaklaşımda yargısız
            farkındalık ve dikkat eğitimi amaçlar. Klinik uygulamada bu teknikler birbirini tamamlayabilir; ancak kavramsal
            ayrımın korunması, “her sessizleşme hipnozdur” gibi yanlış genellemeleri önler.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="tarihce">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-brand-navy" aria-hidden />
            <h2 id="tarihce" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Hipnozun tarihçesi: mistik anlatıdan klinik bilime
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Hipnozun tarihsel kökenleri 18. ve 19. yüzyıldaki “manyetizma” ve telkin tartışmalarına kadar uzanır. Erken dönem
            anlatılarda doğaüstü varsayımlar güçlü olsa da, 19. yüzyılın sonlarında nöroloji ve psikiyatri alanındaki
            sistematik gözlemler hipnozu daha deneysel bir zemine taşımaya başlamıştır. Charcot, Bernheim, Janet ve daha sonra
            klinik psikoloji geleneği içinde gelişen çalışmalar, hipnozu “kişilik zayıflığı” ya da “gizemli güç” gibi
            etiketlerden uzaklaştırıp ölçülebilir bir insan davranışı olarak ele almıştır.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            20. yüzyılın ikinci yarısından itibaren, standart hipnotik yatkınlık ölçekleri (örn. Stanford ölçekleri),
            kontrollü klinik çalışmalar ve daha sonra nörogörüntüleme araştırmaları ile alan metodolojik olarak olgunlaşmıştır.
            Bugün hipnoz, tek başına mucizevi bir teknik değil; belirli endikasyonlarda, belirli bir tedavi planına entegre
            edilebilen yardımcı bir klinik araç olarak değerlendirilmektedir.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="nörobilim">
          <div className="flex items-center gap-2">
            <Activity className="size-5 text-brand-navy" aria-hidden />
            <h2 id="nörobilim" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Hipnoz sırasında beyinde neler olur? EEG ve fMRI bulguları
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Nörobilim literatürü hipnozu tek bir “hipnoz merkezi” ile açıklamaz. Bunun yerine dikkat, ağrı işleme, yürütücü
            kontrol ve içsel temsillerle ilişkili ağlarda bağlama özgü değişimler bildirir. Bu nedenle hipnozun beyin karşılığı
            “tek anahtar-açma” modelinden çok, ağ düzeyinde dinamik bir yeniden ayarlama olarak düşünülmelidir (Oakley &
            Halligan, 2013).
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">EEG bulguları</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            EEG çalışmalarında hipnoz sırasında alfa/theta bantlarında farklılaşma bildiren çalışmalar vardır; ancak bulgular
            her protokolde aynı yönü göstermeyebilir (Gruzelier, 1998; Jensen et al., 2015). Bu heterojenlik, hipnotik
            prosedürlerin ve katılımcı profillerinin çeşitliliğiyle ilişkilidir. Dolayısıyla klinik yorum, tek bir frekans
            artışına indirgenmemelidir. Daha güvenli çıkarım, hipnozun dikkat düzenleme ve içsel odak süreçlerini etkileyen bir
            durum olduğu; EEG’nin ise bu etkinin bağlama göre değişen nörofizyolojik izlerini yakalayabildiğidir.
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">
            fMRI ve ağ düzeyi değişimler
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            fMRI çalışmalarında özellikle anterior singulat korteks, prefrontal alanlar, insula ve somatosensoriyel ağlar
            üzerinde durulur. Ağrı odaklı hipnotik telkinlerde, ağrının öznel rahatsızlık boyutunda azalmaya eşlik eden
            aktivite değişimleri rapor edilmiştir (Faymonville et al., 2000; Spiegel et al., 1989). Dikkat çatışması içeren
            görevlerde ise hipnotik telkinin Stroop etkisini azaltabildiği gösterilmiş; bu da bilişsel kontrol süreçlerinin
            telkinle modüle edilebileceği fikrini güçlendirmiştir (Raz et al., 2002).
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Bununla birlikte, fMRI bulgularını “hipnoz kesinlikle şu bölgeyi kapatır” gibi deterministik cümlelerle sunmak
            bilimsel olarak hatalıdır. Görüntüleme verileri grup düzeyinde eğilimleri gösterir; bireysel klinik kararlar ise
            semptom, öykü, eş tanılar, tedavi uyumu ve güvenlik faktörleriyle birlikte değerlendirilmelidir.
          </p>

          <h3 className="mt-6 font-display text-xl font-bold text-brand-navy md:text-2xl">Klinik yorum ve sınırlılıklar</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
            Nörobilim bulguları hipnozun gerçek bir psikofizyolojik süreç olduğunu destekler; ancak bu destek “herkeste aynı
            şiddette etki” anlamına gelmez. Hipnotik yatkınlık, beklenti, terapötik ittifak, yöntem kalitesi ve uygulayıcının
            eğitim düzeyi sonucu belirler. Bu nedenle kanıta dayalı yaklaşım, hipnozu ne tamamen reddeden ne de sınırsız
            genelleyen bir orta hatta konumlandırır.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="kullanim-alanlari">
          <div className="flex items-center gap-2">
            <FlaskConical className="size-5 text-brand-navy" aria-hidden />
            <h2 id="kullanim-alanlari" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Hipnoterapi kullanım alanları: kanıt düzeyiyle değerlendirme
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Hipnoterapi, klinik psikoloji ve sağlık psikolojisi içinde çoğunlukla “yardımcı yöntem” olarak kullanılır.
            Uygulama kararı, kişinin tanısal profiline, semptom şiddetine, motivasyonuna ve eşlik eden tıbbi gereksinimlere
            göre verilir. Aşağıdaki tablo, literatürde sık incelenen alanları özetler:
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-full border-collapse text-left text-sm md:text-base">
              <caption className="px-4 py-3 text-left text-xs text-slate-600 md:text-sm">
                Hipnoterapinin klinik kullanım alanları: kanıt özeti ve pratik sınırlılıklar
              </caption>
              <thead className="bg-slate-50 text-brand-navy">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Alan
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Kanıt düzeyi
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Beklenen katkı
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Sınırlılık
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">Kronik ağrı</td>
                  <td className="px-4 py-3">Orta-güçlü</td>
                  <td className="px-4 py-3">Ağrı şiddeti ve rahatsızlık algısında azalma</td>
                  <td className="px-4 py-3">Tek başına değil, multimodal planla daha etkili</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">Prosedürel kaygı/ağrı</td>
                  <td className="px-4 py-3">Orta-güçlü</td>
                  <td className="px-4 py-3">İşlem öncesi anksiyete ve ağrı toleransında iyileşme</td>
                  <td className="px-4 py-3">Uygulayıcı eğitimi ve hazırlık süresi kritik</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">İrritabl bağırsak sendromu (IBS)</td>
                  <td className="px-4 py-3">Orta</td>
                  <td className="px-4 py-3">Semptom yükünde azalma, yaşam kalitesinde artış</td>
                  <td className="px-4 py-3">Herkeste aynı etki beklenmez, takip gerekir</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3">Stres ilişkili belirtiler</td>
                  <td className="px-4 py-3">Düşük-orta</td>
                  <td className="px-4 py-3">Regülasyon becerisi ve bedensel sakinleşme</td>
                  <td className="px-4 py-3">Primer tanı ve risk profiline göre değişken</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Meta-analizler ve sistematik derlemeler, özellikle ağrı yönetimi ve IBS gibi alanlarda hipnoterapinin anlamlı
            katkılar sağlayabileceğini bildirse de (Patterson & Jensen, 2003; Schaefert et al., 2014), etki büyüklükleri
            protokole, örnekleme ve takip süresine göre değişmektedir. Bu nedenle klinik yorum, “hipnoz kesin çözer” değil,
            “uygun olguda, doğru protokolle, bütüncül plana katkı verebilir” şeklinde olmalıdır.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="mit-gercek">
          <div className="flex items-center gap-2">
            <Waves className="size-5 text-brand-navy" aria-hidden />
            <h2 id="mit-gercek" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Hipnozla ilgili mitler ve gerçekler
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ContentCallout title="Mit: Hipnozda kişi tamamen iradesiz hale gelir." variant="accent">
              <p>
                Klinik bulgular, hipnozun mutlak bir kontrol kaybı olmadığını gösterir. Kişi, seans boyunca bağlamı ve
                güvenliğini değerlendirir; etik dışı telkinlere otomatik biçimde boyun eğme beklenmez.
              </p>
            </ContentCallout>
            <ContentCallout title="Mit: Hipnoz sadece zayıf iradeli kişilerde işe yarar." variant="accent">
              <p>
                Hipnotik yanıt, irade gücünün karşıtı değildir. Dikkat düzenleme kapasitesi, iş birliği, beklenti ve uygulama
                kalitesiyle ilişkilidir. Yüksek bilişsel işlevlere sahip bireyler de hipnotik telkinlere yanıt verebilir.
              </p>
            </ContentCallout>
            <ContentCallout title="Mit: Hipnoz, bastırılmış anıları kesin biçimde geri getirir." variant="accent">
              <p>
                Hatırlama hissinin artması doğruluk garantisi değildir. Yanlış anı riskinden dolayı özellikle travma ve adli
                bağlamlarda yapılandırılmış, etik ve temkinli yöntem şarttır.
              </p>
            </ContentCallout>
            <ContentCallout title="Mit: Hipnoz tıbbi tedavilerin yerine geçer." variant="accent">
              <p>
                Hipnoterapi bazı alanlarda destekleyici bir yöntemdir; tıbbi tedavi planının yerine otomatik olarak
                konumlandırılamaz. En iyi sonuçlar, disiplinler arası koordinasyonla elde edilir.
              </p>
            </ContentCallout>
          </div>

          <blockquote className="mt-6 rounded-xl border-l-4 border-brand-navy bg-slate-50 p-5 text-sm italic leading-relaxed text-slate-700 md:text-base">
            “Hipnozun bilimsel değeri, onu olağanüstü göstermekte değil; hangi klinik sorunda, hangi protokol altında, hangi
            hasta grubunda ne kadar etkili olduğunu dürüstçe raporlamaktadır.”
          </blockquote>
        </section>

        <section className="mt-10" aria-labelledby="guvenlik-etik">
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-5 text-brand-navy" aria-hidden />
            <h2 id="guvenlik-etik" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
              Güvenlik, etik ve kontrendikasyonlar
            </h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Hipnoterapi uygulamasında güvenlik ve etik, teknik başarıdan önce gelir. Bilgilendirilmiş onam, yöntem açıklığı,
            sınırların netliği ve seans hedeflerinin birlikte belirlenmesi temel ilkedir. Klinik uygulayıcı, hipnozu “gösteri”
            formatından ayırmalı; danışanın özerkliğini koruyan, kayıt altına alınabilir ve denetlenebilir bir çerçeve
            kurmalıdır.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Özellikle aktif psikotik belirtiler, ağır realite bozulması, akut intihar riski, ciddi dissosiyatif instabilite
            veya tıbbi belirsizliklerde öncelik kapsamlı psikiyatrik/tıbbi değerlendirmedir. Hipnotik teknikler bu değerlendirme
            tamamlanmadan birincil müdahale gibi konumlandırılmamalıdır. Ayrıca geçmiş travma öyküsü olan bireylerde telkin dili
            dikkatle seçilmeli; güvenlik sinyalleri ve seans sonlandırma protokolü önceden konuşulmalıdır.
          </p>
          <ContentCallout title="Klinik güvenlik notu" variant="theory">
            <p>
              Hipnoterapi, acil psikiyatrik kriz hizmetinin yerine geçmez. Kendinize veya başkasına zarar verme riski,
              psikotik alevlenme, akut madde etkisi veya ciddi tıbbi nörolojik belirti durumlarında acil yardım hatları ve
              ilgili sağlık kurumları önceliklidir.
            </p>
          </ContentCallout>
        </section>

        <section className="mt-10" aria-labelledby="sss">
          <h2 id="sss" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-4 space-y-3">
            {hipnozFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-semibold text-brand-navy marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="kaynakca">
          <h2 id="kaynakca" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Kaynakça / Akademik Referanslar
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
            Aşağıdaki kaynaklar hipnoz ve hipnoterapi alanındaki nörobilim, klinik etkililik ve kuramsal çerçeve literatüründen
            seçilmiştir. Liste bilgilendirme amaçlıdır; klinik karar yerine geçmez.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
            {references.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section
          className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8"
          aria-labelledby="hipnoz-cta"
        >
          <h2 id="hipnoz-cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Hipnoz veya hipnoterapi hakkında bilimsel çerçevede bilgi almak için iletişime geçin
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Klinik değerlendirme, yöntem seçimi ve uygunluk kararı kişiye özeldir. Telefon veya WhatsApp üzerinden ön görüşme
            planlayarak sizin için en güvenli ve işlevsel yol haritasını birlikte belirleyebiliriz.
          </p>
          <div className="mt-5">
            <CTAGroup />
          </div>
        </section>
      </article>
    </LegalDocumentShell>
  );
}

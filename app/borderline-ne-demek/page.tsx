import type { Metadata } from "next";
import { AlertTriangle, BookOpen, ShieldCheck } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { borderlineFaqs, buildBorderlineFaqJsonLd } from "@/lib/borderline-faq";
import { siteConfig } from "@/lib/site";

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
  title: "Borderline Ne Demek? Kernberg, Linehan ve Masterson ile Kapsamlı Rehber | Psk. Ahmet Alparslan Sancar",
  description:
    "Borderline ne demek? Sınır kişilik bozukluğu nedir, borderline belirtileri, splitting, Kernberg kuramı, borderline ve ilişkiler, DBT ve TFP farkları.",
  keywords: [
    "borderline ne demek",
    "borderline belirtileri",
    "sınır kişilik bozukluğu nedir",
    "kernberg borderline kuramı",
    "borderline ve ilişkiler",
    "splitting nedir",
  ],
  alternates: { canonical: "/borderline-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Borderline Ne Demek? Sınır Kişilik Örgütlenmesini Anlamak",
    description:
      "Kernberg, Linehan ve Masterson çerçevesiyle borderline kişilik örüntüsünü bilimsel derinlikte açıklayan rehber.",
    url: `${siteConfig.url}/borderline-ne-demek`,
  },
};

export default function BorderlineNeDemekPage() {
  const faqJsonLd = buildBorderlineFaqJsonLd();

  return (
    <LegalDocumentShell path="/borderline-ne-demek" breadcrumbLabel="Borderline ne demek?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Borderline Ne Demek?
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="text-brand-navy">Borderline ne demek</strong> sorusu yalnızca bir tanım arayışı değildir;
          çoğu zaman kişinin kendi iç dünyasındaki kaosu, ilişkilerdeki yoğun gelgitleri ve "neden bu kadar zorlanıyorum?"
          deneyimini anlamlandırma çabasıdır. Tarihsel olarak "borderline" terimi, nevroz ve psikoz arasında bir sınır
          alanı tarif etmek için kullanılmıştır. Güncel klinik yaklaşımda ise bu kavramı, salt bir etiket değil;
          <strong className="text-brand-navy"> kendilik algısı, öteki temsilleri, duygu düzenleme ve ilişki güvenliği</strong>
          etrafında örgütlenen çok katmanlı bir yapı olarak ele alıyoruz.
        </p>

        <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
          Bu rehberin amacı damgalamak değil, açıklamaktır. Borderline örüntüde kişi çoğu zaman aynı anda iki güçlü
          ihtiyaç taşır: yoğun yakınlık arzusu ve terk edilme korkusu. Bu ikili gerilim, ilişkilerde hızlı idealizasyon-
          değersizleştirme döngülerine, içsel boşluk hissine, dürtüsel çıkışlara ve yoğun utanç/öfke epizodlarına
          yol açabilir. Yazının omurgasında Kernberg'in sınır kişilik örgütlenmesi yaklaşımını merkeze alacak;
          Linehan'ın biyososyal teorisi ve Masterson'ın nesne ilişkileri perspektifiyle genişleteceğiz.
        </p>

        <section className="mt-10" aria-labelledby="borderline-belirtileri-seo">
          <h2 id="borderline-belirtileri-seo" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Borderline kişilik bozukluğu belirtileri ve borderline belirtileri
          </h2>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Arama motorlarında en sık sorulan başlıklardan biri <strong>borderline kişilik bozukluğu belirtileri</strong>{" "}
            ve <strong>borderline belirtileri</strong>dir. Klinik açıdan bu belirtiler tek tek değil, bir örüntü
            halinde anlam taşır. Özellikle ilişki bağlamında hızlı idealleştirme-değersizleştirme geçişleri, yoğun
            terk edilme kaygısı, kimlikte dalgalanma, dürtüsellik ve kronik boşluk hissi bir arada görüldüğünde
            uzman değerlendirmesi gerekir.
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800 md:text-base">
            <strong>Snippet özeti:</strong> Borderline belirtileri; terk edilme korkusu, dengesiz ilişkiler, kimlik
            karmaşası, dürtüsellik, duygusal dalgalanma, boşluk hissi, yoğun öfke ve stresle artan paranoid/dissosiyatif
            belirtilerle karakterizedir. Tanı için süreklilik ve işlev kaybı değerlendirilir.
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
            <li>İlişkilerde kısa sürede aşırı yakınlık ve ani uzaklaşma döngüsü</li>
            <li>Terk edilme ihtimaline karşı yoğun alarm ve kontrol davranışları</li>
            <li>Duygusal tetiklenmelerde hızlı öfke, panik veya çökkünlük geçişleri</li>
            <li>Kendilik algısında keskin değişimler, değersizlik ve boşluk deneyimi</li>
            <li>Dürtüsel kararlar (harcama, riskli davranış, ani kopuşlar)</li>
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="kernberg-omurga">
          <h2 id="kernberg-omurga" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Otto Kernberg ve sınır kişilik örgütlenmesi: Bilimsel omurga
          </h2>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Kernberg (1975), borderline yapıyı yalnızca "duygusal dalgalanma" olarak değil, belirli bir kişilik
            örgütlenmesi düzeyi olarak tanımlar. Bu modelde üç kavram kritik önemdedir: <strong>kimlik dağılması
            (identity diffusion)</strong>, <strong>ilkel savunmalar (özellikle splitting/bölme)</strong> ve
            <strong> gerçeği değerlendirme yetisinin göreli korunumu</strong>. Kişi psikotik düzeyde bir gerçeklik
            kopuşu yaşamaz; ancak yoğun duygusal yük altında benlik ve nesne temsilleri keskin kutuplara ayrışır.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Splitting (Bölme) neden merkezde?</h3>
          <p className="mt-2 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Splitting, kişinin kendini ve karşısındakini aynı anda hem iyi hem eksik/olumsuz yönleriyle tutmakta
            zorlanmasıdır. Bu durumda temsil sisteminde entegrasyon azalır; biri "tam iyi" iken bir anda "tam kötü"
            olabilir. Bu değişim çoğu zaman bilinçli manipülasyon değil, yoğun kaygı ve terk edilme aktivasyonu altında
            kendiliğinden devreye giren bir savunma örüntüsüdür.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Kimlik dağılması (Identity diffusion)</h3>
          <p className="mt-2 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Borderline örüntüde kişi sıklıkla "ben kimim?" sorusunu istikrarlı biçimde yanıtlamakta zorlanır.
            Değerler, hedefler, ilişki kimliği ve benlik anlatısı dönemsel olarak sert biçimde değişebilir. Bu,
            ergenlikteki gelişimsel deneysellikten farklıdır; çünkü yetişkin işlevselliği ve ilişkisel sürekliliği
            bozan bir düzeye ulaşabilir. Kimlik dağılması, yalnızca "kararsızlık" değildir; benlik bütünlüğünün
            kırılgan hale gelmesidir.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Gerçeği değerlendirme yetisi</h3>
          <p className="mt-2 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Kernberg modelinde borderline örgütlenme, psikotik örgütlenmeden bu noktada ayrılır. Kişi genel olarak
            gerçeklikle bağını korur; ancak duygusal aktivasyon yükseldiğinde ilişkisel gerçekliği ciddi biçimde
            çarpıtabilir. Örneğin kısa bir iletişim kesintisini "kesin terk edildim" olarak yorumlayabilir.
            Terapide hedef, duygusal aktivasyon anlarında zihinselleştirme kapasitesini geri kazandırmaktır.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-navy md:text-xl">Kötü nesne vs iyi nesne (Kernberg)</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Boyut</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">"İyi Nesne" Temsili</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">"Kötü Nesne" Temsili</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Algı</td>
                  <td className="px-4 py-3">Koruyucu, ideal, vazgeçilmez</td>
                  <td className="px-4 py-3">Tehdit edici, reddedici, değersizleştirici</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Duygu</td>
                  <td className="px-4 py-3">Yoğun bağlılık, hayranlık</td>
                  <td className="px-4 py-3">Öfke, utanç, panik</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Davranış</td>
                  <td className="px-4 py-3">İdealleştirme, yapışma, sınır erimesi</td>
                  <td className="px-4 py-3">Değersizleştirme, kopma tehdidi, dürtüsel tepki</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Terapötik hedef</td>
                  <td className="px-4 py-3" colSpan={2}>İyi ve kötü temsilleri aynı kişide entegre edebilmek, ambivalansa tolerans geliştirmek</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="linehan-biyososyal">
          <h2 id="linehan-biyososyal" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Marsha Linehan ve biyososyal teori: Duygu regülasyonu neden zorlanır?
          </h2>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Linehan (1993), borderline örüntüyü biyolojik duygu hassasiyeti ile geçersiz kılan çevrenin birleşimi
            olarak açıklar. Bazı bireylerde sinir sistemi duygusal uyaranlara daha hızlı, daha güçlü ve daha uzun
            süreli tepki verir. Eğer çevre bu duygulanımı "abartıyorsun", "hissettiğin yanlış", "böyle hissedemezsin"
            mesajlarıyla sürekli geçersizleştirirse, kişi duygusunu düzenlemek yerine onunla savaşmayı öğrenir.
          </p>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Sonuçta paradoksal bir tablo doğar: Kişi bir yandan yoğun duygulardan kaçmak ister, diğer yandan duygusal
            doğrulanma için çok güçlü ilişki taleplerinde bulunabilir. Kriz anlarında kendine zarar verme düşünceleri,
            ani kopuşlar, yoğun öfke veya dissosiyatif kopukluklar bu regülasyon kırılganlığının klinik görünümlerinden
            bazılarıdır. Bu tablo "irade zayıflığı" değil; öğrenilmiş ve biyolojik olarak hassas bir düzenleme modelidir.
          </p>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-display text-lg font-bold text-brand-navy md:text-xl">Vurucu Özet Kutusu</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-[15px]">
              Borderline'da "sorunlu kişi" anlatısı yerine "zorlanan düzenleme sistemi" yaklaşımı daha doğrudur.
              Bu çerçeve damgalamayı azaltır, tedaviye katılımı artırır ve kişinin utanç yerine beceri geliştirmeye
              odaklanmasını kolaylaştırır.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="masterson-nesne-iliskileri">
          <h2 id="masterson-nesne-iliskileri" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            James Masterson: Terk edilme depresyonu ve gerçek/sahte kendilik çatışması
          </h2>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Masterson, borderline dinamiği açıklarken ayrışma-bireyleşme dönemindeki kırılmalara ve terk edilme
            depresyonuna vurgu yapar. Kişi özerkleştiğinde sevilmeyeceğine dair derin bir beklenti taşıyorsa,
            gerçek kendilik ihtiyaçlarını bastırıp "sahte kendilik" üzerinden ilişkiyi sürdürmeye çalışabilir.
            Bu modelde içsel savaş şudur: "Kendim olursam terk edilirim; terk edilmemek için kendimden vazgeçmeliyim."
          </p>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Bu çatışma uzun vadede boşluk, anlamsızlık ve kronik huzursuzluk üretir. Kişi dışarıdan ilişkisel olarak
            yoğun görünebilir; fakat içeride "kimse beni gerçekten görmüyor" duygusu baskın olabilir. Terapinin
            dönüştürücü etkisi, tam da burada başlar: gerçek kendilik ihtiyaçlarının güvenli bir ilişki alanında
            ifade edilebilir hale gelmesi.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="belirtiler-ic-dunya">
          <h2 id="belirtiler-ic-dunya" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Temel belirtiler ve iç dünya: DSM-5 kriterlerine psikodinamik yorum
          </h2>
          <ul className="mt-4 space-y-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            <li>
              <strong>Terk edilmekten kaçınmak için yoğun çaba:</strong> Dışarıdan "aşırı tepki" gibi görünse de
              içerideki ana tema genellikle yok olma/dağılma kaygısıdır.
            </li>
            <li>
              <strong>Yoğun ve dengesiz ilişkiler:</strong> İdealleştirme-değersizleştirme döngüsü splitting savunmasının
              ilişkisel sahadaki karşılığıdır.
            </li>
            <li>
              <strong>Kimlik karmaşası:</strong> Değerlerin, hedeflerin ve benlik anlatısının keskin biçimde değişmesi
              identity diffusion ile uyumludur.
            </li>
            <li>
              <strong>Dürtüsellik:</strong> Harcama, madde, riskli cinsellik, öfke patlaması gibi alanlarda "duygu
              regülasyonu için davranış" paternine dönüşebilir.
            </li>
            <li>
              <strong>Tekrarlayan kendine zarar davranışları veya intihar tehdidi:</strong> Çoğu zaman iletişim manipülasyonu
              değil, düzenlenemeyen içsel acının acil boşaltımıdır; her durumda ciddi klinik değerlendirme gerekir.
            </li>
            <li>
              <strong>Duygu durumunda belirgin oynaklık:</strong> Bipolar'daki dönemsel epizodlardan farklı olarak,
              daha çok ilişkisel tetikleyicilerle hızlı dalgalanır.
            </li>
            <li>
              <strong>Kronik boşluk hissi:</strong> Sadece can sıkıntısı değil, kendilik sürekliliğinin kırılganlığını
              yansıtan varoluşsal bir boşluk deneyimi olabilir.
            </li>
            <li>
              <strong>Yoğun öfke veya öfke kontrolünde güçlük:</strong> Narsistik yaralanma benzeri utanç aktivasyonları
              ile iç içe geçebilir.
            </li>
            <li>
              <strong>Geçici paranoid düşünceler/dissosiyasyon:</strong> Stres altındaki zihinsel parçalanmanın kısa
              süreli yansımalarıdır.
            </li>
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="ayirici-tani">
          <h2 id="ayirici-tani" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Borderline ve bipolar: Neden sık karışır, nasıl ayrılır?
          </h2>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            "Borderline ve bipolar" ayrımı klinikte en sık zorlanılan alanlardan biridir. Her iki tabloda duygu
            yoğunluğu görülebilir; ancak zamansal örüntü, tetikleyiciler ve kişilerarası dinamikler farklıdır.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Boyut</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Borderline örüntü</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Bipolar örüntü</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">Dalgalanma süresi</td>
                  <td className="px-4 py-3">Saatler-günler, hızlı ve tetikleyiciye duyarlı</td>
                  <td className="px-4 py-3">Günler-haftalar süren epizodik dönemler</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Tetikleyici</td>
                  <td className="px-4 py-3">İlişkisel olaylar, terk edilme algısı</td>
                  <td className="px-4 py-3">Daha otonom biyolojik ritim değişimleri</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Benlik teması</td>
                  <td className="px-4 py-3">Kimlik dağılması ve boşluk</td>
                  <td className="px-4 py-3">Dönemsel enerji/duygu durum değişimleri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="tedavi-yontemleri">
          <h2 id="tedavi-yontemleri" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Tedavi yöntemleri: DBT ve TFP ne zaman, hangi hedefle?
          </h2>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Borderline tedavisinde tek bir doğru yoktur; klinik formülasyon belirleyicidir. Marsha Linehan'ın
            DBT yaklaşımı kriz yönetimi, öz-kıyım riskini azaltma ve duygu regülasyonu becerileri için güçlü bir
            yapı sunar. Kernberg geleneğinden gelen TFP ise aktarım alanında splitting, kimlik dağılması ve nesne
            temsillerinin entegrasyonuna odaklanır.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white text-left text-sm md:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Yaklaşım</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Temel odak</th>
                  <th className="px-4 py-3 font-semibold text-brand-navy">Uygun vaka profili</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3">DBT</td>
                  <td className="px-4 py-3">Duygu düzenleme, kriz toleransı, kişilerarası beceri</td>
                  <td className="px-4 py-3">Yüksek dürtüsellik, kendine zarar riski, akut regülasyon güçlüğü</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">TFP</td>
                  <td className="px-4 py-3">Aktarımda kimlik entegrasyonu, splitting analizi, nesne ilişkileri</td>
                  <td className="px-4 py-3">Kronik ilişki döngüleri, kimlik dağılması, savunma çatışmaları</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base leading-[1.9] text-slate-700 md:text-[17px]">
            Pratikte sıkça entegratif plan yapılır: önce güvenlik ve regülasyon (DBT becerileri), ardından daha derin
            kişilik örgütlenmesi çalışması (TFP/mentalizasyon/şema). Tedavi sürecinde psikiyatri ve klinik psikoloji
            iş birliği de çoğu zaman yararlıdır.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-amber-200/90 bg-amber-50/90 p-5" aria-labelledby="stigma-notu">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 size-6 shrink-0 text-amber-700" aria-hidden />
            <div>
              <h2 id="stigma-notu" className="font-display text-lg font-bold text-brand-navy md:text-xl">Stigma karşıtı klinik not</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-[15px] md:leading-relaxed">
                Borderline tanısı "zor insan" etiketi değildir. Bu tanı, kişinin yaşadığı yoğun iç acıyı, ilişki
                regülasyon güçlüğünü ve tedavi gereksinimini açıklamak için kullanılır. Damgalama tedaviyi geciktirir;
                doğru bilgi ve empatik yaklaşım iyileşmeyi hızlandırır.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-brand-navy/20 bg-gradient-to-br from-brand-sky/80 to-white p-6 shadow-md md:p-8" aria-labelledby="cta">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 size-7 shrink-0 text-brand-navy" aria-hidden />
            <div>
              <h2 id="cta" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                Kaotik iç dünya, terapide dengelenebilir
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
                Borderline örüntüde yoğun acı, hızlı ilişki kırılmaları ve boşluk hissi değişmez kader değildir.
                Beşiktaş'taki kliniğimde ve online seanslarda, güvenlikten başlayıp duygu düzenleme, kimlik entegrasyonu
                ve ilişki sınırları üzerine yapılandırılmış bir yol haritası oluşturuyoruz.
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
            {borderlineFaqs.map((item) => (
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
            <li>Kernberg, O. F. (1975). Borderline conditions and pathological narcissism. Jason Aronson.</li>
            <li>Linehan, M. M. (1993). Cognitive-behavioral treatment of borderline personality disorder. Guilford Press.</li>
            <li>Masterson, J. F. (1976). Psychotherapy of the borderline adult: A developmental approach. Brunner/Mazel.</li>
            <li>Clarkin, J. F., Yeomans, F. E., & Kernberg, O. F. (2006). Psychotherapy for borderline personality. American Psychiatric Publishing.</li>
            <li>Gunderson, J. G., & Links, P. S. (2014). Borderline personality disorder: A clinical guide (2nd ed.). American Psychiatric Publishing.</li>
            <li>Bateman, A., & Fonagy, P. (2004). Psychotherapy for borderline personality disorder: Mentalization-based treatment. Oxford University Press.</li>
          </ul>
        </section>
      </article>
    </LegalDocumentShell>
  );
}

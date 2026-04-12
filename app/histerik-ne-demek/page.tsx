import type { Metadata } from "next";
import { BookOpen, Quote } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildHisterikFaqJsonLd, histerikFaqs } from "@/lib/histerik-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Histerik Ne Demek? Kısa Rehber",
  description:
    "Histerik ne demek, histeri nedir? Yunanca hystera kökeni, Freud histeri teorisi, konversiyon bozukluğu, histriyonik kişilik bozukluğu ve histeri belirtileri hakkında kapsamlı rehber.",
  keywords: [
    "histeri nedir",
    "histerik kişilik bozukluğu",
    "Freud histeri teorisi",
    "konversiyon bozukluğu nedir",
    "histeri belirtileri",
    "histerik ne demek",
  ],
  alternates: { canonical: "/histerik-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Histerik Ne Demek? Kısa Rehber | ${siteConfig.name}`,
    description:
      "Rahim mitinden Charcot ve Freud'a, konversiyon ve histriyonik kişilik bozukluğuna uzanan bilimsel ve psikodinamik yolculuk.",
    url: `${siteConfig.url}/histerik-ne-demek`,
  },
};

export default function HisterikNeDemekPage() {
  const faqJsonLd = buildHisterikFaqJsonLd();

  return (
    <LegalDocumentShell path="/histerik-ne-demek" breadcrumbLabel="Histerik ne demek?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Histerik Ne Demek?
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="text-brand-navy">Histerik ne demek</strong> sorusu, günlük dilde çoğu zaman abartılı tepki
          veya dramatik davranış için kullanılsa da, klinik ve entelektüel tarihte çok daha derin bir hikâye taşır.{" "}
          <strong>Histeri nedir</strong> sorusunun cevabı, antik tıptan psikanalize, oradan da güncel psikiyatri
          sınıflandırmalarına uzanan bir yolculuktur. Bu rehberde kelimenin iki bin yıllık izini sürerken,{" "}
          <strong>Freud histeri teorisi</strong> ve <strong>konversiyon bozukluğu nedir</strong> sorularını da netleştireceğiz;
          ayrıca <strong>histerik kişilik bozukluğu</strong> ile bedensel semptomların ayrıştırılmasına odaklanacağız.
        </p>

        <blockquote className="my-8 border-l-4 border-brand-navy/70 bg-slate-50 py-4 pl-5 pr-4 text-slate-800">
          <div className="flex gap-2">
            <Quote className="mt-0.5 size-5 shrink-0 text-brand-navy/60" aria-hidden />
            <p className="text-base italic leading-relaxed md:text-lg">
              Beden bazen kelimelerin yetmediği yerde sahneye çıkar: söylenemeyen çatışma, görünür bir semptom diline
              çevrilir.
            </p>
          </div>
        </blockquote>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">Etimolojik Köken</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          &quot;Histeri&quot; sözcüğü Yunanca <em>hystera</em> (ῠ̔στέρα) ile bağlantılıdır ve anlam olarak{" "}
          <strong>rahim</strong> ile ilişkilendirilmiştir. Antik Yunan tıbbında yaygın bir imgelerden biri, rahmin
          bedende &quot;gezdiği&quot; ve bu hareketin çeşitli bedensel ve ruhsal şikayetlere yol açtığı inancıdır; bu
          fikir literatürde <strong>wandering womb</strong> (gezen rahim) olarak bilinir. Tarih boyunca bu çerçeve,
          kadın bedenini patolojileştiren ve semptomları biyolojik-mitolojik bir anlatıya kilitleyen bir baskı biçimi
          üretmiştir: acı ve şikayet, bazen &quot;rahim konuşuyor&quot; metaforuyla açıklanmış, böylece toplumsal ve
          psikolojik boyutlar görünmez kılınmıştır.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Modern okuyucu için bu köken, yalnızca meraklı bir etimoloji değil; aynı zamanda <strong>histeri belirtileri</strong>
          {" "}denildiğinde hâlâ süregelen damgalamanın da kaynağını aydınlatır. Bugün klinik pratikte terim ayrıştırılmış
          olsa da, günlük dilde &quot;histerik&quot; sıfatı hâlâ cinsiyetçi ve küçümseyici bir ton taşıyabilir. Bu yüzden
          güncel psikoterapide, kişinin deneyimini isimlendirirken tanısal dil ile aşağılayıcı dilin ayrıştırılması önemlidir.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Hipokratik gelenekte de rahim merkezli açıklamalar görülür; bu miras, yüzyıllar boyunca semptomları bedensel
          ve cinsiyetlenmiş bir tek nedene bağlama eğilimini güçlendirmiştir. Bugün bu tarihsel yükü bilmek, hem
          bilimsel doğruluğu hem de etik bir dil kullanımını destekler: şikayetin kaynağını ararken kişinin hikâyesini,
          ilişkilerini ve travma öyküsünü görünür kılmak, mitolojik tek-cümle açıklamaların ötesine geçmektir.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Psikanalizin Doğuşu ve Sigmund Freud
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          19. yüzyılın ikinci yarısında Paris&apos;te <strong>Jean-Martin Charcot</strong>, Salpêtrière&apos;de histerik
          nöbetleri ve hipnoz ilişkisini klinik gösterilerle sergilemesiyle dönemin entelektüel hayatını sarstı. Bu
          sahneleştirme, histeriyi yalnızca &quot;kadın hastalığı&quot; olmaktan çıkarıp nörolojik-tıbbi merakın odağına
          taşıdı; aynı zamanda görünürlüğü artırdı. Freud, Charcot ile çalışmalarından etkilenerek histeriyi merkeze alan
          bir kuram yoluna girdi.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Breuer ve Freud</strong> (1895), <em>Histeri Üzerine Çalışmalar</em> (Studien über Hysterie) içinde{" "}
          <strong>Anna O.</strong> vakasını anlatır; bu vaka, konuşma terapisinin ve psikanalitik düşüncenin mitolojik
          başlangıç noktalarından biri sayılır. Freud için histeri, artık rahim mitolojisinden çok,{" "}
          <strong>bastırılmış travmatik anıların bedensel semptomlara dönüşümü</strong> olarak anlaşılmaya başlandı. Bu
          süreçte öne çıkan kavramlardan biri <strong>konversiyon</strong>dur: zihinsel çatışma, felç, körlük, duyu kaybı
          gibi nörolojik görünümlü ama yapısal lezyonla açıklanamayan ifadelere &quot;çevrilir&quot;. Metafor olarak
          düşünürsek, beden bir tiyatro sahnesine dönüşür; perde arkasındaki dram, seyirciye (doktora, aileye, kendimize)
          doğrudan sözle değil, beden diliyle ulaşır.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Pierre Janet</strong> de dissosiasyon ve travma ilişkisini vurgulayan öncü isimlerdendir; Freud ile
          Janet çizgileri tarihsel olarak ayrışsa da, histeri tartışmasında travma, bellek ve bilinçdışı temalarının
          erken biçimlerini paylaşırlar.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Bu entelektüel hareket, histeriyi yalnızca gösteriye indirgemez; aynı zamanda belirtilerin anlamlandırılması
          ihtiyacını doğurur. Konuşma terapisi fikri, bedenin çığlığını yalnızca susturmak değil, onu yavaş yavaş
          çevrilebilir bir dile dönüştürmek üzerine kuruludur. Böylece <strong>Freud histeri teorisi</strong>, tıbbi
          spekülasyon ile psikolojik formülasyon arasında bir köprü kurar.
        </p>

        <aside
          className="my-10 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 md:p-6"
          aria-labelledby="savunma-nevroz-baslik"
        >
          <h3 id="savunma-nevroz-baslik" className="font-display text-lg font-bold text-brand-navy md:text-xl">
            Kutu: Freud ve &quot;Savunma Nevrozları&quot;
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-800 md:text-base">
            Freud, nevrozları gelişimsel ve yapısal olarak ayırırken <strong>savunma nevrozları</strong> başlığı altında
            histeri ve obsesif-kompulsif örüntüleri tartışmıştır. Histeride bastırma ve konversiyon gibi süreçler öne
            çıkarken, obsesif dünyada tepki oluşturma ve geri çevirme gibi savunmalar daha baskındır. Akademik meraklı
            okuyucu için bu ayrım, semptomun yalnızca &quot;ne&quot; olduğunu değil, ego&apos;nun çatışmayı hangi
            savunma taktiğiyle yönetmeye çalıştığını da anlamayı sağlar.
          </p>
        </aside>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Histeriden Modern Tanılara
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Bugün &quot;histeri&quot; tek bir tanı kartı gibi kullanılmaz; DSM-5-TR çerçevesinde yakınlığı olan tablolar
          başlıca iki grupta ele alınır. Aşağıdaki tablo, günlük dilde kaynaşan kavramları ayırmak için pratik bir harita
          sunar.
        </p>

        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm text-slate-800 md:text-base">
            <thead className="bg-slate-100 text-brand-navy">
              <tr>
                <th className="px-4 py-3 font-semibold">Başlık</th>
                <th className="px-4 py-3 font-semibold">Özet özellikler</th>
                <th className="px-4 py-3 font-semibold">Klinik vurgu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium">Histriyonik kişilik bozukluğu</td>
                <td className="px-4 py-3">
                  İlgi odağı olma ihtiyacı, hızlı değişen dramatik duygular, başkalarını etkileme çabası
                </td>
                <td className="px-4 py-3">Kalıcı kişilik örüntüsü; ilişki ve kimlik düzenleme</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">İşlevsel nörolojik semptom bozukluğu (konversiyon)</td>
                <td className="px-4 py-3">
                  Psikolojik çatışmanın felç, körlük, nöbet benzeri atak gibi somatik ifadeleri
                </td>
                <td className="px-4 py-3">Semptom sembolizmi ve tıbbi ayırıcı tanı</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Histerik kişilik bozukluğu</strong> ifadesi günlük konuşmada sık geçse de, resmi sınıflandırmada
          karşılığı histriyonik kişilik bozukluğudur. <strong>Konversiyon bozukluğu nedir</strong> sorusunun cevabı ise
          şudur: uygun nörolojik açıklama bulunmadan ortaya çıkan, işlevi ciddi etkileyen nörolojik görünümlü semptomlar
          kümesidir ve çoğu zaman stres ve çatışma ile zamanlaması ilişkilidir.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Klinik değerlendirmede &quot;simülasyon mu, gerçek mi?&quot; ikilemi yerine, işlev kaybının ciddiyeti,
          ayırıcı tanı ve çok disiplinli bakış öne çıkar. Hastanın semptomu &quot;gerçek dışı&quot; değildir; beden
          deneyimi gerçektir; soru, yapısal lezyon mu yoksa işlevsel düzenleniş mi sorusudur. Bu ayrım, hem tedavi
          güvenini hem de etik bir ortamı korur.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Histeri belirtileri</strong> diye anılan geniş çerçeve bugün parçalanmıştır: dikkat çekici duygulanım
          ve ilişki örüntüleri kişilik düzleminde; felç, körlük, titreme, yürüme bozukluğu gibi nörolojik görünümlü
          şikayetler ise işlevsel nörolojik semptom bozukluğu kapsamında ele alınır. Böylece tanı, damgalayıcı bir etiket
          yerine tedavi planını yönlendiren bir haritaya dönüşür.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">Psikodinamik Bakış</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Psikodinamik literatürde &quot;histerik kişilik örgütlenmesi&quot; veya histriyonik örüntüler, duyguların
          yoğunluğu ve ilişkide canlılık arayışı ile tanımlanır. Öne çıkan savunmalardan biri{" "}
          <strong>cinselleştirme</strong>dir: kişi, yakınlık ve değer görme ihtiyacını cinsel çağrışımlı bir dil veya
          görünüm üzerinden düzenlemeye çalışabilir. Bununla birlikte paradoks şudur: aynı örgütlenmede, gerçek
          cinselliğin yoğunluğu veya yakınlığın sürdürülebilirliği konusunda bir geri çekilme, utanç veya kaçınma da
          sık görülür. Yani <strong>baştan çıkarıcılık ile cinsellikten kaçınma</strong> arasında gerilim, klinik
          masada sık işitilen bir temadır; bu gerilim yargılanacak bir &quot;çelişki&quot; değil, çoğu zaman korunma
          ve bağlanma ihtiyacının karmaşık bir düzenlenişidir.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Terapötik ilişkide hedef, dramayı yok saymak değil; dramanın altındaki yalnızlık, reddedilme korkusu ve
          kimlik bütünlüğü ihtiyacını yavaş yavaş söze çevirmektir. Böylece kişi, dikkati yalnızca &quot;sahne ışığı&quot;
          ile değil, anlam ve süreklilik ile de deneyimleyebilir.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Histerik Nevrozda Sembolizm
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Konversiyon ve benzeri tablolarda bedensel semptom, bazen <strong>konuşamayan bir ruhun çığlığı</strong> gibi
          okunur. Freudcu gelenekte semptomun bir &quot;dili&quot; olduğu fikri, sembolik düzlemde anlam aramayı
          mümkün kılar: örneğin söyleyemediği ağır sözler yüzünden <strong>ses kısıklığı</strong>, görünmek istemediği
          bir gerçeğe karşı <strong>körlük</strong>, hareket ettiremediği bir kararın ağırlığına karşı{" "}
          <strong>felç hissi</strong> gibi imgeler terapötik çalışmada metafor olarak ele alınabilir. Bu okuma, tıbbi
          değerlendirmenin yerini almaz; önce organik nedenler ekarte edilmelidir.
        </p>
        <blockquote className="my-8 border-l-4 border-slate-400 bg-slate-50 py-4 pl-5 pr-4 text-slate-800">
          <p className="text-base italic leading-relaxed md:text-lg">
            Semptom bazen sorunun cevabı değil, sorunun kendisidir: beden, zihnin henüz cümle kuramadığı yerde konuşmaya
            başlar.
          </p>
        </blockquote>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Profesyonel psikoterapi sürecinde bu sembolizm, kişinin hikâyesini zenginleştirir; ancak her semptom için tek
          bir &quot;anahtar anlam&quot; dayatmak dogmatik olur. Anlam, kişinin yaşam öyküsü, ilişkileri ve kültürel
          bağlamı içinde birlikte üretilir.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Sık Sorulan Sorular (Google S.S.S.)
        </h2>
        <div className="mt-6 space-y-6">
          {histerikFaqs.map((item) => (
            <section key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-brand-navy">{item.question}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-800">{item.answer}</p>
            </section>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">Kaynakça</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-800 md:text-base">
          <li>
            Breuer, J., &amp; Freud, S. (1895). <em>Studien über Hysterie</em> (Histeri üzerine çalışmalar). Leipzig und
            Wien: Deuticke.
          </li>
          <li>
            American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em>{" "}
            (5th ed., text rev.). Washington, DC: Author. (Histriyonik kişilik bozukluğu; işlevsel nörolojik semptom
            bozukluğu başlıkları.)
          </li>
          <li>
            Charcot, J.-M. (tarihsel klinik eserleri; Salpêtrière dönemi histeri ve hipnoz gösterileri üzerine klasik
            referans).
          </li>
          <li>Janet, P. (dissosiasyon ve travma psikopatolojisi bağlamında tarihsel katkılar).</li>
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Profesyonel destek: anlamı birlikte kurmak
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg">
            Bu derin bedensel ve ruhsal örüntüler, güvenli bir terapötik ilişkide yavaş yavaş söze ve anlamına
            dönüştürülebilir. Belirtileriniz işlevselliğinizi kısıtlıyorsa önce tıbbi değerlendirme; ardından size uygun
            psikoterapi ve gerekiyorsa psikiyatrik tedavi planı en sağlıklı adımdır. Randevu ve online terapi seçenekleri
            için iletişime geçebilirsiniz.
          </p>
          <div className="mt-6">
            <CTAGroup />
          </div>
        </div>
      </article>
    </LegalDocumentShell>
  );
}

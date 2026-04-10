import type { Metadata } from "next";
import { BookOpen, Heart } from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { buildPanseksuelFaqJsonLd, panseksuelFaqs } from "@/lib/panseksuel-faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Panseksüel Ne Demek? Panseksüel Nedir, Bi Farkı, Kinsey ve Butler | Psk. Ahmet Alparslan Sancar",
  description:
    "Panseksüel ne demek, panseksüel nedir? Panseksüel ve biseksüel farkı, cinsel yönelim türleri, panseksüel kime denir; Kinsey, queer teori ve kapsayıcı psikoloji rehberi.",
  keywords: [
    "Panseksüel nedir",
    "Panseksüellik belirtileri",
    "Panseksüel ve biseksüel farkı",
    "Cinsel yönelim türleri",
    "Panseksüel kime denir",
    "Panseksüel ne demek",
  ],
  alternates: { canonical: "/panseksuel-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Panseksüel Ne Demek? Kapsayıcı ve Bilimsel Rehber",
    description:
      "Gender-blind çekim, biseksüellikten ayrım, Kinsey spektrumu ve Judith Butler ile queer teori bağlamında panseksüellik.",
    url: `${siteConfig.url}/panseksuel-ne-demek`,
  },
};

export default function PanseksuelNeDemekPage() {
  const faqJsonLd = buildPanseksuelFaqJsonLd();

  return (
    <LegalDocumentShell path="/panseksuel-ne-demek" breadcrumbLabel="Panseksüel ne demek?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 size-9 shrink-0 text-slate-500 md:size-10" strokeWidth={1} aria-hidden />
          <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
            Panseksüel Ne Demek?
          </h1>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-800 md:text-xl md:leading-relaxed">
          <strong className="text-brand-navy">Panseksüel ne demek</strong> sorusu, çoğu zaman yalnızca bir etiket
          arayışı değil; kişinin kendi çekim dünyasını adlandırma ve toplumsal cinsiyet kategorileriyle kurduğu ilişkiyi
          yeniden düşünme ihtiyacını da taşır. Panseksüelliği kısaca tanımlamak gerekirse: çoğu tanımda çekim,{" "}
          <strong>cinsiyet etiketlerinden ziyade kişiye, karaktere, enerjiye ve bütünsel bir uyuma</strong> odaklanır.
          Metafor olarak konuşursak, panseksüel çekimde &quot;önce cinsiyet mi, önce insan mı?&quot; sorusuna verilen
          cevap genellikle ikincisine yakındır; bu da sıkça <strong>gender-blind</strong> (cinsiyet körü) olarak
          özetlenir. Bu ifade, cinsiyeti yok saymak değil; onu romantik veya cinsel çekimin tek ve belirleyici ekseni
          olarak görmemek anlamına gelir.
        </p>

        <aside
          className="my-8 rounded-2xl border border-rose-200 bg-rose-50/70 p-5 md:p-6"
          aria-labelledby="pan-belirti-notu"
        >
          <div className="flex gap-3">
            <Heart className="mt-0.5 size-6 shrink-0 text-rose-600/80" aria-hidden />
            <div>
              <h2 id="pan-belirti-notu" className="font-display text-lg font-bold text-brand-navy md:text-xl">
                &quot;Panseksüellik belirtileri&quot; araması hakkında kısa not
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-800 md:text-base">
                Cinsel yönelim bir ruhsal bozukluk değildir; bu yüzden tıbbi anlamda bir belirti tablosu yoktur. Arama
                motorlarında bu ifade geçse de, klinik psikolojide odak kişinin kendini güvenle ifade etmesi, ayrımcılık
                stresini yönetmesi ve kimlik keşfini destekleyecek bir ortamdır.
              </p>
            </div>
          </div>
        </aside>

        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Panseksüel nedir</strong> diye soran biri için pratik cevap şudur: kendini bu şekilde tanımlayan insan,
          çekimini yalnızca kadın/erkek ikilisine sıkıştırmak zorunda hissetmeyebilir; non-binary, agender, genderfluid
          gibi ikili dışı kimliklere yönelik çekimde de cinsiyeti &quot;ön koşul&quot; olarak görmez. Elbette her
          panseksüel insanın hikâyesi farklıdır; etiketler kişisel bir seçim ve aidiyet dilidir, kalıp değildir.
        </p>

        <blockquote className="my-8 border-l-4 border-rose-400 bg-slate-50 py-4 pl-5 pr-4 text-slate-800">
          <p className="text-base font-medium leading-relaxed text-brand-navy md:text-lg">
            Panseksüellik, çekimi tek bir cinsiyet sorusuna indirgemek yerine; insanı, ilişkiyi ve yakınlığı daha geniş
            bir çerçevede görmeyi mümkün kılar.
          </p>
        </blockquote>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Kavramsal netlik: biseksüel ve panseksüel farkı
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          En sık sorulan sorulardan biri <strong>panseksüel ve biseksüel farkı</strong>dır. Her iki yönelim de ikili
          heteroseksüellik varsayımına meydan okur; fakat vurgu noktaları farklılaşabilir. Biseksüellik, günümüz
          tanımlarında çoğu zaman <strong>iki veya daha fazla cinsiyet veya cinsiyet ifadesine</strong> çekimi
          kapsar; panseksüellik ise çekimi <strong>cinsiyet kategorilerine bağlı olmayan</strong> bir düzlemde
          konumlandırma eğilimindedir. Bu ayrım keskin bir hukuk maddesi gibi değil; yaşayan insanların kendi
          anlatılarıyla şekillenen yumuşak bir ayrımdır.
        </p>

        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm text-slate-800 md:text-base">
            <thead className="bg-slate-100 text-brand-navy">
              <tr>
                <th className="px-4 py-3 font-semibold">Başlık</th>
                <th className="px-4 py-3 font-semibold">Çekim odağı (özet)</th>
                <th className="px-4 py-3 font-semibold">Sık vurgu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium">Biseksüellik</td>
                <td className="px-4 py-3">İki veya daha fazla cinsiyet / cinsiyet ifadesine çekim</td>
                <td className="px-4 py-3">Çeşitlilik; bi+ şemsiyesi altında geniş bir spektrum</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Panseksüellik</td>
                <td className="px-4 py-3">Cinsiyetten bağımsız çekim; kişi ve bağ öne çıkar</td>
                <td className="px-4 py-3">Gender-blind çerçeve; ikili dışı kimliklere açık dil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-800 md:text-lg">
          <li>
            <strong>Örtüşme:</strong> Birçok insan için bi ve pan etiketleri birbirinin alternatifi değil, örtüşen
            hikâyelerdir; kişi hangi dilin kendine daha doğru geldiğini seçer.
          </li>
          <li>
            <strong>Politik ve kültürel boyut:</strong> Panseksüellik, bazen ikili cinsiyet sistemine eleştirel duruşu
            da ifade eder; bu, yönelimi &quot;daha radikal&quot; yapmaz, farklı bir vurgu sunar.
          </li>
          <li>
            <strong>Saygı:</strong> Başkasının etiketini siz tanımlamayın; &quot;aslında sensin&quot; demek mikro
            ayrımcılık üretebilir.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Tarihsel ve kuramsal perspektif
        </h2>

        <h3 className="mt-6 font-display text-xl font-semibold text-brand-navy md:text-2xl">
          Sigmund Freud ve &quot;panseksüalizm&quot; — karıştırılmaması gereken iki dünya
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Akademik literatürde ve popüler bellekte sık bir karışıklık vardır: Freud&apos;un eleştirilerle anılan{" "}
          <strong>panseksüalizm</strong> anlayışı ile bugünün <strong>panseksüel kimlik</strong> ifadesi aynı şey
          değildir. Freud&apos;a yöneltilen panseksüalizm eleştirisi, onun insan davranışlarını geniş ölçüde libido ve
          cinsellik ekseninde açıklama eğilimiyle ilişkilendirilir; bu, bir <em>kuramsal çerçeve iddiasıdır</em> ve
          modern LGBTQ+ kimlik politikasıyla doğrudan örtüşmez. Bugün panseksüel olarak tanımlanan kişi, &quot;tüm
          davranışlarım cinsel güdüyle açıklanır&quot; demiyor; kendi romantik ve cinsel çekim örüntüsünü anlatıyor.
          Bu ayrımı netleştirmek, hem bilimsel doğruluk hem de saygılı dil için önemlidir: etimolojik benzerlik, anlam
          birliği yaratmaz.
        </p>

        <h3 className="mt-8 font-display text-xl font-semibold text-brand-navy md:text-2xl">
          Alfred Kinsey ve cinsellik spektrumu
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Kinsey ve ekibinin 1948</strong> tarihli çalışması (<em>Sexual Behavior in the Human Male</em>),
          cinselliğin siyah-beyaz etiketlere hapsolamayacağını emprik verilerle gündeme taşımıştır.{" "}
          <strong>Kinsey Ölçeği</strong>, heteroseksüel ve homoseksüel deneyimi 0–7 aralığında düşünmeye davet eder;
          ara değerler, insan deneyiminin sürekliliğini gösterir. Panseksüellik kavramı ile bire bir örtüşmez; ancak
          spektrum düşüncesi, &quot;ya şuydu ya buydu&quot; zorlamasına karşı bilimsel bir zemin sunar. Bu perspektif,
          <strong> cinsel yönelim türleri</strong> dediğimizde aslında yaşayan insanların çeşitliliğini kastediyoruz
          anlamına gelir; katalog değil, harita gibidir.
        </p>

        <blockquote className="my-8 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-sm">
          <p className="text-base leading-relaxed md:text-lg">
            <strong>Tanım kutusu:</strong> <strong>Panseksüel kime denir?</strong> Kendini bu kimlikle ifade eden ve
            çekimini cinsiyet ikilisine indirgemek zorunda kalmadığını düşünen herkese — tanımı dışarıdan dayatmak
            yerine kişinin öznel anlatısı esastır.
          </p>
        </blockquote>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Modern kuramlar: Judith Butler ve queer teori
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Judith Butler&apos;ın 1990</strong> tarihli <em>Gender Trouble</em> eseri, toplumsal cinsiyetin
          doğal bir öz değil, tekrarlanan performanslar ve iktidar ilişkileriyle <strong>inşa edildiği</strong> fikrini
          güçlendirmiştir. Queer teori perspektifinden bakıldığında, panseksüellik yalnızca &quot;kime çekiliyorum?&quot;
          sorusunun cevabı değil; aynı zamanda <strong>ikili cinsiyet sistemine (binary)</strong> ve sabit kategori
          dayatmalarına karşı esnek bir duruşla da ilişkilendirilebilir. Bu, her panseksüel insanın teorisyen olduğu
          anlamına gelmez; fakat kimlik dilinin toplumsal normlarla çarpıştığı noktaları anlamamıza yardım eder.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Klinik pratikte bu çerçeve, terapistin &quot;doğru etiketi bulalım&quot; telaşından çok, kişinin kendi
          anlatısını güvenle kurmasına alan açmayı hatırlatır. Kimlik, bazen akıcıdır; isimler zamanla dönüşebilir.
          Bu dönüşüm &quot;kararsızlık&quot; değil, keşif sürecinin parçası olabilir.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Psikolojik sağlık ve kapsayıcılık
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          <strong>Amerikan Psikoloji Derneği (APA)</strong> ve birçok majör sağlık örgütü, cinsel yönelimi ruhsal
          bozukluk olarak tanımlamaz; insan çeşitliliğinin bir parçası olarak ele alır. Klinikte asıl risk çoğu
          zaman yönelimin kendisi değil, <strong>azınlık stresi (minority stress)</strong>: ayrımcılık, gizlilik
          baskısı, içselleştirilmiş homofobi/transfobi, aile ve iş ortamında güvensizlik gibi faktörler ruh sağlığını
          etkileyebilir. Terapi burada &quot;düzeltme&quot; değil; dayanıklılık, sınır koyma, güvenli bağlanma ve
          kimlik onurunu destekleme işi görür.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
          Beşiktaş&apos;taki modern bir klinik vizyonuyla uyumlu olarak, burada öncelik yargısız bir dil, gizlilik
          etiği ve kişinin kendi hikâyesinin merkezde olduğu bir ortamdır. Kimlik keşfi, bazen yalnız kafa karışıklığı
          değil; aynı zamanda ilişkilerde güven, sınırlar ve öz-değer temalarını da beraberinde getirir. Profesyonel
          destek, bu süreçte hem bilgilendirici hem de duygusal düzenleyici bir görev üstlenebilir.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Sık sorulan sorular (Google S.S.S.)
        </h2>
        <div className="mt-6 space-y-6">
          {panseksuelFaqs.map((item) => (
            <section key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-brand-navy">{item.question}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-800">{item.answer}</p>
            </section>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold text-brand-navy md:text-3xl">Kaynakça</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-800 md:text-base">
          <li>
            Butler, J. (1990). <em>Gender trouble: Feminism and the subversion of identity</em>. Routledge.
          </li>
          <li>
            Kinsey, A. C., Pomeroy, W. B., &amp; Martin, C. E. (1948).{" "}
            <em>Sexual behavior in the human male</em>. Saunders.
          </li>
          <li>
            American Psychological Association. (2012). Guidelines for psychological practice with lesbian, gay, and
            bisexual clients. <em>American Psychologist</em>, <em>67</em>(1), 10–42. (Cinsel azınlık bireylerle çalışmada
            etik ve kapsayıcı ilkeler; güncel yerel mevzuat ve meslek örgütü kılavuzlarıyla birlikte değerlendirilmelidir.)
          </li>
          <li>
            Meyer, I. H. (2003). Prejudice, social stress, and mental health in lesbian, gay, and bisexual populations:
            Conceptual issues and research evidence. <em>Psychological Bulletin</em>, <em>129</em>(5), 674–697. (Azınlık
            stresi çerçevesi.)
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Kimliğinizi keşfederken profesyonel destek
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg">
            Panseksüellik veya başka bir yönelim etiketi üzerinde düşünüyor; ilişkilerinizde güven, sınırlar veya aile
            içi konuşmalar konusunda desteğe ihtiyaç duyuyorsanız, klinik psikoloji çerçevesinde gizlilik ve kapsayıcılık
            ilkeleriyle çalışılabilir. Online terapi ve yüz yüze görüşme seçenekleri için iletişime geçebilirsiniz.
          </p>
          <div className="mt-6">
            <CTAGroup />
          </div>
        </div>
      </article>
    </LegalDocumentShell>
  );
}

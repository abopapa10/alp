import Link from "next/link";
import { ContentCallout } from "@/components/content/ContentCallout";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { GhostingPageIcon, IconFeelGhost, IconWhyGhost } from "@/components/ghosting/GhostingSvgIcons";
import { ghostingFaqs } from "@/lib/ghosting-faq";
import { siteConfig } from "@/lib/site";

const whyItems = [
  {
    title: "Kaçıngan bağlanma ve çatışma kaçınması",
    text: "Yakınlık talebi arttıkça geri çekilme, tartışmayı ‘kazanamayacağını’ düşünerek konuşmayı bırakma veya utançla yüzleşememe sık görülür.",
  },
  {
    title: "Duygusal olgunluk ve iletişim becerisi",
    text: "Net kapanış cümlesi kurmak empati ve sınır gerektirir; bu beceriler gelişmemişse kişi sessizliği ‘kolay çıkış’ sanabilir.",
  },
  {
    title: "Utanç, suçluluk ve kaçınma",
    text: "İlişkiyi bitirmek için yüz yüze kalmak zor geldiğinde ortadan kaybolmak, kısa vadede rahatlatıcı görünse de karşı tarafa ağır bir belirsizlik yükler.",
  },
  {
    title: "Alternatif odak ve stres",
    text: "Yoğun iş temposu, taşınma, yeni ilişki veya aile baskısı gibi faktörler tek başına mazeret olmasa da ghosting kararını kolaylaştırabilir.",
  },
];

const feelItems = [
  {
    title: "Belirsizlik ve zihinsel döngü",
    text: "‘Ne oldu?’ sorusunun cevapsız kalması, zihni sürekli arama–tahmin modunda tutar; uyku ve dikkati etkileyebilir.",
  },
  {
    title: "Red ve öz-değer sarsıntısı",
    text: "‘Ben yeterince iyi değil miydim?’ düşüncesi doğal olsa da çoğu zaman karşı tarafın kapasitesiyle ilgilidir, sizin değerinizle değil.",
  },
  {
    title: "Kaygı ve hiper-uyanıklık",
    text: "Bildirimlere aşırı duyarlılık, tekrarlayan kontrol ve bedensel gerginlik sık eşlik eden belirtilerdir.",
  },
  {
    title: "Yarım kalmış yas",
    text: "Veda edilemediğinde yas süreci tıkanabilir; öfke ve hüznün dalgalı gelmesi beklenen bir tablodur.",
  },
];

export function GhostingArticle() {
  return (
    <article className="mt-6">
      <header className="flex items-start gap-3">
        <span className="mt-1 shrink-0 text-slate-500">
          <GhostingPageIcon />
        </span>
        <h1 className="font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl md:leading-tight">
          Ghosting ne demek? Tanım, etkiler ve iyileşme
        </h1>
      </header>

      <div className="mt-8 max-w-none space-y-6 text-lg leading-relaxed text-slate-700 md:max-w-3xl">
        <p>
          <strong className="font-semibold text-brand-navy">Ghosting ne demek</strong> sorusu, günümüzde dijital iletişimin
          yaygınlaşmasıyla birlikte sık duyulan bir kavramdır. Kısaca ifade etmek gerekirse ghosting; ilişki veya iletişim
          sürecinde karşı tarafın uyarı veya açıklama olmadan mesajları yanıtlamayı kesmesi, planları belirsiz bırakması ve
          fiilen &quot;görünmez&quot; olmasıdır. Bu örüntü yalnızca romantik ilişkilere özgü değildir.
        </p>
        <p>
          Arkadaşlık ağlarında uzun süredir konuşulan birinin ansızın sessiz kalması, aile içi mesajlaşmalarda açıklama
          yapılmadan geri çekilme veya profesyonel bağlamda iş görüşmelerinde tarafın habersiz kesilmesi de benzer bir
          belirsizlik ve güvensizlik yaratabilir. Bu metin bilgilendirme amaçlıdır; kişisel durumunuz için{" "}
          <strong className="text-brand-navy">psikolog</strong> veya ruh sağlığı uzmanıyla görüşmek en sağlıklı adımdır.
        </p>
      </div>

      <section className="mt-12 space-y-6 text-lg leading-relaxed text-slate-700 md:max-w-3xl" aria-labelledby="ghosting-modern">
        <h2 id="ghosting-modern" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Ghosting: modern ilişkilerde çok katmanlı bir deneyim
        </h2>
        <p>
          Ghosting bazen &quot;kötü niyet&quot;ten çok, çatışma yönetiminde zorlanan bir kişinin kaçınma stratejisi olarak da
          ortaya çıkar. Bu açıklama, davranışın yarattığı etkiyi hafifletmez; karşı taraf için yaşanan duygusal yük gerçektir.
          Terapötik çalışmada öncelik, yaşadığınız deneyimi onurlandırmak ve iyileşme yollarını güçlendirmektir.
        </p>
        <p>
          Aşağıda bağlanma kuramı, bilişsel bellek süreçleri ve insan odaklı terapi geleneklerinden seçilmiş çerçevelerle
          konuyu derinleştiriyoruz. Amaç tanı koymak değil, psikoloji literatüründe sık kullanılan kavramlarla süreci
          anlamlandırmanıza yardımcı olmaktır.
        </p>
      </section>

      <div className="mt-10 space-y-8">
        <ContentCallout title="Bağlanma kuramı (John Bowlby) ve kaçıngan örüntüler" variant="theory">
          <p>
            John Bowlby&apos;nin bağlanma kuramı, insanın güvenli bir taban arayışını merkeze alır. Yakın ilişkilerde tekrarlayan
            bir tema vardır: yakınlık arttıkça kaygı veya kaçınma tetiklenebilir. Ghosting yapan kişilerde sıklıkla{" "}
            <strong>kaçıngan bağlanma</strong> stiline benzeyen örüntüler konuşulur; bu kişiler çatışmayı tehdit olarak
            deneyimleyebilir, yüzleşmekten kaçınır ve &quot;yok olmayı&quot; kısa vadede daha güvenli bir çıkış yolu sanabilir.
          </p>
          <p>
            Bu çerçeve ghosting&apos;i meşrulaştırmaz; fakat davranışın bazen yalnızca &quot;kötülük&quot; değil, düzenlenmemiş
            duygu ve zayıf çatışma becerileriyle de ilişkili olabileceğini anlamanıza yardım eder. Terapide hedef, suçluluk
            döngüsüne takılmadan sınırlarınızı netleştirmek ve öz-değerinizi yeniden inşa etmektir.
          </p>
        </ContentCallout>

        <ContentCallout title="Zeigarnik etkisi: tamamlanmamış işler ve belirsizlik" variant="theory">
          <p>
            Zeigarnik etkisi, tamamlanmamış görevlerin zihinde daha kolay kaldığını; beynin &quot;yarım kalan&quot; işleri
            tamamlamaya çalıştığını öne sürer. Ghosting&apos;de bir açıklama, vedalaşma veya net kapanış olmadığında ilişki
            hikâyesi zihinsel olarak açık kalır.
          </p>
          <p>
            Bu durum sürekli düşünme, tekrarlayan hatırlatıcılar ve uyku üzerinde baskı yaratabilir. Belirsizlik, tehdit
            sistemini uyaran bir faktördür; bu yüzden iyileşmede &quot;cevap almak&quot; kadar &quot;kendi kapanış cümlelerinizi
            yazmak&quot; da önemlidir. Terapist eşliğinde bu süreç daha güvenli işlenir.
          </p>
        </ContentCallout>
      </div>

      <section className="mt-12 space-y-6 text-lg leading-relaxed text-slate-700 md:max-w-3xl" aria-labelledby="ghosting-esteem">
        <h2 id="ghosting-esteem" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Ghosting ve düşük benlik saygısı: &quot;Ben neyi yanlış yaptım?&quot; sanrıları
        </h2>
        <p>
          Ghosting&apos;e maruz kalan birçok kişinin zihninde hızlıca devreye giren sorular vardır: &quot;Yeterince iyi değil
          miydim?&quot;, &quot;Fazla mı yazdım?&quot;, &quot;Başka birini mi buldu?&quot; Bu sorular doğal bir arayıştır; çünkü insan
          belirsizliği anlamlandırmak ister. Ancak açıklama gelmediğinde zihin boşluğu genellikle{" "}
          <strong>kişiselleştirme</strong> ile doldurulur: olumsuz sonucun nedeni sanki yalnızca sizin bir eksikliğinizmiş gibi
          hissedilir.
        </p>
        <p>
          Terk edilme ve reddedilme deneyimleri, özellikle daha önce de benzer yaralar taşıyan kişilerde benlik saygısını
          zedeleyebilir. Burada önemli ayrım şudur: karşı tarafın seçtiği iletişimsizlik yöntemi, sizin değerinizin ölçüsü
          değildir. Yine de bu ayrımı hissetmek zaman alır; bu yüzden kendinize karşı aceleci olmamanız ve gerektiğinde
          profesyonel destek almanız anlamlıdır.
        </p>
        <p>
          Bilişsel davranışçı çerçevede &quot;zihin okuma&quot;, &quot;kişiselleştirme&quot; ve &quot;felaketleştirme&quot; gibi
          çarpıtmalar üzerinde çalışmak, özsaygıyı korumanıza yardımcı olabilir. Bu çalışma, karşı tarafı haklı çıkarmayı
          değil, sizin iç dünyanızda daha adil bir dil oluşturmayı hedefler.
        </p>
      </section>

      <section className="mt-12 space-y-6 text-lg leading-relaxed text-slate-700 md:max-w-3xl" aria-labelledby="ghosting-closure">
        <h2 id="ghosting-closure" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Kendine saygı: kapanış için başkasına mecbur olmamak
        </h2>
        <p>
          Terapi felsefesinin önemli bir parçası şudur: bir ilişkinin bitişini kabullenmek için karşı tarafın açıklamasına
          muhtaç olmak zorunda değilsiniz. Elbette açıklama insani ve etiktir; fakat kontrolünüz dışında kaldığında{" "}
          <strong>gerçek kapanış</strong>, çoğu zaman kendi sınırlarınızı ve değerinizi yeniden tanımlamakla başlar.
        </p>
        <p>
          Bu, &quot;umudu tamamen kes&quot; demek değildir; &quot;benim iyiliğim için netlik benim tarafımdan da üretilebilir&quot;
          demektir. Örneğin: iletişimi kendi seçiminizle sınırlandırmak, tekrarlayan mesaj döngüsünü durdurmak veya terapide
          vedalaşma ritüelleri oluşturmak (mektuplaştırma, anıları yeniden çerçeveleme) iyileşmeyi destekler.
        </p>
      </section>

      <ContentCallout title="Carl Rogers: koşulsuz kabul, kendini ve başkasını kabul" variant="theory">
        <p>
          Carl Rogers&apos;ın birey odaklı yaklaşımında <strong>koşulsuz kabul</strong> merkezi bir kavramdır. Ghosting
          sonrasında kendinize yönelik koşulsuz kabul, reddedilmiş hissetmenin yarattığı acıyı yargılamadan fark etmek ve
          şefkatle karşılamak anlamına gelir. Acıyı &quot;olmaması gereken&quot; değil, insan olarak doğal olan bir deneyim
          olarak görmek iyileşmeyi kolaylaştırır.
        </p>
        <p>
          Başkasını kabul etmek ise karşı tarafın açıklama yapabilecek duygusal olgunluğa veya kapasiteye her zaman sahip
          olmayabileceğini görmektir. Bu kabul, onları alkışlamak değil; &quot;bu kişi şu anda bu beceriyi sunamıyor&quot;
          gerçeğini kişisel eksikliğinize bağlamamaktır. Terapötik ilişkide hedef, bu iki kabulü dengeleyerek özgüven
          kaybını yumuşatmaktır.
        </p>
      </ContentCallout>

      <section className="mt-14" aria-labelledby="ghosting-grid">
        <h2 id="ghosting-grid" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Neden ghosting yapılır, maruz kalan ne hisseder?
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          Aşağıdaki kartlar genel eğilimleri özetler; her öykü kişiye özeldir. Tanı koymaz, tek başına rehberlik etmez.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-brand-navy">
              <IconWhyGhost className="size-6 shrink-0" />
              <h3 className="font-display text-xl font-bold">Neden ghosting yaparlar?</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {whyItems.map((item) => (
                <li key={item.title} className="border-t border-slate-200/80 pt-4 first:border-t-0 first:pt-0">
                  <p className="font-semibold text-brand-navy">{item.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-brand-sky/30 to-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-brand-navy">
              <IconFeelGhost className="size-6 shrink-0" />
              <h3 className="font-display text-xl font-bold">Maruz kalan ne hisseder?</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {feelItems.map((item) => (
                <li key={item.title} className="border-t border-slate-200/80 pt-4 first:border-t-0 first:pt-0">
                  <p className="font-semibold text-brand-navy">{item.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <aside
        className="mt-14 rounded-2xl border border-brand-navy/15 bg-gradient-to-br from-brand-sky/50 via-white to-blue-50/40 p-6 shadow-md md:flex md:items-center md:justify-between md:gap-8 md:p-8"
        aria-labelledby="ghosting-mid-cta"
      >
        <p id="ghosting-mid-cta" className="max-w-2xl text-lg leading-relaxed text-slate-800">
          <strong className="font-semibold text-brand-navy">Ghosting&apos;in yarattığı belirsizlik ve özgüven kaybıyla tek
          başınıza başa çıkmak zorunda değilsiniz.</strong>{" "}
          Beşiktaş kliniğimizde yüz yüze veya online terapi ile düşünce örüntülerinizi, yasınızı ve sınırlarınızı yapılandırılmış
          biçimde ele alabiliriz.
        </p>
        <div className="mt-6 shrink-0 md:mt-0 md:max-w-xs">
          <Link
            href="/#iletisim"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-center text-base font-bold text-white shadow-md transition-colors hover:bg-brand-accent-hover"
          >
            Randevu bilgisi al
          </Link>
          <p className="mt-2 text-center text-sm text-slate-600 md:text-left">
            <Link href="/online-terapi" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-accent">
              Online terapi
            </Link>{" "}
            seçenekleri hakkında bilgi alın.
          </p>
        </div>
      </aside>

      <section className="mt-14 space-y-6 text-lg leading-relaxed text-slate-700 md:max-w-3xl" aria-labelledby="ghosting-digital">
        <h2 id="ghosting-digital" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Dijital ortam, profesyonel yaşam ve ghosting
        </h2>
        <p>
          Mesajlaşma uygulamaları ve sosyal medya, ilişkilerde hem hız hem de belirsizlik üretir. &quot;Son görülme&quot;,
          okundu bilgisi veya bekleyen mesaj ikonları, Zeigarnik etkisini dijital düzeyde besleyebilir: zihin sürekli bir
          &quot;cevap gelecek mi?&quot; döngüsüne girebilir. Bu yüzden iyileşme döneminde bildirim sınırları, belirli saatlerde
          ekran kapatma ve sosyal medyada görünürlüğü azaltma gibi pratikler sık önerilir; bunlar kaçış değil, sinir sistemine
          nefes aldırmaktır.
        </p>
        <p>
          İş görüşmeleri veya serbest çalışma ilişkilerinde ghosting; adayın veya iş ortağının geri dönüş yapmaması şeklinde
          yaşanabilir. Burada da belirsizlik stres yarattığı için, mümkünse ikinci bir kanaldan tek seferlik netlik istemek
          ve ardından kendi tarafınızda süreci kapatmak özsaygı açısından koruyucudur. Her bağlamda aynı strateji işe yaramaz;
          terapide bu tür kararlar risk ve kazanım dengesiyle birlikte ele alınır.
        </p>
        <p>
          Ghosting literatüründe tek tip bir &quot;profil&quot; yoktur; kültürel normlar, yaş, cinsiyet kimliği ve önceki
          travmalar deneyimi şekillendirir. Bu çeşitlilik, kişiselleştirilmiş bir değerlendirme ihtiyacını destekler. Genel
          okumalar farkındalık sağlar; fakat süregelen belirtileriniz varsa yüz yüze veya online klinik görüşme daha güvenilir
          bir yol haritası sunar.
        </p>
      </section>

      <section className="mt-12 space-y-6 text-lg leading-relaxed text-slate-700 md:max-w-3xl" aria-labelledby="ghosting-therapy">
        <h2 id="ghosting-therapy" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Terapi sürecinde neler konuşulabilir?
        </h2>
        <p>
          Ghosting sonrası çalışmada sık ele alınan başlıklar arasında reddedilme duyarlılığı, bağlanma örüntüleri, öz-şefkat,
          sınır koyma ve yas sürecinin tamamlanması yer alır. Bilişsel davranışçı tekniklerle otomatik düşünceler
          kayıt altına alınabilir; duygu düzenleme becerileri pratik edilebilir.
        </p>
        <p>
          {siteConfig.name} olarak Hacettepe Üniversitesi Psikoloji lisansı ve klinik deneyim çerçevesinde; kanıta dayalı
          yaklaşımları ihtiyaca göre bütünleştiren bir çizgide çalışıyorum. Beşiktaş&apos;taki görüşmeler yüz yüze
          yürütülebilir; şehir dışı veya yoğun program nedeniyle{" "}
          <Link href="/online-terapi" className="font-semibold text-brand-navy underline decoration-brand-accent/50 underline-offset-2 hover:text-brand-accent">
            online psikolojik danışmanlık
          </Link>{" "}
          da mümkündür. Süreç şeffaftır: ilk görüşmede beklentiler, gizlilik çerçevesi ve çalışma hedefleri birlikte netleştirilir.
        </p>
        <p>
          Ghosting bazen tek bir olaydan çok, ilişki geçmişinizdeki tekrarlayan temaları da gün yüzüne çıkarır. Bu yüzden
          terapi yalnızca &quot;o kişiyi anlamaya&quot; değil, sizin hangi ilişki dinamiklerinde daha çok yorulduğunuzu
          fark etmeye de odaklanır. Amaç, suçlulukla boğulmadan daha seçici ve koruyucu bir ilişki dilini güçlendirmektir.
        </p>
        <p>
          Kendi kendinize yardım adımları (uyku hijyeni, sosyal destek, bedensel hareket, ekran sınırları) iyileşmeyi destekler;
          ancak belirtiler haftalarca süren yoğun kaygı, umutsuzluk veya işlevsellik kaybına dönüşüyorsa profesyonel
          değerlendirme önerilir. Acil risk düşüncelerinde 112 veya size en yakın acil psikiyatrik hizmet önceliklidir.
        </p>
      </section>

      <section
        className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-navy/[0.04] to-white p-6 shadow-md md:p-8"
        aria-labelledby="ghosting-bottom-cta"
      >
        <h2 id="ghosting-bottom-cta" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          İletişime geçin
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-800">
          Ghosting sonrası duygularınızı yargılamadan konuşabileceğiniz bir alan oluşturmak isterim. Telefon veya WhatsApp
          ile kısa bir mesaj yeterli; size uygun ilk görüşmeyi birlikte planlayalım.
        </p>
        <div className="mt-6 max-w-lg">
          <CTAGroup />
        </div>
      </section>

      <section className="mt-14" aria-labelledby="ghosting-faq-h">
        <h2 id="ghosting-faq-h" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Sıkça sorulan sorular
        </h2>
        <div className="mt-6 space-y-3">
          {ghostingFaqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 text-left text-base font-semibold text-brand-navy md:text-lg marker:hidden [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="pb-4 text-base leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}

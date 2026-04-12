import { ContentCallout } from "@/components/content/ContentCallout";
import { FiveReflectionQuestions } from "@/components/content/FiveReflectionQuestions";

const reflectionQs = [
  "İlişkinin ilk haftalarında tempo sizin için heyecan mı yoksa bunaltıcı mı hissettirdi?",
  "‘Hayır’ dediğinizde karşı taraf saygı gösterdi mi, yoksa ısrar, suçluluk veya soğuma ile yanıt aldınız mı?",
  "Sosyal çevreniz veya ailenizle görüşme sıklığınız bu ilişkiyle birlikte değişti mi?",
  "Hediye veya jestler sonrası kendinizi ‘karşılık vermeye mecbur’ hissettiniz mi?",
  "İlişki ilerledikçe özsaygınız ve uykunuz genel olarak iyiye mi kötüye mi gitti?",
] as const;

export function LoveBombingDeepSections() {
  return (
    <>
      <section className="mt-12" aria-labelledby="lb-mekanizma">
        <h2 id="lb-mekanizma" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
          Psikolojik mekanizmalar: neden bu kadar hızlı etkili?
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 md:text-[17px] md:leading-relaxed">
          <p>
            Yoğun ilgi ve övgü, beyinde ödül ve bağlanma sistemlerini harekete geçirir; kısa sürede yakınlık ve güven
            hissi üretebilir. Bu yüzden <strong>love bombing belirtileri</strong> bazen başlangıçta “aşırı romantik”
            gibi görünür. Oysa tempo karşı tarafın sınırlarına saygı duymuyorsa veya sonrasında kontrol ve geri çekilme
            ile birleşiyorsa, ilişki dinamikleri toksik ilişki literatüründe tartışılan örüntülere yaklaşabilir.
          </p>
          <p>
            Bağlanma kuramı açısından kaygılı veya kaçıngan düzenekler, yoğun ilgiye karşı farklı tepkiler üretebilir:
            biri hızlı füzyon isterken diğeri mesafe ihtiyacı duyabilir. Terapide amaç etiket yapmak değil, sizin için
            sürdürülebilir tempo ve güvenli sınırları bulmaktır.
          </p>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="lb-neden">
        <h2 id="lb-neden" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
          Nedenleri ve olası sonuçları
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 md:text-[17px] md:leading-relaxed">
          <p>
            Motivasyonlar tek tip değildir: yalnızlık korkusu, hızlı bağlanma ihtiyacı, kontrol arayışı veya ilişkisel
            örüntülerin tekrarı sık anlatılır. Sonuç tarafında ise özsaygıda dalgalanma, kaygı, sosyal izolasyon veya
            ayrılık sonrası yas sürecinin ağırlaşması görülebilir. <strong>Manipülasyon teknikleri</strong> ile
            birleştiğinde kişi kendini “her şeyi abartıyorum” diyerek minimize edebilir; bu da profesyonel desteği
            geciktirebilir.
          </p>
          <p>
            <strong>Beşiktaş psikolog</strong> kliniğinde veya <strong>online terapi</strong> ile bu örüntüler yargısız
            bir çerçevede adlandırılır; sınır cümleleri ve güvenli ilişki denemeleri için beceri çalışılır.
          </p>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="lb-literatur">
        <h2 id="lb-literatur" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
          Literatürde bu konu nasıl ele alınır?
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 md:text-[17px] md:leading-relaxed">
          <p>
            İlişki psikolojisi ve istismar literatüründe yoğun idealizasyon fazları, sonrasında devalüasyon veya kontrol
            artışı ile birlikte okunabilir. Narsistik dinamikler veya borderline özellikler bazen tartışılsa da tanı
            yalnızca klinik görüşmeyle konur. Akademik çalışmalar, mağdurun suçluluk ve utançla yalnız kalabildiğini;
            terapötik ittifakın iyileşmede kritik olduğunu vurgular.
          </p>
          <p>
            <strong>İstanbul psikoloji seansı</strong> düzeninde bu başlıklar güven, gizlilik ve etik sınırlar içinde
            işlenir; internetteki “kesin tanı” içeriklerinin aksine bireysel bağlam ön plandadır.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <ContentCallout title="Bir danışan ne hissedebilir? (anonim örnek)" variant="accent">
          <p>
            “İlk iki hafta hayatımın en güzel dönemiydi; sürekli mesaj, sürprizler, ‘ruh eşim’ sözleri. Sonra mesajlar
            seyrekleşti, bir şey istemediğimde soğuduğunu hissettim. Kendimi sürekli telafi etmeye çalıştım; arkadaşlarımla
            görüşmemi eleştirdi. Ayrılmak istediğimde ise suçlandım.” Bu örüntü birebir kopyalanmak zorunda değildir;
            fakat <strong>love bombing</strong> şüphesi taşıyan birçok anlatıda hız–baskı–geri çekilme üçlüsü tekrarlanır.
          </p>
        </ContentCallout>
      </div>

      <section className="mt-10" aria-labelledby="lb-surec">
        <h2 id="lb-surec" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
          Terapi bu konuda nasıl yardımcı olur?
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-slate-700 md:text-[17px] md:leading-relaxed">
          <p>
            BDT ve şema terapisi çizgisinde bağlanma, sınır ve öz-değer üzerinde çalışılır. İlk görüşmede güvenlik ve
            gizlilik netleştirilir; hedefler birlikte yazılır. <strong>İlk seansta</strong> genellikle öykünüz ve
            güncel şikayetler dinlenir; henüz ağır müdahale yerine psiko-eğitim ve duygu adlandırma öne çıkar.
          </p>
          <p>
            Tekrarlayan toksik ilişki döngülerinde, erken uyarı işaretleri listesi ve “yavaşlatma” becerileri pratik
            edilir. <strong>Online terapi</strong>, yoğun çalışan veya şehir dışında yaşayan danışanlar için süreklilik
            sağlayabilir.
          </p>
        </div>
      </section>

      <FiveReflectionQuestions questions={reflectionQs} />
    </>
  );
}

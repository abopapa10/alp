const columns = [
  {
    title: "İlk temas ve güvenli çerçeve",
    paragraphs: [
      "Psikoterapi süreci çoğu zaman kısa bir ön görüşme veya mesajla başlar. Beşiktaş psikolog arayan danışanlar için adres, seans süresi, gizlilik ve ücret gibi konuların netleştirilmesi, tedbirlilik ve öngörülebilirlik sağlar.",
      "İlk oturumda başvuru nedeniniz, güçlü yönleriniz ve beklentileriniz dinlenir. Amaç hızlıca tanı koymak değil, sizi anlamak ve bilimsel temelli psikoterapi çerçevesinde güvenli bir alan kurmaktır.",
      "Online terapi tercih edenlerden stabil bağlantı, görüşmenin yapıldığı ortamın mahremiyeti ve randevu saatine uyum beklenir; bu koşullar sağlandığında çevrim içi görüşmeler de yüz yüze seans kadar derin bir çalışma zemini sunabilir.",
    ],
    bullets: [
      "Yüz yüze seans veya online terapi formatı ihtiyaca göre seçilir; ikisi de kanıta dayalı uygulamalarla birleştirilebilir.",
      "Acil risk durumlarında yönlendirme ve sınırlar önceden konuşulur.",
      "Terapötik ilişkide şeffaflık, ilerlemenin temel taşlarından biridir.",
    ],
  },
  {
    title: "Hedef belirleme ve çalışma düzeni",
    paragraphs: [
      "Birlikte belirlenen hedefler, kaygı, depresyon veya ilişki sorunları gibi başlıklarda somut ve izlenebilir olabilir. Hedefler zamanla güncellenir; terapi statik bir liste değil, yaşamınızdaki değişime ayak uyduran bir süreçtir.",
      "Seans sıklığı genelde haftalık başlar; yoğunluk, iş takvimi veya online terapi saat dilimi gibi faktörlere göre ayarlanır.",
      "Tempo size ait bir karardır: süreci ağır veya hızlı hissediyorsanız bunu doğrudan paylaşmanız, terapötik ittifakı güçlendirir ve planın sizinle birlikte revize edilmesini sağlar.",
    ],
    bullets: [
      "Kısa vadede semptom rahatlatma; orta vadede dayanıklılık ve beceri geliştirme.",
      "Ödev veya günlük tutma yalnızca uygun olduğunda önerilir; baskı oluşturmaz.",
      "İlerleme, hem öznel iyilik hâliniz hem de hedeflere yakınlık üzerinden gözden geçirilir.",
    ],
  },
  {
    title: "Kaygı, depresyon ve ilişki sorunları",
    paragraphs: [
      "Kaygı bozukluklarında bedensel alarm, kaçınma ve felaket senaryoları sık görülür. Depresyonda ise enerji, ilgi ve umutta azalma öne çıkar; her iki tabloda da düşünce-duygu-davranış bağlantısı dikkatle çalışılır.",
      "İlişki sorunları; iletişim kopuklukları, güven, bağlanma ve sınır başlıklarında derinleşebilir. Çift görüşmeleri gerektiğinde ayrıca planlanır.",
      "Travma veya yoğun kaygı öyküsü olan danışanlarda maruz bırakma gibi yapılandırılmış teknikler ancak hazırlık, rıza ve güvenlik değerlendirmesi sonrası uygulanır; kontrol duygunuz ve ritminiz önceliklidir.",
    ],
    bullets: [
      "Kaygı için maruz bırakma ve düzenleme stratejileri (BDT çizgisinde, size uygun tempoda).",
      "Depresyonda aktivasyon, anlam ve öz-şefkat odaklı adımlar.",
      "İlişkilerde duygu ifadesi ve çatışmayı yönetebilme becerileri.",
    ],
  },
  {
    title: "Bilimsel temelli yaklaşım ve süreklilik",
    paragraphs: [
      "Uygulamada birey odaklı terapi omurgayı oluşturur; gerektiğinde psikodinamik ve BDT teknikleri entegre edilir. Bu birleşim, hem anlam hem de günlük yaşamda somut değişim arayan danışanlar için esneklik sunar.",
      "Beşiktaş'taki klinikte yüz yüze seans; şehir dışı veya yurtdışı için online terapi ile desteklenir. İki format arasında geçiş, taşınma, seyahat veya sağlık gibi nedenlerle mümkündür.",
      "Bilimsel temelli psikoterapi, yöntemlerin mesleki literatür ve etik ilkelerle uyumlu seçilmesi demektir; her başvuruya tek tip paket yerine, ihtiyaç ve tercihlerinize göre şekillenen bir kombinasyon önerilir.",
    ],
    bullets: [
      "Yöntem seçimi şeffaftır; “hangi teknik neden?” sorusu gerektiğinde açıklanır.",
      "Nüks veya zorlayıcı dönemlerde seans sıklığı geçici artırılabilir.",
      "Süreç, danışanın hızına saygı duyarak sonlandırılır veya ara verilir.",
    ],
  },
] as const;

export function TherapyProcessApproachSection() {
  return (
    <section
      className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/95 via-sky-50/35 to-slate-50/90 py-12 md:py-16 lg:py-20"
      aria-labelledby="therapy-process-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <h2
          id="therapy-process-heading"
          className="font-display text-2xl font-bold leading-tight text-brand-navy md:text-3xl"
        >
          Psikoterapi Süreci ve Yaklaşımımız
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          Aşağıda, Beşiktaş psikolog kliniğinde ve online terapi kanalında yürütülen bilimsel temelli psikoterapi
          sürecinin ana hatlarını bulabilirsiniz. Kaygı, depresyon ve ilişki sorunları gibi başvurularda yol haritası
          kişiye özel şekillenir; yüz yüze seans ile çevrim içi görüşmeler aynı etik ve gizlilik ilkeleriyle
          yürütülür. İstanbul Avrupa Yakası ve çevre ilçelerden gelen danışanlar için ulaşım ve randevu planlaması
          pratik tutulur; şehir dışında yaşayanlar ise online terapi ile sürekliliği koruyabilir.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {columns.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm ring-1 ring-slate-100/80 md:p-6"
            >
              <h3 className="font-display text-lg font-bold leading-snug text-brand-navy md:text-xl">{col.title}</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                {col.paragraphs.map((p, i) => (
                  <p key={`${col.title}-p-${i}`}>{p}</p>
                ))}
              </div>
              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-navy/80">Öne çıkanlar</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                {col.bullets.map((item, i) => (
                  <li key={`${col.title}-b-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600 md:text-[15px]">
          Psikoterapi, tek seansta “çözüm” vaat eden bir mucize değildir; düzenli katılım ve açık iletişimle
          güçlenen bir ortaklıktır. Online terapi ve yüz yüze seans seçenekleri, yaşamınızdaki döneme uygun şekilde
          bir arada veya dönüşümlü kullanılabilir. Sorularınız için iletişim kanallarımızdan yazmanız yeterlidir.
        </p>
      </div>
    </section>
  );
}

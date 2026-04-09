type FaqItem = { q: string; a: string[] };

const faqs: FaqItem[] = [
  {
    q: "Seans sıklığı nedir?",
    a: [
      "Genellikle haftada bir seans ile başlanır; ihtiyaca göre seyrek veya daha yoğun plan yapılabilir. İlk görüşmede hedeflerinize göre bir çizelge öneririm.",
      "Psikolog randevu planınızı birlikte netleştirir; online terapi ile yüz yüze terapide süreklilik için size uygun gün ve saatleri birlikte seçeriz.",
    ],
  },
  {
    q: "Hangi yöntemleri kullanıyorsunuz?",
    a: [
      "Bilişsel davranışçı terapi (BDT), psikodinamik ve birey odaklı yaklaşımlar gibi bilimsel olarak desteklenen yöntemleri, danışanın ihtiyacına göre bütünleştiriyorum.",
      "İstanbul psikolog veya Beşiktaş psikolog arayan danışanlar için yöntem seçiminde şeffaflık önceliklidir; ilk görüşmede çalışma çerçevesi hakkında bilgi veririm.",
    ],
  },
  {
    q: "Online terapi ile yüz yüze terapi arasında fark var mı?",
    a: [
      "Her iki format da etkili olabilir. Online terapi mekân esnekliği sunar; yüz yüze seanslar ise klinik ortamda bedensel ipuçlarını birlikte çalışmayı kolaylaştırabilir. Size uygun formatı birlikte belirleriz.",
      "Online psikolojik danışmanlık ve online terapi için stabil internet, gizli bir ortam ve seans saatine riayet; yüz yüze için ise klinik konforu ve ulaşım planı önemlidir.",
    ],
  },
  {
    q: "İlk seansta neler olur?",
    a: [
      "Öncelikle güvenli bir çerçeve oluşturur, başvuru nedeninizi ve beklentilerinizi dinlerim. Terapi hedefleri ve gizlilik hakkında bilgi paylaşırım.",
      "Psikologdan randevu sonrası ilk oturumda süreç beklentileri ve sınırlar netleşir; psikoloji İstanbul çapında farklı kliniklerde bu yapı benzer şekilde işler.",
    ],
  },
  {
    q: "Online terapi ücretleri ve psikolog seans ücretleri ne kadar?",
    a: [
      "Güncel bireysel seans ücretimiz 3000 TL’dir. Online terapi ücretleri ile yüz yüze seans ücreti aynıdır; ödeme yöntemi ve güncel bilgi için telefon veya WhatsApp üzerinden iletişime geçebilirsiniz.",
      "Ücretler dönemsel olarak güncellenebilir; net rakam ve paket bilgisi ilk temasta paylaşılır. Psikolog seans ücretleri hakkında sorularınızı yazılı veya sözlü iletebilirsiniz.",
    ],
  },
  {
    q: "Beşiktaş psikolog ve İstanbul psikolog seçerken nelere dikkat etmeliyim?",
    a: [
      "Uzmanlık alanı, kullanılan yöntemlerin bilimsel temeli, gizlilik ilkeleri ve terapötik uyum önemlidir. Psikolog tavsiye ararken güvenilir kaynaklardan ve doğrudan iletişimden faydalanmak süreci kolaylaştırır.",
      "İstanbul Avrupa Yakası psikolog seçenekleri arasında ulaşım ve seans sürekliliği; online terapi ihtiyacında ise zaman dilimi ve görüşme platformu netliği değerlendirilmelidir.",
    ],
  },
  {
    q: "Psikologdan randevu ve online terapi için nasıl iletişime geçebilirim?",
    a: [
      "Telefon veya WhatsApp üzerinden kısa bir mesaj yeterlidir; size uygun ilk görüşme zamanını birlikte planlarız.",
      "Aramalarda bazen “pisgolok”, “psikol” veya “pisgolog” gibi yazımlar kullanılsa da doğru ifadeler psikolog, psikolog randevu ve online terapi şeklindedir.",
    ],
  },
];

export function FAQAccordion() {
  return (
    <section
      id="sss"
      className="scroll-mt-24 bg-slate-50/80 py-12 md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-4">
        <h2 id="faq-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          Sık Sorulan Sorular
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 font-semibold text-brand-navy marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <div className="space-y-3 pb-4">
                {item.a.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

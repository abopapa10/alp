const faqs: { q: string; a: string }[] = [
  {
    q: "Seans sıklığı nedir?",
    a: "Genellikle haftada bir seans ile başlanır; ihtiyaca göre seyrek veya daha yoğun plan yapılabilir. İlk görüşmede hedeflerinize göre bir çizelge öneririm.",
  },
  {
    q: "Hangi yöntemleri kullanıyorsunuz?",
    a: "Bilişsel davranışçı terapi (BDT), psikodinamik ve birey odaklı yaklaşımlar gibi bilimsel olarak desteklenen yöntemleri, danışanın ihtiyacına göre bütünleştiriyorum.",
  },
  {
    q: "Online terapi ile yüz yüze terapi arasında fark var mı?",
    a: "Her iki format da etkili olabilir. Online terapi mekân esnekliği sunar; yüz yüze seanslar ise klinik ortamda bedensel ipuçlarını birlikte çalışmayı kolaylaştırabilir. Size uygun formatı birlikte belirleriz.",
  },
  {
    q: "İlk seansta neler olur?",
    a: "Öncelikle güvenli bir çerçeve oluşturur, başvuru nedeninizi ve beklentilerinizi dinlerim. Terapi hedefleri ve gizlilik hakkında bilgi paylaşırım.",
  },
  {
    q: "Ücret ve ödeme nasıl işler?",
    a: "Güncel seans ücreti ve ödeme yöntemi için telefon veya WhatsApp üzerinden iletişime geçebilirsiniz. Net bilgi ilk temasta paylaşılır.",
  },
];

export function FAQAccordion() {
  return (
    <section
      id="sss"
      className="bg-slate-50/80 py-12 md:py-20 scroll-mt-24"
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
              <p className="pb-4 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

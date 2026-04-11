type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "Terapi ne kadar sürer?",
    a: "Seanslar 50 dakika sürmektedir. Terapinin toplam süresi ise başvuru nedeninize ve hedeflerinize göre tamamen size özel şekillenir.",
  },
  {
    q: "Hangi ekollerle çalışıyorsunuz?",
    a: "Ağırlıklı olarak Birey Odaklı Terapi uyguluyorum. İhtiyaca göre Psikodinamik ve BDT yöntemlerinden de destek alıyorum.",
  },
  {
    q: "Seans ücretleri nelerdir?",
    a: "Bireysel, çift ve online görüşmelerde sabit olmak üzere seans ücretimiz 3000 Türk Lirasıdır.",
  },
  {
    q: "Seans sıklığı nedir?",
    a: "Genelde haftada bir seansla başlarız; ilerleye göre aralığı birlikte güncelleyebiliriz.",
  },
  {
    q: "Online terapi ile yüz yüze terapi arasında fark var mı?",
    a: "İkisi de etkili olabilir. Online görüşme mekân esnekliği sunar; yüz yüze seanslar klinik ortamda farklı bir ritim sağlayabilir. Size uygun olanı birlikte seçeriz.",
  },
  {
    q: "İlk seansta neler olur?",
    a: "Başvuru nedeninizi ve beklentilerinizi dinler, gizlilik ve çalışma çerçevesi hakkında bilgi verir, hedefleri birlikte netleştiririz.",
  },
  {
    q: "Randevu için nasıl iletişime geçebilirim?",
    a: "Telefon veya WhatsApp üzerinden kısa bir mesaj yeterli; size uygun ilk görüşme zamanını planlarız.",
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
              <p className="pb-4 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

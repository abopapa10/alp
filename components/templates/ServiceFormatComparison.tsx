const rows: { aspect: string; onsite: string; online: string }[] = [
  {
    aspect: "Ortam ve gizlilik",
    onsite:
      "Beşiktaş’taki klinikte kapalı, sakin bir oda; seans öncesi bekleme alanı. Görüşme yüz yüze, bedensel ipuçları daha görünür.",
    online:
      "Online terapi için gizli, kesintisiz bir oda ve kulaklık önerilir. Görüntülü görüşmede mahremiyet ekran paylaşımı ve bildirimlerle korunmalıdır.",
  },
  {
    aspect: "Esneklik ve ulaşım",
    onsite:
      "İstanbul Avrupa Yakası ve Beşiktaş psikolog arayanlar için merkezi konum; metro ve otobüs bağlantıları. Randevu saatine fiziksel varlık gerekir.",
    online:
      "Şehir dışı, yurtdışı veya yoğun iş temposunda online psikoloji seansı ile coğrafi engel azalır; saat dilimi birlikte planlanır.",
  },
  {
    aspect: "Beden dili ve iletişim",
    onsite:
      "Durmuş duruş, nefes ritmi ve jestler terapötik süreçte doğal biçimde işlenebilir.",
    online:
      "Kamera açısı sınırlı olsa da ses tonu, yüz ifadesi ve ifade edilen içerik üzerinden çalışma sürdürülür.",
  },
  {
    aspect: "Teknik gereksinim",
    onsite: "Ekstra yazılım gerekmez; randevu saatinde klinikte bulunmanız yeterlidir.",
    online:
      "Stabil internet, şarjlı cihaz ve güncel tarayıcı/uygulama; bağlantı kopması durumunda yedek plan (telefon görüşmesi) önceden konuşulabilir.",
  },
  {
    aspect: "İstanbul psikoloji seansı sürekliliği",
    onsite: "Yüz yüze seanslar belirli gün/saatte düzenli ritim kurar.",
    online:
      "Seyahat, hastalık veya ofis programı değişince online terapi ile süreklik korunabilir; gerektiğinde yüz yüze ile dönüşümlü kullanılabilir.",
  },
];

export function ServiceFormatComparison() {
  return (
    <section className="mt-12" aria-labelledby="format-compare-heading">
      <h2
        id="format-compare-heading"
        className="font-display text-xl font-bold text-brand-navy md:text-2xl"
      >
        Beşiktaş’ta yüz yüze seans ve online terapi: nasıl seçilir?
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 md:text-[17px]">
        Aynı etik ve gizlilik ilkeleri her iki formatta da geçerlidir. Hangi yöntemin sizin için daha sürdürülebilir
        olduğunu ilk görüşmede birlikte değerlendiririz; İstanbul psikoloji seansı planınızı buna göre
        şekillendiririz.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm text-slate-800 md:text-[15px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-brand-navy">
              <th className="px-4 py-3 font-semibold">Özellik</th>
              <th className="px-4 py-3 font-semibold">Yüz yüze (klinik)</th>
              <th className="px-4 py-3 font-semibold">Online terapi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.aspect} className="align-top">
                <td className="px-4 py-3 font-medium text-brand-navy">{r.aspect}</td>
                <td className="px-4 py-3 leading-relaxed text-slate-700">{r.onsite}</td>
                <td className="px-4 py-3 leading-relaxed text-slate-700">{r.online}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

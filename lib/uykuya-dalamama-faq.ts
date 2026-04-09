export const uykuyaDalamamaFaqs = [
  {
    question: "İnsomnia nedir?",
    answer:
      "İnsomnia; uykuya dalamama, uyku süresinin veya kalitesinin yetersiz olması ve gündüz işlevsellikte zorlanma ile karakterize edilen yaygın bir uyku şikayetidir. Tıbbi ve psikiyatrik değerlendirme bazı vakalarda gerekebilir.",
  },
  {
    question: "Uykuya dalamama nedenleri psikolojik olarak neler olabilir?",
    answer:
      "Kaygı, depresyon, stres, aşırı düşünme (overthinking), travma yanıtları ve uyku üzerine artan endişe (uykusuzluk korkusu) uyku başlatmayı zorlaştırabilir. Bedensel hastalıklar ve ilaçlar da eşlik edebilir; ayırıcı değerlendirme önemlidir.",
  },
  {
    question: "Uyku hijyeni nedir?",
    answer:
      "Uyku hijyeni; ışık maruziyeti, rutin, yatak odası kullanımı, kafein ve ekran alışkanlıkları gibi uyku kalitesini destekleyen günlük alışkanlıklar bütünüdür. Tek başına her zaman yeterli olmayabilir; kronik şikayette terapi desteklenebilir.",
  },
  {
    question: "BDT-U (uyku için bilişsel davranışçı terapi) nedir?",
    answer:
      "BDT-U; uykusuzluk korkusu, uyarılmış beden ve zihin, uyku ile ilgili çarpıtmalar ve kaçınma üzerine çalışan kanıta dayalı bir psikoterapi yaklaşımıdır. Uygulama kişiye özeldir ve bazen tıbbi tedavi ile birlikte planlanır.",
  },
  {
    question: "Beşiktaş’ta uyku bozukluğu için psikolog desteği nasıl alınır?",
    answer:
      "Telefon veya WhatsApp üzerinden randevu talep edebilirsiniz. Yüz yüze Beşiktaş klinikte veya online terapi formatında uyku odaklı çalışma planı birlikte oluşturulabilir.",
  },
] as const;

export function buildUykuyaDalamamaFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uykuyaDalamamaFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

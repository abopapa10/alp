export const manipulasyonFaqs = [
  {
    question: "Manipülasyon nedir?",
    answer:
      "Manipülasyon, bir kişinin duygu, düşünce veya davranışlarını açık ve karşılıklı bir anlaşma yerine örtük baskı, bilgi çarpıtma veya ilişki avantajı kullanarak yönlendirme çabasıdır. Sağlıklı iknadan farkı; şeffaflık, karşılıklılık ve özerklik ilkesinin bozulmasıdır.",
  },
  {
    question: "Manipülasyon teknikleri nelerdir?",
    answer:
      "Klinik pratikte sık görülen teknikler arasında gaslighting, love bombing, breadcrumbing, ghosting, suçluluk yükleme, sessiz cezalandırma, aşırı idealizasyon/değersizleştirme döngüsü ve sosyal izolasyon bulunur. Teknikler tek başına değil, tekrar eden örüntü halinde değerlendirildiğinde daha anlamlıdır.",
  },
  {
    question: "Duygusal manipülasyon nasıl anlaşılır?",
    answer:
      "İlişki içinde sürekli belirsizlik, kendinden şüphe, sınır koyunca suçluluk, tutarsız ödül-ceza döngüsü ve özsaygıda aşınma yaşanıyorsa duygusal manipülasyon olasılığı değerlendirilmelidir. Özellikle 'ben mi abartıyorum?' sorusunun kronikleşmesi önemli bir ipucudur.",
  },
  {
    question: "Cinsel manipülasyon nasıl anlaşılır?",
    answer:
      "Rıza baskıyla, duygusal şantajla veya geri çekilme tehdidiyle alınıyorsa; hayır cevabı cezalandırılıyor veya partnerin cinsel sınırları küçümseniyorsa cinsel manipülasyon riski vardır. Geçerli rıza; özgürce verilen, bilgilendirilmiş ve geri çekilebilir olandır.",
  },
  {
    question: "Manipülasyon yaşayan kişi ne yapmalı?",
    answer:
      "Önce güvenliği sağlamak, sonra davranışları somutlaştırmak (tarih/olay notları), sınır cümleleri geliştirmek, destek ağına bağlanmak ve profesyonel yardım almak önerilir. Öz-şefkat ve radikal kabul, döngünün duygusal etkisini azaltmada etkilidir.",
  },
] as const;

export function buildManipulasyonFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: manipulasyonFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const ghostingFaqs = [
  {
    question: "Ghosting ne demek?",
    answer:
      "Ghosting; ilişki veya iletişim sürecinde karşı tarafın uyarı veya açıklama olmadan mesajları yanıtlamayı kesmesi, görüşmeyi aniden sonlandırması ve dijital olarak ‘ortadan kaybolması’ olarak tanımlanır. Romantik ilişkilerde sık anılır; arkadaşlık ve iş bağlamında da görülebilir.",
  },
  {
    question: "Ghosting neden yapılır?",
    answer:
      "Nedenler kişiye göre değişir: çatışmadan kaçınma, yüzleşme kaygısı, ilişkiyi bitirmenin utanç veya suçluluk uyandırması, yeni bir ilişkiye yönelme veya yoğunluk/stres. Bazen değil, karşı tarafın duygusal olarak hazır olmaması veya iletişim becerisi eksikliği rol oynar. Açıklama yapmamak genellikle karşı taraf için daha fazla yaralanma yaratır.",
  },
  {
    question: "Ghosting psikolojik olarak ne yapar?",
    answer:
      "Belirsizlik ve reddedilme algısı özsaygıyı sarsabilir; kaygı, tekrarlayan kontrol davranışları (mesajı okundu mu diye bakma) ve yas sürecinin kesintiye uğraması sık görülür. Travma düzeyinde etki herkeste aynı değildir; destek almak faydalı olabilir.",
  },
  {
    question: "Ghosting yapan kişiye nasıl yaklaşılmalı?",
    answer:
      "Tek taraflı mesaj yağmuruna ve sürekli takibe girmeden önce sınır koymak önemlidir. ‘Açıklama hakkım var’ düşüncesi doğal olsa da kontrol sizde değilse enerjinizi kendinize döndürmek iyileşmeyi hızlandırabilir. Terapide bu süreç işlenebilir.",
  },
  {
    question: "Ghosting sonrası ne zaman psikolog desteği alınmalı?",
    answer:
      "Uyku, iştah, iş veya sosyal işlevsellikte belirgin düşüş, sürekli suçluluk veya umutsuzluk varsa profesyonel destek düşünülmelidir. Beşiktaş klinikte veya online terapi ile yas, sınır ve öz-değer üzerine çalışılabilir.",
  },
] as const;

export function buildGhostingFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ghostingFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

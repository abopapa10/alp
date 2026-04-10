export const kompulsifFaqs = [
  {
    question: "Her titiz insan obsesif midir?",
    answer:
      "Hayır. Titizlik bir kişilik özelliği olabilir; obsesyon ise istemsiz, rahatsız edici düşünce/impuls/imge; kompulsiyon ise bu kaygıyı azaltmak için yapılan zorlayıcı ritüeldir. Tanı için yalnızca davranışın varlığı değil, süre, sıkıntı düzeyi ve işlev kaybı birlikte değerlendirilir.",
  },
  {
    question: "Kompulsiyonlar tedavi edilmezse ne olur?",
    answer:
      "Kompulsiyonlar kısa vadede rahatlatır, uzun vadede OKB döngüsünü güçlendirir. Ritüel yapma eşiği düşer, süre uzar ve günlük işlevsellik bozulabilir. Tedavide Maruz Bırakma ve Tepki Önleme (ERP) ile bu döngü sistematik biçimde kırılır.",
  },
  {
    question: "Zihinsel kompulsiyon nedir?",
    answer:
      "Zihinsel kompulsiyon; tekrar tekrar dua etme, içinden sayı sayma, cümleleri nötralize etme, olayı zihinde güvence aramak için tekrar oynatma gibi görünmeyen ritüellerdir. Fiziksel kompulsiyon kadar klinik önem taşır.",
  },
  {
    question: "Takıntı (obsesyon) ile zorlantı (kompulsiyon) farkı nedir?",
    answer:
      "Obsesyon, istemsiz gelen ve kişinin benliğine yabancı bulduğu tehdit içerikli düşünce/imge/impulstur. Kompulsiyon ise bu tehdidin yarattığı kaygıyı azaltmak için yapılan davranış veya zihinsel ritüeldir.",
  },
  {
    question: "OKB'de psikoterapi etkili midir?",
    answer:
      "Evet. Kanıt temelli olarak özellikle BDT içinde ERP birinci basamak psikoterapilerdendir. Klinik tabloya göre psikodinamik formülasyon, bilişsel yeniden yapılandırma ve gerektiğinde psikiyatrik değerlendirme ile kombine bir plan yapılabilir.",
  },
] as const;

export function buildKompulsifFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: kompulsifFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const narsizmFaqs = [
  {
    question: "Narsist biri sevebilir mi?",
    answer:
      "Sevgi kapasitesi tamamen yok değildir; ancak patolojik narsistik örüntülerde sevginin sürekliliği, karşılıklılık ve empati boyutu ciddi biçimde zorlanabilir. İlişki sıklıkla idealizasyon-değersizleştirme döngüsüne girebilir.",
  },
  {
    question: "Narsizm tedavi edilir mi?",
    answer:
      "Evet, tedavi edilebilir bir kişilik örüntüsüdür. Özellikle uzun süreli psikodinamik psikoterapi, mentalizasyon temelli yaklaşımlar ve şema odaklı müdahalelerle öz düzenleme, empati ve ilişki işlevselliğinde anlamlı iyileşme mümkündür.",
  },
  {
    question: "Narsistik öfke nedir?",
    answer:
      "Narsistik öfke, kişinin kırılgan öz-değeri tehdit edildiğinde ortaya çıkan orantısız öfke, küçümseme veya cezalandırıcı geri çekilme tepkisidir. Çoğu zaman grandiyöz görünümün altında kırılganlık ve utanç dinamikleri bulunur.",
  },
  {
    question: "Heinz Kohut narsizmi nasıl açıklar?",
    answer:
      "Kohut narsizmi, gelişimsel aynalama, idealleştirme ve ikizleşme ihtiyaçlarının yeterince karşılanmaması sonucu oluşan bir kendilik düzenleme kırılganlığı olarak açıklar. Temel vurgu 'eksik kalan kendilik gelişimi' üzerinedir.",
  },
  {
    question: "Narsistik kişilik bozukluğu ile özgüven aynı şey mi?",
    answer:
      "Hayır. Sağlıklı özgüven, gerçekçi özdeğer ve esnek öz-eleştiri kapasitesi içerir. Narsistik kişilik bozukluğunda ise grandiyöz görünümle birlikte eleştiriye aşırı hassasiyet, empati zorluğu ve ilişkisel sömürü örüntüleri görülebilir.",
  },
] as const;

export function buildNarsizmFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: narsizmFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

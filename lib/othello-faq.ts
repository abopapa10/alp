export const othelloFaqs = [
  {
    question: "Othello sendromu nedir?",
    answer:
      "Othello sendromu; partnerin sadakatine ilişkin gerçek dışı, inatçı inançlar (sanrılar) ve bu inançlara bağlı kontrol, sorgulama veya suçlama davranışlarıyla özetlenen bir çerçevedir. Tıbbi veya hukuki tanı yerine geçmez; bireysel değerlendirme mutlaka uzman görüşmesiyle yapılmalıdır.",
  },
  {
    question: "Sanrısal kıskançlık ne demek?",
    answer:
      "Sanrısal kıskançlıkta kişi, karşı tarafın aldatması veya ihaneti hakkında kanıtlara rağmen inançlarını sürdürebilir; açıklamalar genellikle yatıştırıcı olmaz. Bu durum ilişki güvenini ciddi biçimde zedeler ve bazen riskli davranışlara yol açabilir.",
  },
  {
    question: "Normal kıskançlık ile Othello sendromu farkı nedir?",
    answer:
      "Sıradan kıskançlıkta duygu genellikle duruma uygun tetikleyicilerle başlar ve zaman içinde diyalog, güven inşası veya kanıtlarla yumuşayabilir. Sanrısal kıskançlıkta ise inanç daha inatçıdır, çelişkili bilgiye karşı direnç gösterebilir ve ilişkiyi sürekli tehdit algısıyla yönetmeye dönüşebilir.",
  },
  {
    question: "Othello sendromu neden ortaya çıkar?",
    answer:
      "Nedenler tek başına açıklanamaz; bağlanma örüntüleri, önceki ihanet deneyimleri, özsaygı, madde kullanımı, uyku eksikliği veya eşlik eden psikiyatrik durumlar (örneğin şizofreni spektrumu, demans, majör depresyon gibi bağlamlarda sanrılar) klinik değerlendirmede ele alınır. Öz tanı ve internetten kesin neden aramak yerine uzman desteği önerilir.",
  },
  {
    question: "Othello sendromu tedavi edilir mi?",
    answer:
      "Psikoterapi ve gerektiğinde psikiyatrik değerlendirme ile belirtiler ve altta yatan durumlar ele alınabilir. Çift çalışması ancak güvenlik ve sınır netleştikten sonra uygun olabilir. Acil risk (şiddet tehdidi vb.) varsa önce güvenlik planı önceliklidir.",
  },
  {
    question: "Ne zaman psikolog veya psikiyatriste başvurmalıyım?",
    answer:
      "İlişkide sürekli suçlama, izleme, iletişim kısıtlama, tehdit veya şiddet varsa; işlevsellikte belirgin düşüş, uyku bozukluğu veya intihar düşüncesi oluşursa gecikmeden profesyonel yardım alınmalıdır. Beşiktaş klinikte veya online terapi ile başvuru mümkündür.",
  },
] as const;

export function buildOthelloFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: othelloFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const durtusellikFaqs = [
  {
    question: "Dürtüsellik bir hastalık mıdır?",
    answer:
      "Dürtüsellik tek başına bir hastalık değildir; bir özellik, semptom veya klinik örüntünün parçası olabilir. Sıklığı, şiddeti ve yaşam işlevini bozma düzeyi arttığında profesyonel değerlendirme gerekir.",
  },
  {
    question: "Dürtüsellik ve DEHB arasında bağ var mıdır?",
    answer:
      "Evet. DEHB'de dürtüsellik sık görülen temel belirtilerden biridir; ancak dürtüsellik sadece DEHB'ye özgü değildir. Bipolar bozukluk, madde kullanım bozuklukları veya sınır kişilik örüntülerinde de görülebilir.",
  },
  {
    question: "Dürtüsel bir çocuk için ne yapılmalı?",
    answer:
      "Önce etiketleme yerine işlevsel değerlendirme yapılmalı; tutarlı sınırlar, kısa-çift aşamalı yönergeler, ödül geciktirme çalışmaları ve ebeveyn koçluğu uygulanmalıdır. Gerekirse çocuk-ergen psikiyatrisi ve klinik psikoloji iş birliği önerilir.",
  },
  {
    question: "Dürtü kontrolü nasıl sağlanır?",
    answer:
      "Tetikleyici farkındalığı, kısa geciktirme teknikleri, nefes ve beden regülasyonu, davranış öncesi plan ve sonuç analizi ile dürtü kontrolü geliştirilebilir. BDT ve şema odaklı müdahaleler klinik olarak etkilidir.",
  },
  {
    question: "Dürtüsellik kalıcı mıdır?",
    answer:
      "Hayır. Dürtü kontrolü bir beceridir ve çalışıldıkça güçlenir. Nöroplastisite sayesinde özellikle düzenli psikoterapi, davranış planı ve çevresel yapılandırmayla belirgin iyileşme mümkündür.",
  },
] as const;

export function buildDurtusellikFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: durtusellikFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

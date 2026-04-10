export const regresyonFaqs = [
  {
    question: "Regresyon bir hastalık mıdır?",
    answer:
      "Hayır. Psikolojide regresyon, tek başına bir hastalık değil; stres, kayıp, çatışma veya yoğun duygulanım karşısında görülebilen bir savunma mekanizmasıdır. Ancak çok sık, yoğun ve işlev bozucu olduğunda altta yatan bir klinik tabloyu işaret edebilir.",
  },
  {
    question: "Regresyon terapisi bilimsel midir?",
    answer:
      "Klinik psikolojide bilimsel olarak kullanılan regresyon kavramı, savunma mekanizması bağlamındadır. Popüler kültürdeki geçmiş yaşam/regresyon terapisi iddiaları ise güçlü bilimsel kanıt tabanına sahip değildir. Etik klinik uygulamada, kanıta dayalı yaklaşımlar önceliklidir.",
  },
  {
    question: "Yetişkinler neden regresyon yaşar?",
    answer:
      "Yetişkinlerde regresyon; yoğun stres, terk edilme kaygısı, ilişki çatışması, iş baskısı, travmatik tetiklenmeler veya yetersiz duygu düzenleme kaynaklarıyla ortaya çıkabilir. Amaç genellikle bilinçdışı biçimde anksiyeteyi azaltmaktır.",
  },
  {
    question: "Psikolojide regresyon belirtileri nelerdir?",
    answer:
      "Çocuksu tepkiler, pasif-agresif davranışlar, aşırı bağımlılık, sorumluluktan kaçınma, ağlama nöbetleri, küsme, dürtü kontrolünde zorlanma ve düşünsel katılık regresyon örüntülerine eşlik edebilir. Tanı için uzman değerlendirmesi gerekir.",
  },
  {
    question: "Regresyonla nasıl çalışılır?",
    answer:
      "Psikodinamik psikoterapi, şema terapisi ve BDT temelli duygu düzenleme teknikleriyle çalışılabilir. Tedavide amaç regresyonu bastırmak değil; tetikleyicileri anlamak, ego işlevlerini güçlendirmek ve daha olgun başa çıkma yolları geliştirmektir.",
  },
] as const;

export function buildRegresyonFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: regresyonFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

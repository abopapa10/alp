export const borderlineFaqs = [
  {
    question: "Borderline kişilik bozukluğu belirtileri nelerdir?",
    answer:
      "Sık görülen belirtiler arasında yoğun terk edilme korkusu, dengesiz ilişkiler, kimlik karmaşası, dürtüsellik, duygusal dalgalanma, kronik boşluk hissi, yoğun öfke ve stresle artan paranoid/dissosiyatif belirtiler bulunur. Tanı için belirtilerin sürekliliği ve işlev kaybı birlikte değerlendirilir.",
  },
  {
    question: "Borderline iyileşir mi?",
    answer:
      "Evet. Borderline kişilik örüntüsünde belirti şiddeti zamanla ve doğru tedaviyle belirgin biçimde azalabilir. Özellikle DBT, TFP, mentalizasyon temelli terapi ve şema terapisi ile duygu düzenleme, ilişki işlevselliği ve dürtü kontrolünde güçlü iyileşmeler görülebilir.",
  },
  {
    question: "Splitting (bölme) nedir?",
    answer:
      "Splitting, kişinin kendini ve diğerlerini 'tam iyi' veya 'tam kötü' uçlarda algılamasına yol açan ilkel bir savunmadır. Bu savunma, yoğun duygusal yük altında belirsizlik ve ambivalansı tolere etmeyi zorlaştırır.",
  },
  {
    question: "Borderline ve bipolar arasındaki fark nedir?",
    answer:
      "Bipolar bozuklukta duygu durum epizodları daha dönemsel ve biyolojik ritimle ilişkiliyken, borderline örüntüsünde duygu dalgalanmaları çoğu zaman ilişkisel tetikleyicilere ve terk edilme hassasiyetine bağlı, daha hızlı ve durumsaldır. Ayırıcı tanı mutlaka uzman değerlendirmesi gerektirir.",
  },
  {
    question: "Borderline ve ilişkiler neden bu kadar zorlanır?",
    answer:
      "Temel zorluk, yakınlık isteği ile terk edilme korkusunun aynı anda yükselmesidir. İdealleştirme-değersizleştirme döngüsü, sınır sorunları ve yoğun duygulanım ilişkide tekrar eden krizlere neden olabilir.",
  },
  {
    question: "Borderline kişilik bozukluğu tedavisinde hangi terapi daha etkilidir?",
    answer:
      "Tek bir herkes için en iyi yöntem yoktur. Duygu düzenleme ve kriz yönetiminde DBT çok güçlüdür; kimlik dağılması, splitting ve nesne ilişkileri çalışmasında TFP derinlik sunar. Klinik formülasyona göre yöntem seçimi veya entegrasyonu yapılır.",
  },
] as const;

export function buildBorderlineFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: borderlineFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

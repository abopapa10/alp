export const histerikFaqs = [
  {
    question: "Histeri bir hastalık mıdır?",
    answer:
      "Günümüzde 'histeri' tek başına DSM-5-TR'de bir tanı başlığı değildir. Yakınlığı olan tablolar histriyonik kişilik bozukluğu ve işlevsel nörolojik semptom (konversiyon) bozukluğu altında değerlendirilir. Belirtiler işlevselliği bozuyorsa mutlaka psikiyatrist ve klinik psikolog değerlendirmesi gerekir.",
  },
  {
    question: "Erkeklerde histeri görülür mü?",
    answer:
      "Evet. Tarihsel olarak terim kadın bedenine odaklanmış olsa da konversiyon belirtileri ve dikkat çekme/dramatik duygulanım örüntüleri her cinsiyette görülebilir. Cinsiyet, tanı yerine belirti ve işlev kaybının değerlendirilmesine odaklanılmalıdır.",
  },
  {
    question: "Histerik kriz anında ne yapılmalı?",
    answer:
      "Önce tıbbi acil durumlar ekarte edilmelidir. Kişi güvende değilse 112 aranmalıdır. Psikolojik krizde sakin, net ve kısa iletişim, aşırı dramatizasyonu beslemeyen tutum ve gerektiğinde acil psikiyatri başvurusu uygundur. Uzun vadede psikoterapi ve gerekirse psikiyatrik tedavi planlanır.",
  },
  {
    question: "Konversiyon bozukluğu nedir?",
    answer:
      "İşlevsel nörolojik semptom bozukluğu olarak da bilinir; nörolojik hastalık bulgusu olmadan felç, körlük, nöbet benzeri atak gibi semptomların psikolojik çatışma ve stresle ilişkili görülmesidir. Sembolik anlamı terapide çalışılabilir; önce tıbbi ayırıcı tanı önemlidir.",
  },
  {
    question: "Histriyonik kişilik bozukluğu ile histeri aynı mı?",
    answer:
      "Hayır. Histriyonik kişilik bozukluğu kalıcı kişilik örüntüsü; tarihsel histeri ise çok daha geniş ve artık ayrıştırılmış klinik kategorileri kapsıyordu. Güncel dilde 'histerik' sıfatı yerine spesifik tanı ve formülasyon kullanılması daha doğrudur.",
  },
] as const;

export function buildHisterikFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: histerikFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

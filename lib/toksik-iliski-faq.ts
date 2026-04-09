/** SSS: hem sayfada hem FAQPage JSON-LD için (metin düz string). */
export const toksikIliskiFaqs = [
  {
    question: "Toksik ilişki nedir?",
    answer:
      "Toksik ilişki; güven, saygı ve karşılıklı destek yerine sürekli gerilim, kontrol, küçümseme veya duygusal istismar örüntülerinin baskın olduğu yakın ilişki dinamiklerini ifade eder. Tek bir tartışma değil, zaman içinde tekrarlayan ve kişinin özsaygısını, güvenliğini veya sosyal çevresini zedeleyen bir yapı söz konusudur. Profesyonel değerlendirme için bir ruh sağlığı uzmanına başvurmak faydalıdır.",
  },
  {
    question: "Gaslighting ne demek?",
    answer:
      "Gaslighting; karşı tarafın gerçeklik algısını sistematik biçimde sarsarak “yanılıyorsun, abartıyorsun, aslında hiç olmadı” gibi ifadelerle bellek ve duyguları şüpheye düşürme dinamiğidir. Toksik ilişki belirtileri arasında sık görülür ve duygusal istismarın bir biçimi olarak ele alınır. Bu davranış cinsiyete özgü değildir.",
  },
  {
    question: "Love bombing nedir ve toksik ilişki ile bağlantısı nedir?",
    answer:
      "Love bombing; ilişkinin başında aşırı ilgi, hediye, hızlı bağlanma ve yoğun övgü ile karşı tarafı bunaltıcı biçimde sarmalama örüntüsüdür. Ardından sıklıkla geri çekilme, suçluluk veya kontrol artışı gelebilir. Manipülasyon teknikleri arasında gösterilir ve narsist ilişki dinamiklerinde sık anlatılır; her durumda teşhis için uzman görüşü gerekir.",
  },
  {
    question:
      "Partneriniz sizinle olan iletişiminde ne sıklıkla gaslighting uyguluyor? İşte 5 örnek cümle",
    answer:
      "Aşağıdaki cümleler tek başına tanı koydurmaz; ancak sık tekrarlandığında gaslighting ve manipülasyon teknikleri açısından farkındalık oluşturabilir: 1) “Aslında hiç öyle demedim, sen uyduruyorsun.” 2) “Çok hassassın, her şeyi kişisel alıyorsun.” 3) “Aklını kaçırmış gibisin, kimse bana inanmaz.” 4) “Sen olmasan daha mutlu olurdum, hep sen yüzünden.” 5) “Olanı unuttun galiba; ben haklıydım.” Bu örüntüler sizi sürekli şüpheye düşürüyorsa profesyonel destek ve güvenli sınırlar önemlidir.",
  },
  {
    question: "Manipülasyon teknikleri nelerdir?",
    answer:
      "Yaygın manipülasyon teknikleri arasında suçluluk yüklemek, sessiz muamele, tehdit veya aşağılama, sosyal izolasyon, maddi/duygusal bağımlılık yaratma ve gerçeklik algısını sarsma (gaslighting) sayılabilir. Toksik ilişki belirtileri bu tekniklerin tekrarlayan kullanımıyla güçlenir. Sağlıklı sınırlar ve terapi süreci, bu örüntüleri adlandırmaya yardımcı olabilir.",
  },
  {
    question: "Narsist ilişki ile toksik ilişki aynı şey midir?",
    answer:
      "Her narsist ilişki toksik olmak zorunda değildir; her toksik ilişki de narsisistik özelliklere indirgenemez. Ancak grandiyozite, empati eksikliği ve kontrol ihtiyacı gibi temalar bazen toksik dinamiklerle örtüşebilir. Kişilik özellikleri yalnızca uzman değerlendirmesiyle netleşir; etiketlemek yerine güvenlik ve sınırlarınızı önceliklendirmek önemlidir.",
  },
  {
    question: "Sağlıklı sınırlar nasıl çizilir?",
    answer:
      "Sağlıklı sınırlar; net, tutarlı ve uygulanabilir ifadelerle ihtiyaçlarınızı söylemeyi, kabul edilemez davranışlara “hayır” demeyi ve gerektiğinde mesafe koymayı içerir. Terapide rol oyunu, iletişim becerileri ve öz-değer çalışmaları bu süreci destekler. Risk veya şiddet söz konusuysa önce güvenlik planı ve yerel destek hatları önceliklidir.",
  },
  {
    question: "Duygusal istismar belirtileri nelerdir?",
    answer:
      "Sürekli aşağılama, tehdit, korkutma, sosyal izolasyon, ekonomik kontrol, suçluluk ve utanç ile yönetme ve duygularınızın sürekli küçümsenmesi duygusal istismar örneklerindendir. Toksik ilişki nedir sorusunun cevabında sık vurgulanan boyutlardan biridir. Yaşadığınız durum güvenliğinizi tehdit ediyorsa 112 veya yerel destek kurumlarına başvurun.",
  },
] as const;

export function buildToksikIliskiFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: toksikIliskiFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

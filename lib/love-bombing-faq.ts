export const loveBombingFaqs = [
  {
    question: "Love bombing (aşk bombardımanı) nedir?",
    answer:
      "Love bombing; ilişkinin başında aşırı ilgi, övgü, hediye, sürekli mesaj ve hızlı yakınlık adımlarıyla karşı tarafın duygusal olarak hızla bağlanmasının sağlanması örüntüsüdür. Her yoğun ilgi love bombing değildir; bağlam, süreklilik ve sonrasında kontrol/dışlama dinamikleri birlikte değerlendirilir.",
  },
  {
    question: "Love bombing belirtileri nelerdir?",
    answer:
      "İlişkinin çok erken aşamasında aşırı vaatler, ‘ruh eşi’ benzeri etiketler, sınırları saymama, sosyal çevreyi hızla izole etme baskısı, sürekli mesaj ve suçlayıcı tepkilerle birlikte gelen geri çekilme gibi dalgalanmalar sık anlatılır. Bu liste tanı koymaz; kişisel durum uzmanla değerlendirilmelidir.",
  },
  {
    question: "Love bombing neden yapılır?",
    answer:
      "Motivasyonlar kişiye göre değişir: hızlı bağlanma ve kontrol, yalnızlık korkusu, manipülatif ilişki örüntüleri veya kişilik yapısı ile ilişkili esneksiz ihtiyaçlar sık tartışılır. Amaç ne olursa olsun, sizin sınırlarınız ve güvenliğiniz önceliklidir.",
  },
  {
    question: "Love bombing ile sağlıklı ilgi nasıl ayırt edilir?",
    answer:
      "Sağlıklı ilgi genellikle zamanla gelişir; karşı taraf ‘hayır’ dediğinizde saygı gösterir, arkadaşlıklarınızı ve rutinlerinizi destekler, baskı ve suçlama yerine net iletişim kurar. Love bombing’de ise yoğunluk sık sık kontrol, hızlandırılmış bağlanma ve sonrasında duygusal ceza ile birlikte görülebilir.",
  },
  {
    question: "Love bombing sonrası ne yapmalıyım?",
    answer:
      "Güvenliğinizi önceleyin; gerekiyorsa mesafe koyun ve destek ağınızla bağlantıyı sürdürün. Terapide bağlanma, sınır koyma ve öz-değer üzerine çalışmak iyileşmeyi destekler. Şiddet veya takip riski varsa yerel destek hatları ve hukuki koruma seçenekleri değerlendirilmelidir.",
  },
  {
    question: "Love bombing için ne zaman terapi düşünmeliyim?",
    answer:
      "İlişki sonrası sürekli suçluluk, kaygı, özsaygıda düşüş veya tekrarlayan benzer ilişki örüntüleri yaşıyorsanız psikolog desteği faydalı olabilir. Beşiktaş’taki klinikte veya online terapi ile randevu planlanabilir.",
  },
] as const;

export function buildLoveBombingFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loveBombingFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

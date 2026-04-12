export const ghostingFaqs = [
  {
    question: "Ghosting yapan kişiye mesaj atıp hesap sormalı mıyım?",
    answer:
      "Tek bir kural yoktur; ancak tekrarlayan, aşağılayıcı veya suçlayıcı mesaj yağmuru genelde belirsizliği artırır ve sizin özsaygınızı daha çok yıpratır. Bir kez net ve saygılı bir kapanış cümlesi yazmak doğal bir ihtiyaçtır; karşılık gelmezse, süregiden ‘hesap sorma’ döngüsü yerine sınır koymayı düşünmek iyileşmeyi destekler. Terapide bu kararı vicdanınızla öz-değeriniz arasında dengeleyecek şekilde işleyebilirsiniz.",
  },
  {
    question: "Ghosting psikolojik bir şiddet midir?",
    answer:
      "Ghosting her bağlamda aynı şiddette yaşanmaz; ancak güç ve kontrol dinamikleri içinde, tehdit edici bir örüntünün parçası olarak veya kişiyi kasıtlı olarak belirsizlikte bırakmak için kullanıldığında psikolojik zarar ciddi olabilir. Bazı çalışmalarda dijital reddedilme ve iletişimin kesilmesi, kaygı ve depresif belirtilerle ilişkilendirilir. Yaşadığınız etki sizin için geçerliyse bunu küçümsemek zorunda değilsiniz; destek almak anlamlıdır.",
  },
  {
    question: "Aylarca süren bir ilişkide ghosting neden yaşanır?",
    answer:
      "Uzun ilişkilerde ghosting sıklıkla tek bir nedene indirgenemez. Bağlanma kaygısı, çatışmadan kaçınma, başka bir ilişkiye yönelme, depresyon veya utanç, aile/iş stresi ve iletişim becerisi eksikliği bir arada rol oynayabilir. Süre uzadıkça belirsizlik daha ağır hissedilebilir; bu yüzden klinik destekle yas ve öz-değer çalışması özellikle faydalı olabilir.",
  },
  {
    question: "Bu travmayı atlatmam ne kadar sürer?",
    answer:
      "Süre kişiye, ilişkinin anlamı, önceki yaralar ve destek kaynaklarına göre değişir. Bazı kişiler birkaç hafta içinde belirgin rahatlama bildirirken, tekrarlayan ghosting öyküleri veya eşlik eden kaygı-depresyon tablosunda süre uzayabilir. Terapi düzenli olduğunda daha öngörülebilir bir tempo oluşur; iyileşme ‘çizgisel’ olmayabilir, dalgalı ilerlemek normaldir.",
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

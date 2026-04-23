export const hipnozFaqs = [
  {
    question: "Hipnozda kişi kontrolünü kaybeder mi?",
    answer:
      "Klinik hipnozda kişi çevresel bilgiyi tamamen kapatmaz ve etik dışı telkinlere karşı eleştirel kapasitesini bütünüyle yitirmez. Hipnotik yanıt, dikkat odağının daralması ve telkine açıklığın artmasıyla ilişkilidir; bu durum mutlak itaat anlamına gelmez.",
  },
  {
    question: "Hipnoz uyku mudur?",
    answer:
      "Hipnoz, fizyolojik uyku ile aynı durum değildir. EEG çalışmaları, hipnotik odakta uyanıklık bileşenlerinin sürdüğünü, ancak dikkat ağları ve öz-farkındalıkla ilişkili süreçlerde farklılaşma olabildiğini gösterir.",
  },
  {
    question: "Hipnoterapi hangi durumlarda kullanılabilir?",
    answer:
      "Kanıt tabanında en çok incelenen alanlar arasında ağrı yönetimi, prosedürel kaygı, irritabl bağırsak sendromu ve bazı stres ilişkili belirtiler bulunur. Endikasyon kararı, tanı ve klinik değerlendirme ile kişiye özel verilir.",
  },
  {
    question: "Herkes hipnoz olabilir mi?",
    answer:
      "Hipnotik yatkınlık bireyler arasında değişir ve normal dağılım gösterir. Çoğu kişi belirli düzeyde hipnotik yanıta sahiptir; ancak yanıtın derinliği, beklenti, terapötik ittifak, dikkat kapasitesi ve yöntem uyumundan etkilenir.",
  },
  {
    question: "Hipnoz hafızayı güçlendirir mi?",
    answer:
      "Hipnoz altında hatırlama hissi artabilir; fakat bu durum her zaman doğruluk artışı anlamına gelmez. Özellikle adli bağlamlarda yanlış anı (false memory) riskine karşı dikkatli, yapılandırılmış ve etik ilkelere uygun yaklaşım gerekir.",
  },
  {
    question: "Hipnoz ilaç tedavisinin yerine geçer mi?",
    answer:
      "Hipnoterapi bazı olgularda semptom yönetimine katkı sağlar, ancak tıbbi tedavilerin otomatik alternatifi değildir. Psikiyatrik ve tıbbi plan, ilgili hekim/uzman değerlendirmesiyle bütüncül biçimde yürütülmelidir.",
  },
  {
    question: "Online hipnoterapi mümkün mü?",
    answer:
      "Uygun vaka seçimi, güvenli ortam ve teknik yeterlilik koşullarında çevrim içi hipnoterapi uygulanabilir. Yine de kriz riski, dissosiyatif alevlenme ya da güvenlik izlemi gerektiren durumlarda yüz yüze değerlendirme öncelik kazanabilir.",
  },
  {
    question: "Hipnoz kimler için uygun olmayabilir?",
    answer:
      "Aktif psikotik belirtiler, ciddi realite değerlendirme bozulması, akut intihar riski veya ciddi nörolojik/tıbbi belirsizlik durumlarında önce kapsamlı psikiyatrik ve tıbbi değerlendirme gerekir. Güvenlik her zaman ilk ilkedir.",
  },
] as const;

export function buildHipnozFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hipnozFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

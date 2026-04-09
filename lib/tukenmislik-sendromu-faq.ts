/** SSS: sayfa + FAQPage JSON-LD için düz metin. */
export const tukenmislikSendromuFaqs = [
  {
    question: "Tükenmişlik sendromu nedir?",
    answer:
      "Tükenmişlik sendromu (burnout), genellikle uzun süreli iş veya rol stresi sonucunda ortaya çıkan; duygusal tükenme, işe veya danışanlara karşı kinik/duyarsız bir tutum ve kişisel başarı duygusunda azalma gibi boyutlarla tanımlanan bir örnektir. Dünya Sağlık Örgütü ICD-11 sınıflamasında burnout, mesleki bağlamda tanımlanan bir fenomen olarak yer alır; tanı ve değerlendirme için klinik görüşme önemlidir.",
  },
  {
    question: "Burnout ile depresyon aynı şey midir?",
    answer:
      "Hayır. Depresyon daha geniş bir duygu durum bozukluğu spektrumudur; burnout ise sıklıkla iş veya sürdürülen yüksek talepli rollerle ilişkilendirilen bir tükenmişlik örüntüsüdür. İkisi örtüşebilir ve birlikte ele alınabilir; ayırıcı tanı ve tedavi planı yalnızca ruh sağlığı uzmanı ile netleşir.",
  },
  {
    question: "Maslach tükenmişlik envanteri üç boyutu nedir?",
    answer:
      "Yaygın kuramsal çerçevede üç boyut sıklıkla şöyle özetlenir: duygusal tükenme (enerji ve duygusal kaynakların tükenmesi), duyarsızlaşma veya depersonalizasyon (işe veya hizmet verilen kişilere karşı soğuk/uzak tutum) ve kişisel başarıda düşük hissetme (öz-yeterlik ve başarı algısında azalma). Ölçüm araçları klinik tanı yerine tarama ve araştırma amaçlı kullanılır.",
  },
  {
    question: "Tükenmişlik belirtileri nelerdir?",
    answer:
      "Yaygın belirtiler arasında sürekli yorgunluk, uyku düzensizliği, konsantrasyon güçlüğü, işe karşı isteksizlik veya kinizm, sinirlilik, bedensel gerginlik (baş ağrısı, kas sıkıntısı), sosyal çekilme ve özsaygıda düşüş sayılabilir. Belirtiler kişiye göre değişir; süreklilik ve işlevsellikte bozulma varsa profesyonel destek düşünülmelidir.",
  },
  {
    question: "Kimler tükenmişlik açısından daha riskli olabilir?",
    answer:
      "Yüksek iş yükü, düşük özerklik, belirsiz roller, zayıf sosyal destek, gece vardiyası veya uzun süre kesintisiz çalışma, bakım veren roller ve duygusal emek yoğun meslek grupları riski artırabilir. Koruyucu faktörler arasında net sınırlar, dinlenme, fiziksel aktivite ve sosyal bağlar sayılabilir.",
  },
  {
    question: "Tükenmişlik sendromu tedavisi nasıl planlanır?",
    answer:
      "Bireysel terapide stres yönetimi, bilişsel yeniden çerçeveleme, davranışsal aktivasyon, uyku hijyeni ve iş-yaşam sınırları üzerinde çalışılabilir. Gerekirse işyeri düzenlemeleri veya tıbbi değerlendirme (örneğin eşlik eden depresyon/anksiyete) ayrıca ele alınır. Tedavi kişiye özeldir.",
  },
  {
    question: "Ne zaman bir psikolog veya psikiyatriste başvurmalıyım?",
    answer:
      "Belirtiler haftalarca süreyle devam ediyor, iş veya ilişkileriniz ciddi zarar görüyorsa veya umutsuzluk, intihar düşüncesi gibi alarm belirtileri varsa gecikmeden profesyonel yardım alın. Acil durumlarda 112’yi arayınız.",
  },
] as const;

export function buildTukenmislikFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tukenmislikSendromuFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

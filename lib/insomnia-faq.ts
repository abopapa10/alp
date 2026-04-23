export const insomniaFaqs = [
  {
    question: "İnsomnia ne demek?",
    answer:
      "İnsomnia; uykuya dalma, uykuyu sürdürme veya sabah erken uyanma zorluklarının en az birkaç hafta boyunca gündüz işlevselliğini etkileyecek düzeyde sürmesiyle tanımlanan bir uyku bozukluğudur.",
  },
  {
    question: "İnsomnia ile geçici uykusuzluk arasındaki fark nedir?",
    answer:
      "Geçici uykusuzluk stresli dönemlerde kısa süreli görülebilir. İnsomnia tanısında belirtilerin sürekliliği, gündüz yorgunluğu, dikkat sorunları ve yaşam kalitesinde düşüş gibi işlevsel etkiler belirleyicidir.",
  },
  {
    question: "İnsomnia tedavisinde ilk seçenek nedir?",
    answer:
      "Uluslararası kılavuzlarda kronik insomnia için birinci basamak yaklaşım genellikle BDT-U'dur (uykusuzluk için bilişsel davranışçı terapi). İlaç tedavisi bazı olgularda kısa süreli veya yardımcı olarak değerlendirilebilir.",
  },
  {
    question: "Online terapi ile insomnia çalışılabilir mi?",
    answer:
      "Uygun değerlendirme sonrası BDT-U teknikleri çevrim içi formatta da uygulanabilir. Uyku günlüğü, stimulus kontrol, uyku kısıtlaması ve bilişsel yeniden yapılandırma online görüşmelerde yapılandırılmış biçimde yürütülebilir.",
  },
  {
    question: "İnsomnia depresyon veya kaygıyla ilişkili olabilir mi?",
    answer:
      "Evet. İnsomnia çoğu zaman kaygı bozuklukları, depresif belirtiler, stres ve bedensel hastalıklarla çift yönlü ilişki gösterebilir. Bu nedenle tedavi planı sadece uyku saatlerine değil, duygudurum ve gündüz işlevselliğe de odaklanmalıdır.",
  },
  {
    question: "Hangi durumda tıbbi değerlendirme önceliklidir?",
    answer:
      "Gece solunum durması şüphesi, şiddetli horlama, nörolojik belirtiler, mani/psikoz belirtileri, intihar düşüncesi veya ciddi gündüz uykululuğu durumlarında öncelik hekim ve/veya psikiyatri değerlendirmesidir.",
  },
] as const;

export function buildInsomniaFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: insomniaFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

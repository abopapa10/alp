import type { TherapyTabItem } from "@/components/content/TherapySchoolTabs";

/** Google Ads landing — ana sayfadaki TherapySchoolTabs ile aynı etkileşim modeli. */
export const psikologRandevuTherapyTabs: TherapyTabItem[] = [
  {
    id: "birey-odakli",
    label: "Birey odaklı psikoterapi",
    paragraphs: [
      "Carl Rogers’ın geliştirdiği birey odaklı (danışan merkezli) yaklaşımda koşulsuz kabul, empatik anlayış ve tutarlılık terapötik ittifakın temelidir. Danışan, kendi deneyiminin uzmanı olarak kabul edilir.",
      "Bu çerçeve özellikle utanç, suçluluk ve “yetersizlik” temalarında güvenli bir tempo sunar; diğer teknikler bu zeminde daha etkili çalışır.",
    ],
  },
  {
    id: "bdt",
    label: "BDT ve beceri temelli çalışma",
    paragraphs: [
      "Bilişsel davranışçı terapi (BDT), düşünce–duygu–davranış bağlantısını kurarak kaçınmayı azaltmayı ve işlevselliği artırmayı hedefler. Kayıt formları, ödevler ve maruz bırakma adımları sürekliliği güçlendirir.",
      "Panik, OKB, sosyal kaygı ve depresyonda protokoller uluslararası kılavuzlarda yer alır; online format uygun koşullarda uyarlanabilir.",
    ],
  },
  {
    id: "psikodinamik",
    label: "Psikodinamik yaklaşım",
    paragraphs: [
      "Psikodinamik çerçeve, tekrarlayan örüntüleri savunmalar, ilişkisel temalar ve bağlanma deneyimi üzerinden anlamlandırır. “Neden hep aynı noktaya dönüyorum?” sorusuna derinlik katar.",
      "BDT ile birlikte kullanıldığında hem anlam üretimi hem günlük yaşamda somut adımlar mümkün olur; plan her danışana göre kişiselleştirilir.",
    ],
  },
];

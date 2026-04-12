import type { EnrichedTabItem } from "@/lib/service-enriched-blocks";

export const homeEnrichedQuote = {
  text: "Kanıta dayalı psikoterapi yaklaşımları; depresyon, anksiyete ve travma gibi yaygın ruhsal yüklerde önceden etkisini ispatlayarak literatüre geçmiş, hurafeden uzak çalışmalarla desteklenmektedir.",
  attribution: "Genel psikoterapi araştırma özeti — bilgilendirme",
};

export const homeEnrichedTabs: EnrichedTabItem[] = [
  {
    id: "bdt",
    label: "BDT ve beceri temelli çalışma",
    paragraphs: [
      "Bilişsel davranışçı terapi, düşünce–duygu–davranış bağlantısını kurarak kaçınmayı azaltmayı ve işlevselliği artırmayı hedefler. Ödevler, kayıt formları ve maruz bırakma adımları sürekliliği güçlendirir.",
      "Panik, OKB, sosyal kaygı ve depresyonda protokoller uluslararası kılavuzlarda yer alır. Online format uygun koşullarda uyarlanabilir.",
      "Terapist–danışan iş birliği ve hedef netliği sonuçlarla ilişkilidir.",
    ],
  },
  {
    id: "psikodinamik",
    label: "Psikodinamik ve birey odaklı",
    paragraphs: [
      "Psikodinamik çerçeve, tekrarlayan örüntüleri bilinçdışı savunmalar ve ilişkisel temalar üzerinden anlamlandırır. Carl Rogers’ın birey odaklı yaklaşımında koşulsuz kabul ve empatik anlayış iyileşmenin taşıyıcılarıdır.",
      "Derinlik ve süreç odaklı çalışma bazı danışanlar için uygun tempoyu sunar.",
      "BDT ile entegre kullanım, ihtiyaca göre düşünce çalışması ile anlam üretimini birleştirebilir.",
    ],
  },
  {
    id: "sistemik",
    label: "Çift, aile ve bağlam",
    paragraphs: [
      "Çift ve aile terapisinde sistemik bakış; roller, sınırlar ve iletişim döngülerini merkeze alır. Bağlanma kuramı ve duygu odaklı çift terapisi (EFT) yaygın çerçeveler arasındadır.",
      "Ergen ve sınav kaygısında okul–aile iş birliği destekleyici olabilir.",
      "Terapi planı her zaman danışanın güvenliği ve özerkliği önceliklidir.",
    ],
  },
];

export const homeEnrichedAccordions = {
  headingId: "home-teorik-accordion",
  heading: "Teorik altyapı",
  description: "Beşiktaş psikolog kliniğinde çalışma çerçevem hakkında kısa bilgilendirme.",
  items: [
    {
      title: "Kanıta dayalı terapi ne anlama gelir?",
      paragraphs: [
        "Belirli bir yöntemin belirli bir sorun kümesi için kontrollü çalışmalarda etkinliğinin test edilmesi ve kılavuzlarda yer alması sürecine işaret eder. Her danışan tektir; protokol kişiselleştirilir.",
      ],
      bullets: [
        "Hedefler birlikte yazılır ve düzenli gözden geçirilir.",
        "İlerleme ölçülebilir alt hedeflerle takip edilebilir.",
      ],
    },
    {
      title: "Online terapi ile yüz yüze terapi",
      paragraphs: [
        "Birçok protokol çevrim içi ortamda uyarlanabilir; ancak güvenli ortam, gizlilik ve stabil bağlantı şarttır. Yüz yüze seanslar klinik ritim ve bedensel ipuçları açısından farklı bir deneyim sunabilir.",
      ],
    },
    {
      title: "Sınırlar ve acil durumlar",
      paragraphs: [
        "Psikoterapi acil psikiyatrik kriz hizmetinin yerini tutmaz. Kendinize veya başkasına yönelik şiddet riski, intihar düşüncesi veya psikotik alevlenmede 112 ve acil psikiyatri önceliklidir.",
      ],
    },
  ],
};

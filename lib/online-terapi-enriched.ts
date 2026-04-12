import type { EnrichedTabItem } from "@/lib/service-enriched-blocks";

export const onlineTerapiQuote = {
  text: "Sistematik derlemeler, uygun koşullarda telemental sağlık müdahalelerinin yüz yüze tedaviye denk veya yakın etki gösterebildiği yönünde veri sunmaktadır; sonuç protokol ve uyuma bağlıdır.",
  attribution: "Telemental sağlık — özet bilgilendirme",
};

export const onlineTerapiTabs: EnrichedTabItem[] = [
  {
    id: "bdt",
    label: "BDT ve protokol uyumu",
    paragraphs: [
      "Online ortamda BDT ödevleri, düşünce kayıtları ve maruz bırakma adımları ekran üzerinden yürütülebilir. Terapist, yüz ifadesi ve ses tonundan ipuçları alır; bazı protokollerde kamera açısı netleştirilir.",
      "Panik ve OKB protokollerinde interoseptif çalışmalar için güvenli ortam planı birlikte yapılır.",
    ],
  },
  {
    id: "psikodinamik",
    label: "İlişkisel süreç",
    paragraphs: [
      "Birey odaklı ve psikodinamik çizgide terapötik ilişki ekran üzerinden de taşınır; ancak danışanın mahremiyet ve kesintisiz zaman ihtiyacı öne çıkar.",
      "Derin duygusal işleme bazı danışanlar için yüz yüze daha uygun olabilir; format birlikte değerlendirilir.",
    ],
  },
  {
    id: "sistemik",
    label: "Çift ve aile oturumları",
    paragraphs: [
      "Çift terapisinde aynı ekrandan katılım veya iki ayrı cihazdan bağlantı mümkündür. Aile oturumlarında yaş küçükse veli onayı ve güvenlik konuşulur.",
      "Bağlantı kopmaları için yedek plan (telefon, yeniden bağlanma) önceden netleştirilir.",
    ],
  },
];

export const onlineTerapiAccordions = {
  headingId: "online-teorik-accordion",
  heading: "Literatür, etik ve teknik notlar",
  items: [
    {
      title: "Gizlilik ve KVKK çerçevesi",
      paragraphs: [
        "Görüşmeler mesleki gizlilik ve etik kurallar çerçevesinde yürütülür. Güvenli platform tercihi, şifre paylaşımı ve ortam gizliliği sizin sorumluluğunuzda olan başlıklardır.",
      ],
      bullets: [
        "Mümkünse kapalı oda ve kulaklık kullanımı.",
        "Ortak ekran paylaşımında kişisel veri gösterimine dikkat.",
      ],
    },
    {
      title: "Kimler için uygun olmayabilir?",
      paragraphs: [
        "Ağır dissosiyasyon, aktif psikotik belirtiler, şiddet riski veya acil intihar düşüncelerinde yüz yüze veya psikiyatrik eşlik öncelikli olabilir. Online terapi bu durumların yerine geçmez.",
      ],
    },
    {
      title: "Randevu disiplini",
      paragraphs: [
        "Düzenli saat ve bağlantı testi seans kalitesini artırır. Gecikme ve iptal kuralları ilk görüşmede şeffaf biçimde paylaşılır.",
      ],
    },
  ],
};

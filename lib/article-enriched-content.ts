import type { ServiceEnrichedBlock } from "@/lib/service-enriched-blocks";

export type ArticleEnrichmentId = "othello" | "toksik" | "tukenmislik" | "insomnia";

export const articleEnrichedBlocks: Record<ArticleEnrichmentId, ServiceEnrichedBlock> = {
  othello: {
    quote: {
      text: "Sanrısal (delüzyonel) kıskançlık tabloları, partnerin sadakatine dair gerçek dışı inançların sürmesiyle ilişkilendirilir; ayırıcı tanı ve tedavi psikiyatrist–psikolog iş birliği gerektirir.",
      attribution: "Klinik psikopatoloji özetleri — bilgilendirme",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve inanç çalışması",
        paragraphs: [
          "Bilişsel çerçevede tehdit yorumları, zihin okuma ve kesinleştirme çarpıtmaları üzerinde çalışılabilir. Amaç inançları tartışmak değil, inançların güven ve davranış üzerindeki etkisini yönetmektir.",
          "Güvenlik riski varsa önce sınır ve acil plan önceliklidir.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Kıskançlık bazen incinme, utanç veya kontrol ihtiyacının savunması olarak okunur. Terapötik ilişkide bu duygular yargısız işlenir.",
          "Şema terapisi ve psikodinamik teknikler tekrarlayan ilişki örüntülerinde kullanılabilir.",
        ],
      },
      {
        id: "sistemik",
        label: "Çift ve sistem",
        paragraphs: [
          "Çift terapisinde güven onarımı ve iletişim kalıpları hedeflenir; ancak sanrısal inanç şiddetliyse farmakolojik değerlendirme sık gereklidir.",
          "Şiddet veya takip riskinde güvenlik planı ve yasal başvuru seçenekleri konuşulur.",
        ],
      },
    ],
    accordions: {
      heading: "Nörobiyoloji ve literatür notları",
      headingId: "othello-enriched-acc",
      items: [
        {
          title: "Tehdit algısı ve dikkat tarama",
          bullets: [
            "Belirsizlik, tehdit sistemini uyaran bir tetikleyici olabilir.",
            "Uyku ve dikkat üzerindeki etkiler sık raporlanır.",
          ],
        },
        {
          title: "Tedavi seçenekleri (genel)",
          paragraphs: [
            "Farmakoterapi ve psikoterapi birlikte planlanabilir; içerik kişiye özeldir. Bu metin öneri vermez, bilgilendirir.",
          ],
        },
      ],
    },
  },
  toksik: {
    quote: {
      text: "Duygusal istismar ve kontrol örüntüleri; bağlanma yaraları, düşük öz-değer ve travma belirtileriyle ilişkilendirilebilen yaygın başvuru nedenlerindendir.",
      attribution: "İlişki psikolojisi — özet",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve sınır",
        paragraphs: [
          "Gaslighting sonrası ‘gerçeklik testi’ ve düşünce kayıtları kişinin kendi algısına güvenmesini destekler.",
          "Sınır cümleleri ve güvenli çıkış planı pratik edilir.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Tekrarlayan toksik ilişki örüntüleri bazen erken bağlanma deneyimleriyle ilişkilendirilir; bu bağlantı suçlama değil farkındalık içindir.",
        ],
      },
      {
        id: "sistemik",
        label: "Sistemik",
        paragraphs: [
          "Aile ve sosyal ağ devreye alınarak izolasyon kırılabilir. Çift çalışması yalnızca güvenlik uygunsa düşünülür.",
        ],
      },
    ],
    accordions: {
      heading: "Araştırma ve koruyucu faktörler",
      headingId: "toksik-enriched-acc",
      items: [
        {
          title: "Sosyal destek",
          paragraphs: [
            "Güvenilir destek ağları iyileşmeyi hızlandırır; gizlilik ve güvenlik önceliklidir.",
          ],
        },
        {
          title: "Yasal ve güvenlik",
          bullets: [
            "Şiddet veya tehdit halinde 112 ve kadın sığınma hatları.",
            "Dijital takip için delil kaydı ve yetkili mercilere başvuru seçenekleri.",
          ],
        },
      ],
    },
  },
  tukenmislik: {
    quote: {
      text: "ICD-11’de burnout, yalnızca iş bağlamına özgülenmiş bir sendrom olarak tanımlanır; depresyon ve anksiyete ile örtüşebilir, ayırıcı değerlendirme gerekir.",
      attribution: "WHO ICD-11 — sınıflama özeti",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve stres yönetimi",
        paragraphs: [
          "İşlevsel olmayan inançlar (‘hiç duramam’, ‘hayır diyemem’) tükenmeyi besleyebilir. Assertiveness ve zaman yönetimi becerileri eklenir.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Kimlik ve işin özdeşmesi, mükemmeliyetçilik ve değersizlik temaları üzerinde çalışılabilir.",
        ],
      },
      {
        id: "sistemik",
        label: "Örgüt ve rol",
        paragraphs: [
          "Örgütsel adalet algısı, iş yükü ve rol belirsizliği Maslach boyutlarıyla ilişkilendirilir. Gerekirse işyeri danışmanlığı veya kariyer danışmanlığı yönlendirmesi konuşulur.",
        ],
      },
    ],
    accordions: {
      heading: "Maslach ve nöroendokrin özet",
      headingId: "burnout-enriched-acc",
      items: [
        {
          title: "Maslach üç boyutu",
          bullets: [
            "Duygusal tükenme, duyarsızlaşma, kişisel başarıda düşüş.",
            "Ölçekler araştırma ve klinik takipte kullanılır; tanı aracı değildir.",
          ],
        },
        {
          title: "HPA ekseni",
          paragraphs: [
            "Kronik stres, kortizol ritmi ve uyku üzerinde etkiler bildirilebilir; somatik şikayetlerde tıbbi değerlendirme önerilir.",
          ],
        },
      ],
    },
  },
  insomnia: {
    quote: {
      text: "Kronik insomniada BDT tabanlı uyku kısıtlaması ve uyku hijyeni bileşenleri kanıta dayalı birinci basamak psikososyal müdahaleler arasındadır.",
      attribution: "Uyku tıbbı ve BDT-U — özet",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT-U",
        paragraphs: [
          "Uyku penceresi kısıtlaması ve uyarıcı kontrolü, yatak ile uyku arasındaki koşullanmayı güçlendirmeyi hedefler.",
          "Endişe için düşünce süresi ve gevşeme becerileri eklenir.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Uyku ve duygu",
        paragraphs: [
          "Yatışta yüzeye çıkan kaygı ve bastırılmış duygular terapide işlenebilir; tempo kişiye göre ayarlanır.",
        ],
      },
      {
        id: "sistemik",
        label: "Yaşam düzeni",
        paragraphs: [
          "Vardiya çalışması, bebek bakımı veya ilişki stresi uyku mimarisini etkiler; sistemik çözümler pratik düzenlemelerle desteklenir.",
        ],
      },
    ],
    accordions: {
      heading: "Uyku evreleri ve tıbbi ayırıcı",
      headingId: "insomnia-enriched-acc",
      items: [
        {
          title: "Uyku evreleri (kısa)",
          bullets: [
            "NREM ve REM döngüleri gecede birkaç kez tekrarlanır.",
            "Alkol REM’i baskılayarak ertesi gece fragmante uykuya yol açabilir.",
          ],
        },
        {
          title: "Hipnoz ve ilaç",
          paragraphs: [
            "Uyku ilaçları bazı tablolarda gereklidir; reçete ve takip psikiyatrist işidir. Psikoterapi ilacın yerini tutmaz, tamamlayıcı olabilir.",
          ],
        },
      ],
    },
  },
};

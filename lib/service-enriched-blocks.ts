export type EnrichedTabItem = {
  id: string;
  label: string;
  paragraphs: string[];
};

export type ServiceEnrichedBlock = {
  quote: { text: string; attribution?: string };
  tabs: EnrichedTabItem[];
  accordions: {
    heading: string;
    description?: string;
    headingId: string;
    items: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  };
};

export const serviceEnrichedBlocks: Record<string, ServiceEnrichedBlock> = {
  "cift-evlilik-terapisi": {
    quote: {
      text: "Meta-analitik özetler, yapılandırılmış çift müdahalelerinin ilişki memnuniyeti ve iletişim kalitesi üzerinde orta düzeyde olumlu etki gösterebildiğini bildirmektedir; etki büyüklüğü çiftin motivasyonu ve terapötik ittifakla ilişkilidir.",
      attribution: "Kanıta dayalı çift terapisi literatürü — özet bilgilendirme",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve iletişim becerileri",
        paragraphs: [
          "Bilişsel davranışçı çerçevede çift çalışması; otomatik düşünceler, çatışma anında kullanılan iç söylem ve kaçınma döngüleri üzerinden ilerleyebilir. Amaç haklı çıkmak değil, tetikleyici–duygu–davranış zincirini yavaşlatmaktır.",
          "Davranışsal deneyler (kısa kontrol mesajları, onarım cümleleri) güvenli temasta deneme davranışları oluşturur. Literatürde iletişim becerileri eğitimi ve problem çözme adımları sık kullanılır.",
          "Çift terapisti, her iki tarafın da duyduğu tehdidi diline çevirerek savunmaların yumuşamasına yardım eder; bu süreç BDT’nin çift uyarlama protokolleriyle örtüşebilir.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik ve bağlanma",
        paragraphs: [
          "Psikodinamik perspektifte tekrarlayan çatışmalar sıklıkla bilinçdışı korunma stratejileri ve içsel çatışmalarla ilişkilendirilir. Yakınlık–mesafe dengesi, utanç ve reddedilme korkusu çift dinamiğinde merkeze alınabilir.",
          "Bağlanma kuramı (Bowlby, Ainsworth) güvenli, kaçıngan ve kaygılı düzeneklerin çatışma anlarında nasıl devreye girdiğini açıklar. EFT gibi modeller duygusal erişilebilirlik ve onarım girişimlerini öne çıkarır.",
          "Terapide ‘kim haklı?’ yerine ‘bu döngüyü birlikte nasıl yavaşlatırız?’ sorusu önceliklidir; bu yaklaşım psikodinamik ve bağlanma temelli çift çalışmasıyla uyumludur.",
        ],
      },
      {
        id: "sistemik",
        label: "Sistemik ve aile bağlamı",
        paragraphs: [
          "Sistemik bakış ilişkiyi iki kişinin toplamından fazlası olarak görür: roller, üçgenler (üçüncü kişi veya konu), tekrarlayan geri bildirim döngüleri incelenir.",
          "Ebeveynlik, ekonomik stres veya geniş aile müdahalesi çiftin ‘sorun listesi’ne dahil edilebilir. Amaç suçlu bulmak değil, sistemin sürdürdüğü işlevi anlamaktır.",
          "Gerekirde aile oturumları veya sınır konuşmaları planlanır; her vaka için hangi sistemik müdahalenin uygun olduğu birlikte değerlendirilir.",
        ],
      },
    ],
    accordions: {
      heading: "Teorik altyapı ve literatür notları",
      description: "Çift terapisinde sık atıfta bulunulan çerçevelerin kısa özeti; tanı veya tedavi vaadi içermez.",
      headingId: "cift-teorik-accordion",
      items: [
        {
          title: "Gottman ve tahrip edici iletişim örüntüleri",
          paragraphs: [
            "Gottman yaklaşımı; aşağılama, savunma, suçlama ve duvar örme gibi kalıpların ilişki memnuniyetini nasıl aşındırdığını vurgular. Erken müdahalede bu kalıpların fark edilmesi ve onarım girişimlerinin pratiği önemlidir.",
          ],
          bullets: [
            "Onarım girişimi: tartışmanın ortasında üzüntüyü veya ihtiyacı dile getirebilme.",
            "Duygu yönetimi: fizysel uyarılma arttığında mola anlaşması.",
            "Paylaşılan anlam: çatışmanın altındaki değer ve korkuları adlandırma.",
          ],
        },
        {
          title: "Nörobiyolojik düzlem (özet)",
          paragraphs: [
            "Yakın ilişkilerde tehdit algısı, amigdala–prefrontal etkileşimi ve oksitosin/vazopressin ile ilişkilendirilen sosyal bağ sistemleri üzerinden tartışılır. Bu bilgiler danışana ‘neden bu kadar yoğun hissediyorum?’ sorusuna nörobiyolojik bir çerçeve sunabilir.",
            "Terapide amaç beyin kimyasını ‘düzeltmek’ değil, tetikleyicileri tanıyıp düzenleme becerilerini güçlendirmektir.",
          ],
        },
      ],
    },
  },
  "depresyon-terapisi": {
    quote: {
      text: "Dünya Sağlık Örgütü verilerine göre depresyon, küresel ölçekte yaygınlığı yüksek ruhsal yüklerden biridir; psikoterapi ve gerektiğinde farmakoterapi birlikte değerlendirilebilir.",
      attribution: "WHO — genel epidemiyoloji bilgisi (bilgilendirme)",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve aktivasyon",
        paragraphs: [
          "Bilişsel model, depresyonda otomatik düşünceler, çarpıtmalar ve kaçınmanın birbirini beslediğini öne sürer. Davranışsal aktivasyon, küçük adımlarla enerji ve ödül döngüsünü yeniden başlatmayı hedefler.",
          "Düşünce kayıtları ve alternatif düşünce üretimi, kişinin kendine karşı daha adil bir dil geliştirmesine yardım eder.",
          "Tekrarlayan depresyon öyküsünde nüks önleme protokolleri ve mindfulness tabanlı BDT uyarlamaları literatürde yer alır.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Psikodinamik yaklaşımda depresyon bazen içsel çatışma, kayıp ve öz-şema temalarıyla ilişkilendirilir. Terapötik ilişki, bilinçdışı örüntülerin güvenli biçimde işlenmesine zemin hazırlar.",
          "Bağlanma temaları ve içsel eleştirmen sesi üzerinde çalışmak, uzun süreli örüntülerde anlam üretir.",
          "Hedef hızlı çözüm değil, duyguların anlamlandırılması ve ilişkisel örüntülerin fark edilmesidir.",
        ],
      },
      {
        id: "sistemik",
        label: "İlişkisel bağlam",
        paragraphs: [
          "Depresyon yalnızca ‘bireysel hücre’ değildir; ilişkisel kayıplar, rol çatışmaları ve sosyal destek eksikliği semptomları şekillendirebilir.",
          "Çift veya aile görüşmeleri, gerektiğinde destekleyici iletişim kalıpları için planlanabilir.",
          "Sistemik çerçeve, danışanın çevresindeki talep–destek dengesini de görünür kılar.",
        ],
      },
    ],
    accordions: {
      heading: "Nörobiyoloji ve kanıta dayalı notlar",
      headingId: "dep-teorik-accordion",
      items: [
        {
          title: "Monoamin ve sinir ağları (bilgilendirici)",
          bullets: [
            "Serotonin, noradrenalin ve dopamin sistemleri duygudurum düzenlemesiyle ilişkilendirilir; bu özet tanı açıklaması değildir.",
            "Prefrontal–limbik bağlantılarda işlev farklılıkları görüntüleme çalışmalarında tartışılır.",
            "Tedavi kararı psikiyatrist ve klinik psikolog değerlendirmesiyle bütüncül verilir.",
          ],
        },
        {
          title: "Etkinlik araştırmaları",
          paragraphs: [
            "Orta şiddette depresyonda BDT ve ilişkisel terapilerin etkili olduğuna dair randomize çalışmalar bulunmaktadır. Şiddet, intihar riski veya psikotik belirtilerde tedavi planı farklılaşır.",
          ],
        },
      ],
    },
  },
  "ergen-sinav-kaygisi": {
    quote: {
      text: "Sınav kaygısı; bilişsel, bedensel ve davranışsal bileşenleri olan yaygın bir strestir; kanıta dayalı müdahalelerde BDT, gevşeme ve maruz bırakma teknikleri sık kullanılır.",
      attribution: "Gelişim ve okul psikolojisi literatürü — özet",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve sınav kaygısı",
        paragraphs: [
          "Kaygı döngüsü: tetikleyici durum → felaketleştirici düşünce → bedensel belirti → kaçınma. BDT bu döngüyü adım adım çözümler.",
          "Maruz bırakma hiyerarşisi ile sınav benzeri durumlarda tolerans artırılabilir; başlangıçta düşük yoğunluklu senaryolar seçilir.",
          "Performans hedefleri ve çalışma planı, kaygıyı ‘kontrol edilebilir’ alanlara taşır.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Gelişim ve kimlik",
        paragraphs: [
          "Ergenlikte prefrontal olgunlaşma devam eder; duygusal düzenleme becerileri zamanla güçlenir. Kimlik ve akademik başarı arasındaki özdeşleşme sınav kaygısını artırabilir.",
          "Aile içi beklenti ve utanç temaları terapide yargısız ele alınır.",
          "Ergenin özerkliği korunarak veli görüşmeleri gerektiğinde sınırlı ve hedef odaklı planlanır.",
        ],
      },
      {
        id: "sistemik",
        label: "Okul ve aile sistemi",
        paragraphs: [
          "Okul rehberliği ve öğretmen iş birliği, gerektiğinde sınav düzenlemeleri veya destekleyici sınıf ortamı için iletişim kanalı açabilir.",
          "Ailedeki rekabet veya karşılaştırma dilinin kaygıyı beslediği durumlar sistemik olarak ele alınır.",
          "Hedef: ergenin hem başarı hem duygusal güvenliği için sürdürülebilir bir ritim oluşturmaktır.",
        ],
      },
    ],
    accordions: {
      heading: "Literatür ve uygulama notları",
      headingId: "ergen-teorik-accordion",
      items: [
        {
          title: "Çalışma belleği ve kaygı",
          paragraphs: [
            "Yüksek bilişsel kaynak gerektiren görevlerde kaygı, çalışma belleğini daraltabilir. Bu nedenle sınav öncesi hem içerik hem kaygı yönetimi birlikte planlanır.",
          ],
        },
        {
          title: "Koruyucu faktörler",
          bullets: [
            "Uyku düzeni ve düzenli fiziksel aktivite.",
            "Sosyal destek ve güvenli yetişkin ilişkisi.",
            "Gerçekçi hedef kırılımları ve öz-şefkat cümleleri.",
          ],
        },
      ],
    },
  },
  "ofke-kontrolu": {
    quote: {
      text: "Öfke yönetimi programlarında BDT tabanlı müdahalelerin dürtü kontrolü ve ilişkisel sonuçlar üzerinde olumlu etkiler bildirildiği çalışmalar bulunmaktadır.",
      attribution: "Özet — meta-analiz ve kılavuzlara atıf (bilgilendirme)",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve öfke",
        paragraphs: [
          "Tetikleyici–düşünce–duygu–davranış zinciri üzerinde çalışmak, öfkenin altındaki utanç veya korkuyu görünür kılar.",
          "Zaman aşımı, nefes ritmi ve alternatif yanıt planları pratik edilir.",
          "İletişimde ‘ben dili’ ve çözüm odaklı cümleler ilişkisel öfkeyi yumuşatır.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Öfke bazen savunma olarak işler; altta yatan ihtiyaç veya incinme duygusu terapide işlenir.",
          "Tekrarlayan patlamaların geçmiş deneyimlerle bağlantısı güvenli tempoda araştırılır.",
        ],
      },
      {
        id: "sistemik",
        label: "İlişki ve iş yaşamı",
        paragraphs: [
          "Öfke örüntüleri çift ve iş bağlamında farklı tetikleyicilerle ortaya çıkabilir. Sistemik görüş, rol ve beklenti çatışmalarını da hesaba katar.",
          "Güvenlik riski varsa önce güvenlik planı ve gerekirse yasal destek önceliklidir.",
        ],
      },
    ],
    accordions: {
      heading: "Nörobiyoloji ve beceri eğitimi",
      headingId: "ofke-teorik-accordion",
      items: [
        {
          title: "Prefrontal düzenleme",
          paragraphs: [
            "Öfke anında prefrontal korteks–amigdala dengesi literatürde sık tartışılır. Beceri eğitimi ile ‘dur–düşün–seç’ döngüsü güçlendirilir.",
          ],
        },
        {
          title: "Grup ve bireysel format",
          bullets: [
            "Bireysel terapide kişisel tetikleyiciler derinleşir.",
            "Grup programları sosyal öğrenme sağlayabilir; uygunluk değerlendirmesi gerekir.",
          ],
        },
      ],
    },
  },
  "panik-atak-anksiyete": {
    quote: {
      text: "Panik bozukluk ve agorafobi için BDT ve maruz bırakma temelli protokoller kanıta dayalı kılavuzlarda birinci basamak psikososyal tedavi olarak önerilir.",
      attribution: "NICE / APA kılavuzları — genel çerçeve (bilgilendirme)",
    },
    tabs: [
      {
        id: "bdt",
        label: "BDT ve maruz bırakma",
        paragraphs: [
          "Panik döngüsü: bedensel uyaran → felaket yorumu → daha fazla alarm. BDT bu yorumu esnetmeyi ve kaçınmayı azaltmayı hedefler.",
          "İnteroseptif maruz bırakma ve dış maruz bırakma hiyerarşileri kişiye özel planlanır.",
          "Sosyal fobide bilişsel çarpıtmalar ve rol oyunları sık kullanılır.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Kaygı bazen bilinçdışı çatışma veya kontrol edilemeyen duyguların sinyali olarak okunabilir. Terapötik ilişkide güven, maruz bırakmanın sürdürülebilirliğini artırır.",
        ],
      },
      {
        id: "sistemik",
        label: "Bağlam ve aile",
        paragraphs: [
          "Aile üyelerinin kaygıyı besleyen ‘aşırı koruyuculuk’ veya ‘güvensizlik’ döngüleri sistemik olarak ele alınabilir.",
          "İş ve trafik gibi çevresel stresler tetikleyici haritasına eklenir.",
        ],
      },
    ],
    accordions: {
      heading: "Fizyoloji ve güvenlik",
      headingId: "panik-teorik-accordion",
      items: [
        {
          title: "Otonom sinir sistemi",
          bullets: [
            "Sempatik aktivasyon çarpıntı ve nefes darlığı yaratabilir; tıbbi ekarte gerektiğinde acil değerlendirme önceliklidir.",
            "Parasempatik düzenleme (nefes, gevşeme) becerilerle desteklenir.",
          ],
        },
        {
          title: "İlaç ve terapi birlikteliği",
          paragraphs: [
            "Orta–şiddetli tablolarda psikiyatrist eşliğinde ilaç eklenebilir. Karar çok disiplinli değerlendirme ile verilir; internet önerileri yerine uzman görüşü esastır.",
          ],
        },
      ],
    },
  },
  "travma-terapisi": {
    quote: {
      text: "Travma sonrası stres belirtilerinde travma odaklı BDT, EMDR ve gözden geçirilmiş maruz bırakma gibi yöntemler kanıta dayalı protokoller arasında sayılır.",
      attribution: "Uluslararası kılavuz özetleri — bilgilendirme",
    },
    tabs: [
      {
        id: "bdt",
        label: "Travma odaklı BDT",
        paragraphs: [
          "Travma anılarının ‘şimdi tehdit’ gibi işlenmesi hedeflenir; kaçınmanın işlevi anlaşılır, güvenli tempo ile maruz bırakma planlanır.",
          "Bilişsel yeniden yapılandırma ve beden duyumu çalışmaları bir arada kullanılabilir.",
        ],
      },
      {
        id: "psikodinamik",
        label: "Psikodinamik",
        paragraphs: [
          "Travma sonrası savunmalar, ilişki örüntüleri ve anlam arayışı üzerinde çalışılabilir. Hazır bulunuşluk olmadan derinlemesine işleme yapılmaz.",
        ],
      },
      {
        id: "sistemik",
        label: "EMDR ve bütüncül bakış",
        paragraphs: [
          "EMDR, çift taraflı uyarım ile bellek işleme çerçevesinde uygulanır; eğitimli uygulayıcı ile planlanmalıdır.",
          "Aile ve destek sistemleri stabilizasyon aşamasında devreye alınabilir.",
        ],
      },
    ],
    accordions: {
      heading: "TSSB ve nörobiyoloji (özet)",
      headingId: "tssb-teorik-accordion",
      items: [
        {
          title: "Tehdit algısı ve bellek",
          paragraphs: [
            "Travmatik anıların bağlamdan kopuk işlenmesi istilacı belirtileri besleyebilir. Terapide güvenlik ve kaynaklandırma önce gelir.",
          ],
          bullets: [
            "İstilacı belirtiler, kaçınma, biliş/duygu değişiklikleri, aşırı uyarılma başlıkları.",
            "Komorbid depresyon ve madde kullanımı değerlendirilir.",
          ],
        },
        {
          title: "Regresyon talepleri",
          paragraphs: [
            "Regresyon terapisi talepleri etik ve hazır bulunuşluk çerçevesinde ayrı ayrı ele alınır; her yöntem her danışan için uygun olmayabilir.",
          ],
        },
      ],
    },
  },
};

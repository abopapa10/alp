export type ServicePageData = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  topic: string;
};

export const servicePages: Record<string, ServicePageData> = {
  "cift-evlilik-terapisi": {
    metaTitle: "Çift Terapisti ve Evlilik Terapisi | Beşiktaş",
    metaDescription:
      "İlişki terapisi, çift terapisi ve evlilik danışmanlığı için Beşiktaş’ta randevu. İletişimi güçlendirmeye odaklı, kanıta dayalı oturumlar.",
    keywords:
      "çift terapisti, evlilik terapisti, ilişki terapisi, ilişki terapisti, evlilik danışmanlığı, evlilik terapisi, çift terapisi, aile terapisi, aile terapisti, aile danışmanlığı",
    h1: "Çift ve Evlilik Terapisi",
    intro:
      "Çift terapisti ve evlilik terapisti rolüyle, ilişki terapisinde duyguları güvenli bir çerçevede konuşabilmenizi hedefliyorum. Evlilik danışmanlığı sürecinde her iki tarafın da duyduğu endişeleri anlamak ve ortak çözüm alanları üretmek önceliklidir.",
    topic: "Çift",
    sections: [
      {
        heading: "İlişki terapisinde yaklaşım",
        body: "Bilişsel davranışçı ve psikodinamik perspektifleri bir arada kullanarak çatışma döngülerini tanımlarız. Çift terapisinde suçlama yerine ihtiyaçların netleşmesi için yapılandırılmış görevler önerebilirim.",
      },
      {
        heading: "Kimler için uygundur?",
        body: "İletişim kopukluğu, güven sarsıntısı, yoğun tartışmalar veya birlikte alınan kararlar öncesi destek gerektiren çiftler ve evlilik terapisi arayan eşler için uygundur. Aile danışmanlığı ihtiyacı olan vakalarda da sınır ve roller üzerine çalışılabilir.",
      },
      {
        heading: "Randevu ve süreklilik",
        body: "Evlilik terapisi genellikle düzenli aralıklarla ilerler; ilk görüşmede hedeflerinizi dinleyip süre planını birlikte oluştururuz. Terapist tavsiye ve psikolog randevu için iletişim kanallarımız üzerinden yazabilirsiniz.",
      },
    ],
  },
  "panik-atak-anksiyete": {
    metaTitle: "Panik Atak ve Anksiyete Terapisi | İstanbul Psikolog",
    metaDescription:
      "Panik atak psikolog desteği ve anksiyete terapi süreci. BDT ile tetikleyicileri tanıma, bedensel duyumları yönetme ve kaçınmayı azaltma.",
    keywords: "panik atak psikolog, panik atak terapi, anksiyete psikolog, anksiyete terapi",
    h1: "Panik Atak ve Anksiyete Bozuklukları",
    intro:
      "Panik atak terapi sürecinde belirtilerin biyolojik yanıtını anlamak ve güvenli maruz bırakma adımlarıyla kaçınmayı azaltmak temel hedeftir. Anksiyete psikolog desteği ile düşünce-duygu-davranış döngüsünü birlikte çalışırız.",
    topic: "Panik",
    sections: [
      {
        heading: "Anksiyete terapi planı",
        body: "Bilimsel olarak desteklenen BDT teknikleri ile nefes ve beden farkındalığı, bilişsel çürütme ve adım adım maruz bırakma planı kurgulanabilir. Terapi randevusu ile kişisel ihtiyaçlarınıza uygun tempo belirlenir.",
      },
      {
        heading: "Beklentiler",
        body: "Panik atak psikolog eşliğinde ilerleme zaman içinde gelişir; bazı haftalar iç gözlem günlüğü, bazı haftalar beceri tekrarı ile desteklenir. Amacım günlük yaşamınızda kontrol hissini güçlendirmektir.",
      },
    ],
  },
  "travma-terapisi": {
    metaTitle: "Travma Terapisi ve Travma Psikolog | Beşiktaş",
    metaDescription:
      "Travma terapisi ve travma psikolog desteği. Travma sonrası belirtileri anlamlandırma, regresyon terapisi ihtiyacı olan vakalarda güvenli ve yapılandırılmış çerçeve.",
    keywords: "travma terapisi, travma psikolog, regresyon terapisi psikolog, regresyon terapisi",
    h1: "Travma Terapisi",
    intro:
      "Travma psikolog olarak, yaşanan olayların günlük yaşamınızdaki yankılarını yavaş ve güvenli adımlarla işleriz. Travma terapisinde stabilizasyon ve kaynaklandırma, ardından işleme aşamaları ile ilerlemek sık kullanılan bir yoldur.",
    topic: "Travma",
    sections: [
      {
        heading: "Regresyon terapisi ve dikkat edilmesi gerekenler",
        body: "Regresyon terapisi psikolog eşliğinde talep edildiğinde, her danışanın sınırları ve hazır bulunuşluğu ayrı değerlendirilir. Travma alanında etik çerçeve ve güvenli ilişki terapinin temelidir.",
      },
      {
        heading: "İstanbul’da yüz yüze ve online",
        body: "Beşiktaş klinikte yüz yüze seanslar mümkünken, şehir dışından travma terapisi için online psikoterapi seçenekleri değerlendirilebilir. Ana sayfamızdan diğer hizmetlere iç link ile dönebilirsiniz.",
      },
    ],
  },
  "ergen-sinav-kaygisi": {
    metaTitle: "Ergen Psikoloğu ve Sınav Kaygısı | İstanbul",
    metaDescription:
      "Ergen psikoloğu İstanbul randevusu, ergen psikolog tavsiye ve sınav kaygısı psikolog desteği. Sınav stresini yönetme ve özgüven odaklı çalışma.",
    keywords:
      "ergen psikoloğu, ergen psikoloğu İstanbul, ergen psikolog tavsiye, sınav kaygısı psikolog",
    h1: "Ergenlik ve Sınav Kaygısı Desteği",
    intro:
      "Ergenlik döneminde kimlik, akademik baskı ve aile içi dinamikler birlikte yürüyebilir. Ergen psikoloğu olarak sınav kaygısı psikolog ihtiyaçlarında beceri eğitimi ve düşünce çalışmaları ile destek veriyorum.",
    topic: "Sınav",
    sections: [
      {
        heading: "Sınav kaygısı için beceriler",
        body: "Zaman planı, dikkat dağıtan düşünce kalıpları ve bedensel gerginlik için gevşeme egzersizleri sınav kaygısı terapisinde sık kullanılır. Veliler bilgilendirme görüşmesi ile sürece dahil edilebilir (gerekliyse).",
      },
      {
        heading: "Ergene uygun güvenli alan",
        body: "Gizlilik ve sınırlar ergen psikoloğu çalışmasının merkezindedir. Seans sıklığı ve hedefler ergen ile birlikte netleştirilir.",
      },
    ],
  },
  "ofke-kontrolu": {
    metaTitle: "Öfke Kontrolü Terapisi ve Psikolog | İstanbul",
    metaDescription:
      "Öfke kontrolü terapisi, öfke kontrolü terapisti ve psikolog desteği ile tetikleyicileri tanıma ve iletişim becerilerini güçlendirme.",
    keywords: "öfke kontrolü terapisi, öfke kontrolü terapisti, öfke kontrolü psikolog",
    h1: "Öfke Kontrolü Terapisi",
    intro:
      "Öfke kontrolü psikolog eşliğinde öfke dalgalarını bastırmak değil, erken uyarı sinyallerini tanıyıp seçimli yanıtlar geliştirmek hedeflenir. Öfke kontrolü terapisti ile duygusal düzenleme becerileri pratik egzersizlerle desteklenir.",
    topic: "Öfke",
    sections: [
      {
        heading: "Terapi sürecinde neler işlenir?",
        body: "Tetikleyici-sonuç döngüleri, bedensel alarm tepkileri ve iç söylem kalıpları birlikte çalışılır. İhtiyaç halinde BDT ve çözüm odaklı araçlar bir arada kullanılabilir.",
      },
      {
        heading: "İlişki ve iş yaşamı",
        body: "Öfke kontrolü terapisi yalnızca bireysel değil, çift ve iş ortamındaki iletişimi de iyileştirebilir. Ana sayfadaki iletişim bölümünden randevu talep edebilirsiniz.",
      },
    ],
  },
  "depresyon-terapisi": {
    metaTitle: "Depresyon Terapisi ve Depresyon Psikolog | Beşiktaş",
    metaDescription:
      "Depresyon terapisi ile enerji, ilgi ve özgüven kaybını anlamlandırma; depresyon psikolog eşliğinde adım adım hedefler.",
    keywords: "depresyon terapisi, depresyon psikolog",
    h1: "Depresyon Terapisi",
    intro:
      "Depresyon psikolog desteği ile duygusal yükü yargılamadan ele alır, aktivasyon, bilişsel ve ilişkisel düzenlemelerle iyileşme yollarını birlikte ararız. Depresyon terapisinde küçük ve sürdürülebilir hedefler sık kullanılır.",
    topic: "Depresyon",
    sections: [
      {
        heading: "BDT ve psikodinamik entegrasyon",
        body: "Düşünce çarpıtmalarını fark etme, davranış aktivasyonu ve bağlanma temalarını anlama depresyon terapisinde sık işlenen başlıklardır. İlk görüşmede şikayetlerinizi ve beklentilerinizi dinlerim.",
      },
      {
        heading: "İstanbul psikolog klinikleri arayışında",
        body: "Avrupa Yakası ve Beşiktaş psikolojik danışmanlık merkezi arayan danışanlar için hem yüz yüze hem online seçenek sunuyorum. Google Ads ve organik aramalarda şeffaf bilgilendirme önceliğimdir.",
      },
    ],
  },
};

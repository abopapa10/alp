export type ServiceIcon = "heart" | "activity" | "shield" | "sun" | "flame" | "brain";

export type ServicePageData = {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  intro: string;
  /** Bilimsel / kuramsal derinlik paragrafı (E-E-A-T, dwell time). */
  scientificRationale: string;
  icon: ServiceIcon;
  /** Akordeon: yöntem ve kuramsal çerçevelere genel atıflar. */
  theoreticalFoundations: string[];
  sections: { heading: string; body: string }[];
  topic: string;
};

export const servicePages: Record<string, ServicePageData> = {
  "cift-evlilik-terapisi": {
    metaTitle: "Çift Terapisi - Beşiktaş",
    metaDescription:
      "İlişki terapisi, çift terapisi ve evlilik danışmanlığı için Beşiktaş’ta randevu. İletişimi güçlendirmeye odaklı, kanıta dayalı oturumlar.",
    keywords:
      "çift terapisti, evlilik terapisti, ilişki terapisi, ilişki terapisti, evlilik danışmanlığı, evlilik terapisi, çift terapisi, aile terapisi, aile terapisti, aile danışmanlığı",
    h1: "Çift ve Evlilik Terapisi",
    intro:
      "Çift terapisti ve evlilik terapisti rolüyle, ilişki terapisinde duyguları güvenli bir çerçevede konuşabilmenizi hedefliyorum. Evlilik danışmanlığı sürecinde her iki tarafın da duyduğu endişeleri anlamak ve ortak çözüm alanları üretmek önceliklidir.",
    scientificRationale:
      "İlişkisel dinamikler, nörobiyolojik bir ihtiyaç olan 'güvenli bağlanma' üzerine kuruludur. Terapide, partnerlerin birbirine karşı geliştirdiği savunma mekanizmalarını çözümleyerek, beynin ayna nöron sistemi üzerinden empatiyi yeniden inşa ediyoruz. Duygu Odaklı Terapi (EFT) prensipleriyle, çatışma döngülerini 'güvenli bir liman' etkileşimine dönüştürmeyi hedefliyoruz.",
    icon: "heart",
    theoreticalFoundations: [
      "Duygu Odaklı Çift Terapisi (EFT): çatışma döngülerini duygusal bağ ve güvenli bağlanma üzerinden yeniden çerçeveleme.",
      "Bağlanma kuramı (Bowlby, Ainsworth): yakın ilişkilerde güven, kaçınma ve kaygı düzeneklerinin anlaşılması.",
      "Çift ve aile sistemleri literatürü: iletişim kalıpları, onarım girişimleri ve etkileşimsel tekrarlayan döngüler.",
    ],
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
        heading: "Çatışma döngüsünü yavaşlatmak",
        body: "Çoğu çiftte tartışma aynı tema etrafında hızlanır: yakınlık talebi bir tarafta eleştiri, diğer tarafta çekilme olarak duyulur. Terapide bu döngü yavaşlatılır; her iki tarafın da ‘koruyucu stratejileri’ (saldırganlık, sessizlik, mantıkla bastırma) anlamlandırılır. Amaç haklı çıkmak değil, güvenli temas denemeleri üretmektir.",
      },
      {
        heading: "Güven ihlali sonrası süreç",
        body: "Aldatma, yalan veya ciddi sınır ihlali sonrası çiftlerde onarım aşamaları kişiye özeldir. Erken aşamada güvenlik ve şeffaflık ihtiyaçları konuşulur; acele affetme veya sürekli suçlayıcı döngüden kaçınmak için yapılandırılmış görevler kullanılabilir. İstanbul psikoloji seansı veya online terapi ile düzenli ritim, iyileşme olasılığını artırır.",
      },
      {
        heading: "Randevu ve süreklilik",
        body: "Evlilik terapisi genellikle düzenli aralıklarla ilerler; ilk görüşmede hedeflerinizi dinleyip süre planını birlikte oluştururuz. Terapist tavsiye ve psikolog randevu için iletişim kanallarımız üzerinden yazabilirsiniz.",
      },
    ],
  },
  "panik-atak-anksiyete": {
    metaTitle: "Panik Atak Terapisi - Beşiktaş",
    metaDescription:
      "Panik atak anında ne yapılmalı, kalp krizi farkı, anksiyete bozukluğu nasıl geçer? Sosyal fobi ve agorafobi hakkında bilgi; Beşiktaş panik atak psikolog ve BDT desteği.",
    keywords:
      "panik atak anında ne yapılmalı, panik atak nasıl sakinleşilir, panik atak ile kalp krizi farkı, anksiyete bozukluğu nasıl geçer, anksiyeteden tamamen kurtuldum, sosyal fobi nasıl yenilir, sosyal anksiyete, agorafobi nedir, alan korkusu, panik atak psikolog, anksiyete terapi, anksiyete psikolog",
    h1: "Panik Atak ve Anksiyete Bozuklukları",
    intro:
      "Panik atak ve anksiyete bozukluklarında belirtilerin biyolojik yanıtını anlamak, güvenli maruz bırakma ile kaçınmayı azaltmak ve kaygı döngüsünü kırmak temel hedeftir. İnternette sık aranan “anksiyeteden tamamen kurtuldum” gibi ifadeler gerçekçi iyileşme yolunu basitleştirebilir; oysa çoğu danışanda amaç belirtileri yönetilebilir hale getirmek, tetikleyicilerle başa çıkmak ve yaşam kalitesini artırmaktır. Anksiyete psikolog eşliğinde düşünce–duygu–davranış örüntülerini birlikte çalışır; gerekirse psikiyatrik değerlendirme yönlendirmesi de konuşulur.",
    scientificRationale:
      "Anksiyete, limbik sistemin (amigdala) hayatta kalma mekanizmasını 'hatalı alarm' moduna almasıdır. Bilişsel Davranışçı Terapi (BDT) teknikleriyle, bu otomatik düşünce kalıplarını nötralize ederek sinir sisteminin regülasyon kapasitesini artırıyoruz. Süreç, bedensel duyumların (çarpıntı, nefes darlığı) beynin prefrontal korteksi tarafından yeniden anlamlandırılmasını kapsar.",
    icon: "activity",
    theoreticalFoundations: [
      "Bilişsel Davranışçı Terapi (BDT) ve anksiyete modelleri: otomatik düşünceler, maruz bırakma ve kaçınmanın işlevsel analizi.",
      "Beden odaklı protokoller: interoseptif duyarlılık ve güvenli maruz bırakma adımları (uygulamada kişiye özel tempo).",
      "Nörobilimsel çerçeve: alarm sisteminin aşırı uyarılması ve düzenlemenin beceriyle güçlendirilmesi.",
    ],
    topic: "Panik",
    sections: [
      {
        heading: "Panik atak anında ne yapılmalı, nasıl sakinleşilir?",
        body: "Panik atak anında önce güvenliğinizi sağlayın (oturun veya güvenli bir yere geçin). Nefesi yavaşlatmak için burnundan 4 sayıda alıp ağızdan 6 sayıda verme gibi ritimli nefes egzersizleri kullanılabilir; aşırı hiperventilasyondan kaçının. ‘Bu bir panik atağın parçası, geçici bir alarm tepkisi’ diyerek düşünceyi yumuşatmaya çalışın; bedendeki çarpıntı ve sıcak basması genellikle dakikalar içinde doruktan iner. Tekrarlayan ataklarda kalıcı çözüm için panik atak psikolog desteği ile BDT ve interoseptif maruz bırakma gibi yapılandırılmış protokoller planlanır.",
      },
      {
        heading: "Panik atak ile kalp krizi farkı nasıl anlaşılır?",
        body: "Kesin ayırım internet metniyle yapılamaz; şüphede özellikle göğüs ağrısı sol kola yayılıyorsa, nefes darlığına ek olarak yoğun terleme ve bayılma hissi varsa veya risk faktörleriniz yüksekse 112’yi aramak gerekir. Panik atağa sık eşlik eden: ani yoğun korku, baş dönmesi, uyuşma, ‘kontrolü kaybedeceğim’ düşüncesi ve atakların dakikalar içinde zirve yapıp azalmasıdır. Kalp kaynaklı ağrıda risk daha heterojen olabilir; yine de ‘eminim’ demek yerine gerektiğinde acil servis değerlendirmesi önceliklidir. Tekrarlayan panik için düzenli psikolog randevusu ile tetikleyiciler ve kaçınma örüntüleri çalışılır.",
      },
      {
        heading: "Anksiyete bozukluğu nasıl geçer?",
        body: "Anksiyete bozukluğu ‘bir gecede’ geçmez; kanıta dayalı psikoterapide BDT ile otomatik düşünceler, maruz bırakma hiyerarşisi, problem çözme ve gevşeme becerileri bir arada işlenir. Bazen ilaç tedavisi eklenir (psikiyatrist kararı). Arama motorlarında ‘anksiyeteden tamamen kurtuldum’ araması yapan birçok kişi aslında uzun süreli çaba ve profesyonel destekle belirtilerin belirgin şekilde hafiflediği bir süreci kasteder; sizin hedefinizi birlikte netleştirmek için Beşiktaş’taki klinikte veya online terapi ile görüşebilirsiniz.",
      },
      {
        heading: "Sosyal fobi (sosyal anksiyete) nasıl yenilir?",
        body: "Sosyal fobide temel tema başkalarının olumsuz değerlendirmesine dair aşırı korku ve kaçınmadır. BDT’de bilişsel çarpıtmalar (zihin okuma, felaketleştirme) çalışılır; kademeli maruz bırakma ile konuşma, toplantı veya yemek gibi durumlarda özgüven artırılır. Rol oyunları ve sosyal beceri egzersizleri sık kullanılır. Sosyal anksiyete yoğunsa ve işlevsellik düşüyorsa psikolog desteği ile sistematik bir plan oluşturmak en sağlıklı adımdır.",
      },
      {
        heading: "Agorafobi (alan korkusu) nedir?",
        body: "Agorafobi; çıkış yapmanın zor olduğu durumlarda veya yardım alınamayacağı sanılan ortamlarda yoğun korku ve kaçınma ile kendini gösterir; sıklıkla toplu taşıma, kalabalık, köprü veya uzun süre dışarıda kalmak tetikleyici olabilir. Panik bozuklukla birlikte görülebilir. Tedavide kaçınma haritası çıkarılır, güvenli adımlarla maruz bırakma ve panik yönetimi becerileri birleştirilir. Agorafobi belirtileri günlük yaşamı kısıtlıyorsa ertelemeden psikolog ile çalışmak önemlidir.",
      },
      {
        heading: "BDT ile anksiyete terapi planı",
        body: "Bilimsel olarak desteklenen BDT teknikleri ile nefes ve beden farkındalığı, bilişsel çürütme ve adım adım maruz bırakma planı kişiye özel kurgulanır. Terapi randevusu ile tempo ve hedefler birlikte belirlenir.",
      },
      {
        heading: "Psikolog desteği ve beklentiler",
        body: "Panik atak psikolog eşliğinde ilerleme haftalar içinde adım adım gelişir; iç gözlem günlüğü ve beceri tekrarı sık kullanılır. Amacım günlük yaşamınızda kontrol hissini güçlendirmek ve kaygıya karşı sürdürülebilir araçlar kazandırmaktır. İlk adım için iletişim bölümünden veya WhatsApp üzerinden randevu talep edebilirsiniz.",
      },
    ],
  },
  "travma-terapisi": {
    metaTitle: "TSSB Nedir? ve Travma Terapisi",
    metaDescription:
      "Travma sonrası stres bozukluğu (TSSB) nedir, belirtileri nelerdir? Travma terapisi, EMDR ve BDT ile Beşiktaş’ta yüz yüze ve online travma psikolog desteği.",
    keywords:
      "travma terapisi, travma psikolog, TSSB, travma sonrası stres bozukluğu, PTSD, EMDR terapisi, travma odaklı BDT, regresyon terapisi psikolog",
    h1: "Travma Sonrası Stres Bozukluğu (TSSB) Nedir? Belirtileri ve Tedavi Yöntemleri",
    intro:
      "Travma yalnızca haber başlıklarındaki büyük olaylarla sınırlı değildir: kişinin güvenliğini, bütünlüğünü veya bağlarını tehdit eden, sonrasında iz bırakan her deneyim travmatik olabilir. Tekrarlayan mikro travmalar, çocukluk çağı yaşantıları veya ani kayıplar da aynı çerçevede ele alınır. Travma psikolog eşliğinde bu yankıları yavaş, güvenli ve yapılandırılmış adımlarla işlemek mümkündür.",
    scientificRationale:
      "Travma sonrası stres bozukluğu (TSSB), tehdit algısının uzun süre devam etmesiyle ilişkili belirtiler kümesi olarak tanımlanır; istilacı belirtiler, kaçınma, duygu ve biliş değişiklikleri ile aşırı uyarılma başlıkları altında gruplanır. Travmatik anıların bellek ve duygu düzenleme sistemleriyle ilişkisi nörobilim ve psikoterapi literatüründe genişçe incelenir. Terapide amaç, anıyı tehdit sinyalinden arındırarak bugünkü yaşamınızda daha esnek ve güvenli bir düzen kurmanıza eşlik etmektir.",
    icon: "shield",
    theoreticalFoundations: [
      "Travma sonrası işleme modelleri: stabilizasyon, kaynaklandırma ve adım adım işleme (PE, NET, TF-CBT gibi kanıta dayalı protokoller danışana göre).",
      "EMDR: çift taraflı duyusal uyarım ile travmatik bellek işleme çerçevesi (eğitimli uygulayıcı ile).",
      "Travma odaklı BDT (TF-CBT) ve bilişsel yeniden yapılandırma; regresyon taleplerinde etik değerlendirme ve hazır bulunuşluk.",
    ],
    topic: "Travma",
    sections: [
      {
        heading: "Yaygın travma türleri",
        body: "Doğal afetler, ciddi kazalar, ani veya uzun süreli kayıplar, sağlık krizleri, şiddet veya ihmal, çocukluk çağı travmaları ve tekrarlayan ilişkisel yaralanmalar travma spektrumunun parçası olabilir. Her deneyimin psikolojik etkisi kişisel bağlam, destek kaynakları ve önceki yaşantılarla şekillenir; karşılaştırma yerine kendi hikâyenizi onurlandırmak iyileşmenin parçasıdır.",
      },
      {
        heading: "Tedavi yaklaşımları: EMDR ve Bilişsel Davranışçı Terapi (BDT)",
        body: "Travma alanında sık başvurulan yöntemler arasında travma odaklı BDT (örneğin maruz bırakma ve bilişsel işleme bileşenleri) ve EMDR (Eye Movement Desensitization and Reprocessing) yer alır. Hangi protokolün, hangi tempoda ve hangi aşamada kullanılacağı; güvenlik, hazır bulunuşluk ve terapötik ilişki temelinde birlikte planlanır. Regresyon terapisi talep edildiğinde sınırlar ve etik çerçeve ayrıca değerlendirilir.",
      },
      {
        heading: "Regresyon terapisi ve dikkat edilmesi gerekenler",
        body: "Regresyon terapisi psikolog eşliğinde talep edildiğinde, her danışanın sınırları ve hazır bulunuşluğu ayrı değerlendirilir. Travma alanında güvenli ilişki ve şeffaf bilgilendirme terapinin temelidir.",
      },
      {
        heading: "İstanbul’da yüz yüze ve online",
        body: "Beşiktaş klinikte yüz yüze seanslar mümkünken, şehir dışından travma terapisi için online psikoterapi seçenekleri değerlendirilebilir. Ana sayfamızdan diğer hizmetlere iç link ile dönebilirsiniz.",
      },
    ],
  },
  "ergen-sinav-kaygisi": {
    metaTitle: "Sınav Kaygısı Ergen Terapisi",
    metaDescription:
      "Ergen psikoloğu İstanbul randevusu, ergen psikolog tavsiye ve sınav kaygısı psikolog desteği. Sınav stresini yönetme ve özgüven odaklı çalışma.",
    keywords:
      "ergen psikoloğu, ergen psikoloğu İstanbul, ergen psikolog tavsiye, sınav kaygısı psikolog",
    h1: "Ergenlik ve Sınav Kaygısı Desteği",
    intro:
      "Ergenlik döneminde kimlik, akademik baskı ve aile içi dinamikler birlikte yürüyebilir. Ergen psikoloğu olarak sınav kaygısı psikolog ihtiyaçlarında beceri eğitimi ve düşünce çalışmaları ile destek veriyorum.",
    scientificRationale:
      "Ergenlik dönemi, prefrontal korteks ile limbik sistem arasındaki gelişimsel uyumun zaman içinde oturduğu bir evredir; bu süreçte uyaran değerlendirme, dürtü düzenleme ve uzun vadeli planlama becerileri hızla olgunlaşır. Sınav kaygısı, bu gelişimsel zeminde bilişsel çarpıtmalar, kaçınma ve bedensel gerginlik döngüsü olarak ortaya çıkabilir. Terapide, BDT ve beceri eğitimi ile düşünce–duygu–beden bağlantısını yapılandırarak ergenin kendi iç düzenleyicilerini güçlendirmesine odaklanıyoruz.",
    icon: "brain",
    theoreticalFoundations: [
      "Ergen gelişimi ve stres düzenleme: duygusal ve bilişsel olgunlaşmanın birlikte ele alınması.",
      "Sınav kaygısı için BDT: başa çıkma, maruz kalma ve bilişsel yeniden yapılandırma.",
      "Aile–okul iş birliği: gerektiğinde sınırlar ve iletişim çerçevesinde veli bilgilendirmesi.",
    ],
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
      {
        heading: "Akademik baskı ve öz-değer",
        body: "Sınav sonucunu öz-değer ile özdeşleştiren ergenlerde kaygı sık yükselir. Terapide ‘başarı = değer’ inancı yumuşatılır; çaba, ilerleme ve öz-şefkat başlıkları çalışılır. Beşiktaş psikolog kliniğinde yüz yüze veya online terapi ile haftalık takip sürdürülebilir.",
      },
      {
        heading: "Veli–ergen iletişimi",
        body: "Aşırı kontrol veya tam tersi ilgisizlik her iki uçta da kaygıyı besleyebilir. Gerekirse veliye yönelik kısa danışmanlık görüşmeleri ile destekleyici iletişim cümleleri üzerinde durulur; ergenin özerkliği korunur.",
      },
    ],
  },
  "ofke-kontrolu": {
    metaTitle: "Öfke Terapisi - Beşiktaş",
    metaDescription:
      "Öfke kontrol bozukluğu nasıl anlaşılır? Öfke kontrolü terapisi, BDT ve psikolog desteği ile tetikleyicileri tanıma, iletişim becerileri ve duygu düzenleme.",
    keywords:
      "öfke kontrol bozukluğu nasıl anlaşılır, öfke kontrolü terapisi, öfke kontrolü terapisti, öfke kontrolü psikolog, öfke yönetimi",
    h1: "Öfke Kontrolü Terapisi",
    intro:
      "Öfke kontrolü psikolog eşliğinde öfke dalgalarını bastırmak değil, erken uyarı sinyallerini tanıyıp seçimli yanıtlar geliştirmek hedeflenir. Öfke kontrolü terapisti ile duygusal düzenleme becerileri pratik egzersizlerle desteklenir.",
    scientificRationale:
      "Öfke, genellikle altta yatan karşılanmamış bir ihtiyacın veya ikincil bir duygunun dışavurumudur. Terapide, dürtü kontrolü sağlayan prefrontal devreleri güçlendirerek, tetikleyici anlarda 'tepki vermek' yerine 'yanıt vermeyi' öğreten bilişsel araçlar geliştiriyoruz.",
    icon: "flame",
    theoreticalFoundations: [
      "Duygu düzenleme ve öfke yönetimi: tetikleyici–düşünce–duygu–davranış zincirinin çalışılması.",
      "BDT ve çözüm odaklı araçlar: alternatif yanıtlar, zaman aşımı ve iletişim becerileri.",
      "İlişkisel bağlam: öfkenin bağlanma ve ihtiyaç dili olarak okunması.",
    ],
    topic: "Öfke",
    sections: [
      {
        heading: "Öfke kontrol bozukluğu nasıl anlaşılır?",
        body: "Öfke kontrol bozukluğu (intermittent explosive disorder gibi tanılar veya genel öfke düzenleme güçlüğü) sıklıkla sık sık patlayan öfke nöbetleri, eşya kırma, bağırma, fiziksel saldırganlık veya sonrasında pişmanlık ile kendini gösterir. İş, okul veya ilişkilerde tekrarlayan sonuçlar (ihbar, ayrılık, iş kaybı) uyarı işareti olabilir. Öfke her zaman ‘kötü’ değildir; mesele sıklık, şiddet ve kontrol kaybıdır. Kesin tanı ve tedavi planı için klinik görüşme gerekir; öfke kontrolü psikolog eşliğinde tetikleyiciler, alt duygular (utanç, korku, suçluluk) ve ilişkisel örüntüler birlikte ele alınır.",
      },
      {
        heading: "Terapi sürecinde neler işlenir?",
        body: "Tetikleyici-sonuç döngüleri, bedensel alarm tepkileri ve iç söylem kalıpları birlikte çalışılır. İhtiyaç halinde BDT ve çözüm odaklı araçlar bir arada kullanılabilir.",
      },
      {
        heading: "İlişki ve iş yaşamı",
        body: "Öfke kontrolü terapisi yalnızca bireysel değil, çift ve iş ortamındaki iletişimi de iyileştirebilir. Ana sayfadaki iletişim bölümünden randevu talep edebilirsiniz.",
      },
      {
        heading: "Öfke patlaması sonrası onarım",
        body: "Pişmanlık ve utanç sık görülür; terapide bu duygular yargılanmadan işlenir ve mağduriyet oluşturmadan özür ve sınır cümleleri pratik edilir. Tekrarlayan döngüde Beşiktaş psikolog veya online terapi ile düzenli çalışma önerilir.",
      },
      {
        heading: "Fiziksel risk ve güvenlik",
        body: "Kendinize veya başkasına yönelik şiddet riski varsa önce güvenlik planı önceliklidir. Acil durumlarda 112 ve yerel destek hatları kullanılmalıdır; terapi bu çerçevede tamamlayıcı destek sunar.",
      },
    ],
  },
  "depresyon-terapisi": {
    metaTitle: "Depresyon Terapisi - Beşiktaş",
    metaDescription:
      "Depresyon terapisi ile enerji, ilgi ve özgüven kaybını anlamlandırma; depresyon psikolog eşliğinde adım adım hedefler.",
    keywords: "depresyon terapisi, depresyon psikolog",
    h1: "Depresyon Terapisi",
    intro:
      "Depresyon psikolog desteği ile duygusal yükü yargılamadan ele alır, aktivasyon, bilişsel ve ilişkisel düzenlemelerle iyileşme yollarını birlikte ararız. Depresyon terapisinde küçük ve sürdürülebilir hedefler sık kullanılır.",
    scientificRationale:
      "Depresyon, sadece bir duygu durumu değil, bilişsel esnekliğin ve motivasyonel döngülerin geçici olarak işlev yitirmesidir. Terapi odasında, kişinin öz-şemalarını ve davranışsal aktivasyon seviyelerini inceleyerek, nöroplastisite yardımıyla zihnin yeniden canlanma sürecine eşlik ediyoruz.",
    icon: "sun",
    theoreticalFoundations: [
      "Davranışsal aktivasyon ve BDT: düşünce çarpıtmaları, kaçınma ve aktivite düzeyinin birlikte ele alınması.",
      "Öz-şema ve bağlanma temaları: ilişkisel örüntülerin depresyon üzerindeki etkisinin anlaşılması.",
      "Kanıta dayalı depresyon protokolleri: kişiye özel hedefler ve sürdürülebilir adımlar.",
    ],
    topic: "Depresyon",
    sections: [
      {
        heading: "BDT ve psikodinamik entegrasyon",
        body: "Düşünce çarpıtmalarını fark etme, davranış aktivasyonu ve bağlanma temalarını anlama depresyon terapisinde sık işlenen başlıklardır. İlk görüşmede şikayetlerinizi ve beklentilerinizi dinlerim.",
      },
      {
        heading: "Depresyonun psikolojik ve davranışsal yüzü",
        body: "Enerji kaybı, ilgi azalması, uyku ve iştah değişiklikleri, konsantrasyon güçlüğü ve değersizlik düşünceleri bir arada görülebilir. Terapide bu başlıklar ayrı ayrı ele alınır; küçük davranışsal adımlar (aktivasyon) ile düşünce çalışması birleştirilir. Şiddetli risk düşüncelerinde acil psikiyatri başvurusu önceliklidir.",
      },
      {
        heading: "İlk seansta neler beklemelisiniz?",
        body: "Güvenli çerçeve, gizlilik ve seans kuralları anlatılır; şikayet öyküsü ve güncel işlevsellik değerlendirilir. Hedefler birlikte yazılır; ‘ilk günden çözüm’ baskısı yerine sürdürülebilir tempo önerilir. İstanbul psikoloji seansı planınız yüz yüze veya online terapi olarak netleşir.",
      },
      {
        heading: "İstanbul psikolog klinikleri arayışında",
        body: "Avrupa Yakası ve Beşiktaş psikolojik danışmanlık merkezi arayan danışanlar için hem yüz yüze hem online seçenek sunuyorum. Google Ads ve organik aramalarda şeffaf bilgilendirme önceliğimdir.",
      },
    ],
  },
};

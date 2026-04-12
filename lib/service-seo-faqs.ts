export type ServiceSeoFaq = { question: string; answer: string };

export const serviceSeoFaqs: Record<
  | "cift-evlilik-terapisi"
  | "panik-atak-anksiyete"
  | "travma-terapisi"
  | "ergen-sinav-kaygisi"
  | "ofke-kontrolu"
  | "depresyon-terapisi",
  readonly ServiceSeoFaq[]
> = {
  "cift-evlilik-terapisi": [
    {
      question: "Çift terapisi ilk seansta neler olur?",
      answer:
        "Oturma düzeni, gizlilik ve ortak hedefler konuşulur; her iki tarafın da güvenli şekilde konuşabilmesi için çerçeve çizilir. İlk görüşmede ilişki öyküsü, şikayet başlıkları ve beklentiler dinlenir; henüz derin müdahale yerine değerlendirme ve yön önerisi öne çıkar.",
    },
    {
      question: "Evlilik terapisi ne kadar sürer?",
      answer:
        "Süre çiftin hedeflerine ve çatışmanın yoğunluğuna göre değişir. Bazı çiftler kısa süreli odaklı çalışma ile ilerlerken, güven ihlali veya uzun süreli iletişim kırıklığında daha uzun dönem planlanabilir. Seanslar genelde 50 dakikadır.",
    },
    {
      question: "Çift terapisti ile bireysel terapi arasında ne zaman seçim yapılır?",
      answer:
        "İlişki dinamikleri merkezdeyse çift oturumu uygundur. Bazen taraflardan biri için paralel bireysel destek önerilebilir; bu karar şeffaf biçimde ve çiftin onayıyla ele alınır.",
    },
    {
      question: "Beşiktaş’ta yüz yüze çift terapisi mümkün mü?",
      answer:
        "Evet; klinikte yüz yüze seans planlanabilir. İstanbul dışından katılan çiftler veya yoğun program nedeniyle online terapi tercih edenler için çevrim içi format da değerlendirilebilir.",
    },
    {
      question: "Çift terapisinde ‘kazanan’ taraf olur mu?",
      answer:
        "Etik çerçevede terapist taraf tutmaz; ilişkinin güvenliği ve her iki kişinin de duyulması hedeflenir. Çözüm, genellikle ortak iletişim kalıplarının dönüşümü üzerinden ilerler.",
    },
    {
      question: "İletişim kopukluğu için çift terapisi işe yarar mı?",
      answer:
        "Araştırmalar yapılandırılmış çift müdahalelerinin iletişim ve ilişki memnuniyetinde iyileşmeye katkısını gösterir. Sonuç, çiftin motivasyonu ve sürekliliğiyle de ilişkilidir.",
    },
  ],
  "panik-atak-anksiyete": [
    {
      question: "Panik atak anında ilk ne yapmalıyım?",
      answer:
        "Güvenli bir yerde oturup yavaş ve ritimli nefes hedefleyin; aşırı hızlı soluk alıvermenin panik semptomlarını artırabileceğini unutmayın. Göğüs ağrısı, bayılma veya kalp krizi şüphesi varsa 112’yi arayın.",
    },
    {
      question: "Anksiyete terapisinde BDT nasıl kullanılır?",
      answer:
        "Otomatik düşünceler, bilişsel çarpıtmalar ve kaçınma örüntüleri kayıt altına alınır; kademeli maruz bırakma ve beceri egzersizleri kişiye özel planlanır. Panik atak psikolog eşliğinde tempo güvenlikle belirlenir.",
    },
    {
      question: "Online terapi ile anksiyete çalışılabilir mi?",
      answer:
        "Evet; birçok danışan online psikoloji seansı ile düzenli ilerler. Gizli ortam ve stabil internet koşulları sağlandığında protokoller uyarlanabilir.",
    },
    {
      question: "Sosyal fobi için terapi süresi ne kadar?",
      answer:
        "Kaçınmanın derinliği ve hedeflere göre değişir. Bazı danışanlar birkaç ay içinde belirgin rahatlama bildirirken, yoğun sosyal kaygıda daha uzun süreli maruz bırakma planı gerekebilir.",
    },
    {
      question: "İstanbul’da panik atak psikolog seçerken nelere bakmalıyım?",
      answer:
        "BDT ve anksiyete alanında güncel eğitim, şeffaf süreç anlatımı ve terapötik uyum önemlidir. Beşiktaş psikolog kliniğinde yüz yüze veya online terapi seçeneklerini birlikte netleştirebilirsiniz.",
    },
    {
      question: "Agorafobi tedavisinde maruz bırakma tehlikeli midir?",
      answer:
        "Maruz bırakma, hazırlık ve güvenlik planı olmadan yapılmamalıdır. Terapist eşliğinde hiyerarşi oluşturulur; her adımda kontrol sizde hissini koruyacak şekilde ilerlenir.",
    },
  ],
  "travma-terapisi": [
    {
      question: "TSSB belirtileri nelerdir?",
      answer:
        "İstilacı belirtiler (anıların zorlayıcı geri gelmesi, kabuslar), kaçınma, duygu ve düşünce değişiklikleri ve aşırı uyarılma başlıkları altında gruplanır. Kesin tanı için psikiyatrist veya klinik psikolog değerlendirmesi gerekir.",
    },
    {
      question: "Travma terapisinde EMDR herkese uygun mudur?",
      answer:
        "EMDR, hazır bulunuşluk ve stabilizasyon sonrası planlanır. Bazı durumlarda önce güvenlik, kaynaklandırma ve duygu düzenleme çalışmaları önceliklidir; yöntem seçimi bireyseldir.",
    },
    {
      question: "Travma sonrası online terapi yeterli mi?",
      answer:
        "Birçok danışan için online terapi güvenli ve etkili olabilir; ancak yoğun dissosiasyon veya güvenlik riski varsa yüz yüze veya çok disiplinli bakış gerekebilir. Bu karar birlikte değerlendirilir.",
    },
    {
      question: "İlk travma seansında detaylı anlatmak zorunda mıyım?",
      answer:
        "Hayır. Tempo sizin kontrolünüzdedir; terapist acele ettirmeden güven inşa eder. Anlatmak istemediğiniz kısımları atlamak hakkınızdır.",
    },
    {
      question: "TSSB için ilaç gerekir mi?",
      answer:
        "Bazı belirti profillerinde psikiyatrist önerisiyle ilaç eklenebilir. Karar tıbbi değerlendirme ile verilir; psikoterapi birçok vakada ilaçla birlikte veya tek başına planlanır.",
    },
    {
      question: "Beşiktaş’ta travma psikolog randevusu nasıl alınır?",
      answer:
        "Telefon veya WhatsApp ile kısa mesaj yeterlidir; ilk görüşme zamanı birlikte planlanır. Yüz yüze ve online terapi seçenekleri önceden bilgilendirilir.",
    },
  ],
  "ergen-sinav-kaygisi": [
    {
      question: "Ergen psikoloğu seansları veliye açılır mı?",
      answer:
        "Gizlilik ergen çalışmasının temelidir. Yasal çerçeve ve risk durumları haricinde içerik veliyle paylaşılmaz; gerektiğinde ergenin onayıyla genel öneriler konuşulabilir.",
    },
    {
      question: "Sınav kaygısı için kaç seans gerekir?",
      answer:
        "Kaygının şiddeti ve hedeflere göre değişir. BDT temelli beceri çalışmaları bazen birkaç aylık düzenli oturumla belirgin rahatlama sağlayabilir.",
    },
    {
      question: "Online terapi ergen için uygun mu?",
      answer:
        "Veli izni ve gizlilik koşulları sağlandığında uygun olabilir. Görüntülü görüşmede ergenin güvenli bir ortamda olması önemlidir.",
    },
    {
      question: "Ergen psikoloğu İstanbul’da nasıl seçilir?",
      answer:
        "Ergen gelişimi ve sınav kaygısı deneyimi, iletişim tarzı ve güven ortamı kriter olmalıdır. Beşiktaş ve online seçenekleri birlikte değerlendirilebilir.",
    },
    {
      question: "Sınav kaygısı depresyonla birlikte olabilir mi?",
      answer:
        "Evet; uzun süreli streste isteksizlik, uyku ve iştah değişiklikleri görülebilir. Birlikte ele alınması tedavi planını etkiler.",
    },
  ],
  "ofke-kontrolu": [
    {
      question: "Öfke kontrolü terapisinde ilk hedef nedir?",
      answer:
        "Erken uyarı sinyallerini tanımak ve tetikleyici–düşünce–duygu–davranış zincirini görmek öne çıkar. Amaç öfkeyi yok saymak değil, yönetilebilir hale getirmektir.",
    },
    {
      question: "Öfke patlaması sonrası pişmanlık normal mi?",
      answer:
        "Sık görülür; bu duygu öfkenin ilişkisel sonuçlarıyla bağlantılıdır. Terapide pişmanlık yerine onarım adımları ve önleyici stratejiler çalışılır.",
    },
    {
      question: "BDT öfke için nasıl yardımcı olur?",
      answer:
        "İşlevsiz düşünceler ve davranışsal alternatifler üzerinde çalışılır; gevşeme ve zaman aşımı gibi beceriler pratik edilir.",
    },
    {
      question: "Online terapi öfke konusunda etkili mi?",
      answer:
        "Evet; tetikleyici analizi ve beceri ödevleri çevrim içi de yürütülebilir. Güvenli ortam ve düzenli seans ritmi önemlidir.",
    },
    {
      question: "Beşiktaş psikolog ile öfke terapisi süresi ne kadar sürer?",
      answer:
        "Örüntünün kökü ve hedeflere göre değişir. Kısa süreli odaklı çalışma mümkün olduğu gibi ilişkisel temalar derinleştikçe süre uzayabilir.",
    },
  ],
  "depresyon-terapisi": [
    {
      question: "Depresyon terapisinde ilk seansta neler beklenir?",
      answer:
        "Başvuru nedeniniz, belirtilerin süresi ve güvenlik değerlendirmesi konuşulur. Hedefler ve çalışma çerçevesi şeffaf biçimde anlatılır; henüz ağır müdahale yerine ortaklık kurulur.",
    },
    {
      question: "Depresyon psikolog ile ne kadar sürede iyileme olur?",
      answer:
        "Kişiye göre değişir. Davranışsal aktivasyon ve BDT ile bazı danışanlar haftalar içinde işlevsellikte artış bildirir; tekrarlayıcı depresyon öyküsünde süre uzayabilir.",
    },
    {
      question: "İlaç kullanmadan depresyon terapisi yeterli olur mu?",
      answer:
        "Bazı vakalarda psikoterapi yeterli olabilir; orta-şiddetli veya biyolojik belirginlikte psikiyatrist değerlendirmesi önerilebilir. Karar çok disiplinli değerlendirmeyle verilir.",
    },
    {
      question: "Online terapi depresyon için uygun mu?",
      answer:
        "Evet; aktivasyon ödevleri ve düşünce kayıtları çevrim içi de takip edilebilir. Enerji düşüklüğünde online psikoloji seansı yüz yüzeye göre daha sürdürülebilir olabilir.",
    },
    {
      question: "Beşiktaş’ta depresyon terapisi randevusu nasıl alınır?",
      answer:
        "Telefon veya WhatsApp üzerinden mesaj atmanız yeterlidir; müsaitlik ve ilk görüşme zamanı birlikte netleştirilir.",
    },
    {
      question: "Depresyonda yakınlarıma ne söylemeliyim?",
      answer:
        "Hazır olduğunuzda basit ve net ifadeler işe yarar. Terapide aileye yönelik iletişim cümleleri ve sınır cümleleri üzerine pratik yapılabilir.",
    },
  ],
};

export function buildServiceSeoFaqJsonLd(slug: keyof typeof serviceSeoFaqs) {
  const items = serviceSeoFaqs[slug];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

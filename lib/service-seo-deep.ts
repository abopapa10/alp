export type ServiceDeepBlock = {
  literature: { heading: string; paragraphs: string[] };
  scenario: { title: string; paragraphs: string[] };
  selfHelp: { title: string; items: string[] };
  reflectionQuestions: string[];
};

export const serviceSeoDeep: Record<
  | "cift-evlilik-terapisi"
  | "panik-atak-anksiyete"
  | "travma-terapisi"
  | "ergen-sinav-kaygisi"
  | "ofke-kontrolu"
  | "depresyon-terapisi",
  ServiceDeepBlock
> = {
  "cift-evlilik-terapisi": {
    literature: {
      heading: "Literatürde çift ve evlilik terapisi nasıl ele alınır?",
      paragraphs: [
        "Bağlanma kuramı, yakın ilişkilerde güven, kaçınma ve kaygı düzeneklerinin çatışma anlarında nasıl devreye girdiğini açıklar. Johnson’ın duygu odaklı terapi (EFT) modeli, çiftlerin ‘birbirine karşı’ değil ‘soruna karşı’ durmasını hedefler; duygusal erişilebilirlik ve yanıt verebilirlik üzerine kuruludur.",
        "Gottman yaklaşımı, dört horseman (aşağılama, savunma, suçlama, duvar örme) gibi tahrip edici iletişim örüntülerini erken yakalamayı vurgular. Çift terapisti, bu kalıpları yargılamadan yavaşlatıp alternatif onarım girişimlerini pratik ettirir.",
        "Türkiye’de çift terapisi giderek yaygınlaşmaktadır; Beşiktaş psikolog kliniğinde yüz yüze ve online terapi ile erişim kolaylaşmıştır. Araştırmalar, terapötik ittifakın ve düzenli seansın ilişki memnuniyetiyle ilişkili olduğunu göstermektedir.",
      ],
    },
    scenario: {
      title: "Örnek senaryo (kimlik bilgisi içermez)",
      paragraphs: [
        "Bir danışan çift, “küçük meselelerden bile kavga çıkıyoruz” diyerek başvurabilir. Oturumlarda görülen tablo sıkça şudur: biri yakınlık isterken diğeri eleştiri olarak duyar; altında ise reddedilme korkusu veya yetersiz kalma endişesi yatar. Terapide hedef, suçlu bulmak değil, döngüyü yavaşlatıp ihtiyaç diline çevirmektir.",
        "İlk aylarda güvenli deneme davranışları (kısa kontrol mesajları, onarım cümleleri) önerilir; ilerleyen aşamada güven ihlali veya tekrarlayan kaçınma varsa daha yapılandırılmış protokoller gündeme gelir.",
      ],
    },
    selfHelp: {
      title: "İlişkide kendi kendine deneyebileceğiniz küçük adımlar",
      items: [
        "Tartışma başlamadan önce 20 dakikalık mola anlaşması yapın; dönüşte sadece bir konu seçin.",
        "“Ben dili” ile başlayın: “Hissediyorum…”, “İhtiyacım…” cümleleri suçlamadan daha az savunma tetikler.",
        "Partneriniz konuşurken özetleyerek dinleyin: “Anladığım kadarıyla…” ile doğrulama isteyin.",
        "Günlük 10 dakika nötr sohbet (çocuk, iş, plan dışı) bağlanmayı besler.",
        "Onarım girişimini ertelemeyin; özür veya ilgi gösterme bir zayıflık değil, ilişkiyi koruma becerisidir.",
        "İletişim tıkanıyorsa çift terapisti ile randevu için tek mesaj yeterli olabilir.",
      ],
    },
    reflectionQuestions: [
      "Tartışmalarda genelde ‘haklı olma’ mı yoksa ‘anlaşılma’ mı daha öncelikli hale geliyor?",
      "Partneriniz üzgünken ilk içgüdünüz yakınlaşmak mı, mesafe koymak mı?",
      "Son bir ayda birbirinizi takdir ettiğiniz anlar hangi sıklıkta yaşandı?",
      "Çatışma sonrası onarım (özür, temas, konuşma) ne kadar sürede gerçekleşiyor?",
      "İlişkide tekrarlayan bir cümle veya tema var mı; sizin için ne anlama geliyor olabilir?",
    ],
  },
  "panik-atak-anksiyete": {
    literature: {
      heading: "Literatürde anksiyete ve panik nasıl ele alınır?",
      paragraphs: [
        "BDT modelleri, panik döngüsünü bedensel uyaranın ‘felaket yorumu’ ile pekişmesi olarak açıklar. Maruz bırakma ve interoseptif çalışmalar, alarmın zamanla habitüasyon görmesini hedefler; bu protokoller kanıta dayalı kılavuzlarda yer alır.",
        "Nörobilimsel düzeyde amigdala–prefrontal etkileşimi sık tartışılır; beceri eğitimi ile ‘tehdit’ etiketinin esnetilmesi mümkündür. Anksiyete psikolog eşliğinde kişiselleştirilmiş hiyerarşi ile daha güvenli ilerlenir.",
        "Online terapi formatında protokoller uyarlanabilir; İstanbul psikoloji seansı veya çevrim içi görüşmede düzenli ödev takibi sonuçları destekler.",
      ],
    },
    scenario: {
      title: "Örnek senaryo (genelleştirilmiş)",
      paragraphs: [
        "Metroda kalabalık hisseden bir danışan, çarpıntı ve nefes darlığı sonrası “kalp krizi geçiriyorum” düşüncesine kapılır ve bir süre toplu taşımadan kaçınır. Terapide önce tıbbi ekarte süreci konuşulur; ardından bedensel duyumları nötr dil ile adlandırma ve kademeli maruz bırakma planlanır.",
        "Birkaç hafta içinde danışan, kısa metro duraklarıyla başlayıp süreyi uzatır; panik atak anında kullanacağı tek cümlelik hatırlatıcı kartlar üzerinde çalışır.",
      ],
    },
    selfHelp: {
      title: "Kaygı anında deneyebileceğiniz psiko-eğitim ipuçları",
      items: [
        "4-6 nefes ritmi: burnundan 4 say, verişi 6 sayıya uzat (hiperventilasyonu azaltmaya yardım eder).",
        "5-4-3-2-1 zemine bağlanma: 5 şey gör, 4 dokun, 3 ses duy, 2 koku, 1 tat.",
        "Felaket düşüncesini yazıya dökün; yanına ‘alternatif açıklama’ sütunu ekleyin.",
        "Kafein ve uyku düzensizliği tetikleyicileri not edin.",
        "Kaçındığınız durumları küçük adımlara bölün; her adımı terapistinizle paylaşın.",
        "Beşiktaş psikolog veya online terapi randevusu için tek mesaj yeterlidir.",
      ],
    },
    reflectionQuestions: [
      "Panik belirtileri başlamadan önce genelde hangi düşünce hızlıca devreye giriyor?",
      "Kaçındığınız durumlar günlük işlevinizi ne kadar kısıtlıyor?",
      "Yakınlarınızdan destek istemek sizin için kolay mı, zor mu?",
      "Bedensel uyarılarınızı ‘tehdit’ mi yoksa ‘rahatsızlık’ mı olarak etiketliyorsunuz?",
      "Son başarılı bir başa çıkma anınızı hatırlıyor musunuz; ne işe yaradı?",
    ],
  },
  "travma-terapisi": {
    literature: {
      heading: "Literatürde TSSB ve travma işleme",
      paragraphs: [
        "TSSB, tehdit sonrası bellek ve uyarı sisteminin ‘kapanmayan alarm’ gibi çalışmasıyla ilişkilendirilir. Travma odaklı BDT ve EMDR gibi yöntemler, anının bugünkü tetikleyicilerle olan bağını yeniden düzenlemeyi hedefler.",
        "Stabilizasyon ve güvenlik fazı, işleme öncesi şart olarak vurgulanır; danışanın kontrolü ve ritmi literatürde merkezdedir.",
        "Travma psikolog ile çalışmak, yalnızlık ve suçluluk temalarını yumuşatır; yüz yüze seans ve online terapi birlikte planlanabilir.",
      ],
    },
    scenario: {
      title: "Örnek senaryo (anonimleştirilmiş)",
      paragraphs: [
        "Gece kabuslarla uyanan bir danışan, gündüz de tetikleyici seslerde irkilme yaşayabilir. İşe gitmekten kaçınır çünkü toplu taşıma hatırlatıcıdır. Terapide önce güvenlik ve günlük rutin stabilizasyonu konuşulur; anıyı zorla anlatmak yerine ‘şimdi ve burada’ kaynakları güçlendirilir.",
        "Hazır bulunuşluk sağlandığında travma işleme adımları kişiye özel seçilir; her adımda durdurma hakkı hatırlatılır.",
      ],
    },
    selfHelp: {
      title: "TSSB ve travma yanıtında kendi kendine yardım (destekleyici)",
      items: [
        "Tetikleyici listesini not edin; yoğunluk 0–10 ile işaretleyin.",
        "Güvenli yer imgesi veya nefes egzersizi gibi kısa regülasyon becerileri pratik edin.",
        "Uyku hijyenini basit adımlarla düzenleyin (sabit yatış, ekran sınırı).",
        "Güvendiğiniz bir kişiyle sınırlı ve kontrollü paylaşım planlayın.",
        "Madde veya aşırı kaçınma yerine ertelenmiş küçük hedefler koyun.",
        "Ağır belirtilerde tek başına kalıp mücadele etmek yerine travma terapisi için randevu alın.",
      ],
    },
    reflectionQuestions: [
      "Hangi durumlarda ‘şimdi güvende değilim’ hissi en güçlü?",
      "Kaçınma size kısa vadede rahatlatıyor mu, uzun vadede neyi feda ettiriyor?",
      "Uyku ve konsantrasyon son aylarda nasıl etkilendi?",
      "Size destek olabilecek güvenli bir kişi veya kurum var mı?",
      "Terapide hangi konuyu ilk anlatmak istersiniz, hangisini ertelemek istersiniz?",
    ],
  },
  "ergen-sinav-kaygisi": {
    literature: {
      heading: "Ergen gelişimi ve sınav kaygısı literatürü",
      paragraphs: [
        "Ergenlikte limbik sistem hassasiyeti ve akademik beklentiler çarpışabilir; sınav kaygısı bazen mükemmeliyetçilik ve aile içi başarı baskısıyla beslenir. BDT çerçevesinde düşünce çarpıtmaları ve maruz kalma hedefleri kişiselleştirilir.",
        "Araştırmalar, zaman yönetimi ve gevşeme becerilerinin kaygı şiddetini azaltmada yardımcı olduğunu gösterir. Ergen psikoloğu, veli–okul iletişiminde sınır ve destek dengesini de konuşabilir.",
        "Online terapi, ders programı yoğun ergenler için pratik bir seçenektir; İstanbul psikoloji seansı ile süreklilik sağlanabilir.",
      ],
    },
    scenario: {
      title: "Örnek senaryo",
      paragraphs: [
        "Sınava üç ay kala uyku bozulan bir ergen, “her şeyi unutacağım” düşüncesiyle çalışmayı erteler. Terapide düşünce kaydı ve kısa çalışma blokları planlanır; aileye yönelik “baskıyı azaltan” cümleler pratik edilir.",
        "İlerleyen haftalarda sınav simülasyonu ve bedensel gerginlik azaltma eklenir.",
      ],
    },
    selfHelp: {
      title: "Sınav öncesi kendi kendine yardım listesi",
      items: [
        "Pomodoro: 25 dk çalış, 5 dk mola; molada ekran değil hafif hareket.",
        "Kaygı düzeyini 0–10 yaz; 7 üzerindeyse 5 dk yavaş nefes sonra devam.",
        "Hata yapılabilirliğini tek cümleyle hatırlatan kart hazırlayın.",
        "Uyku saatini sabitleyin; gece çalışmayı maraton gibi uzatmayın.",
        "Veliyle haftalık 10 dk “sadece dinleme” anlaşması isteyin.",
        "Ergen psikoloğu randevusu için veli ile birlikte kısa mesaj atılabilir.",
      ],
    },
    reflectionQuestions: [
      "Sınavı ‘tüm değerimi ölçen tek şey’ gibi mi yaşıyorum?",
      "Başarısızlık hayalimde en çok kimi hayal kırıklığına uğratmak?",
      "Çalışırken en sık hangi düşünce işimi bölüyor?",
      "Dinlendiğimde suçluluk hissediyor muyum?",
      "Yardım istemek zayıflık mı yoksa strateji mi gibi görünüyor bana?",
    ],
  },
  "ofke-kontrolu": {
    literature: {
      heading: "Öfke ve dürtü düzenleme üzerine bilimsel çerçeve",
      paragraphs: [
        "Öfke çoğu zaman birincil duygu değil; utanç, korku veya hak ihlali algısının hızlı yüzeyleşmesidir. BDT, tetikleyici–düşünce–duygu–davranış zincirini görünür kılar.",
        "Literatür, düzenli beceri eğitiminin öfke sıklığını azaltabileceğini gösterir; terapötik ilişki ve motivasyon sonuçları etkiler.",
        "Beşiktaş psikolog kliniğinde yüz yüze veya online terapi ile süreç yürütülebilir.",
      ],
    },
    scenario: {
      title: "Örnek senaryo",
      paragraphs: [
        "İş yerinde eleştirildiğinde sesini yükselten bir danışan, sonra günlerce pişmanlık yaşar. Terapide eleştirinin hangi anı hatırlattığı ve hangi iç cümlelerin devreye girdiği haritalanır.",
        "Alternatif yanıt senaryoları ve 10 dakikalık gecikme protokolü pratik edilir.",
      ],
    },
    selfHelp: {
      title: "Öfke yükselirken ara adımlar",
      items: [
        "Bedende ilk sinyali seç (çene, yumruk, sıcak yüz) ve ‘dur’ de.",
        "Su iç, odayı fiziksel olarak terk et (güvenliyse).",
        "Kızgınlık günlüğü: tetikleyici, düşünce, duygu, davranış sütunları.",
        "Sonra pişman olacağınız mesajı taslakta bekletin; 24 saat kuralı.",
        "Bedensel enerjiyi yürüyüş veya duvara itme gibi güvenli kanala yönlendirin.",
        "Öfke kontrolü psikolog ile düzenli seans planlayın.",
      ],
    },
    reflectionQuestions: [
      "Öfke patlamasından önce genelde hangi ihtiyacım karşılanmamış hissediliyor?",
      "Haklı çıkmak mı yoksa ilişkiyi korumak mı daha önemli o an?",
      "Öfkeyi kimler önünde göstermek daha kolay, kimler önünde bastırıyorum?",
      "Pişmanlık sonrası onarım yapıyor muyum?",
      "Fiziksel risk oluştu mu hiç; güvenlik planım var mı?",
    ],
  },
  "depresyon-terapisi": {
    literature: {
      heading: "Depresyon literatürü ve psikoterapi",
      paragraphs: [
        "Major depresyon, duygu düzenleme, motivasyon ve bilişsel süreçleri etkileyen çok boyutlu bir tablodur. Davranışsal aktivasyon ve BDT, kanıta dayalı psikoterapi seçenekleri arasındadır.",
        "Bağlanma ve öz-şema temaları depresyonun sürmesinde rol oynayabilir; psikodinamik entegrasyon bazen BDT ile birleştirilir.",
        "Online terapi ve yüz yüze seans kombinasyonu, taşınma veya iş değişiminde süreklilik sağlar.",
      ],
    },
    scenario: {
      title: "Örnek senaryo",
      paragraphs: [
        "Haftalarca yataktan çıkmakta zorlanan bir danışan, “tembellik yapıyorum” diye kendini suçlar. Terapide aktivasyon hedefleri çok küçük başlar: diş fırçalamak, 10 dk güneşe çıkmak. Düşünce kayıtlarında ‘işe yaramazım’ örüntüsü çalışılır.",
        "İlerleyen süreçte sosyal temas ve anlamlı aktiviteler kademeli eklenir.",
      ],
    },
    selfHelp: {
      title: "Depresyonda günlük yaşamda deneyebileceğiniz adımlar",
      items: [
        "Günü tek parça değil, 3 küçük blok olarak planlayın.",
        "Güneş ışığı ve kısa yürüyüş; fiziksel hareket ruh hâlini destekler.",
        "İzolasyonu kırmak için haftada bir güvenli sosyal temas hedefi.",
        "Uyku ve beslenme düzenine basit rutin koyun.",
        "Öz-eleştiri cümlesini duyduğunuzda yazıya dökün ve kanıt sütunu ekleyin.",
        "Depresyon psikolog ile görüşmek için çekinmeden yazın; erken başvuru iyileşmeyi kolaylaştırır.",
      ],
    },
    reflectionQuestions: [
      "Son haftalarda size küçük de olsa iyi gelen tek an neydi?",
      "Kendinize en sık söylediğiniz iç eleştiri cümlesi nedir?",
      "Yardım istemek size nasıl hissettiriyor?",
      "Uyku, iştah ve enerji hangi yönde değişti?",
      "Hayattan çekildiğiniz alanlar iş, aile, arkadaş mı; hangisi önce?",
    ],
  },
};

const DEFAULT_GOOGLE_MAPS_PLACE =
  "https://www.google.com/maps/place/Be%C5%9Fikta%C5%9F+Psikolog+A.+Alparslan+Sancar/@41.0430538,29.0031978,17z/data=!3m1!4b1!4m6!3m5!1s0x14ca150616c8ba97:0x25d9df0c713d31ab!8m2!3d41.0430538!4d29.0031978!16s%2Fg%2F11vb8d76ms?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

export const siteConfig = {
  name: "Psk. Ahmet Alparslan Sancar",
  /** Ana sayfa hero H1 ile uyumlu tanım (SEO / şema). */
  tagline: "Beşiktaş Psikolog ve Online Terapi Hizmetleri | Psk. Ahmet Alparslan Sancar",
  titleTemplate: "%s | Psk. Ahmet Alparslan Sancar",
  description:
    "Beşiktaş psikolog ve online terapi: Hacettepe mezunu Psk. Ahmet Alparslan Sancar ile çift terapisi, panik atak, anksiyete, travma, depresyon ve psikoterapi randevusu.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://www.ahmetalparslansancar.com",
  phoneDisplay: "+90 551 849 02 36",
  phoneTel: "+905518490236",
  whatsappUrl:
    "https://wa.me/905518490236?text=Merhaba,%20randevu%20olu%C5%9Fturmak%20istiyorum.",
  email: "info@ahmetalparslansancar.com",
  address: {
    street: "Sinanpaşa Mah. (Beşiktaş)",
    city: "İstanbul",
    region: "Beşiktaş",
    country: "TR",
  },
  geo: {
    lat: 41.0430538,
    lng: 29.0031978,
  },
  /** Google Haritalar işletme sayfası (yorumlar, yol tarifi, paylaşım). */
  googleMapsPlaceUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_URL?.trim() || DEFAULT_GOOGLE_MAPS_PLACE,
  /** iframe embed (API anahtarı gerekmez) */
  mapEmbedUrl:
    "https://maps.google.com/maps?q=41.0430538,29.0031978&hl=tr&z=17&ie=UTF8&iwloc=&output=embed",
  /** Google İşletme / yorumlar CTA + schema sameAs */
  googleBusinessProfileUrl:
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_URL?.trim() ||
    DEFAULT_GOOGLE_MAPS_PLACE,
  /** Google Maps yol tarifi / işletme */
  directionsUrl:
    process.env.NEXT_PUBLIC_MAPS_DIRECTIONS_URL?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_URL?.trim() ||
    DEFAULT_GOOGLE_MAPS_PLACE,
} as const;

export const aboutOpening =
  "Hayatın getirdiği zorluklarla başa çıkarken yanınızda bilimsel kanıtlı yöntemlerle duruyorum.";

export const aboutBody =
  "Hacettepe Üniversitesi Psikoloji Bölümü mezunu bir psikoloğum. Beşiktaş'daki kliniğimde yalnızca bilimsel olarak kanıtlanmış yöntemler (Bilişsel Davranışçı Terapi, Psikodinamik ve Birey Odaklı Terapi) ile psikoterapi hizmeti veriyorum. 500'ü aşkın danışan sayısına ulaşarak bu süreçte gurur verici sonuçlar elde ettim. Beşiktaş'ta güvenilir bir psikolog arıyorsanız veya psikoterapi randevusu almak istiyorsanız, benimle iletişime geçebilirsiniz.";

export const aboutExcerpt = `${aboutOpening} ${aboutBody}`;

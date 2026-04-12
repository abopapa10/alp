const DEFAULT_GOOGLE_MAPS_PLACE =
  "https://www.google.com/maps/place/Be%C5%9Fikta%C5%9F+Psikolog+A.+Alparslan+Sancar/@41.0430538,29.0031978,17z/data=!3m1!4b1!4m6!3m5!1s0x14ca150616c8ba97:0x25d9df0c713d31ab!8m2!3d41.0430538!4d29.0031978!16s%2Fg%2F11vb8d76ms?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D";

export const siteConfig = {
  name: "Psk. Ahmet Alparslan Sancar",
  /** Ana sayfa hero H1 ile uyumlu kısa tanım (şema / iç tutarlılık). */
  tagline: "Psikoterapi & Online Danışmanlık",
  /** Ana sayfa <title>, OG ve hero H1 — şablon uygulanmaz (absolute). */
  homeFullTitle: "Yüz Yüze & Online Psikolog Randevu - Psk. Ahmet Alparslan Sancar",
  titleTemplate: "%s | Psk. Ahmet Alparslan Sancar",
  description:
    "Beşiktaş psikolog ve İstanbul psikolog arayanlar için online terapi, online psikolojik danışmanlık ve yüz yüze seans. Psikolog randevu, psikologdan randevu ve psikoloji İstanbul çapında kanıta dayalı terapi: Hacettepe mezunu Psk. Ahmet Alparslan Sancar.",
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
    /** Beşiktaş ilçe posta kodu (şema / haritalar için). */
    postalCode: "34353",
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

/** Hakkımda özeti (meta / olası tekrar kullanımlar için). */
export const aboutOpening =
  "Hacettepe Üniversitesi Psikoloji mezunu; 700'den fazla danışan deneyimi, birey odaklı terapi ve Beşiktaş ile online görüşmeler.";

export const aboutBody =
  "Birey Odaklı Psikoterapi temelli çalışıyor; ihtiyaca göre psikodinamik ve BDT tekniklerini entegre ediyorum.";

export const aboutExcerpt = `${aboutOpening} ${aboutBody}`;

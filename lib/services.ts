import type { LucideIcon } from "lucide-react";
import {
  HeartHandshake,
  CloudLightning,
  Shield,
  GraduationCap,
  Flame,
  CloudRain,
} from "lucide-react";

export type ServiceItem = {
  slug: string;
  title: string;
  /** Ana sayfa grid kartlarında H3 — SEO anahtar kelimeleri */
  cardHeading: string;
  short: string;
  icon: LucideIcon;
  keywords: string;
};

export const services: ServiceItem[] = [
  {
    slug: "cift-evlilik-terapisi",
    title: "Çift ve Evlilik Terapisi",
    cardHeading: "Çift Terapisi, Evlilik ve İlişki Terapisi — Beşiktaş, İstanbul",
    short: "İlişki dinamiklerini güçlendiren, kanıta dayalı çift ve evlilik terapisi.",
    icon: HeartHandshake,
    keywords:
      "çift terapisti, evlilik terapisti, ilişki terapisi, çift terapisi, evlilik danışmanlığı",
  },
  {
    slug: "panik-atak-anksiyete",
    title: "Panik Atak ve Anksiyete",
    cardHeading: "Panik Atak Terapisi ve Anksiyete Terapisi — Psikolog Desteği",
    short: "Panik atak ve anksiyete bozukluklarında BDT odaklı çalışma.",
    icon: CloudLightning,
    keywords: "panik atak psikolog, panik atak terapi, anksiyete psikolog, anksiyete terapi",
  },
  {
    slug: "travma-terapisi",
    title: "Travma Terapisi",
    cardHeading: "Travma Terapisi, Travma Psikolog ve Regresyon Terapisi Desteği",
    short: "Travma sonrası iyileşmeyi destekleyen yapılandırılmış terapi süreci.",
    icon: Shield,
    keywords: "travma terapisi, travma psikolog, regresyon terapisi psikolog, regresyon terapisi",
  },
  {
    slug: "ergen-sinav-kaygisi",
    title: "Ergenlik ve Sınav Kaygısı",
    cardHeading: "Ergen Psikoloğu, Ergenlik ve Sınav Kaygısı Terapisi — İstanbul",
    short: "Ergen dönemi ve sınav kaygısında bireysel destek ve beceri kazanımı.",
    icon: GraduationCap,
    keywords:
      "ergen psikoloğu, ergen psikoloğu İstanbul, ergen psikolog tavsiye, sınav kaygısı psikolog",
  },
  {
    slug: "depresyon-terapisi",
    title: "Depresyon Terapisi",
    cardHeading: "Depresyon Terapisi ve Depresyon Psikolog — Beşiktaş",
    short: "Depresyon belirtilerinde bilişsel ve duygusal düzenleme odaklı terapi.",
    icon: CloudRain,
    keywords: "depresyon terapisi, depresyon psikolog",
  },
  {
    slug: "ofke-kontrolu",
    title: "Öfke Kontrolü",
    cardHeading: "Öfke Kontrolü Terapisi ve Öfke Kontrolü Psikolog",
    short: "Öfke tetikleyicilerini tanıma ve düzenleme becerilerinin güçlendirilmesi.",
    icon: Flame,
    keywords: "öfke kontrolü terapisi, öfke kontrolü terapisti, öfke kontrolü psikolog",
  },
];

/** Ana sayfa hizmet grid sıralaması */
export const homeServiceSlugs = [
  "cift-evlilik-terapisi",
  "panik-atak-anksiyete",
  "travma-terapisi",
  "ergen-sinav-kaygisi",
  "depresyon-terapisi",
  "ofke-kontrolu",
] as const;

export const homeServices = services.filter((s) =>
  (homeServiceSlugs as readonly string[]).includes(s.slug),
);

export const onlineTerapiMeta = {
  title: "Online Terapi ve Online Psikolog Randevusu",
  description:
    "Online psikolog randevusu, online terapi ve online psikoterapi ile İstanbul ve Türkiye genelinde esnek seans planı. KVKK uyumlu görüşme altyapısı önerisi.",
  keywords:
    "online psikolog randevu, online terapi, online psikolog tavsiye, online psikolojik danışmanlık, online psikoterapi, online psikolog, online psikoterapi merkezi",
};

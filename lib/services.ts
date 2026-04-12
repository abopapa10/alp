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
    cardHeading: "Panik Atak, Anksiyete, Sosyal Fobi ve Agorafobi — Psikolog, BDT",
    short: "Panik atak anında stratejiler, anksiyete ve sosyal fobi için kanıta dayalı terapi.",
    icon: CloudLightning,
    keywords:
      "panik atak psikolog, panik atak anında ne yapılmalı, anksiyete terapi, sosyal fobi, agorafobi, anksiyete psikolog",
  },
  {
    slug: "travma-terapisi",
    title: "Travma Terapisi",
    cardHeading: "TSSB, Travma Terapisi ve Travma Psikolog — EMDR, BDT, Beşiktaş",
    short: "Travma sonrası stres, TSSB belirtileri ve travma terapisinde güvenli, kanıta dayalı süreç.",
    icon: Shield,
    keywords:
      "travma terapisi, TSSB, travma psikolog, EMDR terapisi, travma odaklı BDT, regresyon terapisi psikolog",
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
    cardHeading: "Öfke Kontrol Bozukluğu ve Öfke Terapisi — Psikolog Desteği",
    short: "Öfke patlamalarını anlama, BDT ile tetikleyici–duygu–davranış zincirini çalışma.",
    icon: Flame,
    keywords:
      "öfke kontrol bozukluğu nasıl anlaşılır, öfke kontrolü terapisi, öfke kontrolü psikolog, öfke kontrolü terapisti",
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
  title: "Online Psikolog ve Terapi",
  description:
    "Online psikolog randevusu, online terapi ve online psikoterapi ile İstanbul ve Türkiye genelinde esnek seans planı. Güvenli görüşme ortamı ve randevu disiplini önerisi.",
  keywords:
    "online psikolog randevu, online terapi, online psikolog tavsiye, online psikolojik danışmanlık, online psikoterapi, online psikolog, online psikoterapi merkezi",
};

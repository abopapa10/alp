import Link from "next/link";
import {
  IconCommunicationWall,
  IconEmotionalDistance,
  IconParentingBalance,
  IconTrustRepair,
} from "@/components/couple-therapy/RelationshipDynamicsIcons";
import { siteConfig } from "@/lib/site";

const dynamics = [
  {
    title: "İletişim kopuklukları ve “duvar örme”",
    body: "Eleştiri, savunma veya sessiz çekilme gibi kalıplar tartışmayı çözmek yerine mesafe üretir. Terapide bu “duvar örme” anlarını yavaşlatıp, duygu ve ihtiyaçların daha güvenli biçimde dile gelmesine çalışırız.",
    Icon: IconCommunicationWall,
  },
  {
    title: "Güven kaybı ve sadakatsizlik sonrası süreç",
    body: "Güven ihlali sonrası onarım kişiye ve ilişkiye özeldir. Erken aşamada şeffaflık, sınır ve güvenlik ihtiyaçları konuşulur; acele “normale dönelim” baskısı yerine adım adım, yargısız bir tempo hedeflenir.",
    Icon: IconTrustRepair,
  },
  {
    title: "Ebeveynlik rolleri ve ilişki dengesi",
    body: "Çocuklar geldiğinde çiftin “biz” alanı sık sık geri plana düşer. Rollerin adil paylaşımı, yorgunluk ve suçluluk döngüleri ve ortak ebeveynlik stratejileri üzerinden bağ yeniden görünür hale getirilebilir.",
    Icon: IconParentingBalance,
  },
  {
    title: "Duygusal uzaklaşma ve yalnızlık hissi",
    body: "Yan yana olup yalnız hissetmek, yakınlık ihtiyacının bastırıldığı veya reddedildiği örüntülerle ilişkilidir. Terapide bu uzaklığın altındaki korku ve beklentiler, suçlama yerine anlamlandırılarak ele alınır.",
    Icon: IconEmotionalDistance,
  },
] as const;

const relatedArticles = [
  {
    href: "/toksik-iliski-nedir",
    label: "Toksik ilişki nedir?",
    hint: "Belirtiler ve sağlıklı sınırlar",
  },
  {
    href: "/narsizm-ne-demek",
    label: "Narsizm ne demek?",
    hint: "İlişkide örüntüler ve bağlanma",
  },
  {
    href: "/manipulasyon-nedir",
    label: "Manipülasyon rehberi",
    hint: "Duygusal ve ilişkisel dinamikler",
  },
  {
    href: "/love-bombing-nedir",
    label: "Love bombing nedir?",
    hint: "Yoğun ilgi ve manipülasyon",
  },
  {
    href: "/ghosting-ne-demek",
    label: "Ghosting ne demek?",
    hint: "İletişimin kesilmesi ve etkileri",
  },
  {
    href: "/borderline-ne-demek",
    label: "Borderline ne demek?",
    hint: "Yoğun duygular ve ilişkiler",
  },
] as const;

export function CiftEvlilikExtendedSections() {
  return (
    <>
      <section
        className="mt-10 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-brand-sky/50 via-white to-slate-50/90 p-6 shadow-sm md:mt-12 md:p-8"
        aria-labelledby="couple-system-heading"
      >
        <h2
          id="couple-system-heading"
          className="font-display text-2xl font-bold tracking-tight text-brand-navy md:text-3xl"
        >
          İlişkiyi bir sistem olarak anlamak
        </h2>
        <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-800">
          <p>
            Çift ve evlilik terapisinde sıkça vurgulanan sistem yaklaşımı şunu öne çıkarır: sorun yalnızca tarafların
            “kişilik kusurları”ndan ibaret değildir; iki kişi arasında kurulan etkileşimin yapısı, tekrarlayan
            tetikleyiciler ve korunma stratejileri de tablonun parçasıdır. Tartışmalar çoğu zaman tek bir olaydan çok,
            yıllar içinde oturan bir iletişim döngüsünün güncel yüzüdür.
          </p>
          <p>
            Bu çerçevede terapinin danışanı yalnızca bir birey değil, <strong className="font-semibold text-brand-navy">ilişkinin kendisi</strong> olarak ele alınır. Amacımız bir tarafı haklı çıkarmak değil; çiftin
            birbirine karşı değil, birlikte taşıdıkları döngüye karşı durmasını desteklemektir.
          </p>
          <p>
            Döngüleri kırmak için terapist, çiftin içinden bakıldığında görünmeyen tekrarları dışarıdan bir gözle
            adlandırır: “Burada yine aynı iki uç devreye girdi” gibi yavaşlatıcı yorumlar, savunmaların yumuşamasına ve
            ihtiyaçların duyulmasına zemin açar. Böylece tartışma, sürekli aynı noktaya çarpan bir kısır döngüden çıkıp,
            onarılabilir bir iletişim pratiğine dönüşebilir.
          </p>
        </div>
      </section>

      <section className="mt-12 md:mt-14" aria-labelledby="dynamics-heading">
        <h2
          id="dynamics-heading"
          className="font-display text-2xl font-bold tracking-tight text-brand-navy md:text-3xl"
        >
          Sık karşılaşılan ilişki dinamikleri
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          Aşağıdaki başlıklar klinik pratikte sık görülen temalara işaret eder; her çiftin hikâyesi farklı olsa da bu
          alanlarda çalışmak ilişkiyi güçlendirmeye yardımcı olabilir.
        </p>
        <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dynamics.map(({ title, body, Icon }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-sky/80 text-brand-navy">
                <Icon className="size-8" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{title}</h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-slate-700">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <aside
        className="mt-10 rounded-2xl border border-brand-navy/15 bg-gradient-to-r from-brand-navy/[0.06] via-white to-brand-sky/40 p-6 md:mt-12 md:flex md:items-center md:justify-between md:gap-8 md:p-8"
        aria-labelledby="couple-mid-cta-heading"
      >
        <div className="min-w-0 max-w-2xl">
          <h2 id="couple-mid-cta-heading" className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            İlişkinizdeki döngüleri birlikte fark edelim
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-800">
            Beşiktaş kliniğimizde veya online platformda seans oluşturmak için randevu alabilirsiniz.
          </p>
        </div>
        <div className="mt-5 shrink-0 md:mt-0">
          <Link
            href="/#iletisim"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-center text-base font-bold text-white shadow-md transition-colors hover:bg-brand-accent-hover md:w-auto"
          >
            Randevu bilgisi al
          </Link>
          <p className="mt-2 text-center text-sm text-slate-600 md:text-right">
            veya{" "}
            <a
              href={siteConfig.whatsappUrl}
              className="font-semibold text-brand-navy underline decoration-brand-accent/60 underline-offset-2 hover:text-brand-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            üzerinden yazın
          </p>
        </div>
      </aside>

      <section className="mt-12 md:mt-14" aria-labelledby="related-reading-heading">
        <h2
          id="related-reading-heading"
          className="font-display text-2xl font-bold tracking-tight text-brand-navy md:text-3xl"
        >
          İlişki dinamikleri hakkında okuyabilecekleriniz
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          Aşağıdaki bilgilendirici sayfalar, çift sürecinizi destekleyen psiko-eğitim okumaları sunar; tanı koymaz,
          yerine geçmez.
        </p>
        <ul className="mt-8 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-accent/40 hover:shadow-md"
              >
                <div>
                  <span className="font-display text-lg font-semibold text-brand-navy group-hover:text-brand-accent">
                    {item.label}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.hint}</p>
                </div>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-navy">
                  Sayfaya git
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

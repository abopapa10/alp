import type { Metadata } from "next";
import type { ComponentType, ReactNode } from "react";
import {
  AlertTriangle,
  BookOpen,
  Heart,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Narsizm Ne Demek? Narsist ve Narsisistik Kişilik Hakkında Bilgi",
  description:
    "Narsizm ne demek, narsist ne demek, narsisistik kişilik bozukluğu nedir? Bencillikten farkı, belirtiler ve ilişkilerde dikkat edilecekler — genel bilgilendirme.",
  keywords: [
    "narsizm ne demek",
    "narsist ne demek",
    "narsisistik ne demek",
    "narsistik kişilik bozukluğu nedir",
    "narsist erkek belirtileri",
    "narsist kadın özellikleri",
    "bencillik ne demek",
  ],
  alternates: { canonical: "/narsizm-ne-demek" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Narsizm Ne Demek? | Psk. Ahmet Alparslan Sancar",
    description:
      "Narsizm, narsist ve narsisistik kişilik hakkında akademik çerçevede özet bilgilendirme.",
    url: `${siteConfig.url}/narsizm-ne-demek`,
  },
};

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  children: ReactNode;
}) {
  return (
    <h2 className="mt-10 flex items-start gap-3 font-display text-xl font-bold text-brand-navy md:mt-12 md:text-2xl">
      <Icon
        className="mt-0.5 size-7 shrink-0 text-slate-500 md:size-8"
        strokeWidth={1}
        aria-hidden
      />
      <span>{children}</span>
    </h2>
  );
}

export default function NarsizmNeDemekPage() {
  return (
    <LegalDocumentShell path="/narsizm-ne-demek" breadcrumbLabel="Narsizm ne demek?">
      <article className="mt-6">
        <h1 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
          Narsizm ne demek?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-800">
          Bu sayfa, sık aranan ifadeler olan{" "}
          <strong className="font-semibold text-brand-navy">narsisistik ne demek</strong>,{" "}
          <strong className="font-semibold text-brand-navy">narsist ne demek</strong> ve{" "}
          <strong className="font-semibold text-brand-navy">narsistik kişilik bozukluğu nedir</strong>{" "}
          sorularına yönelik <strong>genel ve bilgilendirici</strong> bir çerçeve sunar; tanı koymaz ve
          kişisel değerlendirmenin yerine geçmez.
        </p>

        <SectionTitle icon={BookOpen}>Kavramlar: narsizm, narsist, narsisistik</SectionTitle>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
          <p>
            <strong>Narsizm ne demek</strong> sorusu, günlük dilde genellikle aşırı övgüye ihtiyaç duyma,
            başkalarının sınırlarını göz ardı etme ve empati eksikliği ile ilişkilendirilen bir çerçeveyi
            çağrıştırır. Akademik ve klinik literatürde ise narsizm; özellikle{" "}
            <strong>grandiyöz benlik</strong>, <strong>onay ve hayranlık arayışı</strong> ve{" "}
            <strong>eleştiriye karşı kırılganlık</strong> gibi örüntülerle tanımlanır.
          </p>
          <p>
            <strong>Narsist ne demek</strong> dendiğinde çoğu zaman bu özelliklerin belirgin olduğu kişiler
            kastedilir. <strong>Narsisistik ne demek</strong> veya <strong>narsistik ne demek</strong>{" "}
            ifadeleri ise aynı kökten gelir ve kişilik örüntülerini ya da ilişki dinamiklerini tarif etmek
            için kullanılır. Aramalarda bazen <strong>narsiz ne demek</strong> veya{" "}
            <strong>narsıst ne demek</strong> gibi yazımlar da görülür; anlam açısından aynı başlık altında
            ele alınabilir.
          </p>
        </div>

        <SectionTitle icon={Scale}>Narsistik kişilik bozukluğu nedir?</SectionTitle>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
          <p>
            <strong>Narsistik kişilik bozukluğu nedir</strong> sorusunun yanıtı, tanı sistemlerinde (örneğin
            DSM-5-TR) özetlenen <strong>kalıcı ve esnek olmayan</strong> kişilik örüntülerine dayanır. Klinik
            düzeyde sık vurgulanan alanlar arasında grandiyozite, özel olma iddiası, aşırı hayranlık
            beklentisi, empati yetersizliği ve ilişkilerde sömürücü/çıkarcı tutumlar sayılabilir. Bu liste
            tanı kriterlerinin tamamı değildir; <strong>yalnızca uzman görüşmesiyle</strong> değerlendirme
            yapılabilir.
          </p>
          <p>
            Günlük hayatta herkes zaman zaman özgüven veya onay ihtiyacı yaşayabilir; bu durum tek başına
            bir bozukluk anlamına gelmez. Bozukluk düşüncesi ancak belirtilerin{" "}
            <strong>uzun süreli, yaygın ve işlevsellikte belirgin sorun</strong> oluşturmasıyla gündeme
            gelir.
          </p>
        </div>

        <SectionTitle icon={Sparkles}>Bencillik ne demek; narsizmle aynı mı?</SectionTitle>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
          <p>
            <strong>Bencillik ne demek</strong> sorusunda genellikle başkalarının ihtiyaçlarını ikinci plana
            atma veya paylaşımda dengeyi kaçırma kastedilir. Bencillik durumsal ve bağlama bağlı olabilir.
            Narsistik örüntülerde ise sıklıkla <strong>benlik düzenlemesi</strong>,{" "}
            <strong>statü ve onay</strong> üzerinden kurulan ilişkiler ve{" "}
            <strong>eleştiride aşırı savunma</strong> gibi daha yapısal temalar öne çıkar. İkisi bazen
            örtüşse de eş anlamlı değildir.
          </p>
        </div>

        <SectionTitle icon={Users}>Narsist erkek belirtileri ve narsist kadın özellikleri</SectionTitle>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
          <p>
            Arama motorlarında <strong>narsist erkek belirtileri</strong> ve{" "}
            <strong>narsist kadın özellikleri</strong> gibi ifadeler sık yazılır. Klinik açıdan bu
            özellikler <strong>cinsiyete özgü değildir</strong>; grandiyozite, duygusal manipülasyon
            riskleri veya ilişkide güç asimetrisi herkes için görülebilir. Toplumsal roller bazen
            davranışların dışa yansıma biçimini etkileyebilir; bu nedenle etiketlemek yerine{" "}
            <strong>davranış örüntülerini</strong> gözlemlemek daha sağlıklıdır.
          </p>
          <p>
            İlişkide dikkat çeken bazı işaretler (tanı değil, genel farkındalık için): sürekli kendini
            merkeze alma, karşı tarafın duygularını sürekli küçümseme, özür ve geri bildirimden kaçınma,
            başarıyı tek taraflı sahiplenme veya &quot;her zaman haklı olma&quot; ihtiyacı. Bu işaretler
            başka psikolojik süreçlerle de açıklanabilir; <strong>teşhis için mutlaka uzman değerlendirmesi</strong>{" "}
            gerekir.
          </p>
        </div>

        <SectionTitle icon={Heart}>
          Narsist bir kadınla birlikte olmak, narsist erkekle birlikte olmak
        </SectionTitle>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
          <p>
            <strong>Narsist bir kadınla birlikte olmak</strong> veya{" "}
            <strong>narsist erkekle birlikte olmak</strong> gibi aramalar, çoğu zaman ilişkide{" "}
            <strong>tükenmişlik, güvensizlik ve duygusal istismar</strong> kaygılarıyla bağlantılıdır.
            Güvenli bir ilişkide karşılıklı saygı, duygu ifadesi ve sınırların korunması esastır. Tek
            taraflı fedakârlık, sürekli suçluluk hissi veya &quot;asla yeterince iyi olamama&quot; hissi
            uzun vadede ruh sağlığını zorlayabilir.
          </p>
          <p>
            Bu tür deneyimlerde bireysel terapi; sınırlar, öz-değer ve iletişim becerileri üzerinde
            çalışmak için faydalı olabilir. Çift terapisi yalnızca <strong>her iki tarafın güvenliğe ve
            değişime açık olduğu</strong> durumlarda anlamlıdır; şiddet veya ciddi güç asimetrisi varsa önce
            güvenlik planlaması önceliklidir.
          </p>
        </div>

        <SectionTitle icon={AlertTriangle}>Önemli uyarı</SectionTitle>
        <p className="mt-4 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-4 text-sm leading-relaxed text-slate-800 md:text-[15px]">
          Bu metin <strong>eğitim amaçlıdır</strong>, tıbbi veya psikiyatrik tanı yerine geçmez. Kendinize
          veya yakınınıza bir tanı etiketi yapıştırmadan önce bir <strong>ruh sağlığı uzmanı</strong> ile
          görüşmeniz önerilir. Acil risk durumunda 112&apos;yi arayınız.
        </p>

        <section
          className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-sky/90 to-white p-6 shadow-md md:p-8"
          aria-labelledby="narsizm-cta-heading"
        >
          <h2
            id="narsizm-cta-heading"
            className="font-display text-xl font-bold text-brand-navy md:text-2xl"
          >
            İlişki veya kişilik örüntüleri hakkında konuşmak ister misiniz?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-800">
            Beşiktaş&apos;taki kliniğimde veya online seanslarla, <strong>{siteConfig.name}</strong> eşliğinde
            güvenli bir çerçevede değerlendirme ve terapi süreci planlanabilir.
          </p>
          <div className="mt-6 max-w-xl">
            <CTAGroup />
          </div>
        </section>

        <p className="mt-8 text-sm leading-relaxed text-slate-800">
          Kaynak çerçevesi: Kişilik bozuklukları sınıflandırmaları (DSM-5-TR), bağlanma ve kişilik
          psikolojisi alanında yayınlanmış gözden geçirme ve meta-analiz çalışmaları; bu sayfadaki özetler
          bireysel klinik kararın yerine geçmez.
        </p>
      </article>
    </LegalDocumentShell>
  );
}

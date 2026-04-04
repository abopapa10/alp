import type { Metadata } from "next";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri işleme, saklama ve haklarınıza ilişkin aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <LegalDocumentShell path="/kvkk" breadcrumbLabel="KVKK">
      <h1 className="mt-6 font-display text-3xl font-bold text-brand-navy">KVKK Aydınlatma Metni</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          {siteConfig.name} olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
          kişisel verileriniz hukuka ve dürüstlük kurallarına uygun şekilde işlenir; güvenli ortamlarda
          saklanır ve yetkisiz erişime karşı korunur.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">Veri sorumlusu</h2>
        <p>
          Veri sorumlusu: {siteConfig.name}. İletişim: {siteConfig.email}, {siteConfig.phoneDisplay}.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">İşlenen veriler ve amaçlar</h2>
        <p>
          Randevu ve terapi sürecinde kimlik, iletişim, sağlık ve ödeme bilgileri gibi veriler yalnızca
          hizmetin yürütülmesi, yasal yükümlülükler ve açık rızanız kapsamında işlenebilir.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">Haklarınız</h2>
        <p>
          KVKK’nın 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, düzeltme ve silme
          talepleri ile hukuka aykırı işlem nedeniyle zararın giderilmesini isteme haklarına sahipsiniz.
        </p>
        <p className="mt-6 text-sm text-slate-800">
          Bu metin özet bilgilendirme niteliğindedir; kurumsal süreçlerinize göre hukuk danışmanlığı ile
          güncellenmelidir.
        </p>
      </div>
    </LegalDocumentShell>
  );
}

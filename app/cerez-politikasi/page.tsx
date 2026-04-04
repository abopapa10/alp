import type { Metadata } from "next";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";

export const metadata: Metadata = {
  title: "Çerez Aydınlatma Metni",
  description:
    "Web sitesinde kullanılan çerez türleri, amaçları ve tercih yönetimi hakkında bilgilendirme.",
  alternates: { canonical: "/cerez-politikasi" },
  robots: { index: true, follow: true },
};

export default function CookiePage() {
  return (
    <LegalDocumentShell path="/cerez-politikasi" breadcrumbLabel="Çerez Aydınlatması">
      <h1 className="mt-6 font-display text-3xl font-bold text-brand-navy">Çerez Aydınlatma Metni</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          Web sitemiz, temel teknik işlevler ve kullanıcı deneyimini iyileştirmek amacıyla çerez ve benzeri
          teknolojiler kullanabilir. Zorunlu çerezler sitenin çalışması için gereklidir.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">Çerez türleri</h2>
        <p>
          Oturum çerezleri tarayıcı kapatıldığında silinir; kalıcı çerezler belirli bir süre cihazınızda kalır.
          Üçüncü taraf çerezleri varsa (ör. harita embed), ilgili sağlayıcının politikaları geçerlidir.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">Yönetim</h2>
        <p>Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz.</p>
        <p className="mt-6 text-sm text-slate-800">
          Bu metin genel bilgilendirme amaçlıdır; KVKK ve reklam etiketi gerekliliklerine göre güncellenmelidir.
        </p>
      </div>
    </LegalDocumentShell>
  );
}

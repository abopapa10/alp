import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentShell } from "@/components/legal/LegalDocumentShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Web sitesi ve terapi hizmetleri kapsamında kişisel verilerin gizliliği, kullanımı ve üçüncü taraflarla paylaşım ilkeleri.",
  alternates: { canonical: "/gizlilik-politikasi" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentShell path="/gizlilik-politikasi" breadcrumbLabel="Gizlilik Politikası">
      <h1 className="mt-6 font-display text-3xl font-bold text-brand-navy">Gizlilik Politikası</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          Bu politika, {siteConfig.name} web sitesini ziyaret eden kullanıcıların ve hizmet alan
          danışanların gizliliğini korumayı amaçlar. Terapi sırasında paylaşılan içerikler meslek etiği ve
          yasal çerçeve ile korunur.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">Toplanan bilgiler</h2>
        <p>
          İletişim formları, telefon, e-posta veya mesajlaşma kanalları üzerinden sağladığınız bilgiler yalnızca
          randevu ve danışmanlık sürecinin yürütülmesi için kullanılır.
        </p>
        <h2 className="mt-8 font-display text-xl font-bold text-brand-navy">Çerezler</h2>
        <p>
          Site performansı ve tercih hatırlama için sınırlı çerezler kullanılabilir. Ayrıntılar için{" "}
          <Link href="/cerez-politikasi" className="font-semibold text-brand-navy hover:underline">
            Çerez Aydınlatması
          </Link>{" "}
          sayfasını inceleyiniz.
        </p>
        <p className="mt-6 text-sm text-slate-800">
          Bu metin genel bir şablondur; yayından önce hukuki gözden geçirme önerilir.
        </p>
      </div>
    </LegalDocumentShell>
  );
}

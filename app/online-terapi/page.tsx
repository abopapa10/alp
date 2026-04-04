import type { Metadata } from "next";
import { ServiceLayout } from "@/components/templates/ServiceLayout";
import { generateOnlineTerapiMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateOnlineTerapiMetadata();
}

export default function OnlineTerapiPage() {
  return (
    <ServiceLayout
      title="Online Terapi ve Online Psikolog Randevusu"
      description="Online psikoterapi ve online psikolojik danışmanlık ile coğrafi engel olmadan düzenli seans. Görüntülü görüşme için stabil internet, gizli ve sakin bir ortam ve randevu disiplini öneriyorum."
      canonicalPath="/online-terapi"
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Online Terapi" },
      ]}
    >
      <section className="mt-8 space-y-8" aria-label="Online terapi bilgileri">
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
            Online psikoterapi merkezi kalitesinde süreç
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Online psikolog tavsiye arayanlar için ilk görüşmede formatı netleştiririz: seans süresi, gizlilik ve
            acil durum planlaması. Online terapi randevusu oluşturmak için telefon veya WhatsApp hattımızı
            kullanabilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Kimler için uygun?</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Seyahat, iş yoğunluğu veya İstanbul dışında yaşayan danışanlar için online psikoterapi pratik bir
            çözümdür. Yüz yüze terapiye dönüş her zaman mümkündür; ana sayfamızdan yüz yüze hizmetler hakkında
            bilgi alabilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">Gizlilik ve KVKK</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Online psikolojik danışmanlık hizmetinde veri güvenliği için güvenilir platformlar tercih edilmeli ve
            ortamın dinlenmeye kapalı olduğundan emin olunmalıdır. Detaylar için çerez ve gizlilik sayfalarımıza
            göz atabilirsiniz.
          </p>
        </section>
      </section>
    </ServiceLayout>
  );
}

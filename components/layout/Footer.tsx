import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-navy text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              Beşiktaş, İstanbul — psikoterapi ve psikolojik danışmanlık.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Hızlı bağlantılar</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/online-terapi" className="hover:text-white">
                  Online Terapi
                </Link>
              </li>
              <li>
                <Link href="/narsizm-ne-demek" className="hover:text-white">
                  Narsizm ne demek?
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-white">
                  KVKK
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-white">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="hover:text-white">
                  Çerez Aydınlatması
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">İletişim</p>
            <p className="mt-3 text-sm">{siteConfig.address.street}</p>
            <p className="text-sm">{siteConfig.address.city}</p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              data-ads-conversion="contact"
              className="mt-2 inline-block text-sm font-medium text-brand-accent hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
        <p className="mt-8 rounded-lg border border-slate-600/50 bg-slate-900/40 p-4 text-xs leading-relaxed text-slate-300">
          Bu web sitesi acil psikiyatrik krizler için değildir. Acil durumlarda
          112&apos;yi arayınız.
        </p>
        <p className="mt-6 text-center text-xs text-slate-300">
          © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

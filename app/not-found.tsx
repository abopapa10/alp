import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-16 text-center">
      <h1 className="font-display text-2xl font-bold text-brand-navy">Sayfa bulunamadı</h1>
      <p className="mt-4 text-slate-800">
        Aradığınız adres taşınmış veya silinmiş olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-brand-accent px-5 py-3 font-bold text-white hover:bg-brand-accent-hover"
      >
        Ana Sayfaya dön
      </Link>
    </div>
  );
}

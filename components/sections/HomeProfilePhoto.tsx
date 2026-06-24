import Image from "next/image";
import { siteConfig } from "@/lib/site";

const profilePhoto = "/images/besiktas psikolog a. alparslan sancar.webp";

export function HomeProfilePhoto() {
  return (
    <section className="bg-white py-8 md:py-12" aria-label="Beşiktaş psikolog fotoğrafı">
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm md:max-w-md lg:max-w-lg">
          <Image
            src={profilePhoto}
            alt={`Beşiktaş psikolog ${siteConfig.name}`}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
          />
        </div>
      </div>
    </section>
  );
}

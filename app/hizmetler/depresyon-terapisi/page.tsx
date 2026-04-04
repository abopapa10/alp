import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("depresyon-terapisi");
}

export default function DepresyonTerapisiPage() {
  return <ServicePageView slug="depresyon-terapisi" />;
}

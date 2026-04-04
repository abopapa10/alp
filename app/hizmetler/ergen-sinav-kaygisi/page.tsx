import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("ergen-sinav-kaygisi");
}

export default function ErgenSinavKaygisiPage() {
  return <ServicePageView slug="ergen-sinav-kaygisi" />;
}

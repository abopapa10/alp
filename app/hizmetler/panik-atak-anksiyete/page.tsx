import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("panik-atak-anksiyete");
}

export default function PanikAtakAnksiyetePage() {
  return <ServicePageView slug="panik-atak-anksiyete" />;
}

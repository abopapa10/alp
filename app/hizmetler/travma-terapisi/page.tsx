import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("travma-terapisi");
}

export default function TravmaTerapisiPage() {
  return <ServicePageView slug="travma-terapisi" />;
}

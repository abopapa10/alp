import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("cift-evlilik-terapisi");
}

export default function CiftEvlilikTerapisiPage() {
  return <ServicePageView slug="cift-evlilik-terapisi" />;
}

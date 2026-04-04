import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("ofke-kontrolu");
}

export default function OfkeKontroluPage() {
  return <ServicePageView slug="ofke-kontrolu" />;
}

import type { Metadata } from "next";
import { CiftEvlilikTerapisiPageView } from "@/components/templates/CiftEvlilikTerapisiPageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("cift-evlilik-terapisi");
}

export default function CiftEvlilikTerapisiPage() {
  return <CiftEvlilikTerapisiPageView />;
}

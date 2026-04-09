import type { Metadata } from "next";
import { TravmaServicePageView } from "@/components/templates/TravmaServicePageView";
import { generateServicePageMetadata } from "@/lib/service-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generateServicePageMetadata("travma-terapisi");
}

export default function TravmaTerapisiPage() {
  return <TravmaServicePageView />;
}

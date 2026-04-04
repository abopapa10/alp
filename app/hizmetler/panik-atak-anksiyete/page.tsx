import { ServicePageView } from "@/components/templates/ServicePageView";
import { servicePageMetadata } from "@/lib/service-metadata";

export const metadata = servicePageMetadata("panik-atak-anksiyete");

export default function PanikAtakAnksiyetePage() {
  return <ServicePageView slug="panik-atak-anksiyete" />;
}

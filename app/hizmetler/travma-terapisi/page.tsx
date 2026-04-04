import { ServicePageView } from "@/components/templates/ServicePageView";
import { servicePageMetadata } from "@/lib/service-metadata";

export const metadata = servicePageMetadata("travma-terapisi");

export default function TravmaTerapisiPage() {
  return <ServicePageView slug="travma-terapisi" />;
}

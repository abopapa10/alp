import { ServicePageView } from "@/components/templates/ServicePageView";
import { servicePageMetadata } from "@/lib/service-metadata";

export const metadata = servicePageMetadata("ergen-sinav-kaygisi");

export default function ErgenSinavKaygisiPage() {
  return <ServicePageView slug="ergen-sinav-kaygisi" />;
}

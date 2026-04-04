import { ServicePageView } from "@/components/templates/ServicePageView";
import { servicePageMetadata } from "@/lib/service-metadata";

export const metadata = servicePageMetadata("cift-evlilik-terapisi");

export default function CiftEvlilikTerapisiPage() {
  return <ServicePageView slug="cift-evlilik-terapisi" />;
}

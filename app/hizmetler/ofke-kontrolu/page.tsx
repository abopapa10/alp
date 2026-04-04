import { ServicePageView } from "@/components/templates/ServicePageView";
import { servicePageMetadata } from "@/lib/service-metadata";

export const metadata = servicePageMetadata("ofke-kontrolu");

export default function OfkeKontroluPage() {
  return <ServicePageView slug="ofke-kontrolu" />;
}

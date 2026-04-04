import { ServicePageView } from "@/components/templates/ServicePageView";
import { servicePageMetadata } from "@/lib/service-metadata";

export const metadata = servicePageMetadata("depresyon-terapisi");

export default function DepresyonTerapisiPage() {
  return <ServicePageView slug="depresyon-terapisi" />;
}

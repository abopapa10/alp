import {
  Activity,
  Brain,
  Flame,
  Heart,
  Shield,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/lib/service-pages";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  heart: Heart,
  activity: Activity,
  shield: Shield,
  sun: Sun,
  flame: Flame,
  brain: Brain,
};

type Props = { name: ServiceIcon; className?: string };

export function ServiceTitleIcon({ name, className }: Props) {
  const Icon = iconMap[name];
  return (
    <Icon
      className={className ?? "size-8 shrink-0 text-slate-500 md:size-9"}
      strokeWidth={1}
      aria-hidden
    />
  );
}

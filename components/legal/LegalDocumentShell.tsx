import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

type Props = {
  path: string;
  breadcrumbLabel: string;
  children: ReactNode;
};

export function LegalDocumentShell({ path, breadcrumbLabel, children }: Props) {
  const crumbs = [{ label: "Ana Sayfa", href: "/" }, { label: breadcrumbLabel }];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} path={path} />
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Breadcrumb items={crumbs} />
        {children}
      </div>
    </>
  );
}

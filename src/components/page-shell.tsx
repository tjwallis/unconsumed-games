import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteNav } from "@/components/site/nav";
import { NotifyProvider } from "@/components/site/notify";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <NotifyProvider>
      <a href="#content" className="skip">
        Skip to content
      </a>
      <SiteNav />
      <main id="content">{children}</main>
      <SiteFooter />
    </NotifyProvider>
  );
}

/** Navy header with the sunburst and ember bar, for every page except home. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  aside,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="ph" data-theme="dark">
      <div className={"wrap ph__in" + (aside ? " ph__in--aside" : "")}>
        <div className="ph__txt">
          <p className="uc-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lead ? <p className="uc-lead">{lead}</p> : null}
          {children}
        </div>
        {aside}
      </div>
    </section>
  );
}

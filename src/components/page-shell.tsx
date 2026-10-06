import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div id="top" className="min-h-screen bg-parchment text-navy">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" key={pathname} className="page-enter">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

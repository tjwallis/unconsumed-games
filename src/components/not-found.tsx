import { Button } from "@/components/ds/actions";
import { PageHeader, PageShell } from "@/components/page-shell";

/** Shown for unknown URLs: by the router in the app, and as /404 in the static build. */
export function NotFound() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Not found"
        title="This page is not here."
        lead="The page you asked for has moved or never existed. The rest of the site is still standing."
      >
        <div className="ph__cta">
          <Button href="/" iconRight="arrow-right">
            Return home
          </Button>
          <Button href="/press" variant="secondary">
            Press kit
          </Button>
        </div>
      </PageHeader>
    </PageShell>
  );
}

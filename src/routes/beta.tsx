import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { ClosedBetaSignupForm } from "@/components/site/beta";
import { POSES } from "@/lib/covenanter";

/**
 * Unlisted closed-beta sign-up. Nothing else on the site links here.
 * The query string is left on the address, as on /launch: no search schema
 * rewrites it, so ?utm_source=… stays.
 */
export const Route = createFileRoute("/beta")({
  head: () => ({
    meta: [
      { title: "Join the Covenanter closed beta · Unconsumed Games" },
      {
        name: "description",
        content:
          "Use the email tied to your Apple ID on iPhone or iPad, or to your Google account on Android, and tell us which platform you will use.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: BetaPage,
});

function BetaPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Covenanter · Closed beta"
        title="Join the Covenanter closed beta."
        lead="Use the email tied to your Apple ID on iPhone or iPad, or to your Google account on Android, and tell us which platform you will use."
        aside={
          <div className="ph__art ph__art--scholar">
            <img
              src={POSES.hero}
              alt="The Scholar, a young man of 1560 in a long coat and flat cap, with a satchel and a Bible"
              width={346}
              height={660}
            />
          </div>
        }
      >
        <div className="beta-hero__form" id="join">
          <ClosedBetaSignupForm />
          <p className="uc-caption">
            We will write only about Covenanter. You can leave the list from any email.
          </p>
        </div>
      </PageHeader>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ds/actions";
import { PageHeader, PageShell } from "@/components/page-shell";
import { SignupForm } from "@/components/site/beta";
import { WAITLIST_NOTE } from "@/lib/beta";
import { POSES } from "@/lib/covenanter";

/**
 * Real waitlist page, not a redirect. The browser game’s Sign Up buttons use
 * https://www.unconsumedgames.com/launch?utm_source=wittenberg-1517
 * The same document is served on www and on the apex host, and the query string
 * stays on /launch (it is not rewritten away).
 */
export const Route = createFileRoute("/launch")({
  head: () => ({
    meta: [
      { title: "Join the waitlist · Covenanter · Unconsumed Games" },
      {
        name: "description",
        content:
          "The Covenanter closed beta is invite-only. Join the waitlist for news of the full launch.",
      },
    ],
  }),
  component: LaunchPage,
});

function LaunchPage() {
  const [fromWittenberg, setFromWittenberg] = useState(false);
  useEffect(() => {
    const src = new URLSearchParams(window.location.search).get("utm_source");
    setFromWittenberg(src === "wittenberg-1517");
  }, []);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Covenanter"
        title="Join the waitlist."
        lead={fromWittenberg ? `Welcome from Wittenberg 1517. ${WAITLIST_NOTE}` : WAITLIST_NOTE}
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
          <SignupForm withPlatform />
          <p className="uc-caption">
            We will write only about Covenanter. You can leave the list from any email.
          </p>
          <p className="launch__more">
            <a href="/beta#faq">Questions about the closed beta</a>
            <a href="/1517">Wittenberg 1517</a>
          </p>
        </div>
      </PageHeader>

      <section className="sec sec--light doc">
        <div className="wrap">
          <div className="beta-page__end">
            <Button size="lg" href="/#game" iconRight="arrow-right">
              Meet Covenanter
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

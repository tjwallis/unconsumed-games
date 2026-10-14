import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ds/actions";
import { PageShell } from "@/components/page-shell";
import { BETA, SELECTION } from "@/lib/beta";

/* Landing page for Kit's double opt-in: the form's confirmation email links here once the
   address is confirmed. Reached only from that email. Nothing on the site links to it, it is
   left out of the sitemap, and it asks search engines not to index or follow it. */
export const Route = createFileRoute("/beta_/confirmed")({
  head: () => ({
    meta: [
      { title: "You’re on the list · Covenanter · Unconsumed Games" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Confirmed,
});

function Confirmed() {
  return (
    <PageShell>
      <section className="hero confirmed" data-theme="dark" data-screen-label="Beta confirmed">
        <div className="scene" aria-hidden="true">
          <i className="l sky" />
          <i className="l far" />
          <i className="l mid" />
          <i className="l near" />
          <span className="glow" />
        </div>
        <div className="wrap hero__in">
          <div className="hero__txt">
            <p className="uc-eyebrow confirmed__eyebrow">Covenanter · Closed beta</p>
            <h1>
              You’re on <em>the list.</em>
            </h1>
            <p className="hero__tag">Games that abide.</p>
            <p className="hero__lead">
              Thank you for confirming your email address. Your request to join the Covenanter
              closed beta is in. The beta opens on Reformation Day, {BETA.dateLong} 2026, on iPhone,
              iPad and Android.
            </p>
            <p className="hero__lead confirmed__next">
              {SELECTION} Invites go out from {BETA.dateLong}, so watch your inbox, and check your
              spam and promotions folders too.
            </p>
            <blockquote className="confirmed__verse">
              Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I
              say, on the LORD.
              <cite>Psalm 27:14</cite>
            </blockquote>
            <div className="hero__cta">
              <Button size="lg" href="/" iconLeft="arrow-left">
                Return home
              </Button>
              <Button size="lg" variant="secondary" href="/#game" iconRight="arrow-right">
                Meet Covenanter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

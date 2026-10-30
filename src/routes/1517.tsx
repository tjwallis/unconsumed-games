import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ds/actions";
import { PageShell } from "@/components/page-shell";
import { WittenbergScene } from "@/components/wittenberg/scene";
import { WITTENBERG_PLAY_URL, WITTENBERG_SHARE, wittenbergShareImage } from "@/lib/wittenberg";

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://unconsumedgames.com").replace(
  /\/$/,
  "",
);
const IMAGE = wittenbergShareImage(SITE_URL);

export const Route = createFileRoute("/1517")({
  head: () => ({
    meta: [
      { title: WITTENBERG_SHARE.title },
      { name: "description", content: WITTENBERG_SHARE.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Unconsumed Games" },
      { property: "og:title", content: WITTENBERG_SHARE.title },
      { property: "og:description", content: WITTENBERG_SHARE.description },
      { property: "og:url", content: `${SITE_URL}/1517` },
      { property: "og:image", content: IMAGE },
      { property: "og:image:width", content: WITTENBERG_SHARE.imageWidth },
      { property: "og:image:height", content: WITTENBERG_SHARE.imageHeight },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: WITTENBERG_SHARE.title },
      { name: "twitter:description", content: WITTENBERG_SHARE.description },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/1517` }],
  }),
  component: WittenbergPage,
});

function WittenbergPage() {
  return (
    <PageShell>
      <section className="whero" data-theme="dark" data-screen-label="Wittenberg 1517">
        <div className="whero__stage">
          <WittenbergScene parallax />
          <div className="whero__scrim" />
        </div>
        <img
          className="whero__luther"
          src="/art/wittenberg/luther-theses.png"
          alt="Martin Luther in a dark habit, with a hammer and a rolled sheet"
          width={480}
          height={720}
        />
        <div className="wrap whero__in">
          <div className="whero__txt">
            <p className="uc-eyebrow">Free in the browser</p>
            <h1>
              Wittenberg <em>1517</em>
            </h1>
            <p className="uc-lead">
              On 31 October 1517, Martin Luther posted the Ninety-five Theses in Wittenberg. One
              map. When you are done, the town is reformed.
            </p>
            <p className="whero__where">Plays on a phone or a computer.</p>
            <div className="whero__cta">
              <Button
                size="lg"
                href={WITTENBERG_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                iconRight="external-link"
              >
                Play in your browser
              </Button>
              <Button size="lg" variant="secondary" href="/launch" iconLeft="bell">
                Join the waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--light">
        <div className="wrap w1517-next">
          <p className="uc-eyebrow">Covenanter</p>
          <h2>The story continues in Scotland.</h2>
          <p className="uc-lead">
            Unconsumed Games creates Covenanter, a tale of the Scottish Reformation. The closed beta
            is invite-only. Join the waitlist for news of the full launch.
          </p>
          <div className="whero__cta">
            <Button size="lg" href="/launch" iconLeft="bell">
              Join the waitlist
            </Button>
            <Button size="lg" variant="secondary" href="/#game" iconRight="arrow-right">
              Meet Covenanter
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

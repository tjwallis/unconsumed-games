import { Button } from "@/components/ds/actions";
import { WittenbergScene } from "@/components/wittenberg/scene";
import { WITTENBERG_PLAY_URL } from "@/lib/wittenberg";

/** Home-page callout. Replaces the closed-beta band as the main call to action. */
export function WittenbergBand() {
  return (
    <section
      className="sec sec--light wb-sec"
      id="wittenberg"
      data-screen-label="05b Wittenberg 1517"
    >
      <div className="wrap">
        <div className="wb">
          <div className="wb__copy">
            <p className="uc-eyebrow">Free in the browser</p>
            <h2>Play the Wittenberg 1517 demo.</h2>
            <p className="uc-lead">
              Martin Luther posts the Ninety-five Theses on the Castle Church door in Wittenberg.
              One map, and the town is reformed.
            </p>
            <p className="wb__where">Plays on a phone or a computer.</p>
            <div className="wb__cta">
              <Button size="lg" href="/1517" iconRight="arrow-right">
                Play the demo
              </Button>
              <Button
                size="lg"
                variant="secondary"
                href={WITTENBERG_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                iconRight="external-link"
              >
                Play in your browser
              </Button>
            </div>
          </div>
          <div className="wb__frame">
            <WittenbergScene />
            <img
              className="wb__luther"
              src="/art/wittenberg/luther-theses.png"
              alt="Martin Luther in a dark habit, with a hammer and a rolled sheet"
              width={480}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

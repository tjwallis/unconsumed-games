import { Button } from "@/components/ds/actions";
import { WITTENBERG_PLAY_URL } from "@/lib/wittenberg";

/** Home-page card for the free browser game. */
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
            <p className="uc-eyebrow">New for Reformation Day</p>
            <h2>Wittenberg 1517</h2>
            <p className="uc-lead">
              On 31 October 1517, answer three disputations in Wittenberg’s market, write the
              Ninety-five Theses in Luther’s cell, and post them on the Castle Church door.
            </p>
            <div className="wb__cta">
              <Button
                size="lg"
                href={WITTENBERG_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                iconRight="external-link"
              >
                Play free in your browser
              </Button>
            </div>
          </div>
          <div className="wb__frame">
            <img
              className="wb__card"
              src="/art/wittenberg/og.jpg"
              alt="Title card for Wittenberg 1517, a dusk town by the water"
              width={1200}
              height={630}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

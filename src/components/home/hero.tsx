import type { CSSProperties } from "react";
import { Button } from "@/components/ds/actions";
import { Oval } from "@/components/site/parts";
import { castById } from "@/lib/covenanter";
import { WITTENBERG_PLAY_URL } from "@/lib/wittenberg";

const PROCESSION = ["willock", "methven", "goodman", "knox", "erskine", "lordjames", "winram"];

export function Hero({ onPick }: { onPick: (id: string) => void }) {
  return (
    <section className="hero" id="top" data-theme="dark" data-screen-label="01 Hero">
      <div className="scene" aria-hidden="true">
        <i className="l sky" />
        <i className="l far" />
        <i className="l mid" />
        <i className="l near" />
        <span className="glow" />
      </div>
      <div className="wrap hero__in">
        <div className="hero__txt">
          <div className="hero__news">
            <p className="hero__banner">
              New for Reformation Day: Wittenberg 1517, a free game you can play in your browser.
            </p>
            <div className="hero__news-cta">
              <Button
                size="sm"
                href={WITTENBERG_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                iconRight="external-link"
              >
                Play now
              </Button>
            </div>
          </div>
          <h1>
            Unconsumed <em>Games</em>
          </h1>
          <p className="hero__tag" title="“If any man’s work abide…” 1 Corinthians 3:14">
            Games that abide.
          </p>
          <p className="hero__lead">
            Unconsumed Games creates games grounded in the Word of God, for families to play
            together and for parents and teachers who teach the Bible, sound doctrine and the
            history of the Church.
          </p>
          <div className="hero__cta">
            <Button size="lg" href="#lasting" iconRight="arrow-right">
              Why they last
            </Button>
          </div>
        </div>
      </div>
      <div className="proc" role="group" aria-label="Characters from Covenanter">
        {PROCESSION.map((id, i) => (
          <button
            key={id}
            type="button"
            className={"pi" + (id === "knox" ? " pi--k" : "")}
            style={{ "--i": i } as CSSProperties}
            onClick={() => onPick(id)}
            aria-label={"Meet " + castById(id).name}
          >
            <Oval id={id} />
            <span className="pi__n">{castById(id).name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

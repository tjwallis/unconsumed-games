import type { CSSProperties } from "react";
import { Button } from "@/components/ds/actions";
import { useNotify } from "@/components/site/notify";
import { Oval } from "@/components/site/parts";
import { BETA, daysLeftLabel, useBeta } from "@/lib/beta";
import { castById } from "@/lib/covenanter";

const PROCESSION = ["willock", "methven", "goodman", "knox", "erskine", "lordjames", "winram"];

export function Hero({ onPick }: { onPick: (id: string) => void }) {
  const notify = useNotify();
  const { phase, daysLeft } = useBeta();
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
            <p className="uc-eyebrow">
              {phase === "open"
                ? "Covenanter · Closed beta now open"
                : `Covenanter · Closed beta opens ${BETA.dateLong}`}
              {daysLeft !== null ? (
                <span className="hero__days">{daysLeftLabel(daysLeft)}</span>
              ) : null}
            </p>
            <div className="hero__news-cta">
              <Button size="sm" onClick={notify.open} iconLeft="bell">
                Request to join
              </Button>
              <Button size="sm" variant="secondary" href="#game" iconRight="arrow-right">
                Turn aside and see
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
            history of the Church.{" "}
            {phase === "open"
              ? "Our first, Covenanter, is now in closed beta."
              : "Our first, Covenanter, opens its closed beta on Reformation Day, 31 October."}
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

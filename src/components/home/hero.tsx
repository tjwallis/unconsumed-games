import type { CSSProperties } from "react";
import { Button } from "@/components/ds/actions";
import { useNotify } from "@/components/site/notify";
import { Oval } from "@/components/site/parts";
import { castById } from "@/lib/covenanter";

const PROCESSION = ["willock", "methven", "goodman", "knox", "erskine", "lordjames", "winram"];

export function Hero({ onPick }: { onPick: (id: string) => void }) {
  const notify = useNotify();
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
          <p className="uc-eyebrow">
            Covenanter · Coming to <span className="nc">iOS</span> &amp; Android
          </p>
          <h1>
            Unconsumed <em>Games</em>
          </h1>
          <p className="hero__tag">Games which last.</p>
          <p className="hero__lead">
            Unconsumed Games makes video games grounded in the Word of God. They teach children the
            Bible, doctrine and history, and they are made to last.
          </p>
          <div className="hero__cta">
            <Button size="lg" href="#lasting" iconRight="arrow-right">
              Why they last
            </Button>
            <Button size="lg" variant="secondary" onClick={notify.open}>
              Notify me
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

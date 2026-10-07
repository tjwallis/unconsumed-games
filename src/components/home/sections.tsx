import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { Button, IconButton } from "@/components/ds/actions";
import { Badge } from "@/components/ds/display";
import { Input } from "@/components/ds/forms";
import { Icon, type IconName } from "@/components/ds/icon";
import { Tabs } from "@/components/ds/navigation";
import { useNotify } from "@/components/site/notify";
import { GoldDivider, Lozenges, Oval, Panel } from "@/components/site/parts";
import {
  CAST,
  CLAIMS,
  GROUPS,
  LADDER,
  POSES,
  SHOTS,
  VERSES,
  castById,
  shotSrc,
} from "@/lib/covenanter";

const PILLARS: [IconName, string, string][] = [
  [
    "book-open",
    "Grounded in the Word",
    "Every Truth the game teaches rests on Scripture, quoted from the Authorised Version.",
  ],
  [
    "scroll-text",
    "Good theology",
    "The doctrines of the Reformation are set out plainly, from the Word alone to Christ as sole Head of the Kirk.",
  ],
  [
    "landmark",
    "Bible, doctrine and history",
    "Children learn all three together, through real towns, people and events of the Scottish Reformation.",
  ],
  [
    "flame",
    "To the glory of God",
    "We make these games for the glory of God alone. Soli Deo Gloria.",
  ],
];

export function Lasting() {
  return (
    <section className="sec sec--light lasting" id="lasting" data-screen-label="02 Made to last">
      <div className="wrap">
        <div className="lasting__top">
          <div className="lasting__txt">
            <p className="uc-eyebrow">Why it lasts</p>
            <h2>Made to last.</h2>
            <p className="uc-lead">
              Most games are played and used up. We want ours to be remembered. A child who learns a
              verse, a doctrine or a true account of the past keeps it for life, and passes it on.
            </p>
            <blockquote className="verse">
              The grass withereth, the flower fadeth: but the word of our God shall stand for ever.
              <cite>Isaiah 40:8</cite>
            </blockquote>
          </div>
          <div className="plate">
            {POSES.handing ? (
              <img
                className="pose"
                src={POSES.handing}
                alt="John Knox hands an open Bible to Wee Jock"
                width={955}
                height={812}
                loading="lazy"
              />
            ) : (
              <div className="plate__row">
                <Oval id="knox" n={3} />
                <Oval id="boy" n={2} />
              </div>
            )}
            <p className="plate__cap">John Knox and Wee Jock · The Word passed on</p>
          </div>
        </div>
        <div className="pillars">
          {PILLARS.map(([icon, title, text]) => (
            <div className="pillar" key={title}>
              <Icon name={icon} size={32} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cast({ sel, setSel }: { sel: string; setSel: (id: string) => void }) {
  const c = castById(sel);
  return (
    <section className="sec cast" id="cast" data-theme="dark" data-screen-label="03 The cast">
      <div className="wrap">
        <header className="sh">
          <p className="uc-eyebrow">The cast</p>
          <h2>Those who went before.</h2>
          <p className="uc-lead">
            Covenanter is peopled by the men and women of the Scottish Reformation. Choose a
            portrait to meet them.
          </p>
        </header>
        <div className="cast__grid">
          <Panel className="feat">
            <div className="feat__in" key={c.id} aria-live="polite">
              {POSES.knox && c.id === "knox" ? (
                <div className="feat__stage">
                  <img
                    className="feat__pose"
                    src={POSES.knox}
                    alt="John Knox preaching"
                    width={572}
                    height={642}
                  />
                </div>
              ) : (
                <Oval id={c.id} n={4} />
              )}
              <h3 className="feat__name">{c.name}</h3>
              <p className="feat__role">{c.role}</p>
              <GoldDivider />
              <p className="feat__txt">{c.blurb}</p>
              {c.g === "six" ? <Badge tone="gold">One of the six Johns</Badge> : null}
            </div>
          </Panel>
          <div className="rost">
            {GROUPS.map((g) => (
              <div key={g.id}>
                <div className="rg__h">
                  <h4>{g.title}</h4>
                  <p>{g.sub}</p>
                </div>
                {g.id === "six" && POSES.johns ? (
                  <figure className="rg__plate">
                    <Lozenges />
                    <img
                      src={POSES.johns}
                      alt="The six Johns writing the Scots Confession at a long table by candlelight"
                      width={1600}
                      height={460}
                      loading="lazy"
                    />
                  </figure>
                ) : null}
                <div className="rg__g">
                  {CAST.filter((x) => x.g === g.id).map((x) => (
                    <button
                      key={x.id}
                      type="button"
                      className="ri"
                      aria-pressed={x.id === c.id}
                      onClick={() => setSel(x.id)}
                    >
                      <Oval id={x.id} n={1} sm />
                      <span>{x.short}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Game() {
  const notify = useNotify();
  const [k, setK] = useState(SHOTS[0].id);
  const i = SHOTS.findIndex((x) => x.id === k);
  const s = SHOTS[i];
  const go = (d: number) => setK(SHOTS[(i + d + SHOTS.length) % SHOTS.length].id);

  useEffect(() => {
    SHOTS.forEach((x) => {
      new Image().src = shotSrc(x.id);
    });
  }, []);

  return (
    <section className="sec sec--light" id="game" data-screen-label="05 Covenanter">
      <div className="wrap">
        <div className="gfeat" data-theme="dark">
          <div className="gfeat__head">
            <p className="uc-eyebrow">A tale of the Scottish Reformation</p>
            <h2 className="gtitle">Covenanter</h2>
            <p className="gmotto">Post tenebras lux</p>
          </div>
          <div className="gfeat__body">
            <div className="gfeat__txt">
              <p>
                You come home from Geneva in May 1559. Walk the towns of Scotland, hear the
                Reformers preach, and answer false teaching with the Scriptures. Everything you
                learn is kept in your Commonplace Book.
              </p>
              <div className="gfeat__b">
                <Badge tone="gold">iOS</Badge>
                <Badge tone="gold">Android</Badge>
                <Badge tone="inverse">Coming soon</Badge>
              </div>
              <p className="gfeat__note">No ads and no loot boxes. Something to play together.</p>
              <Button onClick={notify.open} iconLeft="bell">
                Notify me
              </Button>
            </div>
            <figure className="gshot">
              <div className="gshot__f">
                <img key={k} src={shotSrc(k)} alt={s.alt} width={1600} height={736} />
              </div>
              <figcaption>
                <span aria-live="polite">{s.caption}</span>
                <span className="gshot__nav">
                  <IconButton
                    icon="arrow-left"
                    label="Previous screenshot"
                    variant="outline"
                    onClick={() => go(-1)}
                  />
                  <IconButton
                    icon="arrow-right"
                    label="Next screenshot"
                    variant="outline"
                    onClick={() => go(1)}
                  />
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="gshot__t">
            <Tabs
              items={SHOTS.map((x) => ({ id: x.id, label: x.label }))}
              value={k}
              onChange={setK}
              aria-label="Screenshots"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Ladder() {
  return (
    <>
      <div className="lh">
        <p className="uc-eyebrow">For children</p>
        <h2>Grows with the child.</h2>
        <p className="uc-lead">
          Five levels of difficulty, from about age 5 to 13 and up. A child can begin with a choice
          of three and finish by writing the verse from memory.
        </p>
      </div>
      <div className="ladder">
        {LADDER.map(([title, ages, text], i) => (
          <div className="lad" key={title}>
            <div className="fl" aria-hidden="true">
              {Array.from({ length: i + 1 }, (_, j) => (
                <Icon key={j} name="flame" size={20} />
              ))}
            </div>
            <h3>{title}</h3>
            <span className="ag">{ages}</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function Disputation() {
  const [ci, setCi] = useState(0);
  const [ok, setOk] = useState(false);
  const [wrong, setWrong] = useState<string[]>([]);
  const panel = useRef<HTMLDivElement>(null);
  const result = useRef<HTMLDivElement>(null);
  const c = CLAIMS[ci];

  const choose = (id: string) => {
    if (ok) return;
    if (id === c.ok) setOk(true);
    else setWrong((w) => (w.includes(id) ? w : [...w, id]));
  };

  const next = () => {
    setCi((ci + 1) % CLAIMS.length);
    setOk(false);
    setWrong([]);
    const r = panel.current?.getBoundingClientRect();
    if (r && r.top < 90) window.scrollBy({ top: r.top - 96, behavior: "smooth" });
  };

  // After a right answer, bring the explanation and the "Next claim" button into view.
  useEffect(() => {
    if (!ok || !result.current) return;
    const r = result.current.getBoundingClientRect();
    if (r.bottom > window.innerHeight - 24)
      window.scrollBy({ top: r.bottom - window.innerHeight + 56, behavior: "smooth" });
  }, [ok]);

  return (
    <section className="sec sec--band" id="disputation" data-screen-label="06 Try a disputation">
      <div className="wrap">
        <div className="disp">
          <div className="disp__txt">
            <p className="uc-eyebrow">Try it</p>
            <h2>Answer with the Word.</h2>
            <p className="uc-lead">
              In Covenanter a friar makes his claim in the square and the crowd waits. You answer
              with the Truth and the verse that meets it. This is the first level: choose the verse
              that answers the claim.
            </p>
            <div className="dots" role="status">
              Claim {ci + 1} of {CLAIMS.length}
              {CLAIMS.map((_, i) => (
                <i key={i} className={i <= ci ? "on" : ""} />
              ))}
            </div>
          </div>
          <div ref={panel}>
            <Panel>
              <div className="foe">
                <Oval id="pardoner" n={1} sm />
                <div>
                  <div className="foe__n">Friar Tobias</div>
                  <div className="foe__r">Pardoner of the Greyfriars</div>
                </div>
              </div>
              <p className="claim">{c.text}</p>
              <p className="q">Which verse answers him?</p>
              <div className="opts">
                {c.opts.map((id) => {
                  const [ref, txt] = VERSES[id];
                  const st = ok && id === c.ok ? " yes" : wrong.includes(id) ? " no" : "";
                  return (
                    <button
                      key={ci + id}
                      type="button"
                      className={"opt" + st}
                      onClick={() => choose(id)}
                      disabled={ok || wrong.includes(id)}
                    >
                      <b>{ref}</b>
                      <span>{txt}</span>
                    </button>
                  );
                })}
              </div>
              {ok ? (
                <div className="res" ref={result}>
                  <p>{c.rebut}</p>
                  <span className="rib" style={{ "--c": c.truth[2] } as CSSProperties}>
                    <i />
                    {c.truth[0]}
                    <em>{c.truth[1]}</em>
                  </span>
                  <Button size="sm" onClick={next} iconRight="arrow-right">
                    {ci < CLAIMS.length - 1 ? "Next claim" : "Start again"}
                  </Button>
                </div>
              ) : null}
              {!ok && wrong.length > 0 ? (
                <div className="res">
                  <p className="bad">
                    That verse does not answer this claim. Read it again and choose another.
                  </p>
                </div>
              ) : null}
            </Panel>
          </div>
        </div>
        <Ladder />
      </div>
    </section>
  );
}

export function Motto() {
  const notify = useNotify();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const error = notify.save(email);
    setErr(error ?? "");
    if (!error) setEmail("");
  };
  return (
    <section
      className="motto"
      id="notify"
      data-theme="dark"
      data-screen-label="07 Motto and notify"
    >
      <div className="wrap">
        <div className="motto__in">
          <img className="motto__mark" src="/brand/mark-on-dark-traced.svg" alt="" />
          <p className="motto__t">Nec tamen consumebatur</p>
          <p className="motto__c">Exodus 3:2</p>
          <p className="motto__v">
            And the angel of the LORD appeared unto him in a flame of fire out of the midst of a
            bush: and he looked, and, behold, the bush burned with fire, and the bush was not
            consumed.
          </p>
        </div>
        <div className="notify">
          <h2>
            Covenanter is coming to <span className="nc">iOS</span> and Android.
          </h2>
          <p className="uc-lead">Leave your email and we will write when it is available.</p>
          <form className="nf" onSubmit={submit} noValidate>
            <Input
              size="lg"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (err) setErr("");
              }}
              error={err}
            />
            <Button size="lg" type="submit">
              Notify me
            </Button>
          </form>
          <p className="uc-caption nf__note">
            The list is not connected yet. Your email stays on this device until it is.
          </p>
        </div>
      </div>
    </section>
  );
}

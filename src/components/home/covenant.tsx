import type { CSSProperties } from "react";
import { GoldDivider, Lozenges, Oval } from "@/components/site/parts";
import { POSES } from "@/lib/covenanter";

/** Faithful men history did not name: the game's own figures, drawn as silhouettes. */
const UNKNOWN_FIGURES = [
  { id: "glover", w: 243, h: 505 },
  { id: "cooper", w: 248, h: 478 },
  { id: "student", w: 214, h: 476 },
  { id: "bailie", w: 220, h: 476 },
  { id: "gunner", w: 216, h: 476 },
  { id: "keeper", w: 265, h: 474 },
  { id: "advocate", w: 298, h: 504 },
];

export function Covenant() {
  return (
    <section className="sec sec--band nm" id="covenant" data-screen-label="04 Why Covenanter">
      <div className="wrap">
        <div className="nm__top">
          <div className="nm__txt">
            <p className="uc-eyebrow">The name</p>
            <h2>Why it is called Covenanter.</h2>
            <p className="uc-lead">
              Covenanter is named for the First Band, the covenant that the first Lords of the
              Congregation signed at Edinburgh on 3 December 1557. They promised before God to
              maintain and establish his Word.
            </p>
            <p>
              The game follows God’s promises as they were worked out in Scotland through faithful
              men. Some are known by name, like John Knox and John Erskine of Dun. Most are known
              only to God.
            </p>
            <p>
              The Scholar is one of these: a young man in a long coat and flat cap, standing for the
              countless faithful who laboured to see the Word of God established in the kirks and
              burghs.
            </p>
            <p className="nm__end">If God permit, the first of many Covenanter stories.</p>
          </div>
          <div className="band">
            <Lozenges />
            {POSES.band ? (
              <img
                className="band__img"
                src={POSES.band}
                alt="Four Scottish lords gather round a table by candlelight as one signs a parchment"
                width={1062}
                height={732}
                loading="lazy"
              />
            ) : null}
            <p className="band__k">Edinburgh · 3 December 1557</p>
            <h3 className="band__t">The First Band</h3>
            <GoldDivider />
            <blockquote className="band__q">
              …we do promise before the Majesty of God and his Congregation, that we (by his grace)
              shall with all diligence continually apply our whole power, substance, and our very
              lives, to maintain, set forward, and establish the most blessed Word of God and his
              Congregation…
            </blockquote>
            <div className="band__f">
              <p className="band__sig">
                Among those who signed: the Earls of Argyll, Glencairn and Morton, and John Erskine
                of Dun.
              </p>
              <p className="band__src">
                From John Knox’s History of the Reformation in Scotland, lightly modernised.
              </p>
            </div>
          </div>
        </div>
        <div className="nm__row" role="group" aria-label="Faithful men, unknown">
          <div className="nm__u">
            <div className="nm__ut">
              <p className="uc-eyebrow">Unknown</p>
              <h3 className="nm__uh">Of whom the world was not worthy.</h3>
              <p className="nm__ub">
                Beside every Reformer stood countless faithful men whose names are lost to history
                but written in heaven. They taught their households, sang the psalms and held fast
                to the Word. The world forgot them; their Lord did not. To each he says,{" "}
                <q>Well done, thou good and faithful servant.</q> <cite>Matthew 25:21</cite>
              </p>
            </div>
            <div className="nm__crowd">
              <div className="nm__hero">
                {POSES.hero ? (
                  <img
                    className="nm__pose"
                    src={POSES.hero}
                    alt="The Scholar, a young man of 1560 in a long coat and flat cap, with a satchel and a Bible"
                    width={346}
                    height={660}
                    loading="lazy"
                  />
                ) : (
                  <Oval id="player" n={2} />
                )}
                <span>Scholar</span>
              </div>
              <div className="nm__ghosts" aria-hidden="true">
                {UNKNOWN_FIGURES.map((f, i) => (
                  <img
                    key={f.id}
                    className="nm__ghost"
                    src={`/art/unknowns/unknown-${f.id}-silhouette.png`}
                    alt=""
                    width={f.w}
                    height={f.h}
                    loading="lazy"
                    style={{ "--i": i, "--k": f.h / 476 } as CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

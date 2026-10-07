import type { CSSProperties } from "react";
import { GoldDivider, Lozenges, Oval } from "@/components/site/parts";
import { POSES, castById } from "@/lib/covenanter";

const KNOWN = ["knox", "erskine", "willock", "methven", "goodman", "lordjames"];
const CROWD = [
  "farmer",
  "cooper",
  "ferryman",
  "fisher",
  "butcher",
  "miller",
  "piper",
  "drover",
  "glover",
];

export function Covenant({ onPick }: { onPick: (id: string) => void }) {
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
              The game follows how God’s promises were worked out in Scotland by faithful men. Some
              are known by name, like John Knox and John Erskine of Dun. Many are unknown.
            </p>
            <p>
              Our hero is one of the unknown, standing for the countless faithful men who worked to
              see the Word of God established in the kirks and burghs.
            </p>
            <p className="nm__end">
              If God permits, this is just one of the many Covenanter stories to come.
            </p>
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
        <div className="nm__row" role="group" aria-label="Faithful men, known and unknown">
          <div className="nm__k">
            <p className="uc-eyebrow">Known by name</p>
            <div className="nm__faces">
              {KNOWN.map((id) => (
                <button key={id} type="button" className="ri" onClick={() => onPick(id)}>
                  <Oval id={id} sm />
                  <span>{castById(id).short}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="nm__u">
            <p className="uc-eyebrow">Unknown</p>
            <div className="nm__crowd">
              <div className="nm__hero">
                {POSES.hero ? (
                  <img
                    className="nm__pose"
                    src={POSES.hero}
                    alt="The hero of Covenanter, a young Scottish scholar with a satchel and a Bible"
                    width={346}
                    height={660}
                    loading="lazy"
                  />
                ) : (
                  <Oval id="player" n={2} />
                )}
                <span>Our hero</span>
              </div>
              <div className="nm__sils">
                {CROWD.map((id, i) => (
                  <span
                    key={id}
                    className="sil"
                    style={{ "--i": i } as CSSProperties}
                    aria-hidden="true"
                  >
                    <Oval id={id} sm />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

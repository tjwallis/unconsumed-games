import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ds/actions";
import { Icon } from "@/components/ds/icon";
import { PageHeader, PageShell } from "@/components/page-shell";
import { POSES } from "@/lib/covenanter";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press kit · Covenanter · Unconsumed Games" },
      {
        name: "description",
        content:
          "Press kit for Covenanter, a tale of the Scottish Reformation, 1559–60. Facts, features, screenshots and brand assets from Unconsumed Games.",
      },
    ],
  }),
  component: PressPage,
});

const FACTS: [string, string][] = [
  ["Developer", "Unconsumed Games (independent)"],
  ["Publisher", "Self-published"],
  ["Game", "Covenanter"],
  ["Genre", "Story-driven historical game"],
  ["Setting", "Scotland, 1559–1560 (the Scottish Reformation)"],
  ["Platforms", "iOS (iPhone & iPad), Android; Steam planned"],
  ["Engine", "Flutter + Flame"],
  ["Release", "To be announced"],
  ["Price", "To be announced"],
  ["Monetisation", "No ads, no loot boxes"],
  ["Website", STUDIO.site],
  ["Social", STUDIO.handle],
  ["Press contact", STUDIO.press],
];

const FEATURES = [
  "A story campaign set in Reformation Scotland, 1559–60",
  "Answer the errors of the age with Scripture, quoted from the Authorised Version",
  "Five levels of difficulty, from about age 5 to 13 and up",
  "A Commonplace Book that keeps every Truth with its proof-texts",
  "Theology reviewed by a theologian; history researched with care",
  "Family-friendly: no ads, no loot boxes",
];

const SHOTS: [string, string, string][] = [
  ["title", "Title", "The Covenanter title screen: Post tenebras lux over a Scottish skyline."],
  ["dundee", "Dundee", "Dundee harbour, May 1559, where Chapter I begins."],
  ["st-giles", "St Giles’", "Knox in the pulpit of St Giles’ Kirk, Edinburgh."],
  [
    "disputation",
    "Disputation",
    "Answering Friar Tobias with a Truth and the verse that meets it.",
  ],
  ["commonplace-book", "Commonplace Book", "The Commonplace Book of Truths and proof-texts."],
  ["world-map", "Scotland", "The road across Scotland."],
  [
    "perth",
    "Perth",
    "Perth, May 1559. The quest: find John Knox at Patrick Murray’s house on the High Street.",
  ],
  [
    "reformation",
    "Chapter I",
    "Chapter I ends: Dundee is reformed. He sent his word, and healed them (Psalm 107:20).",
  ],
];

const DOWNLOADS = [
  { href: "/brand/lockup-on-dark.png", title: "Logo lockup, dark ground", kind: "PNG", dark: true },
  { href: "/brand/lockup.png", title: "Logo lockup, light ground", kind: "PNG", dark: false },
  { href: "/brand/mark-on-dark.svg", title: "Mark, dark ground", kind: "SVG", dark: true },
  { href: "/brand/mark.svg", title: "Mark, light ground", kind: "SVG", dark: false },
  { href: "/brand/app-icon.svg", title: "App icon", kind: "SVG", dark: false },
  { href: "/brand/app-icon-light.svg", title: "App icon, light", kind: "SVG", dark: false },
];

const SWATCHES: [string, string][] = [
  ["Navy", "#14213D"],
  ["Ember", "#E4572E"],
  ["Amber", "#F2A541"],
  ["Parchment", "#F4EBD9"],
];

function PressPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Press kit"
        title="Covenanter"
        lead="A tale of the Scottish Reformation, 1559–60. Everything you need to cover the game."
        aside={
          <div className="ph__art">
            <img src={POSES.knox} alt="John Knox preaching" width={572} height={642} />
          </div>
        }
      >
        <div className="ph__cta">
          <Button href={`mailto:${STUDIO.press}`} iconLeft="mail">
            Email the press desk
          </Button>
          <Button href="#assets" variant="secondary" iconRight="download">
            Brand assets
          </Button>
        </div>
      </PageHeader>

      <section className="sec sec--light doc">
        <div className="wrap press">
          <aside className="facts" aria-labelledby="facts-h">
            <h2 id="facts-h" className="uc-h4">
              Fact sheet
            </h2>
            <dl>
              {FACTS.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    {label === "Press contact" ? (
                      <a href={`mailto:${value}`}>{value}</a>
                    ) : label === "Website" ? (
                      <a href="/">{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <article className="prose">
            <h2>Description</h2>
            <p>
              Covenanter is a story game set in the Scottish Reformation. It is May 1559. John Knox
              has come home to Scotland, the Lords of the Congregation have bound themselves by
              covenant, and the nation stands on the edge of change. The player comes home from
              Geneva, walks the towns of Scotland, hears the Reformers preach, and answers false
              teaching with the Scriptures.
            </p>
            <p>
              Every answer in the game is reviewed by a theologian on the team, and the history
              behind each chapter is researched with care. Covenanter is made for children and the
              families, homeschools and Christian schools teaching them the Bible, doctrine and
              history.
            </p>

            <h2 id="history">The history behind the name</h2>
            <p>
              Most people link the word “Covenanter” with the seventeenth century. But on 3 December
              1557 five Protestant nobles, the Earls of Argyll, Glencairn and Morton, Lord Lorne,
              and John Erskine of Dun, signed the First Band, pledging to “maintain, set forward,
              and establish the most blessed Word of God, and his Congregation.” Historians date the
              Lords of the Congregation to that band. Covenanting began with Knox’s generation, and
              that is where the game begins.
            </p>
            <p className="prose__src">Sources: PCA Historical Center; Scottish History Society.</p>

            <h2>Features</h2>
            <ul className="ticks">
              {FEATURES.map((f) => (
                <li key={f}>
                  <Icon name="flame" size={20} />
                  {f}
                </li>
              ))}
            </ul>

            <h2>Trailer</h2>
            <figure className="frame">
              <div className="frame__f">
                <img
                  src="/art/game/title.jpg"
                  alt="The Covenanter title screen, standing in until the trailer is cut."
                  width={1280}
                  height={720}
                  loading="lazy"
                />
                <span className="frame__tag">Trailer coming soon</span>
              </div>
              <figcaption>
                The trailer and a downloadable cut will be posted here. Until then, write to{" "}
                <a href={`mailto:${STUDIO.press}`}>{STUDIO.press}</a> and we will send assets as
                they are ready.
              </figcaption>
            </figure>

            <h2>Screenshots</h2>
            <div className="shots">
              {SHOTS.map(([id, label, alt]) => (
                <figure key={id} className="frame">
                  <a className="frame__f" href={`/art/game/${id}.jpg`} download>
                    <img
                      src={`/art/game/${id}.jpg`}
                      alt={alt}
                      width={1280}
                      height={720}
                      loading="lazy"
                    />
                  </a>
                  <figcaption className="frame__k">{label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="prose__src">
              Captured from the game at 1280 × 720. Select a screenshot to download it.
            </p>

            <h2 id="assets">Logos and brand assets</h2>
            <ul className="dl">
              {DOWNLOADS.map((a) => (
                <li key={a.href}>
                  <a href={a.href} download>
                    <span className={"dl__thumb" + (a.dark ? " dl__thumb--dark" : "")}>
                      <img src={a.href} alt="" />
                    </span>
                    <span className="dl__txt">
                      <span className="dl__t">{a.title}</span>
                      <span className="dl__k">{a.kind} · Download</span>
                    </span>
                    <Icon name="download" size={20} />
                  </a>
                </li>
              ))}
            </ul>

            <h3>Palette</h3>
            <ul className="swatches">
              {SWATCHES.map(([name, hex]) => (
                <li key={hex}>
                  <span className="swatch" style={{ background: hex }} />
                  <span className="swatch__n">{name}</span>
                  <span className="swatch__h">{hex}</span>
                </li>
              ))}
            </ul>
            <p className="prose__src">
              Type: Cormorant Garamond for display, Source Serif 4 for text. In the game, Cinzel for
              labels and Cinzel Decorative for the title. Full guidance is on the{" "}
              <a href="/brand">brand page</a>.
            </p>

            <h2>About Unconsumed Games</h2>
            <p>
              Unconsumed Games is an independent studio founded by H.T. Williams. We make video
              games that are grounded in the Word of God, teach children the Bible, doctrine and
              history, and are made to last. Covenanter is our first.
            </p>
            <p>
              The studio’s name comes from Exodus 3:2: “the bush burned with fire, and the bush was
              not consumed.” The burning bush, with the Latin motto <em>{STUDIO.motto}</em> (“
              {STUDIO.mottoGloss}”), first appeared on the Church of Scotland’s General Assembly
              Acts in 1691 and became the Church’s official emblem in 1958.
            </p>

            <h2>Press contact</h2>
            <p>
              For review codes, interviews and assets, write to{" "}
              <a href={`mailto:${STUDIO.press}`}>{STUDIO.press}</a>. Review keys are available on
              request. Embargo terms are confirmed with each request.
            </p>
            <p className="prose__src">
              No reviews, quotes or awards are shown here yet. Coverage will be added as it is
              published.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

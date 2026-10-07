import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ds/actions";
import { Icon } from "@/components/ds/icon";
import { PageHeader, PageShell } from "@/components/page-shell";
import { POSES, SHOTS, shotFull, shotSrc } from "@/lib/covenanter";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press kit · Covenanter · Unconsumed Games" },
      {
        name: "description",
        content:
          "Press kit for Covenanter, a pixel-art story RPG set in the Scottish Reformation, 1559–60, in development at Unconsumed Games for iOS, Android and the web. Fact sheet, descriptions, features, screenshots and logos.",
      },
    ],
  }),
  component: PressPage,
});

/** [label, value, link] */
const FACTS: [string, string, string?][] = [
  ["Developer", "Unconsumed Games, an independent studio"],
  ["Founder", "H.T. Williams"],
  ["Game", "Covenanter"],
  ["Genre", "Pixel-art story RPG"],
  ["Setting", "Scotland, 1559–60: the Scottish Reformation"],
  ["Platforms", "iOS, Android, and the web from its own site"],
  ["Status", "In development"],
  ["Release date and price", "Not yet announced"],
  ["Engine", "Flutter and Flame"],
  [
    "Players",
    "Reformed Christians, families and history fans. Five difficulty levels, from about age 5 to adult.",
  ],
  ["Monetisation", "No ads, no loot boxes"],
  ["Website", STUDIO.site, "/"],
  ["Social", STUDIO.handle],
  ["Press contact", `H.T. Williams, ${STUDIO.press}`, `mailto:${STUDIO.press}`],
];

/** The chapters, from the game's region data. */
const CHAPTERS: [string, string, string][] = [
  ["I", "Dundee", "May 1559"],
  ["II", "Perth", "May 1559"],
  ["III", "St Andrews", "June 1559"],
  ["IV", "Stirling and Menteith", "July 1559"],
  ["V", "Aberdeen", "October 1559"],
  ["VI", "Ayr and Carrick", "December 1559"],
  ["VII", "Glen Mhòr, in the Highlands", "March 1560"],
  ["VIII", "Edinburgh", "August 1560"],
  ["Epilogue", "Leith and Holyrood", "August 1561"],
];

const FEATURES = [
  "Disputations: answer the claims of pardoners, priors and prophets with the Truth that meets them and a verse from Scripture, and affirm the claims that are true.",
  "Catechism rounds, asked by the people you meet, from the Geneva Catechism of 1556.",
  "Psalm-singing: eleven metrical psalms from the Scottish Psalter, each recorded both by the hero alone and by a whole congregation. Sing them to restore your Faith.",
  "Verse drills: a Commonplace Book of 21 Truths and 162 proof-texts, with practice questions that bring back what you miss.",
  "Typesetting at Robert Lekpreuik’s print shop in Edinburgh: set a verse in type before the ink runs out.",
  "Town maps of every burgh, and a road map of Scotland between them.",
  "Reformed towns change as you go: the images come down, the windows are cleared, and the psalms are sung in the kirk.",
  "The whole armour of God (Ephesians 6), put on piece by piece as the chapters are won, each piece with its own effect in play.",
  "Five difficulty levels, from choosing a verse from three to writing it out from memory.",
  "An in-game History of the real people, places and events, and of where the story bends them.",
  "No ads and no loot boxes.",
];

/** Stands in for the trailer until it is cut. */
const TRAILER_STILL = SHOTS.find((x) => x.id === "dundee-shore") ?? SHOTS[0];

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
        lead="A pixel-art story RPG set in the Scottish Reformation, 1559–60. In development at Unconsumed Games for iOS, Android and the web."
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
          <Button href="#screenshots" variant="secondary" iconRight="download">
            Screenshots and logos
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
              {FACTS.map(([label, value, href]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <article className="prose">
            <h2>In short</h2>
            <p>
              Covenanter is a pixel-art story RPG set in the Scottish Reformation. It is May 1559,
              and a young scholar comes home from Geneva with a satchel and a Bible. Over eight
              chapters and an epilogue he walks the towns of Scotland, from Dundee to Edinburgh, and
              answers the false teaching of the age from Scripture. Covenanter is in development at
              Unconsumed Games for iOS, Android and the web.
            </p>

            <h2>Description</h2>
            <p>
              It is May 1559. John Knox has come home to Scotland, the Lords of the Congregation
              have bound themselves by covenant, and the country stands on the edge of change. You
              play a young scholar home from three years’ study in Geneva, in a long coat and a flat
              cap, with a satchel over his shoulder and a Bible in his hand. His name is Alasdair,
              unless you give him another.
            </p>
            <p>
              The journey runs through Dundee, Perth, St Andrews, Stirling, Aberdeen, Ayr, the
              Highlands and Edinburgh, with an epilogue at Holyrood when Mary, Queen of Scots, comes
              home in 1561. In each town you talk with the people, learn the Truths of Scripture and
              the verses that prove them, and answer the friars, priors and prophets who hold the
              crowd. Between disputations there are catechism rounds, psalms to sing, verses to
              practise and a verse to set in type at the print shop. Win a town and its kirk is
              reformed: the images come down, and the psalms are sung in the people’s own tongue.
            </p>
            <p>
              Covenanter is made for Reformed Christians, for the families and schools teaching the
              Bible and church history, and for anyone who loves the history of Scotland. Knox,
              Willock, Erskine of Dun, Lord James Stewart and the printer Lekpreuik are historical,
              and the game’s History tells who they were and what really happened. Scripture is in
              King James wording, carried as Tyndale’s Bible, the English Testament. Five difficulty
              levels let a child of about five and a grown-up play the same story.
            </p>

            <h3>The chapters</h3>
            <ul className="chapters">
              {CHAPTERS.map(([n, town, date]) => (
                <li key={n}>
                  <span className="chapters__n">{n}</span>
                  <span className="chapters__t">{town}</span>
                  <span className="chapters__d">{date}</span>
                </li>
              ))}
            </ul>

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
              <div className="frame__f frame__f--shot">
                <img
                  src={shotSrc(TRAILER_STILL.id)}
                  alt={`${TRAILER_STILL.alt} A screenshot, standing in until the trailer is cut.`}
                  width={1600}
                  height={736}
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

            <h2 id="screenshots">Screenshots</h2>
            <div className="shots">
              {SHOTS.map(({ id, label, alt }) => (
                <figure key={id} className="frame">
                  <a
                    className="frame__f frame__f--shot"
                    href={shotFull(id)}
                    download={`covenanter-${id}.png`}
                    title={`Download ${label}, full-size PNG, 2868 × 1320`}
                  >
                    <img src={shotSrc(id)} alt={alt} width={1600} height={736} loading="lazy" />
                  </a>
                  <figcaption className="frame__k">{label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="prose__src">
              Captured from the game at 2868 × 1320, the App Store size. Select a screenshot to
              download the full-size PNG.
            </p>

            <h2 id="assets">Logos and colours</h2>
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
              labels and Cinzel Decorative for the title.
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
              For interviews, questions, assets and news of the release, write to H.T. Williams at{" "}
              <a href={`mailto:${STUDIO.press}`}>{STUDIO.press}</a>.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

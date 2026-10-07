import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ds/display";
import { PageHeader, PageShell } from "@/components/page-shell";
import { StageScene, type StageFigure } from "@/components/stage-scene";
import { LEADS, PROCESSION } from "@/lib/cast";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Brand · Unconsumed Games" },
      {
        name: "description",
        content:
          "Brand guidelines for Unconsumed Games and Covenanter: the mark, the colours, the type, the voice, and the cast cut from the game’s own sprites.",
      },
    ],
  }),
  component: BrandPage,
});

const SWATCHES = [
  {
    name: "Navy",
    hex: "#14213D",
    use: "The ground of the banner, the wordmark, and ink on parchment.",
  },
  {
    name: "Ember",
    hex: "#E4572E",
    use: "The flame and the bar along the foot of every dark surface.",
  },
  { name: "Amber", hex: "#F2A541", use: "The flame core, and type on navy. The game’s gold." },
  { name: "Parchment", hex: "#F4EBD9", use: "Paper and the light ground. Not a tinted white." },
];

const VOICE: [string, string][] = [
  ["Do", "Write calm, plain sentences that state a fact and stop. “Faithful stories, well made.”"],
  ["Do", "Use “we” for the studio and “you” for the player or parent. Never “I”."],
  [
    "Do",
    "Quote Scripture exactly, give the reference as Book chapter:verse, and name the translation.",
  ],
  ["Don’t", "Use hype words, gamer slang, exclamation marks or emoji."],
  [
    "Don’t",
    "Set body text in capitals. Capitals are a typographic treatment for labels and buttons.",
  ],
  [
    "Don’t",
    "Recolour the mark beyond its light and dark versions, or use it as a decorative icon.",
  ],
];

const PLACES: {
  title: string;
  place: string;
  copy: string;
  background: string;
  download: string;
  figures: StageFigure[];
}[] = [
  {
    title: "The pulpit",
    place: "Stirling kirk",
    copy: "Knox preaching. The raised arms are the pulpit pose from the stage sheet. Do not redraw them.",
    background: "/art/stages/stirling-kirk.png",
    download: "/art/key/pulpit.png",
    figures: [
      {
        src: "/cast/stage/knox-struck.png",
        alt: "John Knox preaching, arms raised, in Stirling kirk.",
        size: "tall",
      },
    ],
  },
  {
    title: "The presence",
    place: "Holyrood",
    copy: "Mary, with Mary Beaton and Mary Livingston in attendance. She is home from France in 1561, not a girl in the 1559 crisis.",
    background: "/art/stages/holyrood-presence.png",
    download: "/art/key/presence.png",
    figures: [
      { src: "/cast/crowd/beaton.png", alt: "Mary Beaton.", size: "crowd" },
      { src: "/cast/stage/queen-talk.png", alt: "Mary, Queen of Scots, speaking.", size: "lead" },
      { src: "/cast/crowd/livingston.png", alt: "Mary Livingston.", size: "crowd" },
    ],
  },
  {
    title: "The shore",
    place: "Dundee",
    copy: "Alasdair comes home from Geneva with a Bible and a satchel. The piper and the fishwife are of the burgh, not of the history books.",
    background: "/art/stages/dundee-shore.png",
    download: "/art/key/shore.png",
    figures: [
      { src: "/cast/crowd/piper.png", alt: "A piper of the burgh.", size: "crowd" },
      {
        src: "/cast/stage/alasdair-talk.png",
        alt: "Alasdair, the pilgrim, speaking, Bible in hand.",
        size: "lead",
      },
      { src: "/cast/crowd/fishwife.png", alt: "A fishwife of the shore.", size: "crowd" },
    ],
  },
];

const PIXEL_RULES: [string, string][] = [
  [
    "Do",
    "Scale by whole numbers. The hi-res files on this page are the game frames at four times, nearest neighbour, so the pixels stay square.",
  ],
  [
    "Do",
    "Name historical people as the game does: John Knox, Mary Queen of Scots, the Four Maries, Erskine of Dun, Lord James, Lekpreuik, Willock, Methven, Goodman.",
  ],
  [
    "Do",
    "Leave Alasdair his Bible and satchel. He is the player, a student home from Geneva in May 1559.",
  ],
  ["Don’t", "Blur, trace or repaint the pixels. Do not drop a sprite onto a photograph."],
  ["Don’t", "Crop off feet, hands or the book. Knox’s raised arms are preaching, not distress."],
  [
    "Don’t",
    "Fold the burning bush into the Covenanter wordmark. The bush is the studio. The gold title is the game.",
  ],
];

function Rules({ items }: { items: [string, string][] }) {
  return (
    <ul className="rules">
      {items.map(([kind, text]) => (
        <li key={text}>
          <Badge tone={kind === "Do" ? "success" : "accent"} size="sm">
            {kind}
          </Badge>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

function BrandPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Brand guidelines"
        title="How the studio and the game should look."
        lead="The mark, the colours, the type and the voice of Unconsumed Games, and the people of Covenanter, cut from the game’s own sheets and stood in the game’s own places."
        aside={
          <figure className="ph__stage">
            <StageScene
              background="/art/stages/edinburgh-high.png"
              figures={[
                {
                  src: "/cast/stage/alasdair-idle.png",
                  alt: "Alasdair on the Edinburgh high street.",
                  size: "lead",
                },
                {
                  src: "/cast/stage/knox-struck.png",
                  alt: "John Knox preaching on the high street.",
                  size: "tall",
                },
                {
                  src: "/cast/stage/queen-idle.png",
                  alt: "Mary, Queen of Scots, on the high street.",
                  size: "lead",
                },
              ]}
            />
            <figcaption>Edinburgh · Alasdair, Knox, Mary</figcaption>
          </figure>
        }
      />

      <section className="sec sec--light doc">
        <div className="wrap brand">
          <section className="brand__sec">
            <header className="brand__h">
              <p className="uc-eyebrow">Two marks</p>
              <h2>The studio and the game.</h2>
              <p className="uc-lead">
                The burning bush is the studio: the bush that burned and was not consumed. The gold
                title is the game. Keep them apart, and give the bush the width of the flame on
                every side.
              </p>
            </header>
            <div className="marks">
              <figure className="mark mark--light">
                <img src="/brand/lockup.png" alt="Unconsumed Games lockup on a light ground" />
                <figcaption>
                  Light ground ·{" "}
                  <a href="/brand/lockup.png" download>
                    PNG
                  </a>{" "}
                  ·{" "}
                  <a href="/brand/mark.svg" download>
                    Mark SVG
                  </a>
                </figcaption>
              </figure>
              <figure className="mark mark--dark" data-theme="dark">
                <img
                  src="/brand/lockup-on-dark.png"
                  alt="Unconsumed Games lockup on a dark ground"
                />
                <figcaption>
                  Dark ground ·{" "}
                  <a href="/brand/lockup-on-dark.png" download>
                    PNG
                  </a>{" "}
                  ·{" "}
                  <a href="/brand/mark-on-dark.svg" download>
                    Mark SVG
                  </a>
                </figcaption>
              </figure>
              <figure className="mark mark--game" data-theme="dark">
                <div>
                  <p className="gtitle">Covenanter</p>
                  <p className="gmotto">Post tenebras lux</p>
                </div>
                <figcaption>
                  The game title · Cinzel Decorative in gold, with the blackletter motto
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <p className="uc-eyebrow">Colour</p>
              <h2>Four colours.</h2>
              <p className="uc-lead">
                Navy and parchment are the two grounds. Ember and amber are the flame. Dark surfaces
                carry the sunburst and close with a ten-pixel ember bar.
              </p>
            </header>
            <ul className="swatches swatches--lg">
              {SWATCHES.map((s) => (
                <li key={s.hex}>
                  <span className="swatch" style={{ background: s.hex }} />
                  <span className="swatch__n">{s.name}</span>
                  <span className="swatch__h">{s.hex}</span>
                  <span className="swatch__u">{s.use}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <p className="uc-eyebrow">Type</p>
              <h2>Type for the studio and the game.</h2>
            </header>
            <div className="specimens">
              <div className="spec">
                <p className="spec__big spec__big--display">Cormorant Garamond</p>
                <p className="spec__k">Studio display · headings, labels, the motto</p>
                <p className="spec__q">Nec tamen consumebatur</p>
              </div>
              <div className="spec">
                <p className="spec__big spec__big--text">Source Serif 4</p>
                <p className="spec__k">Studio text · body and interface</p>
                <p>Unconsumed Games makes video games grounded in the Word of God.</p>
              </div>
              <div className="spec spec--dark" data-theme="dark">
                <p className="spec__big spec__big--cinzel">Cinzel</p>
                <p className="spec__k">Game · labels, names and buttons</p>
                <p className="spec__bl">Post tenebras lux</p>
              </div>
            </div>
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <p className="uc-eyebrow">Voice</p>
              <h2>Calm, plain and reverent.</h2>
              <p className="uc-lead">
                The studio talks about craft and faithfulness, not hype. Sentence case everywhere;
                capitals are applied by the type, not typed.
              </p>
            </header>
            <Rules items={VOICE} />
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <p className="uc-eyebrow">The cast</p>
              <h2>Stand them in the world.</h2>
              <p className="uc-lead">
                The stage sheet is the hi-res cast. Use it when a figure has to carry a poster. The
                small walk sprites are for a procession, a margin, a row of names.
              </p>
            </header>
            <div className="places">
              {PLACES.map((p) => (
                <article key={p.title} className="place">
                  <div className="place__txt">
                    <p className="uc-eyebrow">{p.place}</p>
                    <h3>{p.title}</h3>
                    <p>{p.copy}</p>
                    <a className="place__dl" href={p.download} download>
                      Download key art
                    </a>
                  </div>
                  <StageScene background={p.background} figures={p.figures} />
                </article>
              ))}
            </div>
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <h3 className="uc-h3">The company, full length</h3>
              <p>
                Walk-cycle frames, facing you. Historical names stay historical. Grizel, the piper,
                the highlander and the fishwife are the game’s own.
              </p>
            </header>
            <ul className="company">
              {PROCESSION.map((p) => (
                <li key={p.id}>
                  <img src={`/cast/walk/${p.id}.png`} alt="" className="pixel" />
                  <span className="company__n">{p.name}</span>
                  <a
                    href={`/cast/hi/walk/${p.id}.png`}
                    download
                    aria-label={`${p.name}, four times, PNG`}
                  >
                    4×
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <h3 className="uc-h3">Poses worth using</h3>
              <p>
                Eight poses live on the stage sheet. These are the ones that read at a glance.
                Download the four-times file when the figure has to print.
              </p>
            </header>
            <div className="leads">
              {LEADS.map((lead) => (
                <article key={lead.id}>
                  <h4>{lead.name}</h4>
                  <p>{lead.line}</p>
                  <ul className="poses">
                    {lead.poses.map(([pose, label]) => (
                      <li key={pose} data-theme="dark">
                        <img
                          src={`/cast/stage/${lead.id}-${pose}.png`}
                          alt={`${lead.name}, ${label}`}
                          className="pixel"
                        />
                        <span>{label}</span>
                        <a href={`/cast/hi/stage/${lead.id}-${pose}.png`} download>
                          PNG 4×
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <h3 className="uc-h3">Keep the pixels square</h3>
            </header>
            <div className="crisp">
              <figure data-theme="dark">
                <img src="/cast/stage/knox-struck.png" alt="" className="pixel" />
                <figcaption>Do · crisp</figcaption>
              </figure>
              <figure data-theme="dark">
                <img src="/cast/stage/knox-struck.png" alt="" className="pixel-smoothed" />
                <figcaption className="crisp__no">Don’t · smoothed</figcaption>
              </figure>
            </div>
            <Rules items={PIXEL_RULES} />
          </section>

          <section className="brand__sec">
            <header className="brand__h">
              <h3 className="uc-h3">When you need the whole frame</h3>
              <p>
                Screenshots already have the cast in place. Use them for press. Do not paste a
                second Knox on top. All of them are in the <a href="/press">press kit</a>.
              </p>
            </header>
            <div className="shots shots--2">
              {[
                ["title", "Title. Post tenebras lux."],
                ["st-giles", "St Giles’, Knox in the pulpit."],
                ["disputation", "Answering from Scripture."],
                ["world-map", "The road across Scotland."],
              ].map(([id, caption]) => (
                <figure key={id} className="frame">
                  <div className="frame__f">
                    <img
                      src={`/art/game/${id}.jpg`}
                      alt={caption}
                      width={1280}
                      height={720}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}

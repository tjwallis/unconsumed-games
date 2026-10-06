import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { StageScene, type StageFigure } from "@/components/stage-scene";
import { LEADS, PROCESSION } from "@/lib/cast";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Brand — Unconsumed Games" },
      {
        name: "description",
        content:
          "Brand guidelines for Unconsumed Games and Covenanter. The mark, the four colours, and the cast, cut from the game’s own sprites.",
      },
    ],
  }),
  component: BrandPage,
});

const swatches = [
  {
    name: "Navy",
    hex: "#14213D",
    className: "bg-navy",
    use: "Night, the header, and type on parchment.",
  },
  {
    name: "Ember",
    hex: "#E4572E",
    className: "bg-ember",
    use: "The one action colour. Links, the stripe, a join.",
  },
  {
    name: "Amber",
    hex: "#F2A541",
    className: "bg-amber",
    use: "Gold lines, captions, and the game’s title.",
  },
  {
    name: "Parchment",
    hex: "#F4EBD9",
    className: "bg-parchment ring-1 ring-navy/15",
    use: "The page itself. Paper, not a tinted white.",
  },
];

const places: {
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
      {
        src: "/cast/crowd/beaton.png",
        alt: "Mary Beaton.",
        size: "crowd",
      },
      {
        src: "/cast/stage/queen-talk.png",
        alt: "Mary, Queen of Scots, speaking.",
        size: "lead",
      },
      {
        src: "/cast/crowd/livingston.png",
        alt: "Mary Livingston.",
        size: "crowd",
      },
    ],
  },
  {
    title: "The shore",
    place: "Dundee",
    copy: "Alasdair comes home from Geneva with a Bible and a satchel. The piper and the fishwife are of the burgh, not of the history books.",
    background: "/art/stages/dundee-shore.png",
    download: "/art/key/shore.png",
    figures: [
      {
        src: "/cast/crowd/piper.png",
        alt: "A piper of the burgh.",
        size: "crowd",
      },
      {
        src: "/cast/stage/alasdair-talk.png",
        alt: "Alasdair, the pilgrim, speaking, Bible in hand.",
        size: "lead",
      },
      {
        src: "/cast/crowd/fishwife.png",
        alt: "A fishwife of the shore.",
        size: "crowd",
      },
    ],
  },
];

const rules = [
  ["Do", "Scale by whole numbers. The hi-res files on this page are the game frames at four times, nearest neighbour, so the pixels stay square."],
  ["Do", "Name historical people as the game does: John Knox, Mary Queen of Scots, the Four Maries, Erskine of Dun, Lord James, Lekpreuik, Willock, Methven, Goodman."],
  ["Do", "Leave Alasdair his Bible and satchel. He is the player, a student home from Geneva in May 1559."],
  ["Don’t", "Blur, trace, or repaint the pixels. Don’t drop a sprite onto a photograph."],
  ["Don’t", "Crop off feet, hands, or the book. Knox’s raised arms are preaching, not distress."],
  ["Don’t", "Fold the burning bush into the Covenanter wordmark. The bush is the studio. The gold title is the game."],
];

function BrandPage() {
  return (
    <PageShell>
      <section className="bg-navy px-5 pt-28 pb-16 text-parchment md:px-8 md:pt-32">
        <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-display text-xs tracking-widest text-amber uppercase">Brand guidelines</p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">How the game should look</h1>
            <p className="mt-5 max-w-xl text-xl text-parchment/80">
              The mark, the four colours, and the people of Covenanter. Every figure here is cut from the game’s own sheets, then stood in the game’s own places.
            </p>
          </div>
          <StageScene
            className="ring-1 ring-amber/70"
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
        </div>
        <p className="mx-auto mt-3 max-w-6xl text-right font-display text-xs tracking-widest text-amber uppercase">
          Edinburgh · Alasdair, Knox, Mary
        </p>
      </section>
      <div className="h-1 bg-ember" />

      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 md:px-8 md:py-20">
        <section className="space-y-14">
          <div>
            <h2 className="font-display text-3xl tracking-wide">Stand them in the world</h2>
            <p className="mt-3 max-w-2xl text-xl text-navy/80">
              The stage sheet is the hi-res cast. Use it when a figure has to carry a poster. The little walk sprites are for a procession, a margin, a row of names.
            </p>
          </div>
          {places.map((place) => (
            <article key={place.title} className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-display text-xs tracking-widest text-ember uppercase">{place.place}</p>
                <h3 className="mt-2 font-display text-3xl tracking-wide">{place.title}</h3>
                <p className="mt-3 text-xl text-navy/80">{place.copy}</p>
                <a
                  href={place.download}
                  download
                  className="mt-4 inline-flex min-h-11 items-center font-display text-xs tracking-widest text-ember uppercase"
                >
                  Download key art
                </a>
              </div>
              <StageScene background={place.background} figures={place.figures} className="ring-1 ring-navy/10" />
            </article>
          ))}
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">The studio mark</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            A burning bush. Navy bush and parchment tree on light grounds. Cream bush and navy tree on dark grounds. The motto is <em>Nec tamen consumebatur</em> — yet it was not consumed. Give the bush the width of the flame on every side.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <figure className="flex items-center gap-5 rounded-3xl bg-cream p-6 ring-1 ring-navy/10">
              <img src="/brand/mark.svg" alt="" className="h-24 w-auto" />
              <figcaption>
                <p className="font-display text-sm tracking-widest uppercase">Light ground</p>
                <a className="inline-flex min-h-11 items-center text-ember underline underline-offset-4" href="/brand/mark.svg" download>
                  Download SVG
                </a>
              </figcaption>
            </figure>
            <figure className="flex items-center gap-5 rounded-3xl bg-navy p-6 text-parchment">
              <img src="/brand/mark-on-dark.svg" alt="" className="h-24 w-auto" />
              <figcaption>
                <p className="font-display text-sm tracking-widest uppercase">Dark ground</p>
                <a className="inline-flex min-h-11 items-center text-amber underline underline-offset-4" href="/brand/mark-on-dark.svg" download>
                  Download SVG
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">Colour and type</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {swatches.map((swatch) => (
              <li key={swatch.hex}>
                <div className={`h-16 rounded-xl ${swatch.className}`} />
                <p className="mt-2 text-lg">{swatch.name}</p>
                <p className="font-display text-xs tracking-widest text-navy/60">{swatch.hex}</p>
                <p className="mt-1 text-base leading-snug text-navy/70">{swatch.use}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-cream p-6 ring-1 ring-navy/10">
              <p className="font-display text-4xl tracking-wide">Cinzel</p>
              <p className="mt-2 font-display text-sm tracking-widest text-navy/50 uppercase">Covenanter · Unconsumed Games</p>
              <p className="mt-3 text-lg text-navy/70">Titles, navigation, and labels. Never for a long paragraph.</p>
            </div>
            <div className="rounded-3xl bg-cream p-6 ring-1 ring-navy/10">
              <p className="text-4xl italic">Cormorant Garamond</p>
              <p className="mt-2 text-2xl text-navy/80 italic">Nec tamen consumebatur</p>
              <p className="mt-3 text-lg text-navy/70">Body, Scripture, and the Latin motto. Italics carry the quotations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">The company, full length</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            Walk-cycle frames, facing you. Historical names stay historical. Grizel, the piper, the highlander, and the fishwife are the game’s own.
          </p>
          <ul className="mt-8 flex gap-1 overflow-x-auto border-b-2 border-amber pb-3">
            {PROCESSION.map((person) => (
              <li key={person.id} className="w-20 shrink-0 text-center sm:w-24">
                <img
                  src={`/cast/walk/${person.id}.png`}
                  alt=""
                  className="pixel mx-auto h-48 w-auto"
                />
                <p className="mt-2 font-display text-xs tracking-wide uppercase">{person.name}</p>
                <a
                  href={`/cast/hi/walk/${person.id}.png`}
                  download
                  className="inline-flex min-h-11 items-center text-sm text-ember underline underline-offset-4"
                >
                  4×
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">Poses worth using</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            Eight poses live on the stage sheet. These are the ones that read at a glance. Download the four-times file when the figure has to print.
          </p>
          <div className="mt-8 space-y-10">
            {LEADS.map((lead) => (
              <article key={lead.id}>
                <h3 className="font-display text-sm tracking-widest text-ember uppercase">{lead.name}</h3>
                <p className="mt-1 text-lg text-navy/75">{lead.line}</p>
                <ul className="mt-4 flex gap-3 overflow-x-auto pb-2">
                  {lead.poses.map(([pose, label]) => (
                    <li key={pose} className="w-36 shrink-0 rounded-2xl bg-navy-deep p-3 text-center sm:w-44">
                      <img
                        src={`/cast/stage/${lead.id}-${pose}.png`}
                        alt={`${lead.name}, ${label}`}
                        className="pixel mx-auto h-40 w-auto"
                      />
                      <p className="mt-2 font-display text-xs tracking-widest text-amber uppercase">{label}</p>
                      <a
                        className="inline-flex min-h-11 items-center text-sm text-parchment/80 underline underline-offset-4"
                        href={`/cast/hi/stage/${lead.id}-${pose}.png`}
                        download
                      >
                        PNG 4×
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">Keep the pixels square</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <figure className="rounded-2xl bg-navy-deep p-6 text-center">
              <img src="/cast/stage/knox-struck.png" alt="" className="pixel mx-auto h-40 w-auto" />
              <figcaption className="mt-3 font-display text-xs tracking-widest text-amber uppercase">Do · crisp</figcaption>
            </figure>
            <figure className="rounded-2xl bg-navy-deep p-6 text-center">
              <img src="/cast/stage/knox-struck.png" alt="" className="pixel-smoothed mx-auto h-40 w-auto" />
              <figcaption className="mt-3 font-display text-xs tracking-widest text-ember uppercase">Don’t · smoothed</figcaption>
            </figure>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {rules.map(([kind, text]) => (
              <li key={text} className="rounded-2xl bg-cream p-5 ring-1 ring-navy/10">
                <p className="font-display text-xs tracking-widest text-ember uppercase">{kind}</p>
                <p className="mt-2 text-lg text-navy/85">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">When you need the whole frame</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            Screenshots already have the cast in place. Use them for press. Don’t paste a second Knox on top.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["/art/game/title.jpg", "Title. Post tenebras lux."],
              ["/art/game/st-giles.jpg", "St Giles’, Knox in the pulpit."],
              ["/art/game/disputation.jpg", "Alasdair answering from Scripture."],
              ["/art/game/world-map.jpg", "The road across Scotland."],
            ].map(([src, caption]) => (
              <figure key={src}>
                <img src={src} alt={caption} className="w-full rounded-2xl ring-1 ring-navy/10" />
                <figcaption className="mt-2 text-lg text-navy/70">{caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6">
            <Link to="/press" className="inline-flex min-h-11 items-center font-display text-xs tracking-widest text-ember uppercase">
              Press kit
            </Link>
          </p>
        </section>
      </div>
    </PageShell>
  );
}

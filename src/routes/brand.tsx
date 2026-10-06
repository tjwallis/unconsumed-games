import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { COMPANY, LEADS } from "@/lib/cast";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Brand — Unconsumed Games" },
      {
        name: "description",
        content:
          "Brand guidelines for Unconsumed Games and Covenanter: the mark, the palette, and the cast, cut from the game’s own sprites.",
      },
    ],
  }),
  component: BrandPage,
});

const swatches = [
  { name: "Navy", hex: "#14213D", className: "bg-navy" },
  { name: "Ember", hex: "#E4572E", className: "bg-ember" },
  { name: "Amber", hex: "#F2A541", className: "bg-amber" },
  { name: "Parchment", hex: "#F4EBD9", className: "bg-parchment ring-1 ring-navy/15" },
];

const rules = [
  ["Do", "Scale the sprites by whole numbers and keep the edges crisp. They are the game, not a sketch of it."],
  ["Do", "Name the historical people as the game does: John Knox, Mary Queen of Scots, the Four Maries, Erskine of Dun, Lord James, Lekpreuik."],
  ["Do", "Leave Alasdair his Bible and satchel. He is the player, home from Geneva."],
  ["Don’t", "Blur, trace, or repaint the pixels. Don’t drop them onto a photograph."],
  ["Don’t", "Crop off feet, hands, or the book. Knox’s raised arms are preaching, not distress."],
  ["Don’t", "Fold the burning bush into the Covenanter wordmark. The bush is the studio. The gold title is the game."],
];

function BrandPage() {
  return (
    <PageShell>
      <section className="bg-navy px-5 pt-28 pb-16 text-parchment md:px-8 md:pt-32">
        <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-display text-xs tracking-widest text-amber uppercase">Brand guidelines</p>
            <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">How the game should look</h1>
            <p className="mt-5 max-w-xl text-xl text-parchment/80">
              The mark, the four colours, and the people of Covenanter. Every sprite on this page is cut from the game’s own sheets.
            </p>
          </div>
          <div className="flex items-end justify-center gap-1 sm:gap-3">
            <img src="/cast/stage/alasdair-talk.png" alt="" className="pixel h-28 w-auto sm:h-40" />
            <img src="/cast/stage/knox-struck.png" alt="" className="pixel h-32 w-auto sm:h-48" />
            <img src="/cast/stage/queen-talk.png" alt="" className="pixel h-28 w-auto sm:h-40" />
          </div>
        </div>
      </section>
      <div className="h-1 bg-ember" />

      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 md:px-8 md:py-20">
        <section>
          <h2 className="font-display text-3xl tracking-wide">The studio mark</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            A burning bush. Navy bush and parchment tree on light grounds. Cream bush and navy tree on dark grounds. The motto is <em>Nec tamen consumebatur</em>.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <figure className="flex items-center gap-5 rounded-3xl bg-cream p-6 ring-1 ring-navy/10">
              <img src="/brand/mark.svg" alt="" className="h-24 w-auto" />
              <figcaption>
                <p className="font-display text-sm tracking-widest uppercase">Light ground</p>
                <a className="text-ember underline underline-offset-4" href="/brand/mark.svg" download>
                  Download SVG
                </a>
              </figcaption>
            </figure>
            <figure className="flex items-center gap-5 rounded-3xl bg-navy p-6 text-parchment">
              <img src="/brand/mark-on-dark.svg" alt="" className="h-24 w-auto" />
              <figcaption>
                <p className="font-display text-sm tracking-widest uppercase">Dark ground</p>
                <a className="text-amber underline underline-offset-4" href="/brand/mark-on-dark.svg" download>
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
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-cream p-6 ring-1 ring-navy/10">
              <p className="font-display text-4xl tracking-wide">Cinzel</p>
              <p className="mt-2 text-lg text-navy/70">Titles, navigation, and labels. Never for long paragraphs.</p>
            </div>
            <div className="rounded-3xl bg-cream p-6 ring-1 ring-navy/10">
              <p className="text-4xl italic">Cormorant Garamond</p>
              <p className="mt-2 text-lg text-navy/70">Body, Scripture, and the Latin motto. Italics carry quotations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">The company</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            Busts from the portrait sheet. Historical people are marked. Alasdair, the piper, and Grizel are the game’s own.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {COMPANY.map((person) => (
              <li key={person.id} className="rounded-2xl bg-cream p-4 text-center ring-1 ring-navy/10">
                <img
                  src={`/cast/portrait/${person.id}.png`}
                  alt=""
                  className="pixel mx-auto h-24 w-24"
                />
                <p className="mt-3 font-display text-xs tracking-wide uppercase">{person.name}</p>
                <p className="text-base leading-snug text-navy/70">{person.role}</p>
                <p className="mt-1 font-display text-xs tracking-widest text-ember uppercase">
                  {person.historical ? "Historical" : "Of the story"}
                </p>
                <a
                  className="mt-2 inline-flex min-h-11 items-center text-sm text-ember underline underline-offset-4"
                  href={`/cast/walk/${person.id}.png`}
                  download
                >
                  Sprite
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">Poses worth using</h2>
          <p className="mt-3 max-w-2xl text-xl text-navy/80">
            The stage sheet is the hi-res cast: disputations, the pulpit, and the presence chamber. Use these before the little walk sprites when the figure has to carry a poster.
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
                        className="mt-1 inline-flex min-h-11 items-center text-sm text-parchment/80 underline underline-offset-4"
                        href={`/cast/stage/${lead.id}-${pose}.png`}
                        download
                      >
                        PNG
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">In the world</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["/art/game/title.jpg", "Title. Post tenebras lux."],
              ["/art/game/world-map.jpg", "The road across Scotland."],
              ["/art/game/perth.jpg", "Perth."],
              ["/art/game/reformation.jpg", "A kirk reformed."],
            ].map(([src, caption]) => (
              <figure key={src}>
                <img src={src} alt={caption} className="w-full rounded-2xl ring-1 ring-navy/10" />
                <figcaption className="mt-2 text-lg text-navy/70">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide">Use it this way</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {rules.map(([kind, text]) => (
              <li key={text} className="rounded-2xl bg-cream p-5 ring-1 ring-navy/10">
                <p className="font-display text-xs tracking-widest text-ember uppercase">{kind}</p>
                <p className="mt-2 text-lg text-navy/85">{text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}

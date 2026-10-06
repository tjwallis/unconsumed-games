import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press Kit — Covenanter · Unconsumed Games" },
      {
        name: "description",
        content:
          "Press kit for Covenanter, a story game set in the Scottish Reformation, 1559–60. Facts, features, and brand assets from Unconsumed Games.",
      },
    ],
  }),
  component: PressPage,
});

const facts = [
  ["Developer", "Unconsumed Games (independent)"],
  ["Publisher", "Self-published"],
  ["Game", "Covenanter"],
  ["Genre", "Story-driven historical game"],
  ["Setting", "Scotland, 1559–1560 (the Scottish Reformation)"],
  ["Platforms", "iOS (iPhone & iPad), Android; Steam planned"],
  ["Engine", "Flutter + Flame"],
  ["Release", "To be announced"],
  ["Price", "To be announced"],
  ["Monetization", "No ads, no loot boxes"],
  ["Website", STUDIO.site],
  ["Social", STUDIO.handle],
  ["Press contact", STUDIO.press],
] as const;

const features = [
  "A story campaign set in Reformation Scotland, 1559–60",
  "Scripture-based dialogue: answer the errors of the age with the Bible",
  "Theology reviewed by a theologian; history researched with care",
  "In-game history codex with real people, places, and events",
  "Family-friendly: no ads, no loot boxes",
  "Built to be played on a phone or tablet",
];

const shots = [
  {
    src: "/art/game/title.jpg",
    alt: "The Covenanter title screen: Post tenebras lux over a Scottish skyline.",
    label: "Title",
  },
  {
    src: "/art/game/st-giles.jpg",
    alt: "Knox in the pulpit of St Giles’ Kirk.",
    label: "St Giles’",
  },
  {
    src: "/art/game/disputation.jpg",
    alt: "Alasdair disputing with Friar Tobias.",
    label: "Disputation",
  },
  {
    src: "/art/game/dundee.jpg",
    alt: "Dundee harbour, with Knox.",
    label: "Dundee",
  },
  {
    src: "/art/game/world-map.jpg",
    alt: "The road across Scotland.",
    label: "The road",
  },
  {
    src: "/art/game/commonplace-book.jpg",
    alt: "The Commonplace Book of truths and proof-texts.",
    label: "The Book",
  },
];

const downloads = [
  {
    href: "/brand/mark-on-dark.svg",
    src: "/brand/mark-on-dark.svg",
    title: "Logo mark, dark background",
    kind: "SVG",
    dark: true,
  },
  {
    href: "/brand/mark.svg",
    src: "/brand/mark.svg",
    title: "Logo mark, light background",
    kind: "SVG",
    dark: false,
  },
  {
    href: "/brand/logo-lockup-dark.png",
    src: "/brand/logo-lockup-dark.png",
    title: "Logo lockup, dark",
    kind: "PNG",
    dark: true,
  },
  {
    href: "/brand/logo-lockup-light.png",
    src: "/brand/logo-lockup-light.png",
    title: "Logo lockup, light",
    kind: "PNG",
    dark: false,
  },
  {
    href: "/brand/app-icon.svg",
    src: "/brand/app-icon.svg",
    title: "App icon",
    kind: "SVG",
    dark: false,
  },
  {
    href: "/brand/app-icon-light.svg",
    src: "/brand/app-icon-light.svg",
    title: "App icon, light",
    kind: "SVG",
    dark: false,
  },
  {
    href: "/brand/app-icon.png",
    src: "/brand/app-icon.png",
    title: "App icon",
    kind: "PNG",
    dark: false,
  },
  {
    href: "/brand/app-icon-light.png",
    src: "/brand/app-icon-light.png",
    title: "App icon, light",
    kind: "PNG",
    dark: false,
  },
];

const swatches = [
  { name: "Navy", hex: "#14213D", className: "bg-navy" },
  { name: "Ember", hex: "#E4572E", className: "bg-ember" },
  { name: "Amber", hex: "#F2A541", className: "bg-amber" },
  { name: "Parchment", hex: "#F4EBD9", className: "bg-parchment ring-1 ring-navy/15" },
];

function PressPage() {
  return (
    <PageShell>
      <section className="bg-navy px-5 pt-28 pb-14 text-center text-parchment md:px-8 md:pt-32">
        <p className="font-display text-xs tracking-widest text-amber uppercase">Press kit</p>
        <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">Covenanter</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-parchment/80">
          A story game set in the Scottish Reformation, 1559–60. Everything you need to cover the game.
        </p>
        <p className="mt-4 text-lg">
          Questions?{" "}
          <a className="text-amber underline underline-offset-4" href={`mailto:${STUDIO.press}`}>
            {STUDIO.press}
          </a>
        </p>
      </section>
      <div className="h-1 bg-ember" />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <aside className="h-fit rounded-3xl bg-cream p-6 ring-1 ring-navy/5 lg:sticky lg:top-24">
          <h2 className="font-display text-sm tracking-widest text-navy uppercase">Fact sheet</h2>
          <dl className="mt-5 space-y-4">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="font-display text-xs tracking-widest text-ember uppercase">{label}</dt>
                <dd className="mt-1 text-lg text-navy">
                  {label === "Press contact" ? (
                    <a className="underline underline-offset-4" href={`mailto:${value}`}>
                      {value}
                    </a>
                  ) : label === "Website" ? (
                    <a className="underline underline-offset-4" href="/">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

        <article className="min-w-0">
          <h2 className="font-display text-3xl tracking-wide">Description</h2>
          <div className="mt-4 space-y-4 text-xl text-navy/85">
            <p>
              Covenanter is a story game set in the Scottish Reformation. It is 1559: John Knox has returned to Scotland, the Lords of the Congregation have bound themselves by covenant, and the nation stands on the edge of change. Players travel a country in upheaval, meet the errors of the age, and answer them the way the Reformers did: with Scripture.
            </p>
            <p>
              Every answer in the game is reviewed by a theologian on the team, and in-game history notes explain the real events behind each chapter. Covenanter is made for Christians who love Reformation history, and for the families, homeschoolers, and Christian schools passing that history on.
            </p>
          </div>

          <h2 id="history" className="mt-12 font-display text-3xl tracking-wide">
            The history behind the name
          </h2>
          <div className="mt-4 space-y-4 text-xl text-navy/85">
            <p>
              Most people link the word “Covenanter” with the 17th century. But on 3 December 1557, five Protestant nobles (the Earls of Argyll, Glencairn and Morton, Lord Lorne, and John Erskine) signed the “First Band,” pledging to “maintain, set forward, and establish the most blessed Word of God, and his Congregation.” Historians date the Lords of the Congregation to that band. Covenanting started with Knox’s generation, and that is where the game begins.
            </p>
            <p className="text-base text-navy/60 italic">
              Sources: PCA Historical Center; Scottish History Society.
            </p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wide">Features</h2>
          <ul className="mt-4 space-y-3 text-xl text-navy/85">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl tracking-wide">Trailer</h2>
          <Trailer />

          <h2 className="mt-12 font-display text-3xl tracking-wide">Screenshots</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((shot) => (
              <figure key={shot.label}>
                <div className="overflow-hidden rounded-2xl ring-1 ring-ember/25">
                  <img src={shot.src} alt={shot.alt} className="aspect-video w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="mt-2 font-display text-xs tracking-widest text-ember uppercase">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-3 text-base text-navy/60">
            Captured from the game. Character sprites on the{" "}
            <Link to="/brand" className="text-ember underline underline-offset-4">
              brand page
            </Link>{" "}
            are cut from the same sheets.
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wide">Logos & brand assets</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {downloads.map((asset) => (
              <li key={asset.href + asset.kind + asset.title}>
                <a
                  href={asset.href}
                  download
                  className="flex items-center gap-4 rounded-2xl bg-cream p-3 ring-1 ring-navy/10 transition-colors hover:ring-ember/40"
                >
                  <span
                    className={
                      asset.dark
                        ? "flex size-16 shrink-0 items-center justify-center rounded-xl bg-navy"
                        : "flex size-16 shrink-0 items-center justify-center rounded-xl bg-parchment"
                    }
                  >
                    <img src={asset.src} alt="" className="max-h-12 max-w-14 object-contain" />
                  </span>
                  <span>
                    <span className="block text-lg text-navy">{asset.title}</span>
                    <span className="font-display text-xs tracking-widest text-ember uppercase">{asset.kind} · Download</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-display text-sm tracking-widest text-navy uppercase">Palette</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {swatches.map((swatch) => (
              <li key={swatch.hex}>
                <div className={`h-14 rounded-xl ${swatch.className}`} />
                <p className="mt-2 text-lg text-navy">{swatch.name}</p>
                <p className="font-display text-xs tracking-widest text-navy/60">{swatch.hex}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base text-navy/60">
            Type: Cinzel for titles, Cormorant Garamond for text. The game logo will be added with the trailer.
          </p>

          <h2 className="mt-12 font-display text-3xl tracking-wide">About Unconsumed Games</h2>
          <div className="mt-4 space-y-4 text-xl text-navy/85">
            <p>
              Unconsumed Games is an independent studio founded by H.T. Williams, making games that are well made, faithful to Scripture, and honest about history. Covenanter is its first title.
            </p>
            <p>
              The studio’s name comes from Exodus 3:2: “the bush burned with fire, and the bush was not consumed.” The burning bush, with the Latin motto <em>{STUDIO.motto}</em> (“{STUDIO.mottoGloss}”), first appeared on the Church of Scotland’s General Assembly Acts in 1691 and became the Church’s official emblem in 1958.
            </p>
            <p>Founded by H.T. Williams.</p>
          </div>

          <h2 className="mt-12 font-display text-3xl tracking-wide">Press contact</h2>
          <p className="mt-4 text-xl text-navy/85">
            For review codes, interviews, and assets:{" "}
            <a className="text-ember underline underline-offset-4" href={`mailto:${STUDIO.press}`}>
              {STUDIO.press}
            </a>
            . Review keys are available on request. Embargo terms are confirmed with each request.
          </p>
          <p className="mt-3 text-base text-navy/60">
            No reviews, quotes, or awards are shown here yet. Coverage will be added as it is published.
          </p>
        </article>
      </div>
    </PageShell>
  );
}

function Trailer() {
  const [open, setOpen] = useState(false);
  return (
    <figure className="mt-5">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-ember/30">
        <img
          src="/art/game/title.jpg"
          alt="The Covenanter title screen, standing in until the trailer is cut."
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-navy/80 via-navy/10 to-transparent p-4 sm:p-6">
          <button
            type="button"
            className="min-h-11 rounded-full bg-ember px-5 font-display text-xs tracking-widest text-parchment uppercase"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Trailer coming soon
          </button>
        </div>
      </div>
      {open ? (
        <figcaption className="mt-3 text-lg text-navy/80">
          The trailer will live here as a video, with a downloadable cut for press. Until then, write{" "}
          <a className="text-ember underline underline-offset-4" href={`mailto:${STUDIO.press}`}>
            {STUDIO.press}
          </a>{" "}
          and we’ll send assets as they’re ready.
        </figcaption>
      ) : (
        <figcaption className="mt-3 text-base text-navy/60">
          Trailer and a downloadable cut will be posted here. Press can request assets by email.
        </figcaption>
      )}
    </figure>
  );
}

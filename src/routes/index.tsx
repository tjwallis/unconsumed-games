import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Landmark, Users } from "lucide-react";
import type { ReactNode } from "react";
import { CastParade } from "@/components/cast-parade";
import { CastCard, FigureBox } from "@/components/figure-box";
import { LaunchForm } from "@/components/launch-form";
import { PageShell } from "@/components/page-shell";
import { StageScene } from "@/components/stage-scene";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Covenanter — Unconsumed Games" },
      {
        name: "description",
        content:
          "A story game set in the Scottish Reformation, 1559–1560. Stand on the Word in the age of John Knox.",
      },
    ],
  }),
  component: Home,
});

const cornerCast = [
  {
    src: "/cast/walk/knox.png",
    alt: "John Knox standing in the corner of the card.",
  },
  {
    src: "/cast/walk/queen.png",
    alt: "Mary, Queen of Scots standing in the corner of the card.",
  },
  {
    src: "/cast/walk/piper.png",
    alt: "A burgh piper standing in the corner of the card.",
  },
] as const;

const reasons = [
  {
    icon: BookOpen,
    title: "Theologically sound",
    body: "Every answer is grounded in Scripture and reviewed by a theologian on our team. The game follows the historic Reformed faith, not vague spirituality.",
  },
  {
    icon: Landmark,
    title: "Historically accurate",
    body: "Set during the Reformation crisis of 1559–60, from Knox’s return to Scotland to the Reformation Parliament. The real people, places, and stakes, researched with care.",
  },
  {
    icon: Users,
    title: "Made for families",
    body: "No ads, no loot boxes, nothing you’ll have to skip past. Something to play together, and a natural fit for homeschool history and Christian school classrooms.",
  },
] as const;

const scenes = [
  {
    src: "/art/game/st-giles.jpg",
    title: "St Giles’",
    alt: "St Giles’ Kirk in Edinburgh, reformed, with Knox standing in the pulpit above the pews.",
  },
  {
    src: "/art/game/disputation.jpg",
    title: "A disputation",
    alt: "Alasdair answering Friar Tobias by choosing a truth from Scripture.",
  },
  {
    src: "/art/game/dundee.jpg",
    title: "Dundee",
    alt: "The harbour at Dundee, where the pilgrimage begins and Knox is home.",
  },
] as const;

function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-navy text-parchment">
        <div
          aria-hidden
          className="hero-rays pointer-events-none absolute inset-0 opacity-70"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-28 pb-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-32 lg:pb-20">
          <div className="rise">
            <p className="font-display text-xs tracking-widest text-amber uppercase">
              Scotland · 1559–1560
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none font-semibold tracking-wide text-parchment sm:text-6xl lg:text-7xl">
              Covenanter
            </h1>
            <p className="mt-5 text-2xl text-parchment italic sm:text-3xl">
              Stand on the Word in the age of John Knox.
            </p>
            <p className="mt-5 max-w-xl text-xl text-parchment/85">
              A story game set in the Scottish Reformation. Travel a nation in upheaval, meet the errors of the age, and answer them the way the Reformers did: with Scripture.
            </p>
            <div className="mt-8">
              <LaunchForm
                tone="hero"
                submitLabel="Join the launch list"
                note="Be first to hear about the beta, launch day, and the Steam page. The list isn’t connected yet — your email stays on this device, and nothing is sent."
              />
            </div>
          </div>

          <figure className="rise">
            <StageScene
              className="ring-1 ring-amber/70"
              background="/art/stages/edinburgh-high.png"
              figures={[
                {
                  src: "/cast/stage/alasdair-idle.png",
                  alt: "Alasdair, the pilgrim, in his gown with a Bible and satchel.",
                  size: "lead",
                },
                {
                  src: "/cast/stage/knox-struck.png",
                  alt: "John Knox preaching, arms raised.",
                  size: "tall",
                },
                {
                  src: "/cast/stage/queen-idle.png",
                  alt: "Mary, Queen of Scots, in a French hood and black gown.",
                  size: "lead",
                },
              ]}
            />
            <figcaption className="mt-3 text-center font-display text-xs tracking-widest text-amber uppercase">
              Alasdair · John Knox · Mary, Queen of Scots
            </figcaption>
          </figure>
        </div>
        <div className="relative h-1 bg-ember" />
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="band-frame mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-navy text-parchment md:grid-cols-[16rem_1fr]">
          <FigureBox
            src="/cast/stage/knox-struck.png"
            alt="John Knox preaching, arms raised."
            className="figure-box-flush"
          />
          <div className="px-6 py-10 md:px-12 md:py-14">
            <p className="font-display text-xs tracking-widest text-amber uppercase">The First Band</p>
            <p className="mt-4 text-2xl italic md:text-3xl">
              On 3 December 1557, Protestant lords in Scotland signed the “First Band,” pledging to “maintain, set forward, and establish the most blessed Word of God.” Covenanting started with Knox’s generation.
            </p>
            <a
              href="/press#history"
              className="mt-6 inline-flex min-h-11 items-center font-display text-xs tracking-widest text-amber uppercase"
            >
              The history behind the name
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-4xl tracking-wide text-navy md:text-5xl">
            Why Covenanter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-navy/80">
            Made for believers who love Reformation history, and for the families and teachers passing it on.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <CastCard key={reason.title} src={cornerCast[index].src} alt={cornerCast[index].alt}>
                <div className="flex size-12 items-center justify-center rounded-xl bg-navy text-amber">
                  <reason.icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-sm tracking-widest text-navy uppercase">
                  {reason.title}
                </h3>
                <p className="mt-3 text-lg text-navy/80">{reason.body}</p>
              </CastCard>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-center font-display text-sm tracking-widest text-ember uppercase">
              Who you meet
            </h3>
            <div className="mt-4">
              <CastParade />
            </div>
            <p className="mt-4 text-center">
              <Link
                to="/brand"
                className="inline-flex min-h-11 items-center font-display text-xs tracking-widest text-ember uppercase"
              >
                Brand guidelines
              </Link>
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {scenes.map((scene) => (
              <figure key={scene.title} className="scene-still">
                <div className="overflow-hidden rounded-2xl ring-1 ring-ember/25">
                  <img
                    src={scene.src}
                    alt={scene.alt}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-center font-display text-xs tracking-widest text-ember uppercase">
                  {scene.title}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-center text-base text-navy/60">
            Stills from the game. The people are the sprites you meet on the road.
          </p>
        </div>
      </section>

      <section id="platforms" className="bg-navy px-5 py-16 text-parchment md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-4xl tracking-wide md:text-5xl">Platforms</h2>
          <p className="mt-4 text-center text-xl text-parchment/75">
            Play on your phone or tablet, with more to come.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <PlatformCard
              name="iOS"
              detail="iPhone & iPad"
              status="Coming soon"
              figure="/cast/stage/alasdair-idle.png"
              figureAlt="Alasdair standing, Bible and satchel in hand."
              icon={<AppleMark />}
            />
            <PlatformCard
              name="Android"
              detail="Phones & tablets"
              status="Coming soon"
              figure="/cast/stage/knox-talk.png"
              figureAlt="John Knox speaking, one hand raised."
              icon={<AndroidMark />}
            />
            <PlatformCard
              name="Steam"
              detail="PC"
              status="Planned"
              figure="/cast/stage/queen-won.png"
              figureAlt="Mary, Queen of Scots, at court."
              icon={<SteamMark />}
            />
          </div>
        </div>
      </section>

      <section id="studio" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <img
            src="/brand/mark.svg"
            alt="The Unconsumed Games burning-bush mark."
            className="mx-auto h-44 w-auto md:h-56"
          />
          <div>
            <h2 className="font-display text-4xl tracking-wide text-navy md:text-5xl">
              About the studio
            </h2>
            <p className="mt-4 text-2xl text-ember italic">
              {STUDIO.motto} — “{STUDIO.mottoGloss}.”
            </p>
            <div className="mt-5 max-w-2xl space-y-4 text-xl text-navy/85">
              <p>
                Unconsumed Games takes its name from the burning bush: “the bush burned with fire, and the bush was not consumed” (Exodus 3:2). The Church of Scotland has used the burning bush and its Latin motto, <em>{STUDIO.motto}</em>, as an emblem of a church tried by fire and kept by God.
              </p>
              <p>
                We’re an independent studio making games that are well made, faithful to Scripture, and honest about history. Covenanter is our first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="list" className="bg-cream px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl tracking-wide text-navy md:text-5xl">
            Join the launch list
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-navy/80">
            Occasional updates only: beta invites, launch day, and resources for families and teachers.
          </p>
          <div className="mt-8 text-left">
            <LaunchForm
              tone="band"
              submitLabel="Keep me posted"
              note="Saved on this device only. The mailing list isn’t connected yet, so nothing is sent."
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function PlatformCard({
  name,
  detail,
  status,
  icon,
  figure,
  figureAlt,
}: {
  name: string;
  detail: string;
  status: string;
  icon: ReactNode;
  figure: string;
  figureAlt: string;
}) {
  return (
    <article className="platform-card">
      <div className="px-6 pt-8 text-center">
        <div className="mx-auto flex h-10 items-center justify-center text-amber">{icon}</div>
        <h3 className="mt-4 font-display text-sm tracking-widest uppercase">{name}</h3>
        <p className="mt-2 text-lg text-parchment/75">{detail}</p>
        <p className="mt-4 inline-flex min-h-8 items-center rounded-full bg-navy px-3 font-display text-xs tracking-widest text-amber uppercase">
          {status}
        </p>
      </div>
      <FigureBox src={figure} alt={figureAlt} className="figure-box-inset" />
    </article>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden>
      <path d="M16.37 12.72c.03 2.52 2.21 3.36 2.24 3.37-.02.06-.35 1.2-1.15 2.37-.69 1.01-1.41 2.02-2.54 2.04-1.11.02-1.47-.66-2.74-.66-1.27 0-1.67.64-2.72.68-1.09.04-1.92-1.09-2.62-2.1-1.43-2.06-2.52-5.82-1.05-8.36.73-1.26 2.03-2.06 3.44-2.08 1.07-.02 2.09.72 2.74.72.65 0 1.88-.89 3.17-.76.54.02 2.06.22 3.03 1.64-.08.05-1.81 1.06-1.8 3.14ZM14.7 6.3c.58-.7 1-.68 1.04-1.68.02-.68-.18-1.4-.58-1.96-.58-.7-1.53-1.24-2.32-1.27-.06.78.22 1.58.66 2.16.52.68 1.38 1.2 2.2 1.25Z" />
    </svg>
  );
}

function AndroidMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="currentColor" aria-hidden>
      <path d="M7.2 8.4 5.7 5.8a.4.4 0 0 1 .7-.4l1.5 2.6a8.7 8.7 0 0 1 8.2 0l1.5-2.6a.4.4 0 1 1 .7.4l-1.5 2.6A7.4 7.4 0 0 1 20 14.2H4a7.4 7.4 0 0 1 3.2-5.8ZM8 12.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 15.2h1.2V19a1 1 0 0 0 2 0v-3.8h5.6V19a1 1 0 0 0 2 0v-3.8H18a1 1 0 0 0 1-1V14H5v.2a1 1 0 0 0 1 1Z" />
    </svg>
  );
}

function SteamMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-8" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.4" cy="14.4" r="2" fill="currentColor" />
      <circle cx="15.3" cy="9.2" r="1.35" fill="currentColor" />
      <path d="M10.1 13.4 14.2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

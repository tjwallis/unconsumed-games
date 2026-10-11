import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ds/actions";
import { Icon } from "@/components/ds/icon";
import { PageHeader, PageShell } from "@/components/page-shell";
import { BetaFaq, BetaSteps, SignupForm } from "@/components/site/beta";
import { BETA, SELECTION, daysLeftLabel, useBeta } from "@/lib/beta";
import { POSES } from "@/lib/covenanter";

export const Route = createFileRoute("/beta")({
  head: () => ({
    meta: [
      { title: "Covenanter closed beta · Unconsumed Games" },
      {
        name: "description",
        content:
          "The Covenanter closed beta opens on Reformation Day, Saturday 31 October 2026, on iOS and Android. Request a place: testers are chosen at random, and invites go out by email.",
      },
    ],
  }),
  component: BetaPage,
});

const FAMILIES = [
  "Ages about 5 to 13 and up",
  "Five difficulty levels",
  "No ads",
  "No loot boxes",
  "Something to play together",
];

function BetaPage() {
  const { phase, daysLeft } = useBeta();
  return (
    <PageShell>
      <PageHeader
        eyebrow={
          phase === "open" ? "Covenanter · Closed beta now open" : "Covenanter · Closed beta"
        }
        title={
          phase === "open"
            ? "The closed beta is open."
            : "The closed beta opens on Reformation Day."
        }
        lead={
          phase === "open"
            ? `Covenanter is in closed beta on ${BETA.platforms}. ${SELECTION}`
            : `${BETA.dateLong}, on ${BETA.platforms}. ${SELECTION}`
        }
        aside={
          <div className="ph__art ph__art--scholar">
            <img
              src={POSES.hero}
              alt="The Scholar, a young Scottish scholar of Covenanter with a satchel and a Bible"
              width={346}
              height={660}
            />
          </div>
        }
      >
        <div className="beta-hero__form" id="join">
          <SignupForm withPlatform />
          <p className="uc-caption">
            {daysLeft !== null ? `${daysLeftLabel(daysLeft)} · ` : ""}We will only write about
            Covenanter. You can leave the list from any email.
          </p>
        </div>
      </PageHeader>

      <section className="sec sec--light doc">
        <div className="wrap beta-page">
          <section aria-labelledby="how-h">
            <header className="sh">
              <p className="uc-eyebrow">How it works</p>
              <h2 id="how-h">Three steps.</h2>
            </header>
            <BetaSteps phase={phase} />
          </section>

          <section className="beta-page__fam" aria-labelledby="fam-h">
            <div>
              <p className="uc-eyebrow">For families</p>
              <h2 id="fam-h">Made for the kitchen table.</h2>
              <p className="uc-lead">
                Something parents and children can play side by side, talk about, and come back to.
                Covenanter is grounded in the Word of God and teaches Bible, doctrine and history
                through the story of the Scottish Reformation.
              </p>
            </div>
            <ul className="ticks ticks--card">
              {FAMILIES.map((f) => (
                <li key={f}>
                  <Icon name="flame" size={20} />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section id="faq" aria-labelledby="faq-h">
            <header className="sh">
              <p className="uc-eyebrow">Questions</p>
              <h2 id="faq-h">About the beta.</h2>
            </header>
            <BetaFaq />
          </section>

          <div className="beta-page__end">
            <Button size="lg" href="#join" iconLeft="bell">
              Request to join
            </Button>
            <Button size="lg" variant="secondary" href="/#game" iconRight="arrow-right">
              Meet Covenanter
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

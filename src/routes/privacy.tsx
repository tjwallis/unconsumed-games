import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy · Unconsumed Games" },
      {
        name: "description",
        content:
          "How Unconsumed Games handles the website, the launch list, and Covenanter account data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Studio"
        title="Privacy policy"
        lead="How this site and Covenanter handle information."
      />
      <section className="sec sec--light doc">
        <div className="wrap">
          <article className="prose prose--narrow">
            <p className="uc-lead">
              {STUDIO.name} (“we”) makes Covenanter and runs {STUDIO.site}. This notice describes
              the website and the game. Questions go to{" "}
              <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a>.
            </p>

            <h2>The launch list</h2>
            <p>
              The notify form on this site is not connected to a mailing service yet. If you enter
              an email, it is saved only in your browser on this device. It is not sent to us, and
              we cannot see it. When the list is connected, we will say so on the form. From then
              on, an address you submit will be used only for occasional notes: beta invitations,
              launch day, and resources for families and teachers. You will be able to leave the
              list from any note we send.
            </p>

            <h2>Game accounts</h2>
            <p>
              If you create a Covenanter account, we keep the address you signed in with and the
              cloud saves stored under that account. You can delete the account and those saves in
              the game under Settings → Delete account, or by emailing us from the sign-in address.
              See <a href="/delete-account">how to delete your account</a>.
            </p>

            <h2>Crash reports and analytics</h2>
            <p>
              Crash and analytics data is not tied to your name or email. Crash reports are kept for
              90 days. Performance data is kept for 30 to 60 days. Analytics follow the in-game
              setting you choose: 2 months or 14 months.
            </p>

            <h2>What we do not do</h2>
            <p>
              Covenanter has no ads and no loot boxes. We do not sell personal information. We do
              not ask children to create an account on this website.
            </p>

            <p className="prose__src">Last updated 1 October 2026.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

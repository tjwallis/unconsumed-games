import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete account · Unconsumed Games" },
      { name: "description", content: "How to delete your Covenanter account and cloud saves." },
    ],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Account help"
        title="Delete account"
        lead="How to delete your Covenanter account and cloud saves."
      />
      <section className="sec sec--light doc">
        <div className="wrap">
          <article className="prose prose--narrow">
            <h2>Delete your account</h2>
            <p>You can delete your Covenanter account in either of these ways.</p>
            <ol className="steps">
              <li>
                In the game, open <strong>Settings</strong> → <strong>Delete account</strong> and
                follow the confirmation steps.
              </li>
              <li>
                Email <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a> from the address you
                used to sign in, and ask us to delete your account.
              </li>
            </ol>

            <h2>What gets deleted</h2>
            <p>
              We delete your account and the cloud saves (game progress) stored under it. Deletion
              from third-party systems may take the time described in the retention notes below.
            </p>

            <h2>Crash and analytics data</h2>
            <p>
              Crash and analytics data is not tied to your name or email. It expires under our
              retention settings: crash reports after 90 days, performance data after 30 to 60 days,
              and analytics according to the in-game setting you chose (2 or 14 months).
            </p>

            <p className="prose__src">
              For privacy questions, write to <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a>.
              See our <a href="/privacy">privacy policy</a>.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

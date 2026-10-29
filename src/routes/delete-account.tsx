import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete account · Unconsumed Games" },
      {
        name: "description",
        content: "How to delete your Covenanter account and cloud saves.",
      },
    ],
  }),
  component: DeleteAccountPage,
});

function Mail() {
  return <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a>;
}

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
          <article className="prose prose--narrow prose--policy">
            <h2>Delete your account</h2>
            <p>You can delete your Covenanter account in either of these ways.</p>
            <ol className="steps">
              <li>
                In the game, open <strong>Settings → Account → Delete account</strong>. The game
                asks you to confirm (“This cannot be undone”), and may ask you to sign in again.
              </li>
              <li>
                Email <Mail /> from the address you used to sign in, and ask us to delete your
                account.
              </li>
            </ol>

            <h2>What gets deleted</h2>
            <p>Deleting the account does all of the following:</p>
            <ul>
              <li>
                deletes every journey stored in your cloud account, so they disappear from all your
                devices,
              </li>
              <li>deletes this device’s copy of your account details,</li>
              <li>deletes your account with Firebase Authentication,</li>
              <li>signs you out, and the game carries on as a guest, and</li>
              <li>
                on iPhone, iPad and Android, forgets the reporting number for this copy of the game,
                so later play reports cannot be linked with earlier ones.
              </li>
            </ul>
            <p>
              Google tells us that deleted account data is gone from its backups within 180 days.
            </p>
            <p>
              Deleting an account does not delete play reports, crash reports or speed reports
              already collected. There is no user ID, and those reports are not tied to your name,
              your email or your account, so we cannot pick them out. It also does not delete a Send
              a Note message. If you want a note deleted, write to <Mail /> and tell us what you
              wrote and about when.
            </p>
            <p>
              If you play as a guest, there is no account for us to delete. Saves stay on the
              device. Remove the game or clear its data to erase them. We hold no copy.
            </p>

            <h2>Crash and analytics data</h2>
            <p>
              Crash and analytics data is not tied to your name, your email or your account. We do
              not collect a user ID or an advertising ID. Ad ID collection is disabled. Google
              Analytics keeps play reports, including time spent, for 14 months and then deletes
              them. Crash reports are kept for 90 days. Performance data is kept for 30 to 60 days.
            </p>
            <p>
              Answer data (which catechism, psalm and dispute answers you chose) is sent only if you
              opt in to <strong>Share my answers</strong>. If you do, it is part of the play reports
              and is deleted with them after 14 months.
            </p>

            <p className="prose__src">
              Last updated 29 October 2026. For privacy questions, write to <Mail />. See our{" "}
              <a href="/privacy">privacy policy</a>.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}

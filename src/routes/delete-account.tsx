import { Link, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Account — Unconsumed Games" },
      {
        name: "description",
        content: "How to delete your Covenanter account and cloud saves.",
      },
    ],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <PageShell>
      <section className="bg-navy px-5 pt-28 pb-16 text-center text-parchment md:px-8 md:pt-32">
        <p className="font-display text-xs tracking-widest text-amber uppercase">Account help</p>
        <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">Delete account</h1>
        <p className="mt-4 text-xl text-parchment/80">
          How to delete your Covenanter account and cloud saves.
        </p>
      </section>
      <div className="h-1 bg-ember" />

      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <div className="rounded-3xl bg-cream p-7 ring-1 ring-navy/5 sm:p-10">
          <h2 className="font-display text-3xl tracking-wide">Delete your account</h2>
          <p className="mt-4 text-xl">You can delete your Covenanter account in either of these ways:</p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-xl text-navy/85">
            <li>
              In the game, open <strong className="font-semibold text-navy">Settings</strong>
              {" → "}
              <strong className="font-semibold text-navy">Delete account</strong> and follow the confirmation steps.
            </li>
            <li>
              Email{" "}
              <a className="text-ember underline underline-offset-4" href={`mailto:${STUDIO.hello}`}>
                {STUDIO.hello}
              </a>{" "}
              from the address you used to sign in, and ask us to delete your account.
            </li>
          </ol>

          <h2 className="mt-10 font-display text-3xl tracking-wide">What gets deleted</h2>
          <p className="mt-4 text-xl text-navy/85">
            We delete your account and your cloud saves (game progress) stored under that account. Deletion from third-party systems may take the time described in our retention notes below.
          </p>

          <h2 className="mt-10 font-display text-3xl tracking-wide">Crash and analytics data</h2>
          <p className="mt-4 text-xl text-navy/85">
            Crash and analytics data is not tied to your name or email. It expires under our retention settings: crash reports after 90 days, performance data after 30–60 days, and analytics according to the in-game setting you chose (2 or 14 months).
          </p>

          <p className="mt-8 text-lg text-navy/75 italic">
            For privacy questions, contact{" "}
            <a className="text-ember underline underline-offset-4 not-italic" href={`mailto:${STUDIO.hello}`}>
              {STUDIO.hello}
            </a>
            . See our{" "}
            <Link to="/privacy" className="text-ember underline underline-offset-4 not-italic">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}

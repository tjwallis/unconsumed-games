import { Link, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Unconsumed Games" },
      {
        name: "description",
        content: "How Unconsumed Games handles the website, the launch list, and Covenanter account data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <section className="bg-navy px-5 pt-28 pb-16 text-center text-parchment md:px-8 md:pt-32">
        <p className="font-display text-xs tracking-widest text-amber uppercase">Studio</p>
        <h1 className="mt-4 font-display text-5xl tracking-wide sm:text-6xl">Privacy policy</h1>
        <p className="mt-4 text-xl text-parchment/80">How this site and Covenanter handle information.</p>
      </section>
      <div className="h-1 bg-ember" />

      <article className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-xl text-navy/85 md:px-8 md:py-20">
        <p>
          {STUDIO.name} (“we”) makes Covenanter and runs {STUDIO.site}. This notice describes the website and the game. Questions go to{" "}
          <a className="text-ember underline underline-offset-4" href={`mailto:${STUDIO.hello}`}>
            {STUDIO.hello}
          </a>
          .
        </p>

        <section>
          <h2 className="font-display text-3xl tracking-wide text-navy">The launch list</h2>
          <p className="mt-3">
            The join form on this site is not connected to a mailing service yet. If you enter an email, it is saved only in your browser on this device. It is not sent to us, and we cannot see it. When the list is connected, we will say so on the form. From then on, an address you submit will be used only for occasional notes: beta invites, launch day, and resources for families and teachers. You will be able to leave the list from any note we send.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide text-navy">Game accounts</h2>
          <p className="mt-3">
            If you create a Covenanter account, we keep the address you signed in with and the cloud saves stored under that account. You can delete the account and those saves in the game under Settings → Delete account, or by emailing us from the sign-in address. See{" "}
            <Link to="/delete-account" className="text-ember underline underline-offset-4">
              how to delete your account
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide text-navy">Crash reports and analytics</h2>
          <p className="mt-3">
            Crash and analytics data is not tied to your name or email. Crash reports are kept for 90 days. Performance data is kept for 30–60 days. Analytics follow the in-game setting you choose: 2 months or 14 months.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl tracking-wide text-navy">What we don’t do</h2>
          <p className="mt-3">
            Covenanter has no ads and no loot boxes. We do not sell personal information. We do not ask children to create an account on this website.
          </p>
        </section>

        <p className="text-base text-navy/60">Last updated 1 October 2026.</p>
      </article>
    </PageShell>
  );
}

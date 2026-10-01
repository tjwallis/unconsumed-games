import { Link } from "@tanstack/react-router";
import { LogoLockup } from "@/components/logo";
import { SOCIAL, STUDIO } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-parchment">
      <div className="h-1 bg-ember" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <Link to="/" aria-label="Unconsumed Games home">
          <LogoLockup />
        </Link>
        <p className="text-base text-parchment/80 md:text-right">
          Follow {STUDIO.handle}
          {": "}
          {SOCIAL.map((item, index) => (
            <span key={item.label}>
              {index > 0 ? " " : null}
              <a
                href={item.href}
                className="text-amber hover:text-parchment"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            </span>
          ))}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-3 gap-y-2 px-5 pb-8 text-sm text-parchment/60 md:px-8">
        <span>© {STUDIO.name}</span>
        <span aria-hidden>·</span>
        <span>{STUDIO.site}</span>
        <span aria-hidden>·</span>
        <Link to="/" className="underline decoration-parchment/30 underline-offset-4 hover:text-parchment">
          Home
        </Link>
        <span aria-hidden>·</span>
        <Link to="/press" className="underline decoration-parchment/30 underline-offset-4 hover:text-parchment">
          Press Kit
        </Link>
        <span aria-hidden>·</span>
        <Link
          to="/delete-account"
          className="underline decoration-parchment/30 underline-offset-4 hover:text-parchment"
        >
          Delete account
        </Link>
        <span aria-hidden>·</span>
        <Link to="/privacy" className="underline decoration-parchment/30 underline-offset-4 hover:text-parchment">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

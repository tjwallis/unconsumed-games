import { LEGAL, SOCIAL, STUDIO } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="foot" data-theme="dark">
      <div className="wrap">
        <div className="foot__row">
          <img src="/brand/lockup-on-dark.png" alt="Unconsumed Games" width={165} height={56} />
          <nav className="foot__l" aria-label="Footer">
            <a href="/#lasting">Why it lasts</a>
            <a href="/#cast">The cast</a>
            <a href="/#covenant">The name</a>
            <a href="/#game">Covenanter</a>
            <a href="/#notify">Notify me</a>
          </nav>
        </div>
        <div className="foot__social">
          <span>Follow {STUDIO.handle}</span>
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <div className="foot__legal">
          <span>
            © {new Date().getFullYear()} {STUDIO.name} · Scripture from the Authorised Version ·
            Psalms from the Scottish Psalter
          </span>
          <nav aria-label="Studio">
            {LEGAL.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="foot__bar" />
    </footer>
  );
}

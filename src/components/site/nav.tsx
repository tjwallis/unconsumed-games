import { useEffect, useState } from "react";
import { Button, IconButton } from "@/components/ds/actions";
import { useNotify } from "@/components/site/notify";
import { LEGAL, NAV } from "@/lib/site";

export function SiteNav() {
  const notify = useNotify();
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    if (!menu) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    const onWide = () => window.innerWidth > 1240 && setMenu(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onWide);
    };
  }, [menu]);

  return (
    <header
      className={"nav" + (solid || menu ? " solid" : "")}
      data-theme="dark"
      data-screen-label="Navigation"
    >
      <div className="wrap nav__row">
        <a className="nav__brand" href="/#top" aria-label="Unconsumed Games, home">
          <img src="/brand/mark-on-dark.svg" alt="" width={34} height={50} />
          <span className="nav__word">
            Unconsumed <em>Games</em>
          </span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <Button size="sm" onClick={notify.open}>
            Request to join
          </Button>
          <IconButton
            className="nav__menu"
            icon={menu ? "x" : "menu"}
            label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="nav-drawer"
            onClick={() => setMenu((m) => !m)}
          />
        </nav>
      </div>
      {menu ? (
        <nav id="nav-drawer" className="nav__drawer" aria-label="Menu">
          <div className="wrap">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenu(false)}>
                {l.label}
              </a>
            ))}
            <Button
              className="nav__drawer-cta"
              onClick={() => {
                setMenu(false);
                notify.open();
              }}
            >
              Request to join
            </Button>
            <div className="nav__more">
              {LEGAL.slice(0, 2).map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

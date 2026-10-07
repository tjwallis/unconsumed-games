import type { CSSProperties, ReactNode } from "react";
import { PT } from "@/lib/covenanter";

/** Oval gold portrait frame with the crimson keystone, cut from the game's portrait sheet. */
export function Oval({ id, n, sm }: { id: string; n?: number; sm?: boolean }) {
  const [x, y] = PT[id] ?? [0, 0];
  const style = { "--cx": x, "--cy": y, ...(n ? { "--n": n } : {}) } as CSSProperties;
  return (
    <span className={"ov" + (sm ? " ov--sm" : "")} style={style}>
      <span className="ov__in">
        <span className="ov__sp" />
      </span>
    </span>
  );
}

/** The four gold lozenges at the corners of a game panel or parchment. */
export function Lozenges() {
  return (
    <>
      <i className="lz a" />
      <i className="lz b" />
      <i className="lz c" />
      <i className="lz d" />
    </>
  );
}

/** Midnight glass panel with a double gold rule, as in the game UI. */
export function Panel({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={"gp " + className} data-theme="dark">
      <Lozenges />
      {children}
    </div>
  );
}

export function GoldDivider() {
  return (
    <div className="gdiv">
      <i />
    </div>
  );
}

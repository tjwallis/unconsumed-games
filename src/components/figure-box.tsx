import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** A sprite stood inside a framed box. Feet stay on the floor line. */
export function FigureBox({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("figure-box", className)}>
      <span className="figure-box-floor" aria-hidden />
      <img src={src} alt={alt} className="pixel figure-box-sprite" />
    </div>
  );
}

/** Full-length sprite with a card across the hands, feet still visible. */
export function HeldPlate({
  src,
  name,
  role,
}: {
  src: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="held-plate">
      <FigureBox src={src} alt="" />
      <figcaption className="held-ticket">
        <p className="font-display text-xs tracking-widest text-navy uppercase">{name}</p>
        <p className="mt-1 text-base leading-snug text-navy/70">{role}</p>
      </figcaption>
    </figure>
  );
}

export function CastCard({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <article className="cast-card">
      <div className="cast-card-copy">{children}</div>
      <FigureBox src={src} alt={alt} className="cast-card-figure" />
    </article>
  );
}

import type { CSSProperties } from "react";

export type StageFigure = {
  src: string;
  alt: string;
  size: "crowd" | "lead" | "tall";
};

/** A game stage, with the cast stood on it. Sprites stay crisp. */
export function StageScene({
  background,
  figures,
  className = "",
}: {
  background: string;
  figures: StageFigure[];
  className?: string;
}) {
  return (
    <div className={("stage " + className).trim()}>
      <img src={background} alt="" className="stage__bg pixel" />
      <div className="stage__cast">
        {figures.map((figure, index) => (
          <img
            key={figure.src + figure.alt}
            src={figure.src}
            alt={figure.alt}
            className={"stage__fig pixel stage__fig--" + figure.size}
            style={{ "--i": index } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}

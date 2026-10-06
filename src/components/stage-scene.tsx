import { cn } from "@/lib/cn";

export type StageFigure = {
  src: string;
  alt: string;
  size: "crowd" | "lead" | "tall";
};

const heights: Record<StageFigure["size"], string> = {
  crowd: "h-20 -mx-1 sm:h-28 lg:h-32",
  lead: "h-24 -mx-4 sm:h-36 sm:-mx-6 lg:h-44",
  tall: "h-28 -mx-5 sm:h-44 sm:-mx-8 lg:h-52",
};

/** A game stage, with the cast stood on it. Sprites stay crisp. */
export function StageScene({
  background,
  figures,
  className,
}: {
  background: string;
  figures: StageFigure[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl bg-navy-deep",
        className,
      )}
    >
      <img
        src={background}
        alt=""
        className="pixel absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        {figures.map((figure) => (
          <img
            key={figure.src + figure.alt}
            src={figure.src}
            alt={figure.alt}
            className={cn("pixel w-auto", heights[figure.size])}
          />
        ))}
      </div>
    </div>
  );
}

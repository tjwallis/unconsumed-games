import { cn } from "@/lib/cn";

export function LogoLockup({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src="/brand/mark-on-dark.svg"
        alt=""
        className={cn("h-11 w-auto", markClassName)}
      />
      <span className="leading-none">
        <span className="block font-display text-sm tracking-wide text-parchment uppercase">
          Unconsumed
        </span>
        <span className="mt-1 block font-display text-xs tracking-widest text-amber uppercase">
          Games
        </span>
      </span>
    </span>
  );
}

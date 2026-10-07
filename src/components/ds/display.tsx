import type { HTMLAttributes } from "react";

export function Badge({
  tone = "neutral",
  size = "md",
  dot = false,
  className = "",
  children,
  ...rest
}: {
  tone?: "neutral" | "accent" | "gold" | "success" | "danger" | "info" | "inverse";
  size?: "sm" | "md";
  dot?: boolean;
} & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={("uc-badge " + className).trim()} data-tone={tone} data-size={size} {...rest}>
      {dot ? <span className="uc-badge__dot" /> : null}
      {children}
    </span>
  );
}

import { useEffect, useState } from "react";
import type { DropdownOption } from "@/components/ds/dropdown";

/* The Covenanter closed beta. Copy follows the campaign house rules: iOS and Android only,
   invites go out by email, no promised times. A request is not a guaranteed place: testers are
   chosen at random from everyone who asks. */
export const BETA = {
  /** Midnight Eastern on Reformation Day, Saturday 31 October 2026. */
  opensAt: new Date("2026-10-31T00:00:00-04:00"),
  dateLong: "Saturday 31 October",
  dateShort: "31 October",
  platforms: "iOS and Android",
} as const;

/** Platform interest for Kit tags. Steam is not part of the closed beta. "unsure" adds no tag. */
export const PLATFORM_OPTIONS: DropdownOption[] = [
  {
    value: "ios",
    label: "iOS",
    description: "iPhone and iPad",
    icon: "tablet-smartphone",
    badge: "Closed beta",
  },
  {
    value: "android",
    label: "Android",
    description: "Phones and tablets",
    icon: "smartphone",
    badge: "Closed beta",
  },
  { value: "steam", label: "Steam", description: "PC, after the beta", icon: "monitor" },
  { value: "unsure", label: "Not sure yet", description: "We’ll write about every platform" },
];

/** The one sentence that says a request is not a guaranteed place. Use it wherever people sign up. */
export const SELECTION =
  "Places are limited, so we choose testers at random from everyone who asks. If you are chosen, your invite comes by email.";

export type BetaPhase = "soon" | "open";

/**
 * "soon" until the beta opens, then "open". The static HTML is built as "soon"; the visitor's
 * clock switches it after load, so launch-day copy appears without a redeploy.
 */
export function useBeta() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);
  const phase: BetaPhase = now !== null && now >= BETA.opensAt.getTime() ? "open" : "soon";
  // Whole days left, shown only once the clock is known (never in the static HTML).
  const daysLeft =
    now === null || phase === "open"
      ? null
      : Math.ceil((BETA.opensAt.getTime() - now) / 86_400_000);
  return { phase, daysLeft };
}

export function daysLeftLabel(days: number | null) {
  if (days === null) return "";
  if (days <= 1) return "Opens tomorrow";
  return `${days} days to go`;
}

import { useEffect, useState } from "react";

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

/**
 * Beside every waitlist form. The closed beta is invite-only; this list is news of the full launch.
 * The form does not ask which platform. The post still goes to the same Kit endpoint, with no platform chosen.
 */
export const WAITLIST_NOTE =
  "The closed beta is invite-only. This list is for news of the full launch.";

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

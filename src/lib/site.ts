export const STUDIO = {
  name: "Unconsumed Games",
  handle: "@unconsumedgames",
  site: "unconsumedgames.com",
  hello: "hello@unconsumedgames.com",
  press: "press@unconsumedgames.com",
  motto: "Nec tamen consumebatur",
  mottoGloss: "yet it was not consumed",
} as const;

export const SOCIAL = [
  { label: "X", href: "https://x.com/unconsumedgames" },
  { label: "YouTube", href: "https://www.youtube.com/@unconsumedgames" },
  { label: "TikTok", href: "https://www.tiktok.com/@unconsumedgames" },
  { label: "Instagram", href: "https://www.instagram.com/unconsumedgames" },
  { label: "Bluesky", href: "https://bsky.app/profile/unconsumedgames" },
  { label: "Facebook", href: "https://www.facebook.com/unconsumedgames" },
] as const;

/** Sections of the home page. `/#id` works from every route and scrolls in place on the home page. */
export const NAV = [
  { label: "Why it lasts", href: "/#lasting" },
  { label: "The cast", href: "/#cast" },
  { label: "The name", href: "/#covenant" },
  { label: "Covenanter", href: "/#game" },
  { label: "Try it", href: "/#disputation" },
] as const;

export const LEGAL = [
  { label: "Press kit", href: "/press" },
  { label: "Brand", href: "/brand" },
  { label: "Privacy", href: "/privacy" },
  { label: "Delete account", href: "/delete-account" },
] as const;

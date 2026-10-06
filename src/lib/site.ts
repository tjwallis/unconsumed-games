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

export const NAV = [
  { label: "Why Covenanter", to: "/", hash: "why" as const },
  { label: "Platforms", to: "/", hash: "platforms" as const },
  { label: "About", to: "/", hash: "studio" as const },
  { label: "Brand", to: "/brand", hash: undefined },
  { label: "Press", to: "/press", hash: undefined },
  { label: "Join the List", to: "/", hash: "list" as const },
] as const;

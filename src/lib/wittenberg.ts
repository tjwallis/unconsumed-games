/**
 * Wittenberg 1517, the free browser demo.
 *
 * The play URL is not final. Change `WITTENBERG_PLAY_URL` when the subdomain is set.
 * Every "Play in your browser" link on the site reads this constant.
 */
export const WITTENBERG_PLAY_URL = "https://play.unconsumedgames.com";

/** Share card for /1517. The image is the composited title (1280 × 640). */
export const WITTENBERG_SHARE = {
  title: "Wittenberg 1517 · Unconsumed Games",
  description:
    "A free browser game. On 31 October 1517, Martin Luther posts the Ninety-five Theses in Wittenberg. One map, then the town is reformed. Plays on a phone or a computer.",
  imagePath: "/art/wittenberg/preview.png",
  imageWidth: "1280",
  imageHeight: "640",
} as const;

export function wittenbergShareImage(siteUrl: string) {
  return `${siteUrl.replace(/\/$/, "")}${WITTENBERG_SHARE.imagePath}`;
}

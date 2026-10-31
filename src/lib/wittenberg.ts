/**
 * Wittenberg 1517, the free browser demo.
 *
 * The play URL is not final. Change `WITTENBERG_PLAY_URL` when the subdomain is set.
 * Every "Play in your browser" link on the site reads this constant.
 */
export const WITTENBERG_PLAY_URL = "https://play.unconsumedgames.com";

/** Share card for /1517. The image is the composited title, cropped to a social card. */
export const WITTENBERG_SHARE = {
  title: "Wittenberg 1517 · Unconsumed Games",
  description:
    "A free browser game. On 31 October 1517, answer three disputations in Wittenberg’s market, write the Ninety-five Theses in Luther’s cell, and post them on the Castle Church door. Plays on a phone or a computer.",
  imagePath: "/art/wittenberg/og.jpg",
  imageWidth: "1200",
  imageHeight: "630",
} as const;

export function wittenbergShareImage(siteUrl: string) {
  return `${siteUrl.replace(/\/$/, "")}${WITTENBERG_SHARE.imagePath}`;
}

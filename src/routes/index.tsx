import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Covenant } from "@/components/home/covenant";
import { Hero } from "@/components/home/hero";
import { BetaBand, Cast, Disputation, Game, Lasting, Motto } from "@/components/home/sections";
import { PageShell } from "@/components/page-shell";

/** Search-engine description of the studio and the game. Facts only: no ratings or prices. */
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://unconsumedgames.com/#org",
      name: "Unconsumed Games",
      url: "https://unconsumedgames.com/",
      logo: "https://unconsumedgames.com/brand/app-icon.png",
      email: "hello@unconsumedgames.com",
    },
    {
      "@type": "VideoGame",
      name: "Covenanter",
      url: "https://unconsumedgames.com/",
      description:
        "A pixel-art RPG of the Scottish Reformation, 1559–60. Children walk the towns of Scotland, hear the Reformers preach, learn the Word of God and answer false teaching with Scripture.",
      genre: ["Educational", "Historical", "Adventure"],
      gamePlatform: ["iOS", "Android"],
      audience: { "@type": "PeopleAudience", suggestedMinAge: 5 },
      inLanguage: "en",
      image: "https://unconsumedgames.com/og.jpg",
      publisher: { "@id": "https://unconsumedgames.com/#org" },
      author: { "@id": "https://unconsumedgames.com/#org" },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unconsumed Games · Games that abide" },
      {
        name: "description",
        content:
          "Unconsumed Games creates games grounded in the Word of God. Covenanter, a tale of the Scottish Reformation, opens its closed beta on iOS and Android on Reformation Day, 31 October 2026.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(STRUCTURED_DATA) }],
  }),
  component: Home,
});

function Home() {
  const [sel, setSel] = useState("knox");

  // A portrait elsewhere on the page opens that person in the cast section.
  const pick = useCallback((id: string) => {
    setSel(id);
    const el = document.getElementById("cast");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  }, []);

  return (
    <PageShell>
      <Hero onPick={pick} />
      <Lasting />
      <Cast sel={sel} setSel={setSel} />
      <Covenant onPick={pick} />
      <Game />
      <BetaBand />
      <Disputation />
      <Motto />
    </PageShell>
  );
}

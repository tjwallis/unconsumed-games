import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Covenant } from "@/components/home/covenant";
import { Hero } from "@/components/home/hero";
import { Cast, Disputation, Game, Lasting, Motto } from "@/components/home/sections";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unconsumed Games · Faithful stories, well made" },
      {
        name: "description",
        content:
          "Unconsumed Games makes video games grounded in the Word of God. Covenanter, a tale of the Scottish Reformation, is coming to iOS and Android.",
      },
    ],
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
      <Disputation />
      <Motto />
    </PageShell>
  );
}

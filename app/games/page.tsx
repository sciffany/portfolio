import { Metadata } from "next";
import { GameCategory } from "../lib/data";
import GamesClient from "../components/games-client";

export const metadata: Metadata = {
  title: "Games | Tiffany Sia Chong",
  description:
    "Explore my games, including social games, puzzle games, and more.",
  keywords: [
    "games",
    "social games",
    "puzzle games",
    "rpg games",
    "powerpet games",
    "flash games",
    "powerpoint games",
  ],
  openGraph: {
    title: "Games | Tiffany Sia Chong",
    description:
      "Explore my games, including social games, puzzle games, and more.",
    type: "website",
  },
};

export default function GamesPage({
  searchParams,
}: {
  searchParams: { category: GameCategory };
}) {
  return <GamesClient searchParams={searchParams} />;
}

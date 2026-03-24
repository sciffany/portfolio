import { Metadata } from "next";
import { poppins } from "../lib/fonts";
import { games, projects } from "../lib/data";
import "../page.css";
import Breadcrumb from "../components/breadcrumb";
import Christmas from "@/app/components/christmas";
import Link from "next/link";
import Maze from "@/app/components/maze";
import PhaserGame from "@/app/components/phaser-game";
import GameScript from "../components/game-script";
import FoofGame from "@/app/components/foof-game";
import MapDesignerGame from "@/app/components/map-designer-game";
import TowerDefenseGame from "@/app/components/tower-defense-game";

/** Internal play URLs from `games` (e.g. `/mini-match`) plus legacy aliases. */
function getInternalPlaySlugs(): string[] {
  const fromGames = games
    .filter(
      (g): g is typeof g & { link: string } =>
        typeof g.link === "string" &&
        g.link.startsWith("/") &&
        !g.link.slice(1).includes("/")
    )
    .map((g) => g.link.slice(1).split("?")[0]);
  return Array.from(new Set([...fromGames, "maze"]));
}

function resolveLivePageContext(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  const gameBySlug = games.find((g) => g.slug === slug);
  const gameByLink = games.find((g) => {
    if (!g.link.startsWith("/")) return false;
    const path = g.link.slice(1).split("?")[0];
    return path === slug;
  });
  const game = gameBySlug ?? gameByLink;
  return {
    project,
    game,
    title: game?.title ?? project?.title,
    description: game?.description ?? project?.description,
  };
}

export async function generateStaticParams() {
  const projectSlugSet = new Set(projects.map((p) => p.slug));
  const fromLive = getInternalPlaySlugs()
    .filter((s) => !projectSlugSet.has(s))
    .map((slug) => ({ slug }));
  return [...projects.map((p) => ({ slug: p.slug })), ...fromLive];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title, description } = resolveLivePageContext(params.slug);
  const safeTitle = title ?? "Project";

  return {
    title: `${safeTitle} | Tiffany Sia Chong`,
    description: description ?? "View this project or game from my portfolio.",
    keywords: [
      "project",
      "software engineering",
      "web development",
      "portfolio",
      safeTitle,
    ],
    openGraph: {
      title: `${safeTitle} | Tiffany Sia Chong`,
      description:
        description ?? "View this project or game from my portfolio.",
      type: "website",
    },
  };
}

function LivePageContent({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case "christmas":
      return <Christmas />;
    case "maze":
      return <Maze />;
    case "mini-match":
      return <PhaserGame fileName="miniMatch" />;
    case "mini-bubbles":
      return <PhaserGame fileName="miniBubbles" />;
    case "bubbas-blocks":
      return <PhaserGame fileName="bubbasBlocks" />;
    case "dicey-mice":
      return <PhaserGame fileName="diceyMice" />;
    case "anagram":
      return <GameScript fileName="anagram/anagram.js" />;
    case "foof":
      return <FoofGame />;
    case "map-designer":
      return <MapDesignerGame />;
    case "tower-defense":
      return <TowerDefenseGame />;
    case "happy-egg-maze":
      return <Maze />;
    case "maze":
      return <Maze />;
    default:
      return <div>Project not found</div>;
  }
}

export default function LivePage({ params }: { params: { slug: string } }) {
  const { project, game, title, description } = resolveLivePageContext(
    params.slug
  );
  const learnMoreHref = game
    ? `/games/${game.slug}`
    : project
    ? `/projects/${project.slug}`
    : null;

  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className="bg-white/80 mx-6 lg:mx-48 my-10">
        <div className="mx-6 lg:mx-16 py-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Games", href: "/games" },
              ...(game?.category
                ? [
                    {
                      label: game.category,
                      href: `/games?category=${game.category}`,
                    },
                  ]
                : []),
              {
                label:
                  title ??
                  params.slug
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase()),
              },
            ]}
          />
          <h1 className="text-3xl font-bold text-center text-black">{title}</h1>
          <p className="text-lg text-center text-black">{description}</p>
        </div>
        <div className="mx-6 lg:mx-16 flex justify-center">
          <LivePageContent params={params} />
        </div>
        {learnMoreHref && (
          <div className="flex justify-center my-10">
            <Link href={learnMoreHref}>
              <button className="bg-gradient-to-r from-emerald-950 font-semibold to-gray-900 text-white px-4 py-2 rounded-md">
                Learn more
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

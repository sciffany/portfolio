import { Metadata } from "next";
import { poppins } from "../../lib/fonts";
import { games } from "../../lib/data";
import Image from "next/image";
import "../../page.css";
import Breadcrumb from "../../components/breadcrumb";
import BackButton from "../../components/back-button";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return games.map((game) => {
    return {
      slug: game.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const game = games.find((g) => g.slug === params.slug);

  return {
    title: `${game?.title || "Game"} | Tiffany Sia Chong`,
    description: game?.description || "View this game from my portfolio.",
    keywords: [
      "game",
      "social game",
      "puzzle game",
      "rpg game",
      "powerpet game",
      "flash game",
      "powerpoint game",
      game?.title || "",
    ],
    openGraph: {
      title: `${game?.title || "Game"} | Tiffany Sia Chong`,
      description: game?.description || "View this game from my portfolio.",
      type: "website",
    },
  };
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className="bg-white/80 mx-6 lg:mx-48 my-10">
        <div className="mx-6 lg:mx-16 py-10">
          <BackButton />
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
              { label: game?.title || "Game" },
            ]}
          />
          <h1 className="text-3xl font-bold text-center text-black">
            {game?.title}
          </h1>
          <p className="text-lg text-center text-black">{game?.description}</p>
        </div>
        <div className="mx-6 lg:mx-16 py-6 grid grid-cols-1 lg:grid-cols-2">
          <div>
            {game?.image && (
              <Image
                src={`${game?.image}`}
                alt={game?.title || "Game Image"}
                width={400}
                height={300}
                sizes="(min-width: 1024px) 500px, 100vw"
                className="h-auto w-[400px] object-contain rounded-lg shadow-lg"
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            {game?.longDescription?.trim() ? (
              <p className="text-black">
                <b>What is it?</b>
                <br />
                {game.longDescription}
              </p>
            ) : null}
            {game?.why?.trim() ? (
              <p className="text-black">
                <b>Why did I make this?</b>
                <br />
                {game.why}
              </p>
            ) : null}
            {game?.different?.trim() ? (
              <p className="text-black">
                <b>How is it different?</b>
                <br />
                {game.different}
              </p>
            ) : null}
            {game?.tech && game.tech.length > 0 ? (
              <p className="text-black">
                <b>Tech stack:</b>
                <br />
                {game.tech.join(", ")}
              </p>
            ) : null}
            {game?.algo?.trim() ? (
              <p className="text-black">
                <b>Algorithms / approach:</b>
                <br />
                {game.algo}
              </p>
            ) : null}
            {game?.challenge?.trim() ? (
              <p className="text-black">
                <b>Challenge:</b>
                <br />
                {game.challenge}
              </p>
            ) : null}
            {game?.graphics?.trim() ? (
              <p className="text-black">
                <b>Graphics:</b>
                <br />
                {game.graphics}
              </p>
            ) : null}
            {game?.created?.trim() ? (
              <p className="text-black">
                <b>Created:</b>
                <br />
                {game.created}
              </p>
            ) : null}
            {game?.gh?.trim() ? (
              <p className="text-black">
                <b>Source:</b>
                <br />
                <a
                  href={game.gh}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-800 underline"
                >
                  {game.gh}
                </a>
              </p>
            ) : null}
          </div>
        </div>
        {game?.link?.trim() ? (
          <div className="flex justify-center my-10">
            <a href={game.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-emerald-950 font-semibold to-gray-900 text-white px-4 py-2 rounded-md">
                Go to game
              </button>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import { Metadata } from "next";
import { poppins } from "../../lib/fonts";
import { games, projects } from "../../lib/data";
import Image from "next/image";
import "../../page.css";
import Breadcrumb from "../../components/breadcrumb";

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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className='bg-white/80 mx-6 lg:mx-48'>
        <div className='mx-6 lg:mx-16 py-10'>
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
          <h1 className='text-3xl font-bold text-center text-black'>
            {game?.title}
          </h1>
          <p className='text-lg text-center text-black'>{game?.description}</p>
        </div>
        <div className='mx-6 lg:mx-16 py-6 grid grid-cols-1 lg:grid-cols-2'>
          <div>
            {game?.image && (
              <Image
                src={`${game?.image}`}
                alt={game?.title || "Game Image"}
                width={400}
                height={300}
                sizes='(min-width: 1024px) 500px, 100vw'
                className='h-auto w-[400px] object-contain rounded-lg shadow-lg'
              />
            )}
          </div>
          <div className='flex flex-col gap-4'></div>
        </div>
        <div className='flex justify-center my-10'>
          <a href={game?.link} target='_blank' rel='noopener noreferrer'>
            <button className='bg-gradient-to-r from-emerald-950 font-semibold to-gray-900 text-white px-4 py-2 rounded-md'>
              Go to game
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

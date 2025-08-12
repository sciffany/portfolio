import { Metadata } from "next";
import { poppins } from "../../lib/fonts";
import { projects } from "../../lib/data";
import Image from "next/image";
import "../../page.css";
import Breadcrumb from "../../components/breadcrumb";
import Christmas from "@/app/components/christmas";
import Link from "next/link";
import Maze from "@/app/components/maze";
import MiniMatch from "@/app/components/mini-match";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => {
    return {
      slug: project.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: `${project?.title || "Project"} | Tiffany Sia Chong`,
    description: project?.description || "View this project from my portfolio.",
    keywords: [
      "project",
      "software engineering",
      "web development",
      "portfolio",
      project?.title || "",
    ],
    openGraph: {
      title: `${project?.title || "Project"} | Tiffany Sia Chong`,
      description:
        project?.description || "View this project from my portfolio.",
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
      return <MiniMatch />;
    default:
      return <div>Project not found</div>;
  }
}

export default function LivePage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
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
              ...(project?.category
                ? [
                    {
                      label: project.category,
                      href: `/games?category=${project.category}`,
                    },
                  ]
                : []),
              {
                label: params.slug
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase()),
              },
            ]}
          />
          <h1 className='text-3xl font-bold text-center text-black'>
            {project?.title}
          </h1>
          <p className='text-lg text-center text-black'>
            {project?.description}
          </p>
        </div>
        <div className='mx-6 lg:mx-16 flex justify-center'>
          <LivePageContent params={params} />
        </div>
        <div className='flex justify-center my-10'>
          <Link href={`/projects/${params.slug}`}>
            <button className='bg-gradient-to-r from-emerald-950 font-semibold to-gray-900 text-white px-4 py-2 rounded-md'>
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

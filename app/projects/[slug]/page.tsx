import { Metadata } from "next";
import { poppins } from "../../lib/fonts";
import { projects } from "../../lib/data";
import Image from "next/image";
import "../../page.css";
import Breadcrumb from "../../components/breadcrumb";

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

export default function ProjectPage({ params }: { params: { slug: string } }) {
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
              { label: "Projects", href: "/projects" },
              ...(project?.category
                ? [
                    {
                      label: project.category,
                      href: `/projects?category=${project.category}`,
                    },
                  ]
                : []),
              { label: project?.title || "Project" },
            ]}
          />
          <h1 className='text-3xl font-bold text-center text-black'>
            {project?.title}
          </h1>
          <p className='text-lg text-center text-black'>
            {project?.description}
          </p>
        </div>
        <div className='mx-6 lg:mx-16 py-6 grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <Image
              src={`${project?.image}`}
              alt={project?.title || "Project Image"}
              width={400}
              height={300}
              sizes='(min-width: 1024px) 500px, 100vw'
              className='h-auto w-[400px] object-contain rounded-lg shadow-lg'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-black'>
              <b>What is it?</b>
              <br />
              {project?.longDescription}
            </p>
            <p className='text-black'>
              <b>Why did I make this?</b>
              <br />
              {project?.why}
            </p>
            <p className='text-black'>
              <b>How is it different?</b>
              <br />
              {project?.different}
            </p>
            <p className='text-black'>
              <b>Tech stack:</b>
              <br />
              {project?.tech?.join(", ")}
            </p>
          </div>
        </div>
        <div className='flex justify-center my-10'>
          <a href={project?.link} target='_blank' rel='noopener noreferrer'>
            <button className='bg-gradient-to-r from-emerald-950 font-semibold to-gray-900 text-white px-4 py-2 rounded-md'>
              Go to project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

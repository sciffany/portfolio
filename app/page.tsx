import { Metadata } from "next";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "./lib/fonts";
import { description, keyProjects } from "./lib/data";
import { sectionNavItems } from "./lib/navbar-data";
import ReactMarkdown from "react-markdown";

const sectionCardByHref: Record<string, { emoji: string; subtitle: string }> = {
  "/experience": {
    emoji: "💼",
    subtitle: "Work, internships & teaching",
  },
  "/projects": {
    emoji: "🛠️",
    subtitle: "Apps, tools & coursework",
  },
  "/games": {
    emoji: "🎮",
    subtitle: "Playable browser games",
  },
  "/designs": {
    emoji: "🎨",
    subtitle: "Posters, branding & visuals",
  },
};

export const metadata: Metadata = {
  title: "Tiffany Sia Chong | Software Engineer & Graphic Designer",
  description:
    "Software Engineer and Graphic Designer passionate about creating innovative solutions and beautiful designs.",
  keywords: [
    "software engineer",
    "graphic designer",
    "web development",
    "design",
    "portfolio",
  ],
  openGraph: {
    title: "Tiffany Sia Chong | Software Engineer & Graphic Designer",
    description:
      "Software Engineer and Graphic Designer passionate about creating innovative solutions and beautiful designs.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className={poppins.className}>
      <section className="starfield w-full py-14 lg:py-36 text-white bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col lg:flex-row justify-center items-center gap-10">
        <Image
          src="/my-flash-kid.webp"
          alt="logo"
          width={250}
          height={250}
          className="rounded-full object-cover"
        />
        <div className="mx-6 rounded-xl">
          <article className="bg-slate-200 rounded-xl w-full flex flex-col overflow-hidden transition hover:brightness-105">
            <div className="text-xl font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 p-5 text-white">
              <h1 className="text-2xl lg:text-3xl">Tiffany Sia Chong</h1>
              <div className="text-xl text-emerald-500">
                Software Engineer & Graphic Designer
              </div>
              <p className="text-base text-white-400/95 font-normal leading-snug">
                3 years of professional experience · Fullstack with Next.js
              </p>
            </div>
            <div className="p-5 flex flex-col text-black pt-2">
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => {
                    const isInternalHash = href?.startsWith("#");
                    return (
                      <a
                        className="text-emerald-700 font-semibold"
                        href={href}
                        {...(isInternalHash
                          ? {}
                          : {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            })}
                      >
                        {children}
                      </a>
                    );
                  },
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-5 mt-2">{children}</ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-5 mt-2">{children}</ul>
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>

      <section
        className="key-projects-bg w-full py-16 lg:py-20"
        aria-labelledby="key-projects-heading"
      >
        <div className="mx-6 lg:mx-auto lg:max-w-6xl">
          <h2
            id="key-projects-heading"
            className="text-slate-900 scroll-mt-24 text-2xl lg:text-3xl font-bold text-center mb-10 lg:mb-12"
          >
            Key projects
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            {keyProjects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.href}
                  {...(project.href.startsWith("/")
                    ? {}
                    : {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                  className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-lg transition hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <div className="relative h-36 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shrink-0">
                    {"image" in project && project.image ? (
                      <Image
                        src={project.image}
                        alt=""
                        width={400}
                        height={200}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl relative z-[1]" aria-hidden>
                        {project.emoji}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 text-center bg-gradient-to-r from-emerald-950 to-gray-900 text-white p-4 gap-1">
                    <span className="text-lg font-semibold group-hover:underline underline-offset-2">
                      {project.title}
                    </span>
                    <span className="text-sm text-emerald-400/95">
                      {project.subtitle}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="starfield w-full py-16 lg:py-20 text-white bg-gradient-to-b from-emerald-950 to-slate-900"
        aria-labelledby="explore-heading"
      >
        <div className="mx-6 lg:mx-auto lg:max-w-6xl">
          <h2
            id="explore-heading"
            className="scroll-mt-24 text-2xl lg:text-3xl font-bold text-center mb-10 lg:mb-12"
          >
            Explore
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            {sectionNavItems.map((item) => {
              const meta = sectionCardByHref[item.href];
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-lg transition hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    {/* <div className="relative h-36 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shrink-0">
                      <span className="text-5xl relative z-[1]" aria-hidden>
                        {meta.emoji}
                      </span>
                    </div> */}
                    <div className="flex flex-col flex-1 items-center justify-center text-center min-h-36 bg-gradient-to-r from-emerald-950 to-gray-900 text-white p-4 gap-1">
                      <span className="text-lg font-semibold group-hover:underline underline-offset-2">
                        {item.label}
                      </span>
                      <span className="text-sm text-emerald-400/95">
                        {meta.subtitle}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

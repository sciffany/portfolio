"use client";

import { Playfair_Display, Poppins, Quicksand } from "next/font/google";
import { PROJECT_CATEGORIES, ProjectCategory, projects } from "../lib/data";
import "../page.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Experience() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | null>(null);
  const [modalProject, setModalProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const detectTouch = () => {
      const hasTouch =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);
      setIsTouchDevice(Boolean(hasTouch));
    };

    detectTouch();
    window.addEventListener("resize", detectTouch);
    return () => window.removeEventListener("resize", detectTouch);
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <section
      className={`${poppins.className} starfield w-full text-white bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className='bg-white/80 mx-6 lg:mx-48'>
        <div className='mx-6 lg:mx-16 py-10'>
          <h1 className='text-3xl font-bold text-center text-black'>
            ༺ Projects ༻
          </h1>
          <nav
            aria-label='Project categories'
            className='flex justify-center mt-8'
          >
            <ul className='flex flex-wrap items-center justify-center gap-3 text-sm lg:text-base font-medium text-slate-700'>
              <li key='All'>
                <button
                  type='button'
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-full border transition ${
                    selectedCategory === null
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-300 bg-white/70 hover:bg-white"
                  }`}
                >
                  All
                </button>
              </li>
              {PROJECT_CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    type='button'
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full border transition ${
                      selectedCategory === category
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-slate-300 bg-white/70 hover:bg-white"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`text-black text-md flex flex-col gap-6 mt-8 grid grid-cols-1 lg:grid-cols-3`}
          >
            {filteredProjects.map((project) => (
              <article
                key={`${project.title}`}
                className='relative group bg-white rounded-lg w-full flex flex-col overflow-hidden transition'
                onClick={() => {
                  if (isTouchDevice) {
                    setActiveProjectSlug((current) =>
                      current === project.slug ? null : project.slug
                    );
                  }
                }}
              >
                <div className='text-xl font-semibold  bg-gray-900 h-[150px]'>
                  {project.image && (
                    <Image
                      className='inset-shadow-lg'
                      src={`${project.image}`}
                      alt={project.title}
                      width={300}
                      height={300}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <div className='flex flex-col gap-2 text-center'>
                  <div className='text-xl flex flex-col font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 p-4 text-white flex'>
                    <div className='text-xl'>{project.emoji}</div>
                    <div className='text-lg'>{project.title}</div>
                  </div>
                  <h3 className='text-md text-black p-4 pt-2'>
                    {project.description}
                  </h3>
                </div>
                <div
                  className={`absolute inset-0 bg-white/90 ${
                    isTouchDevice && activeProjectSlug === project.slug
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  } lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-200 flex items-center justify-center`}
                >
                  <div className='text-center flex flex-col gap-4 space-y-2 text-gray-900'>
                    <button
                      type='button'
                      className='cursor-pointer text-lg font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 text-white px-4 py-2 rounded-md'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`/projects/${project.slug}`, "_blank");
                      }}
                    >
                      Learn more
                    </button>
                    <button
                      className='cursor-pointer text-lg font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 text-white px-4 py-2 rounded-md'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      Go to project
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

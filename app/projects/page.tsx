"use client";

import { Playfair_Display, Poppins, Quicksand } from "next/font/google";
import {
  DESIGN_CATEGORIES,
  DesignCategory,
  experiences,
  projects,
} from "../lib/data";
import "../page.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Experience() {
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
            aria-label='Design categories'
            className='flex justify-center mt-8'
          >
            <ul className='flex flex-wrap items-center justify-center gap-3  text-sm lg:text-base font-medium text-slate-700'>
              {["Games", "Utilities", "School Projects", "Non-Tech"].map(
                (category: string) => (
                  <li key={category}>
                    <button
                      type='button'
                      className='px-3 py-1 rounded-full border border-slate-300 bg-white/70 hover:bg-white transition'
                    >
                      {category}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div
            className={`text-black text-md flex flex-col gap-6 mt-8 grid grid-cols-1 lg:grid-cols-3`}
          >
            {projects.map((project) => (
              <article
                key={`${project.title}`}
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, "_blank");
                  }
                }}
                className='cursor-pointer bg-white rounded-lg w-full flex flex-col  overflow-hidden transition'
              >
                <div className='text-xl font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 p-4 text-white'>
                  <div className='text-md'>
                    <div className='flex flex-col items-center gap-2'>
                      <div className='text-2xl'>{project.emoji}</div>
                      <div className='text-lg'>{project.title}</div>
                    </div>
                  </div>
                </div>
                <div className='p-4 flex flex-col gap-1'>
                  <h3 className='text-md text-center'>{project.description}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

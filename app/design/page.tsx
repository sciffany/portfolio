"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { designs, DESIGN_CATEGORIES, DesignCategory } from "../lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className='bg-white/80 mx-6 lg:mx-48'>
        <div className='mx-6 lg:mx-16 py-10'>
          <h1 className='text-3xl font-bold text-center text-black'>
            ༺ Designs ༻
          </h1>
          <nav
            aria-label='Design categories'
            className='flex justify-center mt-8'
          >
            <ul className='flex flex-wrap items-center justify-center gap-3  text-sm lg:text-base font-medium text-slate-700'>
              {DESIGN_CATEGORIES.map((category: DesignCategory) => (
                <li key={category}>
                  <button
                    type='button'
                    className='px-3 py-1 rounded-full border border-slate-300 bg-white/70 hover:bg-white transition'
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {designs.map((design) => (
              <figure
                key={design.image}
                className='group rounded-xl overflow-hidden bg-white transition'
              >
                <a
                  href={`/design/${design.slug}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Open ${design.title}`}
                >
                  <div className='relative h-[200px]'>
                    <Image
                      src={`/${design.image}`}
                      alt={design.title}
                      fill
                      sizes='(min-width: 1024px) 33vw, 100vw'
                      className='object-cover'
                    />
                    <div
                      aria-hidden
                      className='absolute inset-0 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-30'
                    />
                  </div>
                  <figcaption className='font-semibold text-md text-center text-black py-2 px-2'>
                    {design.title}
                  </figcaption>
                </a>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

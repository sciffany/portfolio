import { Playfair_Display, Poppins, Quicksand } from "next/font/google";
import { experiences } from "../lib/data";
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
            ༺ Work Experience ༻
          </h1>
          <nav
            aria-label='Design categories'
            className='flex justify-center mt-8'
          >
            <ul className='flex flex-wrap items-center justify-center gap-3  text-sm lg:text-base font-medium text-slate-700'>
              {["Software Engineer", "Data Engineer", "Teaching Assistant"].map(
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
          <div className={`text-black text-md flex flex-col gap-6 mt-8`}>
            {experiences.map((experience) => (
              <article
                key={`${experience.title}-${experience.date}`}
                className='bg-white rounded-lg w-full flex flex-col lg:flex-row overflow-hidden transition'
              >
                <div className='lg:w-1/3 text-xl font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 p-4 text-white'>
                  <div className='text-md'>
                    {experience.link ? (
                      <a
                        href={experience.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline focus:underline underline-offset-2'
                        aria-label={`Visit ${experience.title}`}
                      >
                        <b>{experience.title}</b>
                      </a>
                    ) : (
                      <b>{experience.title}</b>
                    )}
                  </div>
                </div>
                <div className='lg:w-2/3 p-4 flex flex-col gap-1'>
                  <h3 className='text-lg font-semibold'>{experience.role}</h3>
                  <div className='text-sm text-gray-600'>{experience.date}</div>

                  <ul className={`text-sm leading-relaxed list-disc pl-5 mt-2`}>
                    {experience.description.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <hr className='my-2 border-gray-500' />
                  <div className='text-sm text-gray-600'>
                    <span className='font-medium'>Tech:</span>{" "}
                    {experience.tech?.join(", ")}
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

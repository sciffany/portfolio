import "./page.css";
import Image from "next/image";
import {
  Merriweather,
  Playfair_Display,
  Poppins,
  Quicksand,
} from "next/font/google";
import { description, writeup } from "./lib/data";
import { lato } from "./layout";
import ReactMarkdown from "react-markdown";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <section className='starfield w-full py-14 lg:py-36 text-white bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col lg:flex-row justify-center items-center gap-10'>
        {/* <Image
          src='/logo_white.png'
          alt='logo'
          width={250}
          height={250}
          className='rounded-full'
        /> */}
        <Image
          src='/my-flash-kid.webp'
          alt='logo'
          width={250}
          height={250}
          className='rounded-full'
        />
        <div className='mx-6 rounded-xl'>
          <article className='bg-slate-200 rounded-xl w-full flex flex-col overflow-hidden transition hover:brightness-105'>
            <div className='text-xl font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 p-5 text-white'>
              <h1 className='text-2xl lg:text-3xl'>Tiffany Sia Chong</h1>
              <div className='text-xl text-emerald-500'>
                Software Engineer & Graphic Designer
              </div>
            </div>
            <div className='p-5 flex flex-col text-black pt-2'>
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => (
                    <a
                      className='text-emerald-700 font-semibold'
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {children}
                    </a>
                  ),
                  ol: ({ children }) => (
                    <ol className='list-decimal pl-5 mt-2'>{children}</ol>
                  ),
                  ul: ({ children }) => (
                    <ul className='list-disc pl-5 mt-2'>{children}</ul>
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

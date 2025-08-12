import { Metadata } from "next";
import "./page.css";
import Image from "next/image";
import { poppins } from "./lib/fonts";
import { description } from "./lib/data";
import ReactMarkdown from "react-markdown";

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
      <section className='starfield w-full py-14 lg:py-36 text-white bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col lg:flex-row justify-center items-center gap-10'>
        <Image
          src='/my-flash-kid.webp'
          alt='logo'
          width={250}
          height={250}
          className='rounded-full object-cover'
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

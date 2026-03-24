import { Metadata } from "next";
import Link from "next/link";
import "../page.css";
import { DesignCategory } from "../lib/data";
import { poppins } from "../lib/fonts";

export const metadata: Metadata = {
  title: "About | Tiffany Sia Chong",
  description:
    "Learn more about Tiffany Sia Chong, a software engineer and graphic designer building thoughtful digital experiences.",
  keywords: [
    "about",
    "tiffany sia chong",
    "software engineer",
    "graphic designer",
    "portfolio",
  ],
  openGraph: {
    title: "About | Tiffany Sia Chong",
    description:
      "Learn more about Tiffany Sia Chong, a software engineer and graphic designer building thoughtful digital experiences.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section
      className={`${poppins.className} starfield w-full text-white bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col`}
    >
      <div className="bg-white/80 mx-6 lg:mx-48 my-10">
        <div className="mx-6 lg:mx-16 py-10 text-black space-y-6">
          <h1 className="text-3xl font-bold text-center">About</h1>
          <p className="text-lg leading-relaxed">
            I&apos;m{" "}
            <Link className="text-emerald-700 font-semibold" href="/">
              Tiffany Sia Chong
            </Link>
            , a software engineer at Take App and graphic designer with a
            passion for creating innovative solutions.
          </p>
          <p className="text-lg leading-relaxed">
            <b>Coding</b>
          </p>
          <p className="text-lg leading-relaxed">
            I have always loved solving math problems and puzzles, as well as
            building and creating things, so I naturally loved coding. Coding is
            an opportunity for me to contribute to the society while doing what
            I love most. Check out my{" "}
            <Link className="text-emerald-700 font-semibold" href="/experience">
              work experience
            </Link>{" "}
            and{" "}
            <Link className="text-emerald-700 font-semibold" href="/projects">
              software projects
            </Link>
            .
          </p>
          <p className="text-lg leading-relaxed">
            <b>Game development</b>
          </p>
          <p className="text-lg leading-relaxed">
            Inspired by the book Invent Your Own Computer Games in Python by Al
            Sweigart, I began coding in 2013 and have since then developed{" "}
            several{" "}
            <Link className="text-emerald-700 font-semibold" href="/games">
              games
            </Link>
            .
          </p>
          <p className="text-lg leading-relaxed">
            <b>Graphic Design</b>
          </p>
          <p className="text-lg leading-relaxed">
            Vibrant colors and bouncy animations of cartoons have always
            inspired me, and I strive to emulate this in the{" "}
            <Link className="text-emerald-700 font-semibold" href="/designs">
              graphics
            </Link>{" "}
            I design. I have worked on many projects and several clients
            including volunteer welfare organisations.
          </p>
          <p className="text-lg leading-relaxed">
            <b>Contact Me</b>
          </p>
          <p className="text-lg leading-relaxed">
            I am always up to work on projects that will impact the community,
            and am always up for a challenge. If you would like to collaborate,
            feel free to{" "}
            <Link
              className="text-emerald-700 font-semibold"
              href="mailto:hello@sciffany.com"
            >
              get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

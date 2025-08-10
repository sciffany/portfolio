import { Metadata } from "next";
import "../page.css";
import { poppins } from "../lib/fonts";
import ExperienceContent from "../components/experience-client";

export const metadata: Metadata = {
  title: "Experience | Tiffany Sia Chong",
  description:
    "My professional experience in software engineering, data engineering, and teaching roles.",
  keywords: [
    "experience",
    "software engineer",
    "data engineer",
    "teaching assistant",
    "career",
  ],
  openGraph: {
    title: "Experience | Tiffany Sia Chong",
    description:
      "My professional experience in software engineering, data engineering, and teaching roles.",
    type: "website",
  },
};

export default function Experience() {
  return (
    <section
      className={`${poppins.className} starfield w-full text-white bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <ExperienceContent />
    </section>
  );
}

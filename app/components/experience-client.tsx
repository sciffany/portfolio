"use client";

import { useEffect, useState } from "react";
import {
  experiences,
  ExperienceAnchorId,
  ExperienceCategory,
} from "../lib/data";

const EXPERIENCE_CATEGORIES: readonly ExperienceCategory[] = [
  ExperienceCategory.Software_Engineer,
  ExperienceCategory.Data_Engineer,
  ExperienceCategory.Teaching_Assistant,
];

export default function ExperienceContent() {
  const [selectedCategory, setSelectedCategory] = useState<
    ExperienceCategory | "All"
  >("All");

  const filteredExperiences =
    selectedCategory === "All"
      ? experiences
      : experiences.filter(
          (experience) => experience.category === selectedCategory
        );

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;
      const isKnown = Object.values(ExperienceAnchorId).includes(
        raw as ExperienceAnchorId
      );
      if (!isKnown) return;
      const match = experiences.find((e) => e.anchorId === raw);
      if (match) {
        setSelectedCategory("All");
      }
    };
    syncCategoryFromHash();
    window.addEventListener("hashchange", syncCategoryFromHash);
    return () =>
      window.removeEventListener("hashchange", syncCategoryFromHash);
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;
      const el = document.getElementById(raw);
      if (!el) return;
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [filteredExperiences]);

  return (
    <div className="bg-white/80 mx-6 lg:mx-48 my-10">
      <div className="mx-6 lg:mx-16 py-10">
        <h1 className="text-3xl font-bold text-center text-black">
          Experience
        </h1>
        <nav
          aria-label="Experience categories"
          className="flex justify-center mt-8"
        >
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm lg:text-base font-medium text-slate-700">
            <li>
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 rounded-full border transition ${
                  selectedCategory === "All"
                    ? "border-emerald-600 bg-emerald-100 text-emerald-800"
                    : "border-slate-300 bg-white/70 hover:bg-white text-slate-700"
                }`}
              >
                All
              </button>
            </li>
            {EXPERIENCE_CATEGORIES.map((category: ExperienceCategory) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full border transition ${
                    selectedCategory === category
                      ? "border-emerald-600 bg-emerald-100 text-emerald-800"
                      : "border-slate-300 bg-white/70 hover:bg-white text-slate-700"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`text-black text-md flex flex-col gap-6 mt-8 mb-16`}>
          {filteredExperiences.map((experience) => (
            <article
              key={`${experience.title}-${experience.date}`}
              id={experience.anchorId}
              className={`bg-white rounded-lg w-full flex flex-col lg:flex-row overflow-hidden transition ${
                experience.anchorId ? "scroll-mt-24" : ""
              }`}
            >
              <div className="lg:w-1/3 text-xl font-semibold bg-gradient-to-r from-emerald-950 to-gray-900 p-4 text-white">
                <div className="text-md">
                  {experience.link ? (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:underline underline-offset-2"
                      aria-label={`Visit ${experience.title}`}
                    >
                      <b>{experience.title}</b>
                    </a>
                  ) : (
                    <b>{experience.title}</b>
                  )}
                </div>
              </div>
              <div className="lg:w-2/3 p-4 flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <div className="text-sm text-gray-600">{experience.date}</div>

                <ul className={`text-sm leading-relaxed list-disc pl-5 mt-2`}>
                  {experience.description.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <hr className="my-2 border-gray-500" />
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Tech:</span>{" "}
                  {experience.tech?.join(", ")}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

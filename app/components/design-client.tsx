"use client";

import "../page.css";
import Image from "next/image";
import { poppins } from "../lib/fonts";
import { DESIGN_CATEGORIES, DesignCategory } from "../lib/data";
import { wp } from "../lib/wp";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { getCategory } from "../lib/utils";

export default function DesignClient({
  searchParams,
}: {
  searchParams: { category: DesignCategory };
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Get category from URL search params
  // If no category param is present, treat it as "All Category"
  const selectedCategory = searchParams.category || DesignCategory.All;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryClick = (category: DesignCategory) => {
    // If clicking on the currently selected category, remove the param (which will default to All)
    // If clicking on a different category, set that category
    const newCategory = selectedCategory === category ? null : category;
    const queryString = createQueryString("category", newCategory || "");
    router.push(`${pathname}?${queryString}`);
  };

  const designs = wp.rss.channel.item.sort((a, b) => {
    const dateA = new Date(a.pubDate);
    const dateB = new Date(b.pubDate);
    return dateB.getTime() - dateA.getTime();
  });

  // Filter designs based on selected category
  const filteredDesigns = designs.filter((design) => {
    if (selectedCategory === DesignCategory.All) return design.title !== "";
    const category = getCategory(design?.category);

    return design.title !== "" && category === selectedCategory;
  });

  return (
    <nav
      aria-label='Design categories'
      className='flex justify-center mt-8 flex-col'
    >
      <ul className='flex flex-wrap items-center justify-center gap-3  text-sm lg:text-base font-medium text-slate-700'>
        {DESIGN_CATEGORIES.map((category: DesignCategory) => {
          const isActive = selectedCategory === category;
          return (
            <li key={category}>
              <button
                type='button'
                onClick={() => handleCategoryClick(category)}
                className={`px-3 py-1 rounded-full border transition ${
                  isActive
                    ? "border-emerald-600 bg-emerald-100 text-emerald-800"
                    : "border-slate-300 bg-white/70 hover:bg-white text-slate-700"
                }`}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>

      <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14'>
        {filteredDesigns.map((design) => {
          const image = design["content:encoded"]
            .match(/<img[^>]+src="([^">]+)"/)?.[1]
            .replace("https://sciffany.wordpress.com/wp-content/uploads/", "");

          const video = design["content:encoded"].match(
            /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/
          )?.[1];

          const slug =
            design.link.split("/").slice(-2).join("/") ??
            design.title.toLowerCase().replace(/ /g, "-");

          return (
            <figure
              key={slug}
              className='group rounded-xl overflow-hidden bg-white transition'
            >
              <a
                href={`/design/${slug}`}
                rel='noopener noreferrer'
                aria-label={`Open ${design.title}`}
              >
                <div className='relative h-[200px]'>
                  {image ? (
                    <Image
                      src={`/wp-media/${image}`}
                      alt={design.title}
                      fill
                      sizes='(min-width: 1024px) 33vw, 100vw'
                      className='object-cover'
                    />
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${video}`}
                      className='object-cover w-full h-full absolute inset-0'
                    />
                  )}
                  <div
                    aria-hidden
                    className='absolute inset-0 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-30'
                  />
                </div>
                <figcaption className='text-md text-center text-black py-2 px-2'>
                  {design.title}
                </figcaption>
              </a>
            </figure>
          );
        })}
      </div>
    </nav>
  );
}

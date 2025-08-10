import { Metadata } from "next";
import { Suspense } from "react";
import DesignClient from "../components/design-client";
import { DesignCategory } from "../lib/data";
import { poppins } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Designs | Tiffany Sia Chong",
  description:
    "Browse my graphic design portfolio featuring creative designs, illustrations, and visual projects.",
  keywords: [
    "design",
    "graphic design",
    "illustration",
    "visual design",
    "portfolio",
  ],
  openGraph: {
    title: "Designs | Tiffany Sia Chong",
    description:
      "Browse my graphic design portfolio featuring creative designs, illustrations, and visual projects.",
    type: "website",
  },
};

export default function DesignPage({
  searchParams,
}: {
  searchParams: { category: DesignCategory };
}) {
  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className='bg-white/80 mx-6 lg:mx-48'>
        <div className='mx-6 lg:mx-16 py-10'>
          <h1 className='text-3xl font-bold text-center text-black'>
            ༺ Designs ༻
          </h1>
          <DesignClient searchParams={searchParams} />
        </div>
      </div>
    </section>
  );
}

import { designs, projects } from "@/app/lib/data";
import { Poppins } from "next/font/google";
import Image from "next/image";
import "../../page.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const design = designs.find((d) => d.slug === params.slug);
  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className='bg-white/80 mx-6 lg:mx-48'>
        <div className='mx-6 lg:mx-16 py-10'>
          <h1 className='text-3xl font-bold text-center text-black'>
            {design?.title}
          </h1>
          <p className='text-lg text-center text-black'>
            {design?.description}
          </p>
        </div>
        <div className='mx-6 lg:mx-16 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10'>
          <div className='flex justify-center'>
            <Image
              src={`/${design?.image}`}
              alt={design?.title || "Design Image"}
              width={500}
              height={300}
              sizes='(min-width: 1024px) 500px, 100vw'
              className='rounded-lg shadow-lg h-auto w-[500px] object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

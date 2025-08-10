import { Metadata } from "next";
import { poppins } from "../../lib/fonts";
import "../../page.css";
import { wp } from "@/app/lib/wp";
import Breadcrumb from "../../components/breadcrumb";
import { getCategory } from "@/app/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const design = wp.rss.channel.item.find(
    (d) => d.link.split("/").slice(-2)[0] === params.slug
  );

  return {
    title: `${design?.title || "Design"} | Tiffany Sia Chong`,
    description:
      design?.description || "View this design project from my portfolio.",
    keywords: ["design", "graphic design", "portfolio", design?.title || ""],
    openGraph: {
      title: `${design?.title || "Design"} | Tiffany Sia Chong`,
      description:
        design?.description || "View this design project from my portfolio.",
      type: "website",
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const design = wp.rss.channel.item.find(
    (d) => d.link.split("/").slice(-2)[0] === params.slug
  );

  const content = design?.["content:encoded"].replaceAll(
    "https://sciffany.wordpress.com/wp-content/uploads/",
    "/wp-media/"
  );

  const category = getCategory(design?.category);

  return (
    <section
      className={`${poppins.className} starfield w-full text-black bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col space-y-10`}
    >
      <div className='bg-white/80 mx-6 lg:mx-48'>
        <div className='mx-6 lg:mx-16 py-10'>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Designs", href: "/design" },
              ...(category
                ? [{ label: category, href: `/design?category=${category}` }]
                : []),
              { label: design?.title || "Design" },
            ]}
          />
          <h1 className='text-3xl font-bold text-center text-black'>
            {design?.title}
          </h1>
          <p className='text-lg text-center text-black'>
            {design?.description}
          </p>
        </div>

        <div
          className='mx-6 lg:mx-16 mb-28 img-skip'
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
      </div>
    </section>
  );
}

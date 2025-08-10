import { Metadata } from "next";
import { poppins } from "../../lib/fonts";
import "../../page.css";
import { wp } from "@/app/lib/wp";
import Breadcrumb from "../../components/breadcrumb";
import { getCategory } from "@/app/lib/utils";

// Generate static params for all design slugs
export async function generateStaticParams() {
  return wp.rss.channel.item
    .filter((design) => design.link.includes("/portfolio/"))
    .map((design) => {
      // Handle both /portfolio/slug/ and /portfolio/number/ formats
      const urlParts = design.link.split("/");
      const slug =
        urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1];
      return {
        slug: slug,
      };
    });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const design = wp.rss.channel.item.find((d) => {
    const urlParts = d.link.split("/");
    const slug = urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1];
    return slug === params.slug;
  });

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
  const design = wp.rss.channel.item.find((d) => {
    const urlParts = d.link.split("/");
    const slug = urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1];
    return slug === params.slug;
  });

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

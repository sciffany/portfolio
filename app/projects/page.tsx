import { Metadata } from "next";
import ProjectsClient from "../components/projects-client";
import { ProjectCategory } from "../lib/data";

export const metadata: Metadata = {
  title: "Projects | Tiffany Sia Chong",
  description:
    "Explore my software engineering and design projects, including web applications, mobile apps, and creative designs.",
  keywords: [
    "projects",
    "software engineering",
    "web development",
    "mobile apps",
    "design",
  ],
  openGraph: {
    title: "Projects | Tiffany Sia Chong",
    description:
      "Explore my software engineering and design projects, including web applications, mobile apps, and creative designs.",
    type: "website",
  },
};

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { category: ProjectCategory };
}) {
  return <ProjectsClient searchParams={searchParams} />;
}

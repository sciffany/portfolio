import { Metadata } from "next";
import DesignClient from "../components/design-client";

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

export default function DesignPage() {
  return <DesignClient />;
}

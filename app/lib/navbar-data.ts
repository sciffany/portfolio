export interface NavItem {
  href: string;
  label: string;
}

export const navbarItems: NavItem[] = [
  {
    href: "/experience",
    label: "Experience",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/games",
    label: "Games",
  },
  {
    href: "/designs",
    label: "Designs",
  },
];

export const siteConfig = {
  name: "Tiffany Sia Chong",
  logo: "/logo_white.png",
  email: "hello@sciffany.com",
  social: {
    github: "https://github.com/sciffany",
    linkedin: "https://linkedin.com/in/sciffany",
  },
};

export interface NavItem {
  href: string;
  label: string;
}

/** True when `pathname` is exactly `href` or a nested route (e.g. /projects/foo). */
export function isActiveNavPath(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const navbarItems: NavItem[] = [
  {
    href: "/about",
    label: "About",
  },
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

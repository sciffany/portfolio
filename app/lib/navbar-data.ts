export enum NavItemType {
  Page = "page",
  Download = "download",
}

export interface NavItem {
  href: string;
  label: string;
  type?: NavItemType;
  /** Used with NavItemType.Download for the suggested filename. */
  downloadFilename?: string;
}

/** Add your PDF as `public/resume.pdf` (or update `href`). */
export const RESUME = {
  href: "/resume.pdf",
  downloadFilename: "Tiffany-Sia-Chong-Resume.pdf",
} as const;

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
  {
    href: RESUME.href,
    label: "Resume",
    type: NavItemType.Download,
    downloadFilename: RESUME.downloadFilename,
  },
];

/** Same destinations as the main header nav: Experience, Projects, Games, Designs. */
export const sectionNavItems: NavItem[] = navbarItems.filter(
  (item) =>
    item.type !== NavItemType.Download &&
    ["Experience", "Projects", "Games", "Designs"].includes(item.label),
);

export const siteConfig = {
  name: "Tiffany Sia Chong",
  logo: "/logo_white.png",
  email: "hello@sciffany.com",
  resume: RESUME,
  social: {
    github: "https://github.com/sciffany",
    linkedin: "https://linkedin.com/in/sciffany",
  },
};

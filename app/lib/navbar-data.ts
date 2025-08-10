export interface NavItem {
  href: string;
  label: string;
}

export const navbarItems: NavItem[] = [
  {
    href: '/experience',
    label: 'Experience'
  },
  {
    href: '/projects',
    label: 'Projects'
  },
  {
    href: '/design',
    label: 'Designs'
  }
];

export const siteConfig = {
  name: 'Tiffany Sia Chong',
  logo: '/logo_white.png'
}; 
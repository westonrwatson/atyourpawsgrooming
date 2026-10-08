export type NavLink = {
  href: string;
  label: string;
  section?: string;
  navId: string;
};

export const mainNavLinks: NavLink[] = [
  { href: "/", label: "Home", section: "home", navId: "home" },
  { href: "/#services", label: "Services", section: "services", navId: "services" },
  { href: "/pricing", label: "Prices", navId: "prices" },
  { href: "/gallery", label: "Gallery", navId: "gallery" },
  { href: "/#about", label: "About", section: "about", navId: "about" },
];

export const footerNavLinks = mainNavLinks.map(({ href, label }) => ({ href, label }));

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

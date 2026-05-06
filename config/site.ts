export const siteConfig = {
  name: "Femab",
  description: "Real Estate",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  logo: "https://res.cloudinary.com/dgqyobxzg/image/upload/v1739196637/femab/femabLogo_kbad0e.svg",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Subsidiaries", href: "/subsidiaries" },
    { label: "Contact Us", href: "/contact" },
  ],
};

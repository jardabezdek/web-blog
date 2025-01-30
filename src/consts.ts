// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "blog o mých cestách";
export const SITE_DESCRIPTION = "Vítejte! 👋";

export const SOCIAL_LINKS = {
  Github: "https://github.com/jardabezdek",
  // Twitter: "https://twitter.com/yourusername",
  // LinkedIn: "https://www.linkedin.com/in/jaroslavbezdek/",
  Instagram: "https://www.instagram.com/ja_ro_slav/",
  // Facebook: "https://www.facebook.com/yourusername",
  // YouTube: "https://www.youtube.com/yourusername",
};

// SEO
export const SEO_CONFIG = {
  ogImage: "/hero-img.png", 
  keywords: "blog, tech, programming",
};

export const NAV_ITEMS = [
  { text: "Úvod", link: "/" }, // Home
  { text: "Články", link: "/blog" }, // Blog
  { text: "Tagy", link: "/tags" },
  // { text: "About", link: "/about" },
];

export const BLOG_CONFIG = {
  locale: "cz-cs",
  profile: "https://github.com/jardabezdek",
  authorName: "Jaroslav Bezdek",
  email: "mailto:bezdekjarda@seznam.cz",
  tags: {
    title: "Tagy",
    description: "Všechny tagy použité v článcích.",
  },
};

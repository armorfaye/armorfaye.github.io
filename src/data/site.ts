// Central site configuration. Edit these values to update contact links,
// SEO defaults, and the navigation menu across the whole site.

export const site = {
  name: 'Jiayu (Jerry) Liu',
  shortName: 'Jerry Liu',
  tagline: 'Mathematics · Algorithms · AI Research',
  // Shown in the hero intro and used as the default meta description.
  intro:
    'Incoming Stanford undergraduate (Fall 2026), intending a Mathematics and Computer Science double major.',
  description:
    'Portfolio of Jiayu (Jerry) Liu — incoming Stanford undergraduate (Math & CS double major) working at the intersection of mathematics, machine learning, and assistive technology.',
  url: 'https://armorfaye.github.io',
  // Default social-share image. For best compatibility with social scrapers,
  // replace this with a 1200x630 PNG and update the path (e.g. og-default.png).
  ogImage: '/images/og-default.svg',
  email: 'jerryliu200710@gmail.com',
  // Resume lives in public/docs — swap the file, keep the path.
  resume: '/docs/Jerry_Liu_Resume.pdf',
} as const;

export const socials = {
  github: 'https://github.com/armorfaye',
  linkedin: 'https://www.linkedin.com/in/jiayu-jerry-liu-7764bb287/',
  // TODO: replace with your real Google Scholar profile when available.
  scholar: '',
  email: `mailto:${site.email}`,
} as const;

export const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
] as const;

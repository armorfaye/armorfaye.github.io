// Central site configuration. Edit these values to update contact links,
// SEO defaults, and the navigation menu across the whole site.

export const site = {
  name: 'Jiayu (Jerry) Liu',
  shortName: 'Jerry Liu',
  tagline: 'Mathematics · LLM Research · Agents',
  // Shown in the hero and used as the default meta description.
  intro:
    'Mathematics undergraduate at Stanford. I research large language models in Percy Liang’s group and at Hazy Research, and I’ve published in pure mathematics and machine learning.',
  description:
    'Jiayu (Jerry) Liu — Stanford mathematics undergraduate doing LLM research (Marin, Hazy Research), with publications in topology, analysis, and machine learning.',
  url: 'https://armorfaye.github.io',
  ogImage: '/images/og-default.png',
  email: 'jerryliu200710@gmail.com',
  // Resume lives in public/docs. To update it, replace the file and keep the path.
  resume: '/docs/Jerry_Liu_Resume.pdf',
  profile: '/images/profile-dark.jpg',
  location: 'Stanford, CA',
} as const;

export const socials = {
  linkedin: 'https://www.linkedin.com/in/jiayu-jerry-liu-7764bb287/',
  email: `mailto:${site.email}`,
} as const;

export const socialLinks = [
  { name: 'linkedin', label: 'LinkedIn', url: socials.linkedin },
  { name: 'mail', label: 'Email', url: socials.email },
] as const;

export const navLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
] as const;

// Organizations shown in the scrolling strip on the home page.
export const affiliations = [
  'Stanford NLP',
  'Hazy Research',
  'Marin · Open Athena',
  'StepFun',
  'MIT',
  'Princeton Mathematics',
  'MIT PRIMES',
  'Research Science Institute',
  'Ross Mathematics Program',
] as const;

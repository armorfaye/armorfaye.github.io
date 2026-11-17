// Experience timeline data. `highlight` entries appear on the home page;
// `current` entries with links appear under Ongoing on /research.
// Entries marked `highlight` also appear in the home-page timeline.

export interface ExperienceEntry {
  org: string;
  role: string;
  dates: string;
  location?: string;
  // Short, plain-language accomplishments.
  bullets: string[];
  links?: { label: string; url: string }[];
  // Shown on the home page.
  highlight?: boolean;
  // Renders the live "now" indicator.
  current?: boolean;
  tags?: string[];
}

export interface ExperienceSection {
  id: string;
  title: string;
  entries: ExperienceEntry[];
}

export const experienceSections: ExperienceSection[] = [
  {
    id: 'research',
    title: 'Research & Industry',
    entries: [
      {
        org: 'Stanford NLP · Percy Liang’s Group',
        role: 'LLM Researcher, Marin (Open Athena)',
        dates: 'Oct 2026 – Present',
        location: 'Stanford, CA',
        current: true,
        highlight: true,
        tags: ['Pretraining', 'RL environments', 'Data'],
        bullets: [
          'Developing a guidance-based pipeline for data creation and RL environment generation.',
          'Contributing to the next generation of the Marin pretraining architecture (~600B parameters).',
        ],
        links: [
          { label: 'Marin', url: 'https://marin.community' },
        ],
      },
      {
        org: 'Hazy Research · Stanford',
        role: 'Researcher, Speculative Decoding for Next-Concept Models',
        dates: '2026 – Present',
        location: 'Stanford, CA',
        current: true,
        highlight: true,
        tags: ['Inference', 'Speculative decoding', 'NCM'],
        bullets: [
          'Working with Hermann Kumbong on speculative decoding for Next-Concept Modeling (NCM), Hazy Research’s coarse-to-fine, parallel text-generation framework.',
        ],
        links: [
          { label: 'NCM blog', url: 'https://hazyresearch.stanford.edu/blog/2026-10-12-ncm' },
          { label: 'NCM paper', url: 'https://arxiv.org/abs/2610.14162' },
        ],
      },
      {
        org: 'StepFun',
        role: 'LLM Pretraining Intern',
        dates: 'Jul 2026 – Sep 2026',
        location: 'Beijing, China',
        highlight: true,
        tags: ['Architecture', 'Optimizers', 'Scaling'],
        bullets: [
          'Researched novel LLM architectures and optimizer improvements for Step 5 Pro, a multi-trillion-parameter model.',
          'Evaluated each change on StepFun’s proprietary scaling ladder.',
        ],
      },
      {
        org: 'MIT · Seethapathi Lab',
        role: 'Research Intern',
        dates: 'Jul 2025 – Aug 2025',
        location: 'Cambridge, MA',
        highlight: true,
        tags: ['Transformers', '3D pose', 'Time series'],
        bullets: [
          'Built the transformer pipeline for 3D human pose dynamics (PyTorch).',
          'First-author paper accepted to the AAAI 2026 Workshop on AI for Time Series (AI4TS).',
        ],
        links: [{ label: 'Project', url: '/projects/trifallnet' }],
      },
      {
        org: 'Princeton University · Department of Mathematics',
        role: 'Research Assistant',
        dates: 'Nov 2024 – Nov 2025',
        location: 'Princeton, NJ',
        highlight: true,
        tags: ['Analysis', 'Configuration spaces'],
        bullets: [
          'Researched configuration spaces with Fields Medalist Charles Fefferman.',
          'Co-authored a paper published in the Transactions of the London Mathematical Society.',
        ],
        links: [
          {
            label: 'Paper (TLMS)',
            url: 'https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/tlm3.70024',
          },
        ],
      },
      {
        org: 'MIT PRIMES · Math Track',
        role: 'Research Scholar',
        dates: 'Nov 2024 – Jan 2026',
        tags: ['Topology', 'Coxeter groups'],
        bullets: [
          'Developed algebraic methods for fundamental groups of hyperplane arrangement complements.',
          'Mentored by Prof. Nathan Williams (UT Dallas).',
        ],
        links: [{ label: 'Project', url: '/projects/pure-braid-groups' }],
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    entries: [
      {
        org: 'Stanford University',
        role: 'B.S. Mathematics',
        dates: 'Sep 2026 – May 2029',
        location: 'Stanford, CA',
        current: true,
        bullets: [],
      },
      {
        org: 'The Peddie School',
        role: 'Valedictorian · GPA 4.2 / 4.3',
        dates: 'Sep 2022 – May 2026',
        location: 'Hightstown, NJ',
        bullets: [
          'Advanced coursework: Multivariable Calculus, Linear Algebra, Algorithms & Data Structures.',
          'Princeton University coursework: Real Analysis (A), Fourier Analysis (A), Numerical Analysis (A), Probability & Stochastic Systems (A).',
        ],
      },
      {
        org: 'Research Science Institute (RSI)',
        role: 'Research Scholar',
        dates: 'Jul 2025 – Aug 2025',
        bullets: ['Developed the TriFallNet early fall-detection project.'],
      },
      {
        org: 'Ross Mathematics Program',
        role: 'Participant',
        dates: 'Jul 2024 – Aug 2024',
        bullets: ['Intensive number theory program built around proof and exploration.'],
      },
    ],
  },
];

// Honors listed on the home page.
export interface Award {
  title: string;
  detail: string;
  year?: string;
  link?: string;
}

export const awards: Award[] = [
  {
    title: 'Ricursive Intelligence Hackathon',
    detail: 'Winner, for Senju (a swarm of computer-use agents)',
    year: '2026',
    link: '/projects/senju',
  },
  {
    title: 'xAI',
    detail: 'Full-time Exceptional Engineer offer',
    year: '2026',
  },
  {
    title: 'USA Mathematical Olympiad',
    detail: 'Bronze Medal',
  },
  {
    title: 'USA Computing Olympiad',
    detail: 'Gold Division',
  },
  {
    title: 'The Peddie School',
    detail: 'Valedictorian',
    year: '2026',
  },
];

export const experienceHighlights: ExperienceEntry[] = experienceSections
  .flatMap((section) => section.entries)
  .filter((entry) => entry.highlight);

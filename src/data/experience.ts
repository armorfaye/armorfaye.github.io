// Experience timeline data, grouped into sections that render on /experience
// and feed the highlights on the home page. Add or reorder entries freely.

export interface ExperienceEntry {
  org: string;
  role: string;
  dates: string;
  location?: string;
  // Each bullet is a short, plain-language accomplishment.
  bullets: string[];
  // Optional link (paper, lab page, program site, etc.).
  link?: { label: string; url: string };
  // Marked entries surface in the home-page "Selected highlights" section.
  highlight?: boolean;
}

export interface ExperienceSection {
  id: string;
  title: string;
  entries: ExperienceEntry[];
}

export const experienceSections: ExperienceSection[] = [
  {
    id: 'industry',
    title: 'Industry',
    entries: [
      {
        org: 'StepFun',
        role: 'Incoming Research Intern, Pretraining Multimodal Team',
        dates: 'Summer 2026',
        location: 'Beijing, China',
        bullets: [
          'Joining the pretraining multimodal team for the summer.',
        ],
        highlight: true,
      },
      {
        org: 'xAI',
        role: 'Full-Time Exceptional Engineer Offer',
        dates: '2025',
        bullets: [
          'Received a full-time exceptional engineer offer as industry recognition.',
        ],
        highlight: true,
      },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    entries: [
      {
        org: 'MIT — Seethapathi Lab',
        role: 'Research Intern',
        dates: 'Jul 2025 – Aug 2025',
        location: 'Cambridge, MA',
        bullets: [
          'Developed a transformer-based pipeline for 3D human pose dynamics in PyTorch.',
          'Co-authored a paper accepted to the AAAI 2026 Workshop on AI for Time Series (AI4TS).',
        ],
        highlight: true,
      },
      {
        org: 'Princeton University — Department of Mathematics',
        role: 'Research Assistant',
        dates: 'Nov 2024 – Nov 2025',
        location: 'Princeton, NJ',
        bullets: [
          'Conducted research on configuration spaces with Fields Medalist Charles Fefferman.',
          'Co-authored a paper published in the Transactions of the London Mathematical Society.',
        ],
        link: {
          label: 'Read paper (TLMS)',
          url: 'https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/tlm3.70024',
        },
        highlight: true,
      },
      {
        org: 'MIT-PRIMES (Math Track)',
        role: 'Research Scholar',
        dates: 'Nov 2024 – Jan 2026',
        bullets: [
          'Developed algebraic methods for studying the fundamental groups of hyperplane arrangements.',
          'Mentored by Prof. Nathan Williams (University of Texas at Dallas).',
        ],
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    entries: [
      {
        org: 'Stanford University',
        role: 'Incoming Undergraduate — Mathematics & Computer Science (double major)',
        dates: 'Sep 2026 – May 2030',
        bullets: ['Incoming undergraduate (Fall 2026).'],
      },
      {
        org: 'The Peddie School',
        role: 'Valedictorian',
        dates: 'Sep 2022 – May 2026',
        bullets: [
          'Advanced coursework: Multivariable Calculus, Linear Algebra, Algorithms & Data Structures.',
          'Princeton University coursework: Real Analysis (A), Fourier Analysis (A), Numerical Analysis (A), Probability & Stochastic Systems (A).',
        ],
      },
    ],
  },
  {
    id: 'programs',
    title: 'Programs & Competitions',
    entries: [
      {
        org: 'Research Science Institute (RSI)',
        role: 'Research Scholar',
        dates: 'Jul 2025 – Aug 2025',
        bullets: [
          'Selective summer research program; developed the TriFallNet early fall-detection project.',
        ],
      },
      {
        org: 'Ross Mathematics Program',
        role: 'Participant',
        dates: 'Jul 2024 – Aug 2024',
        bullets: ['Intensive number theory program focused on mathematical exploration and proof.'],
      },
    ],
  },
  {
    id: 'awards',
    title: 'Awards & Recognition',
    entries: [
      {
        org: 'USA Mathematical Olympiad (USAMO)',
        role: 'Bronze Medal',
        dates: '',
        bullets: ['National-level recognition in mathematical olympiad.'],
      },
      {
        org: 'USA Computing Olympiad (USACO)',
        role: 'Gold Division',
        dates: '',
        bullets: ['Advanced to the Gold division of the national programming olympiad.'],
      },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Clubs',
    entries: [
      // TODO: Add leadership roles, clubs, or activities here.
      // Example shape:
      // {
      //   org: 'Math Club',
      //   role: 'President',
      //   dates: '2024 – 2026',
      //   bullets: ['Organized weekly problem-solving sessions.'],
      // },
    ],
  },
];

// Convenience export of highlighted entries for the home page.
export const experienceHighlights: ExperienceEntry[] = experienceSections
  .flatMap((section) => section.entries)
  .filter((entry) => entry.highlight);

// Publications shown on /research and the home page.
// Papers plus the workshop paper and posters.
// Put PDFs in public/docs and link them as /docs/<file>.pdf.

export type PubArea = 'math' | 'ml';
export type PubKind = 'journal' | 'workshop' | 'preprint' | 'research';

export interface PubLink {
  label: string;
  url: string;
  type: 'paper' | 'pdf' | 'arxiv' | 'poster' | 'project' | 'site' | 'repo';
}

export interface Publication {
  id: string;
  title: string;
  // Author list as it should be printed. The site owner's name is highlighted automatically.
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  kind: PubKind;
  area: PubArea;
  blurb: string;
  links: PubLink[];
  // Project page on this site, if one exists.
  project?: string;
  highlight?: string;
}

// Names that should be emphasized in author lists.
export const selfNames = ['J. Liu', 'J. J. Liu'];

export const publications: Publication[] = [
  {
    id: 'tlms-config-spaces',
    title: 'Lifts of continuous and Hölder-α curves in the configuration space Mᴺ/Sₙ',
    authors: ['C. L. Fefferman', 'A. V. Koukas', 'J. Liu', 'T. H. Mequanent'],
    venue: 'Transactions of the London Mathematical Society 13(1), e70024',
    venueShort: 'Trans. LMS',
    year: 2026,
    kind: 'journal',
    area: 'math',
    highlight: 'With Fields Medalist Charles Fefferman',
    blurb:
      'When can a continuous or Hölder-continuous path of N unlabeled points be followed by continuous paths of labeled points? Joint work at Princeton on the regularity of lifts through the quotient Mᴺ → Mᴺ/Sₙ.',
    links: [
      {
        label: 'Paper',
        url: 'https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/tlm3.70024',
        type: 'paper',
      },
    ],
  },
  {
    id: 'trifallnet',
    title: 'A Unified Fall Detection Benchmark and Model for Early, Event-Centric Evaluation',
    authors: ['J. Liu', 'J. Liang', 'N. Seethapathi'],
    venue: 'AAAI 2026 Workshop on AI for Time Series (AI4TS)',
    venueShort: 'AAAI ’26 · AI4TS',
    year: 2026,
    kind: 'workshop',
    area: 'ml',
    blurb:
      'Pre-impact fall detection from 3D human pose: AUC 0.855, 85% recall, and ~0.6 s of warning before impact at ~20 FPS, plus a cross-dataset benchmark over Le2i, URFD, and GMDCSA-24.',
    project: 'trifallnet',
    links: [
      { label: 'PDF', url: '/docs/TriFallNet_AAAI_Workshop_Paper.pdf', type: 'pdf' },
      { label: 'Poster', url: '/docs/Jerry_Liu_RSI_TriFallNet_Poster.pdf', type: 'poster' },
    ],
  },
  {
    id: 'full-twist',
    title:
      'Full-Twist Presentations for Fundamental Groups of Complements of Complexified Hyperplane Arrangements',
    authors: ['J. J. Liu', 'N. Williams'],
    venue: 'MIT PRIMES Research Paper',
    venueShort: 'MIT PRIMES',
    year: 2025,
    kind: 'research',
    area: 'math',
    blurb:
      'Conjectures a presentation of arrangement fundamental groups by equating all reduced words for the full twist, generalizing Artin’s presentation of the pure braid group. Proved for types A, B, D, H₃, I₂(m), and partially F₄.',
    project: 'pure-braid-groups',
    links: [
      {
        label: 'PDF',
        url: 'https://math.mit.edu/research/highschool/primes/materials/2025/Liu-Williams.pdf',
        type: 'pdf',
      },
    ],
  },
  {
    id: 'tda-alzheimers',
    title: 'Topological Data Analysis for Alzheimer’s Disease Diagnosis',
    authors: ['J. Liu'],
    venue: 'National High School Journal of Science (NHSJS)',
    venueShort: 'NHSJS',
    year: 2025,
    kind: 'journal',
    area: 'ml',
    blurb:
      'Persistent homology on OASIS brain MRI. A random forest on persistence images reaches 91.8% accuracy (AUC 0.93), beating a CNN and logistic regression (p < 0.001). Mentored by Prof. Dawid Kielak (Oxford).',
    project: 'tda-alzheimers',
    links: [
      {
        label: 'Paper',
        url: 'https://nhsjs.com/2025/topological-data-analysis-for-alzheimers-disease-diagnosis/',
        type: 'paper',
      },
    ],
  },
  {
    id: 'audioaware',
    title: 'Developing an AI-Guided Assistant Device for the Deaf and Hearing Impaired',
    authors: ['J. Liu'],
    venue: 'arXiv preprint arXiv:2507.14215',
    venueShort: 'arXiv',
    year: 2025,
    kind: 'preprint',
    area: 'ml',
    blurb:
      'A wearable that tells deaf and hard-of-hearing users what a sound is and where it comes from. Direction-of-arrival CNN (91.1% precision), fine-tuned CLAP (98.5%), and audio-visual localization (cIoU 0.892).',
    project: 'audio-aware',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2507.14215', type: 'arxiv' },
      { label: 'Poster', url: '/docs/Jerry_Liu_ISEF_AudioAware_Poster.pdf', type: 'poster' },
    ],
  },
];

export const kindLabel: Record<PubKind, string> = {
  journal: 'Journal',
  workshop: 'Workshop',
  preprint: 'Preprint',
  research: 'Research paper',
};

export const areaLabel: Record<PubArea, string> = {
  math: 'Mathematics',
  ml: 'Machine Learning',
};

// Posters and other research artifacts (shown below the paper list).
export const posters = [
  {
    title: 'TriFallNet: Early Fall Detection from Human Pose',
    venue: 'Research Science Institute (RSI) 2025',
    url: '/docs/Jerry_Liu_RSI_TriFallNet_Poster.pdf',
  },
  {
    title: 'AudioAware: Multimodal Assistive Device',
    venue: 'Regeneron ISEF',
    url: '/docs/Jerry_Liu_ISEF_AudioAware_Poster.pdf',
  },
  {
    title: 'Full-Twist Presentations (MIT PRIMES paper, local copy)',
    venue: 'MIT PRIMES 2025',
    url: '/docs/Jerry_Liu_MIT_PRIMES_Paper.pdf',
  },
];

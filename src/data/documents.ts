// Documents shown on /writing. Each card explains what the document is and
// why it matters. Put real files in public/docs and point `url` at them, or
// use an external URL. Keep private/sensitive material off this list.

export interface DocumentEntry {
  title: string;
  // What it is and why it matters (1–2 sentences).
  description: string;
  // 'paper' | 'poster' | 'slides' | 'report' | 'notes' | 'resume'
  type: string;
  // Local path (/docs/...) or external URL.
  url: string;
  date?: string;
  // Where it appeared (journal, conference, program).
  venue?: string;
  // Set true while the file is a placeholder you still need to add.
  placeholder?: boolean;
  featured?: boolean;
}

export const documents: DocumentEntry[] = [
  {
    title: 'Resume',
    description:
      'One-page overview of my research, projects, education, and recognition.',
    type: 'resume',
    url: '/docs/Jerry_Liu_Resume.pdf',
    featured: true,
  },
  {
    title: 'TriFallNet — RSI Research Poster',
    description:
      'Research poster on early fall detection from 3D human pose, including the unified fall-detection benchmark and pre-impact lead-time metrics. Developed at the Research Science Institute (RSI).',
    type: 'poster',
    url: '/docs/Jerry_Liu_RSI_TriFallNet_Poster.pdf',
    venue: 'RSI 2025',
    date: '2025',
    featured: true,
  },
  {
    title: 'AudioAware — ISEF Research Poster',
    description:
      'Research poster for AudioAware, a multimodal assistive device that localizes and classifies sound sources in real time for the deaf and hearing impaired.',
    type: 'poster',
    url: '/docs/Jerry_Liu_ISEF_AudioAware_Poster.pdf',
    venue: 'ISEF',
    featured: true,
  },
  {
    title: 'Configuration Spaces (London Math. Soc.)',
    description:
      'Mathematics paper on configuration spaces, published in the Transactions of the London Mathematical Society. PLACEHOLDER — add the PDF or publisher link.',
    type: 'paper',
    venue: 'Trans. London Math. Soc.',
    url: '#',
    placeholder: true,
  },
  {
    title: 'Topological Data Analysis for Alzheimer\u2019s Diagnosis',
    description:
      'Paper applying persistent homology and machine learning to Alzheimer\u2019s diagnosis, published in the National High School Journal of Science. PLACEHOLDER — add the PDF or journal link.',
    type: 'paper',
    venue: 'NHSJS',
    url: '#',
    placeholder: true,
  },
  {
    title: 'TriFallNet — AAAI 2026 Workshop Paper',
    description:
      'Workshop paper on transformer-based early fall detection, accepted to the AAAI 2026 Workshop on AI for Time Series (AI4TS). PLACEHOLDER — add the PDF or proceedings link.',
    type: 'paper',
    venue: 'AAAI 2026 (AI4TS)',
    url: '#',
    placeholder: true,
  },
];

// Documents shown on /writing. Each card explains what the document is and
// why it matters. Put real files in public/docs and point `url` at them, or
// use an external URL.

export interface DocumentEntry {
  title: string;
  description: string;
  type: string;
  url: string;
  date?: string;
  venue?: string;
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
    title: 'Developing an AI-Guided Assistant Device (arXiv)',
    description:
      'Preprint on AudioAware: a multimodal assistive system with JerryNet (91.1% DoA precision), fine-tuned CLAP classification (98.5% / 95%), and audio-visual localization (cIoU 0.892). Published on arXiv, July 2025.',
    type: 'paper',
    venue: 'arXiv',
    date: 'Jul 2025',
    url: 'https://arxiv.org/abs/2507.14215v1',
    featured: true,
  },
  {
    title: 'TriFallNet — AAAI 2026 Workshop Paper',
    description:
      'Workshop paper introducing a unified fall-detection benchmark and TriFallNet, a Skeleton-MixFormer model for early, event-centric fall detection from 3D pose. Accepted to AAAI 2026 (AI4TS).',
    type: 'paper',
    venue: 'AAAI 2026 (AI4TS)',
    date: '2025',
    url: '/docs/TriFallNet_AAAI_Workshop_Paper.pdf',
    featured: true,
  },
  {
    title: 'Topological Data Analysis for Alzheimer’s Diagnosis',
    description:
      'Peer-reviewed article applying Vietoris–Rips persistent homology and persistence images to OASIS MRI data. Random forest on topological features reached 91.8% accuracy and AUC 0.93, statistically outperforming CNN and logistic regression (p < 0.001). Published in NHSJS, August 2025.',
    type: 'paper',
    venue: 'NHSJS',
    date: 'Aug 2025',
    url: 'https://nhsjs.com/2025/topological-data-analysis-for-alzheimers-disease-diagnosis/',
    featured: true,
  },
  {
    title: 'Configuration Spaces (Trans. London Math. Soc.)',
    description:
      'Research on configuration spaces with Charles Fefferman, published in the Transactions of the London Mathematical Society. Combines geometric and combinatorial methods to study topological structure of configuration spaces.',
    type: 'paper',
    venue: 'Trans. London Math. Soc.',
    url: 'https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/tlm3.70024',
  },
  {
    title: 'Full-Twist Presentations for Hyperplane Arrangements (MIT-PRIMES)',
    description:
      'MIT-PRIMES research paper conjecturing full-twist presentations for fundamental groups of complexified hyperplane arrangements, generalizing Artin presentations of pure braid groups. Proved for Coxeter types A, B, D, H₃, I₂(m), and F₄ (partially).',
    type: 'paper',
    venue: 'MIT-PRIMES',
    date: 'Sep 2025',
    url: '/docs/Jerry_Liu_MIT_PRIMES_Paper.pdf',
  },
  {
    title: 'TriFallNet — RSI Research Poster',
    description:
      'Research poster on early fall detection from 3D human pose, including the unified fall-detection benchmark and pre-impact lead-time metrics (AUC 0.855, 85% recall, ~0.6s lead time).',
    type: 'poster',
    url: '/docs/Jerry_Liu_RSI_TriFallNet_Poster.pdf',
    venue: 'RSI 2025',
    date: '2025',
  },
  {
    title: 'AudioAware — ISEF Research Poster',
    description:
      'Research poster for AudioAware, a multimodal assistive device that localizes and classifies sound sources in real time for the deaf and hearing impaired.',
    type: 'poster',
    url: '/docs/Jerry_Liu_ISEF_AudioAware_Poster.pdf',
    venue: 'ISEF',
  },
];

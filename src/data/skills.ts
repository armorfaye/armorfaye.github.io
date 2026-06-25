// Technical stack shown on the home page. Group + reorder freely.

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'MATLAB', 'TypeScript', 'Java'],
  },
  {
    label: 'ML / Research',
    items: ['PyTorch', 'NumPy', 'Pandas', 'scikit-learn', 'Transformers'],
  },
  {
    label: 'Domains',
    items: [
      'Deep Learning',
      'Computer Vision',
      'Audio / Multimodal',
      'Topological Data Analysis',
      'Scientific Computing',
    ],
  },
  {
    label: 'Tools',
    items: ['Git', 'Linux', 'FastAPI', 'SageMath', 'Embedded (ESP32)'],
  },
];

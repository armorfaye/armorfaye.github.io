import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { decodeUnicodeEscapes } from './lib/decodeUnicodeEscapes';

const text = () => z.string().transform(decodeUnicodeEscapes);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: text(),
    summary: text(),
    abstract: text(),
    categories: z.array(
      z.enum(['ai-ml', 'assistive-tech', 'math-theory', 'software-systems']),
    ),
    tags: z.array(text()).default([]),
    role: text(),
    dates: text(),
    featured: z.boolean().default(false),
    // Optional honor shown as a badge on cards and the project header.
    award: text().optional(),
    order: z.number().default(99),
    thumbnail: z.string().optional(),
    stack: z.array(text()).default([]),
    results: z.array(text()).default([]),
    learned: z.array(text()).default([]),
    links: z
      .array(
        z.object({
          label: text(),
          url: z.string(),
          type: z.string().default('site'),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };

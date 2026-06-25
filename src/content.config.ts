import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects collection. Add a new project by dropping a .mdx file in
// src/content/projects/ that matches this schema. The file name (minus the
// extension) becomes the URL slug at /projects/<slug>.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    abstract: z.string(),
    categories: z.array(
      z.enum(['ai-ml', 'assistive-tech', 'math-theory', 'software-systems']),
    ),
    tags: z.array(z.string()).default([]),
    role: z.string(),
    dates: z.string(),
    featured: z.boolean().default(false),
    // Display order on the projects page (lower = earlier).
    order: z.number().default(99),
    // Path under /public, e.g. "/images/projects/foo.svg".
    thumbnail: z.string().optional(),
    stack: z.array(z.string()).default([]),
    results: z.array(z.string()).default([]),
    learned: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          // Drives the icon/badge: repo | paper | poster | slides | demo | report | site
          type: z.string().default('site'),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };

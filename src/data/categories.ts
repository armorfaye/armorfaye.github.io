// Project categories used for filtering on /projects and as the schema enum.
// Keep the `id` values in sync with the `categories` field in project frontmatter.

export const categories = [
  { id: 'ai-ml', label: 'AI / Machine Learning' },
  { id: 'assistive-tech', label: 'Assistive Technology' },
  { id: 'math-theory', label: 'Math / Theory' },
  { id: 'software-systems', label: 'Software / Systems' },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export const categoryLabel = (id: CategoryId): string =>
  categories.find((c) => c.id === id)?.label ?? id;

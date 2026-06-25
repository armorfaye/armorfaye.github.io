# Images

Static images served at `/images/...`.

## What's here

- `og-default.svg` — default social-share (Open Graph) image. For best results
  with social scrapers (LinkedIn, X, etc.), replace it with a **1200×630 PNG**
  and update `site.ogImage` in `src/data/site.ts`.
- `profile.png` — profile photo on the About page.
- `projects/` — project thumbnails (see below).

## Project thumbnails (`/images/projects/`)

Each project in `src/content/projects/` points to a thumbnail via its
`thumbnail` frontmatter field. The current files are simple SVG placeholders:

- `trifallnet.svg`
- `audio-aware.svg`
- `tda-alzheimers.svg`
- `pure-braid-groups.svg`
- `llm-notes.svg`

### Replacing a thumbnail

1. Add your image (recommended **1200×675**, i.e. 16:9; PNG or JPG is fine).
2. Update the `thumbnail` path in that project's `.mdx` frontmatter, e.g.
   `thumbnail: '/images/projects/trifallnet.png'`.

You mentioned you'll send more photos later — add them here and reference them
from the relevant project's MDX (a gallery can be added to the project body).

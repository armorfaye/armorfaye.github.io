# Images

Static images served at `/images/...`.

## What's here

- `og-default.png` — default social-share (Open Graph) image, 1200×630: a screenshot
  of the top of the home page. Re-capture it after changing the hero.
- `profile-light.jpg` — portrait used in the home intro (background matched to the page).
- `profile.png` — the original studio photo (white background), kept as the source.
- `projects/` — project thumbnails (see below).

## Project thumbnails (`/images/projects/`)

Each project in `src/content/projects/` points to a thumbnail via its
`thumbnail` frontmatter field. The current files are light (paper, ink, and green) SVG
illustrations that match the site theme:

- `senju.svg`
- `trifallnet.svg`
- `audio-aware.svg`
- `tda-alzheimers.svg`
- `pure-braid-groups.svg`

### Replacing a thumbnail

1. Add your image (recommended **1200×675**, i.e. 16:9; PNG or JPG is fine).
2. Update the `thumbnail` path in that project's `.mdx` frontmatter, e.g.
   `thumbnail: '/images/projects/trifallnet.png'`.


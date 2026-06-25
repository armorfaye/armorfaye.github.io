# Jiayu (Jerry) Liu — Portfolio

A fast, accessible, static personal portfolio built with **Astro**, **TypeScript**,
and **Tailwind CSS**. It showcases research and engineering projects, experience,
writing, and documents, and deploys for free to GitHub Pages at
[https://armorfaye.github.io](https://armorfaye.github.io).

## Features

- Static site (no backend) with dark/light mode and a mobile-friendly layout.
- Projects authored as MDX in a typed Astro content collection.
- Experience, documents, and skills stored in simple TypeScript data files.
- SEO metadata (Open Graph + Twitter cards), a sitemap, and a custom 404 page.
- One-click deploy via GitHub Actions.

## Tech stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Astro 7                                 |
| Language    | TypeScript (strict)                     |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`)   |
| Content     | MDX content collection + TS data files  |
| Deployment  | GitHub Actions → GitHub Pages           |

## Getting started

Requires Node.js 22.12+ (Astro 7 requirement).

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

### Build and preview a production bundle

```bash
npm run build    # output static site to dist/
npm run preview  # serve the built site locally
npm run check    # type-check the project
```

## Editing content

Everything you'll edit regularly lives in `src/data/` and `src/content/`.

### Add or edit a project

1. Create `src/content/projects/<slug>.mdx`. The file name becomes the URL:
   `/projects/<slug>`.
2. Fill in the frontmatter (validated by the schema in `src/content.config.ts`):

   ```yaml
   ---
   title: 'My Project'
   summary: 'One-sentence summary shown on cards.'
   abstract: 'A short paragraph shown at the top of the detail page.'
   categories: ['ai-ml'] # ai-ml | assistive-tech | math-theory | software-systems
   tags: ['PyTorch', 'CV']
   role: 'Lead author'
   dates: '2025'
   featured: true # show on the home page
   order: 1 # sort order (lower first)
   thumbnail: '/images/projects/my-project.svg'
   stack: ['Python', 'PyTorch']
   results:
     - 'A key metric or outcome.'
   learned:
     - 'Something you took away.'
   links:
     - { label: 'GitHub', url: 'https://github.com/...', type: 'repo' }
   ---

   ## Problem & motivation
   Write the narrative here in Markdown/MDX.
   ```

   Link `type` controls the icon: `repo`, `paper`, `poster`, `slides`, `demo`,
   `report`, or `site`. Use `'#'` as the URL for a placeholder link.

3. The home-page "Featured projects" grid shows projects with `featured: true`.

### Edit experience, documents, skills, and contact info

- `src/data/experience.ts` — timeline entries (research, industry, education,
  programs, awards, leadership). Set `highlight: true` to surface an entry on
  the home page.
- `src/data/documents.ts` — cards on the Writing page. Set `placeholder: true`
  while a file/link isn't public yet; set `featured: true` to show on the home page.
- `src/data/skills.ts` — the technical-stack grid on the home page.
- `src/data/site.ts` — name, tagline, email, social links, resume path, and SEO
  defaults. Add your Google Scholar URL to `socials.scholar` when you have one.

### Images and PDFs

- Put PDFs in `public/docs/` and link them as `/docs/<file>.pdf`. See
  `public/docs/README.md`.
- Put images in `public/images/` (project thumbnails in
  `public/images/projects/`). See `public/images/README.md`.
- Replace `public/images/profile.jpg` with a real photo for the About page.
- For social sharing, replace `public/images/og-default.svg` with a 1200×630 PNG
  and update `site.ogImage` in `src/data/site.ts`.

> Keep private or sensitive documents out of `public/` — everything there is
> published with the site.

## Deploying to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy.yml` that builds and
publishes the site on every push to `main`.

1. Create a repository named **`armorfaye.github.io`** under your GitHub account.
2. Push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/armorfaye/armorfaye.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
4. The workflow runs automatically. When it finishes, your site is live at
   [https://armorfaye.github.io](https://armorfaye.github.io).

### Notes

- This is configured for a **user site** (`username.github.io`), so `base` is
  `/` in `astro.config.mjs`. For a project repo (`username.github.io/repo`),
  set `base: '/repo-name'` instead.
- Using a custom domain later? Add a `public/CNAME` file with your domain and
  update `site` in `astro.config.mjs`.

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── astro.config.mjs               # Astro + integrations + site URL
├── public/
│   ├── docs/                      # resume + posters (linked PDFs)
│   ├── images/                    # thumbnails, profile photo, OG image
│   └── favicon.svg
└── src/
    ├── components/                # Navbar, Footer, Hero, cards, etc.
    ├── content/projects/          # project pages (MDX)
    ├── content.config.ts          # project collection schema
    ├── data/                      # site, experience, documents, skills
    ├── layouts/                   # BaseLayout, ProjectLayout
    ├── pages/                     # routes
    └── styles/global.css          # Tailwind + design tokens
```

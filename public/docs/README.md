# Documents

PDFs and other files linked from the **Writing** page and project pages live here.

## Current files

- `Jerry_Liu_Resume.pdf` — linked from the navbar, footer, hero, and About page.
- `Jerry_Liu_RSI_TriFallNet_Poster.pdf` — TriFallNet research poster.
- `Jerry_Liu_ISEF_AudioAware_Poster.pdf` — AudioAware research poster.

## Adding or replacing a document

1. Drop the PDF in this folder. Keep file names simple (no spaces): use
   underscores, e.g. `My_Paper_2026.pdf`.
2. Reference it from `src/data/documents.ts` (Writing page) or from a project's
   `links` array in `src/content/projects/<slug>.mdx`.
3. The URL is the path under `public`, so `public/docs/My_Paper.pdf` is linked as
   `/docs/My_Paper.pdf`.

## Replacing the resume

Keep the file name `Jerry_Liu_Resume.pdf` and the links throughout the site will
keep working. To change the name, update `site.resume` in `src/data/site.ts`.

> Do not put private or sensitive documents in this folder — everything here is
> published publicly with the site.

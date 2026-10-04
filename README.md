# Ragad Karaman — Portfolio

Personal developer portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                     routes (home, /projects/[slug], sitemap, robots)
components/layout/        header, footer
components/sections/      hero, about, projects, stack, experience, contact
components/projects/      project card, project detail, screenshot gallery, status badge
components/ui/            small shared primitives (container, tag)
data/projects.ts          all project content — add a new project here, no component changes needed
data/skills.ts             tech stack, grouped by category
data/experience.ts         internship / experience timeline
lib/screenshots.ts         reads each project's screenshot folder and builds the gallery — no data.ts editing needed
public/projects/<slug>/    screenshots per project, one folder per project (see below)
public/cv.pdf              the file served by the "Download CV" button
```

## Adding a project

Add an entry to the `projects` array in `data/projects.ts` — every field is documented by the
`Project` type in `data/types.ts`. The project automatically appears on the home page list and
gets its own page at `/projects/<slug>`.

## Adding screenshots

**This is fully automatic — you only need to add image files, nothing in the code.**

Each project has its own folder under `public/projects/`, named after its exact slug from
`data/projects.ts`:

```
public/projects/blood-donation-management-system/
public/projects/fitai-fashion-ecommerce/
public/projects/disaster-management-decision-support/
public/projects/opale-store/
```

To add screenshots for a project, drop image files (`.png`, `.jpg`, `.jpeg`, or `.webp`) straight
into its folder. For example, for the Blood Donation Management System:

```
public/projects/blood-donation-management-system/
  dashboard.png
  donor-list.png
  blood-request.png
  analytics.png
  mobile-app.png
```

File naming rules:
- lowercase, kebab-case (`donor-list.png`, not `Donor List.png` or `donör_liste.png`)
- English letters only — no spaces, no Turkish characters
- descriptive names — the filename becomes the caption shown under each thumbnail
  (`blood-request.png` → "Blood request")

Run `npm run dev` and open the project's case-study page — the images appear in the gallery
automatically, in alphabetical order by filename. Nothing in `data/projects.ts` or any component
needs to change. If a project's folder has no images yet, the page shows a clean "Project
screenshots will be added here." placeholder instead of a broken gallery.

### Screen descriptions (optional, already filled in for the suggested filenames)

`data/screenshot-notes.ts` holds a one-sentence description per screenshot, keyed by project slug
and filename (without extension). When a screenshot's filename matches an entry there, that
description is used as its caption and alt text instead of a plain filename-derived label.

- Use the suggested filenames (e.g. `01-admin-dashboard.png`) and the matching description shows
  up automatically — nothing to do.
- Used a different filename, or want different wording? Add or edit an entry in
  `data/screenshot-notes.ts` — no other file needs to change.
- No matching entry? The gallery still works fine; it just falls back to a label built from the
  filename itself.

Note: the live site is statically generated, so after adding or changing screenshots you need to
run `npm run build` again (and redeploy) for them to show up in production — `npm run dev` picks
them up immediately for local preview.

## Updating your CV

Replace `public/cv.pdf` with your current CV, keeping the same filename — the header's
"Download CV" button already points at it.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel (vercel.com/new) — it auto-detects Next.js, no configuration needed.
3. Optional: set a custom domain, then update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`,
   and `app/robots.ts` to match it.

No environment variables are required for the site to build or run.

# Md. Rifat Hossain — Portfolio

A dark, animated personal portfolio built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and Motion (Framer Motion). Content is data-driven from
`src/data/content.ts`, generated from the provided CV.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (`motion/react`) for animation
- **lucide-react** for UI icons (brand/social icons are hand-drawn in
  `src/components/BrandIcons.tsx` since lucide no longer ships logos)
- **Resend** for the contact form's email delivery
- Self-hosted fonts via `@fontsource` (Space Grotesk + Inter) — no external
  font requests at build or runtime

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you publish — things to replace

1. **Your photo** — drop a background-removed portrait at
   `public/images/profile.png`. Until it exists, the hero shows an automatic
   placeholder, so nothing breaks if you forget.
2. **Your resume** — replace `public/resume.pdf`. (Your uploaded CV is in
   there right now as a placeholder so the download link isn't broken.)
3. **Social links** — edit `socialLinks` in `src/data/content.ts` with your
   real GitHub / LinkedIn / Facebook / X / Instagram URLs.
4. **Project & GitHub links** — each project in `src/data/content.ts` has a
   `githubUrl`/`liveUrl` you can point at the real repos/demos.
5. **Contact form email** — see below.

## Contact form setup (Resend)

The form at `/#contact` posts to `src/app/api/contact/route.ts`, which sends
mail through [Resend](https://resend.com).

1. Create a free Resend account and verify a sending domain (or use their
   `onboarding@resend.dev` sender for testing, already set in the route).
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=your_key_here
   CONTACT_EMAIL=myselfasrifat@gmail.com
   ```
3. Restart the dev server. Without these two variables the form returns a
   friendly error instead of crashing, so the rest of the site still works.

When deploying, add the same two variables in your host's environment
settings (Vercel → Project → Settings → Environment Variables).

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, metadata, loader, cursor
    page.tsx           Composes all sections
    api/contact/       Contact form email route
    globals.css         Design tokens, custom cursor, background
  components/          One component per section + shared UI
  data/content.ts       All site copy, links, projects, experience, etc.
  hooks/useActiveSection.ts   Scroll-spy for the nav underline
  lib/utils.ts            Small class-name helper
```

To add a new project, award, or role, edit the relevant array in
`src/data/content.ts` — no component changes needed.

## Deploying

### Push to GitHub

```bash
git init                     # already done if you downloaded this as-is
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Deploy to Vercel

1. Go to https://vercel.com/new and import the GitHub repo.
2. Add the `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables.
3. Deploy — Vercel auto-detects Next.js, no config needed.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations shorten to near-zero).
- Custom cursor auto-disables on touch devices.
- Keyboard focus states are visible throughout.
- Fonts are self-hosted (no layout shift from third-party font loading).

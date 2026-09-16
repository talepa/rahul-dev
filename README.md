# Rahul Talepa — Portfolio

Personal site for Rahul Talepa, AI Engineer (LLM systems, RAG, multi-agent orchestration).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a small design-token theme in `app/globals.css`
- **Motion** for reveals, scroll-linked transforms, stacked project cards and the velocity marquee
- **Lenis** for smooth scrolling
- Fonts: Geist, Instrument Serif, JetBrains Mono via `next/font`

## Develop

```bash
npm install
npm run dev
```

## Editing content

All copy lives in `lib/data.ts`: profile, experience, flagship projects, lab projects, stack.
The "Recently pushed" section pulls live data from the GitHub API at build time and refreshes hourly (`lib/github.ts`).

## Portrait

Put a photo at `public/rahul.jpg` (portrait crop works best). Until then the hero shows an "RT" monogram.

## Structure

```
app/          layout, page, global styles, favicon
components/   Nav, Hero, AgentTrace, Marquee, About, Experience, Work, Stack, OpenSource, Contact, Cursor, SmoothScroll
lib/          data.ts (content), github.ts, hooks.ts, scroll.ts
public/       resume.pdf, rahul.jpg
```

# UGO N & Co. website

Production website for UGO N & Co.: corporate finance and strategy, private African contemporary art exhibitions, private art and strategic engagements.

Built with Next.js 16 (App Router, Cache Components), TypeScript (strict), Tailwind CSS v4, a Server Action contact form (zod + Resend), and self-hosted fonts. Every page is prerendered as static HTML.

The approved design and copy live in [`handoff/`](handoff/) (`DESIGN_SPEC.md`, `content/content.md`, screenshots and HTML previews).

## Setup

Requirements: Node.js 20.9 or newer (24 LTS recommended) and pnpm.

```bash
pnpm install
cp .env.example .env.local   # optional in development
pnpm dev                     # http://localhost:3000
```

Without Resend credentials, the contact form logs each submission to the terminal in development, so you can test it locally without sending email.

## Environment variables

| Variable               | When       | Purpose                                                                                                                                   |
| ---------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Build time | Canonical origin without a trailing slash, e.g. `https://www.example.com`. Used for canonical URLs, Open Graph, sitemap, robots, JSON-LD. |
| `RESEND_API_KEY`       | Runtime    | Resend API key for contact form delivery.                                                                                                 |
| `CONTACT_TO_EMAIL`     | Runtime    | Inbox that receives inquiries. Comma-separate several addresses.                                                                          |
| `CONTACT_FROM_EMAIL`   | Runtime    | Sender on a domain verified in Resend, e.g. `UGO N & Co. Website <website@example.com>`.                                                  |

In production, if any of the three Resend variables is missing the form shows its error state and the server logs the reason. The email to the firm includes every field and sets `Reply-To` to the visitor's address.

## Scripts

| Command                               | What it does                                                                             |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| `pnpm dev`                            | Development server                                                                       |
| `pnpm build`                          | Production build (`.next/standalone` output)                                             |
| `pnpm start`                          | Serve the production build                                                               |
| `pnpm lint`                           | ESLint (Next.js config)                                                                  |
| `pnpm typecheck`                      | Generate route types and run `tsc --noEmit`                                              |
| `pnpm format` / `pnpm format:check`   | Prettier (with the Tailwind class sorter)                                                |
| `pnpm test:e2e`                       | Playwright + axe against the production build (run `pnpm build` first)                   |
| `pnpm screenshots <baseUrl> <outDir>` | Full-page captures at 1440px and 390px, for comparing with `handoff/design/screenshots/` |

First-time Playwright setup: `pnpm exec playwright install chromium`.

The e2e suite runs axe (WCAG 2.2 AA) on every page at both widths and checks: no horizontal scroll at 320px, one `h1` per page, canonical and Open Graph tags, active navigation, no em dashes, header shrink on scroll, the mobile menu (focus trap, Escape, scroll lock, closes on navigation) and the contact form (inline errors, focus management, error state that keeps input, success state).

## Project structure

```
src/
  app/                    Routes (one folder per page), layout, metadata routes, OG image
    contact/actions.ts    Contact form Server Action
  components/
    ui/                   Design-system components (Section, Heading, Button, ImageFrame, ...)
    layout/               Header, MobileMenu, Footer, RevealObserver
    contact/              ContactForm, InquiryPills
  content/                All website copy, one typed module per page + site.ts
  lib/                    Config, contact schema, rate limiter, email delivery, metadata helper
  assets/                 Monograms and the TTF fonts used by the OG image
  fonts/                  Self-hosted Cormorant Garamond and Jost (woff2, SIL OFL)
tests/                    Playwright e2e + accessibility suite
```

Design tokens (colors, fonts, container width, breakpoints) are defined once in the `@theme` block of [`src/app/globals.css`](src/app/globals.css), with the type scale (`.h1`, `.h2`, `.h3`, `.eyebrow`, `.lede`, `.body`) beside them. Components use token utilities such as `bg-paper`, `text-gold-text` and `border-rule`, never raw hex values.

## Editing copy

All words on the site live in [`src/content/`](src/content/):

- `site.ts`: navigation, footer, disclaimer, and small UI labels.
- `home.ts`, `corporate.ts`, `exhibitions.ts`, `private-art.ts`, `strategic.ts`, `about.ts`, `contact.ts`: one per page, including each page's `title` and `description` metadata.

Edit the strings and redeploy. Headings with an italic gold phrase use `{ text, accent }`, where `accent` must be an exact substring of `text`.

House style: no em dashes anywhere. Use a comma or parentheses instead. The en dash in "U.S.–Africa" stays.

Contact form messages (success, error, validation and the "Sending…" label) are in `contact.ts` under `form`.

## Replacing image placeholders

Every image slot is an `ImageSlot` in a content module: a `label` for the hatched placeholder, plus an optional `image`. To add a photo:

1. Put the file in `src/assets/images/`, e.g. `src/assets/images/home-hero.jpg`. Use at least 1000px on the long edge, cropped to the slot's aspect ratio.
2. In the page's content module, import it and set `image`:

   ```ts
   import homeHero from "@/assets/images/home-hero.jpg";

   image: { label: "Image · Featured artwork", image: { src: homeHero, alt: "Describe the artwork, artist and title" } },
   ```

Static imports give Next.js the dimensions, a content hash and responsive WebP output. Hero images already load with `priority`.

| Slot                            | Content module   | Aspect ratio |
| ------------------------------- | ---------------- | ------------ |
| Home hero, featured artwork     | `home.ts`        | 4:5          |
| Exhibitions hero, installation  | `exhibitions.ts` | 5:6          |
| Exhibitions, artwork detail     | `exhibitions.ts` | 4:5          |
| Private Art hero, artwork       | `private-art.ts` | 3:4          |
| Private Art, Ovico Gallery      | `private-art.ts` | 4:3          |
| About, portrait of Ugochi Nwoga | `about.ts`       | 4:5          |

## Ovico Gallery link

Set `OVICO_URL` in [`src/lib/config.ts`](src/lib/config.ts). Until it is set, every "Visit Ovico Gallery" control renders as a plain label rather than a dead link. Once set, the links open in a new tab with `rel="noopener noreferrer"`.

## Deploying

### Coolify (Docker)

The repository includes a multi-stage [`Dockerfile`](Dockerfile). It builds the Next.js standalone output and runs it with `node server.js` as a non-root user on port 3000, with a health check on `/`.

1. In Coolify, create a new resource from this Git repository and choose the **Dockerfile** build pack.
2. Set the exposed port to `3000`.
3. Add `NEXT_PUBLIC_SITE_URL` as a **build variable** (it is baked into the static pages at build time).
4. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` as **runtime environment variables** (mark the API key as a secret).
5. Attach the domain and deploy. Coolify's proxy terminates TLS and forwards `X-Forwarded-For`, which the contact form uses for rate limiting.

To build and run the image locally:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://www.example.com -t ugo-n-co .
docker run -p 3000:3000 --env-file .env.local ugo-n-co
```

### Vercel

Import the repository. No configuration changes are needed: Vercel ignores `output: "standalone"`. Set the same four environment variables in the project settings.

### Contact form rate limiting

Each IP address may submit 5 times per 10 minutes. The counter is held in memory, which is exact for a single container (Coolify) and best-effort on serverless platforms with several instances. A hidden honeypot field silently discards bot submissions.

# Prompt: Build the UGO N & Co. website

Copy everything below the line into Claude Code (or Claude with file access), opened in an empty project folder that contains this unzipped handoff folder at `./handoff/`.

---

You are a senior front-end engineer and design-minded implementer. Build the production website for **UGO N & Co.**, a relationship-driven firm working across corporate finance and strategy, private African contemporary art exhibitions, private art and strategic engagements. The design is finished and approved. Your job is a pixel-faithful, accessible, fast, production-ready implementation, not a redesign.

## 1. Inputs (read all of these before writing code)

Everything is in `./handoff/`:

| Path | What it is | Authority |
|---|---|---|
| `content/content.md` (and the original `UGO_N_content.docx`) | All website copy, page by page | **Source of truth for words.** Use verbatim. |
| `design/screenshots/*-desktop.png`, `*-mobile.png` | Full-page renders of every page at 1440px and 390px | **Source of truth for layout and look.** Open and study every one. |
| `design/preview/*.html` | Static HTML/CSS of every page (open in a browser) | Exact values: spacing, sizes, colors, structure. Read the markup for any measurement. |
| `DESIGN_SPEC.md` | Tokens, type scale, components, motifs, page structure, motion | Source of truth for tokens and component rules. |
| `assets/` | Logo, transparent monograms (light and dark), self-hosted fonts | Use these files. |
| `design/source/*.dc.html` | Original design-tool files | Reference only; do not ship. |

If the preview HTML and the screenshots ever disagree, follow the screenshots. If copy in the previews differs from `content.md`, follow `content.md` except for the small labels the design adds (listed in section 6).

## 2. Stack

- **Next.js (App Router, latest stable) + TypeScript (strict) + Tailwind CSS v4.** Server Components by default; client components only where interaction needs them (mobile menu, inquiry pills, contact form, scroll reveals).
- Fonts with `next/font/local` from `handoff/assets/fonts/` (Cormorant Garamond 400/400i/500/500i/600, Jost 400/500), exposed as CSS variables, `display: swap`.
- Images with `next/image`.
- Contact form: a Server Action (or route handler) with **zod** validation, a hidden honeypot field, basic rate limiting per IP, and email delivery through **Resend** (env vars `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). If env vars are missing in development, log the payload instead of failing.
- Deployment target: a VPS running **Coolify** (Docker). Set `output: 'standalone'` and include a production `Dockerfile` (multi-stage, non-root user) and `.dockerignore`. Make sure it also deploys cleanly on Vercel with no changes.
- Package manager: pnpm. Lint with ESLint (Next config) and format with Prettier.

## 3. Information architecture

| Page | Route |
|---|---|
| Home | `/` |
| Corporate Finance & Strategy | `/corporate-finance-strategy` |
| Private Exhibitions | `/private-exhibitions` |
| Private Art | `/private-art` |
| Strategic Engagements | `/strategic-engagements` |
| About | `/about` |
| Contact | `/contact` |

Navigation order and labels exactly as in `content.md`. "Contact" renders as the small outlined button in the header. All "Start a Conversation" and "Discuss a …" buttons go to `/contact`. "Explore Our Work" scrolls smoothly to the What We Do section on Home. "Visit Ovico Gallery" links use a single config value `OVICO_URL` (open in a new tab with `rel="noopener noreferrer"`); leave it as a clearly marked TODO until the URL is provided.

## 4. Architecture and code quality

- Put tokens from `DESIGN_SPEC.md` §1 to §3 in the Tailwind v4 `@theme` (colors, font families, the type scale as utilities or component classes, container width). No hard-coded hex values in components.
- Keep **all copy in typed content modules** (`src/content/*.ts`, one per page plus `site.ts` for nav, footer, disclaimer). Components receive content as props. This makes a later move to a CMS trivial.
- Build a small reusable component set, matching `DESIGN_SPEC.md` §5: `Container`, `Section` (variants: ivory, paper, ink), `Eyebrow`, `Heading` (h1/h2/h3 with an `accent` prop for the italic gold phrase), `Lede`, `Body`, `Button` (primary, outline, goldOutline; renders `Link` or `button`), `TextLink` (with arrow), `RuledList`, `NumberedItem`, `Tile`, `ConceptCard`, `Panel`, `Chip`, `Notice`, `ImageFrame` (with optional offset gold frame, ring and dot motifs, and a styled placeholder when no image is set), `GoldRing`, `Header`, `MobileMenu`, `Footer`, `ContactForm`, `InquiryPills`.
- Decorative SVGs and rings are `aria-hidden`. Icons are inline SVG (no icon library).
- No layout shift: reserve image aspect ratios; fonts preloaded.

## 5. Fidelity requirements

- Match the screenshots at **1440px** and **390px** closely: section order, column splits, spacing rhythm, type sizes, rules, rings, offset frames, numbering, colors. Check 768px and 1024px yourself and make them look intentional.
- Header: desktop nav at ≥1180px; below that a 48px square menu button that opens an accessible mobile menu (focus trap, Escape closes, `aria-expanded`, body scroll lock, closes on route change). Make the header sticky; after 8px of scroll give it the ivory background with a hairline border (it already has one) and a slightly reduced height (92px to 76px), animated.
- Active nav state per route (`gold-text` + gold underline; `aria-current="page"`).
- No horizontal scrolling at any width down to 320px.
- Image placeholders: implement the hatched placeholder from the spec for every image slot, each with its label, and an `image` prop so real photos drop in later. Keep the aspect ratios listed in the spec.

## 6. Content rules

- Use the copy from `content.md` **verbatim**. Do not rewrite, shorten, embellish or invent copy, stats, testimonials, clients or images.
- **Never use em dashes (the long dash, Unicode U+2014) anywhere** in copy, UI, metadata, alt text or code comments. Where the source had one, it is already replaced with a comma or parentheses in `content.md`. En dashes in "U.S.–Africa" stay.
- Small structural labels added by the design are approved and should be kept: "Navigation", "Disclaimer", "Contact Form", "Please Note", "Across Markets", "How We Engage", "Exhibitions", "The Collector", "The Gallery or Artist", "The Corporation", "Support may include", "Experiences may include", "The firm operates across four areas", the numerals, and the three logo disciplines strip on Home (African Contemporary Art | Finance & Strategy | Global Partnerships).
- Contact form needs success and error messages that the doc does not include. Use neutral placeholders such as `[SUCCESS MESSAGE]` and `[ERROR MESSAGE]` in the content module, render them, and list them as open items. Do not write marketing copy for them.

## 7. Contact form behavior

Fields: Name (required), Company / Organization (optional), Email (required, valid), Phone (Optional), Nature of Inquiry (multi-select pills, at least one required; options exactly as in `content.md`), "Tell us briefly about the opportunity" (required, 20 to 2000 characters), Submit.

- Real `<label>`s, `fieldset`/`legend` for the pills, pills are `<button type="button" aria-pressed>` (or checkbox inputs styled as pills).
- Client and server validation with the same zod schema; inline field errors with `aria-describedby`; focus the first invalid field on submit.
- Pending state on the button (disabled, "Sending…" style label from the content module), then success state replacing the form, or an error banner that keeps the user's input.
- Email to the firm includes all fields, plus a reply-to of the sender.

## 8. SEO, metadata, accessibility, performance

- Per-page `metadata` (title template `%s | UGO N & Co.`, descriptions drawn from each page's first paragraph), canonical URLs from `NEXT_PUBLIC_SITE_URL`, Open Graph and Twitter cards with a generated OG image (`opengraph-image.tsx`) in the brand style (ivory, monogram, serif wordmark), favicon and apple-touch icon from the monogram, `sitemap.ts`, `robots.ts`, and `Organization` JSON-LD.
- WCAG 2.2 AA: semantic landmarks, one H1 per page, logical heading order, skip-to-content link, visible focus rings (2px `gold-text` outline with offset), 44px minimum touch targets, color contrast as specified (never `#B8913F` text on ivory).
- Motion per `DESIGN_SPEC.md` §7 using `IntersectionObserver` or CSS scroll-driven animations; disabled under `prefers-reduced-motion`.
- Targets: Lighthouse 95+ on Performance, Accessibility, Best Practices and SEO (mobile). Ship minimal client JS; no animation libraries unless clearly needed.

## 9. How to work

1. Read every input file and view every screenshot first. Then post a short plan: file tree, component list, token mapping, and any questions. Do not stop for answers; proceed with the defaults in this prompt and keep a list.
2. Scaffold, set up tokens, fonts and the base components. Build the Header and Footer and verify them before pages.
3. Build pages in this order: Home, Contact, Corporate Finance & Strategy, Private Exhibitions, Private Art, Strategic Engagements, About.
4. After each page, run the dev server and use Playwright to take full-page screenshots at 1440px and 390px. Compare them side by side with `handoff/design/screenshots/` and fix differences before moving on.
5. Finish with: `pnpm build` with zero errors or type errors, ESLint clean, an axe accessibility scan of every page with zero serious or critical issues, a check that no page scrolls horizontally at 320px, and a grep for U+2014 proving there are no em dashes in `src/`.

## 10. Deliverables

- The complete Next.js project.
- `README.md`: setup, env vars, scripts, how to edit copy (content modules), how to replace image placeholders, how to deploy on Coolify with the Dockerfile.
- A final summary listing anything that differs from the design and why, plus the open items below.

## 11. Open items to surface (do not guess these)

1. Real photography for every placeholder (hero artwork, exhibition installation, artwork details, Ovico Gallery, Ugochi's portrait).
2. Ovico Gallery website URL.
3. The source says Ugochi is "Owner and Curator" of Ovico Gallery in some places and "Co-owner and Curator" in others (About page, footer). Keep the text as written and flag it.
4. Contact details (email, phone, location) and social links, if any should appear.
5. Contact form success and error messages, and the inbox that should receive inquiries.
6. Production domain.
7. A vector (SVG) version of the logo.

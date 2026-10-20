# UGO N & Co. Website: Design Spec

This file is the single reference for the visual system. The screenshots in `design/screenshots/` and the HTML in `design/preview/` show it applied. Where this spec and the previews disagree, the previews win on layout and this spec wins on tokens.

Direction: quiet luxury, editorial. Ivory paper, ink black, logo gold. Thin rules, generous whitespace, large serif headlines, small letter-spaced sans labels. No gradients, no shadows except the contact form card, no rounded corners (except circles), no emoji, no icon libraries.

---

## 1. Color tokens

| Token | Hex | Use |
|---|---|---|
| `ivory` | `#FAF7F0` | Page background, default surface |
| `paper` | `#F1EBDF` | Alternate section background |
| `card` | `#FFFDF8` | Contact form card |
| `ink` | `#12110F` | Primary text, dark sections, footer, primary buttons |
| `ink-soft` | `#3D3932` | Lede paragraphs, list items |
| `muted` | `#5A554C` | Body copy on light |
| `gold` | `#B8913F` | Rules, circles, numerals, borders, button outline on dark. Decorative only on light (fails contrast for text) |
| `gold-text` | `#806128` | Gold text on light backgrounds (eyebrows, italic accents, active nav). 5.4:1 on ivory |
| `gold-light` | `#C9A55A` | Gold text on dark backgrounds. 8.1:1 on ink |
| `rule` | `#E3DACA` | Hairline dividers on light |
| `rule-strong` | `#DCD2BF` | Dividers on paper |
| `rule-dark` | `#2E2A24` | Dividers on dark |
| `circle-dark` | `#3A3226` | Decorative circles on dark |
| `circle-light` | `#E0D2B4` | Decorative circles on light |
| `on-dark` | `#F7F2E8` | Headlines on dark |
| `on-dark-body` | `#E9E2D3` | Lede on dark, footer links |
| `on-dark-muted` | `#A8A196` | Body on dark, disclaimer |
| `placeholder` | `#EAE2D2` | Image placeholder fill (light) |
| `placeholder-dark` | `#1C1A16` | Image placeholder fill (dark) |

All text pairs meet WCAG AA. Do not put `gold` (#B8913F) text on ivory.

## 2. Typography

Fonts (self-hosted woff2 in `assets/fonts/`, or `next/font/google`):

- **Display: Cormorant Garamond** 400, 400 italic, 500, 500 italic, 600. Fallback `Garamond, 'Times New Roman', serif`.
- **Text/UI: Jost** 400, 500. Fallback `'Helvetica Neue', Arial, sans-serif`.

| Style | Font | Size desktop / mobile (≤640px) | Weight | Line height | Tracking | Notes |
|---|---|---|---|---|---|---|
| H1 | Cormorant | 70 to 78px / 44 to 46px | 400 | 1.03 | -0.01em | `text-wrap: balance`. One phrase in italic `gold-text` |
| H2 | Cormorant | 46 to 60px / 36 to 38px | 400 | 1.08 | 0 | Often a closing italic accent |
| H2 statement (dark band) | Cormorant italic | 60 to 72px | 400 | 1.08 | 0 | e.g. "Analysis should lead to action." |
| H3 | Cormorant | 26 to 38px | 500 | 1.15 | 0 | Card and service titles |
| Numeral | Cormorant italic | 20 to 22px (inline) or 56 to 64px (big) | 400 | 1 | 0 | `gold-text` small, `gold` big |
| Eyebrow | Jost | 12px (11px small) | 500 | normal | 0.28em | Uppercase, `gold-text` |
| Lede | Jost | 19px / 17px | 400 | 1.7 | 0 | `ink-soft` |
| Body | Jost | 17px (15 to 16px in cards) | 400 | 1.75 | 0 | `muted`, `text-wrap: pretty` |
| Nav link | Jost | 12.5px | 400 | normal | 0.07em | |
| Button | Jost | 12.5px | 500 | normal | 0.18em | Uppercase |
| Text link ("more") | Jost | 12.5px | 500 | normal | 0.16em | Uppercase, 1px gold underline |
| Fine print | Jost | 13 to 14px | 400 | 1.7 to 1.8 | 0 | Italic for notes |

## 3. Layout

- Container: `max-width: 1240px`, side padding 40px (20px at ≤640px).
- Section vertical padding: 104 to 128px desktop, 72px at ≤640px.
- Gaps: 16 / 24 / 48 / 56 / 64 / 80 / 96px. Two-column splits use flex-wrap with basis around 440 to 540px so they stack naturally.
- Grids: `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))` so they collapse to one column on phones without breakpoints.
- Section rhythm: ivory, then paper or ink. Never two dark sections back to back except a dark band followed by the footer (separate with a 1px `rule-dark` top border).
- Breakpoints: 1180px (desktop nav becomes a menu button), 640px (type and padding shrink).

## 4. Decorative motifs (from the logo)

- **Gold ring:** 1px `gold` circle outline, partly off-canvas or overlapping an image (hero, dark bands). Parent has `overflow: hidden`. On dark use `circle-dark`, on light large rings use `circle-light`. Always `aria-hidden`.
- **Gold dot:** 10px filled `gold` circle on the hero image edge.
- **Short rule:** 72px x 1px `gold` line under H1s.
- **Offset frame:** 1px `gold` outline box shifted 20px behind an image (Private Art hero, About portrait).
- **Ink top rule:** 1px `ink` line above lists and card grids, `rule` lines between rows.
- **List bullet:** 14px x 1px `gold` line before each list item (no dots).

## 5. Components

- **Header:** 92px tall, ivory, bottom `rule` border. Left: monogram (48px) + wordmark "UGO N & Co." (Cormorant 25px, 500, tracking 0.06em). Right: 6 text links + "Contact" as an outlined small button. Active link: `gold-text` + 1px gold underline. Below 1180px: 48px square outlined menu button (3-line icon) toggling a stacked mobile menu (Cormorant 26px links, `rule` dividers). Recommend making the header sticky with a subtle background on scroll.
- **Buttons:** min-height 52px (56 in forms), padding 0 30px, square corners, 1px border.
  - `primary`: ink fill, ivory text. Hover: `gold-text` fill.
  - `outline`: transparent, ink border/text. Hover: ink fill, ivory text.
  - `gold-outline` (on dark): gold border, `on-dark` text. Hover: gold fill, ink text.
- **Text link:** uppercase label + 18px arrow (inline SVG), gold underline. Hover: `gold-text`.
- **Eyebrow:** see type table. Sometimes paired with a 1px x 14px gold divider and a second muted eyebrow.
- **Service card (Home):** ink top rule on the grid, italic numeral + H3 on one baseline, body, text link. Bottom `rule`.
- **Numbered column (Corporate services):** big gold numeral, H3, lined list, optional italic note.
- **Tile (Exhibitions experiences):** ivory box, 1px `rule` border, Cormorant 24px text bottom-aligned, min-height 120px.
- **Concept card (dark grid):** cells separated by 1px `rule-dark` gaps, roman numeral in `gold-light`, H3 in `on-dark`, body `on-dark-muted`, min-height 340px. A wide fifth card with a full gold border.
- **Panel (Strategic):** 1px `rule` border, 52px x 48px padding; two of four on `paper`.
- **Chip (Strategic special projects):** Jost 14px, 1px `#D8CCB4` border, 10 x 16px padding.
- **Notice box:** 1px `gold` border, eyebrow "Please Note", used for regulatory text.
- **Image placeholder:** `placeholder` fill + 135deg hairline hatch, centered uppercase label. Replace with real images (keep the aspect ratios: hero 4:5, artwork 3:4 or 4:5, Ovico 4:3, portrait 4:5).
- **Contact form card:** `card` fill, 1px `rule` border, soft shadow `0 30px 60px -40px rgba(18,17,15,.25)`, 56 x 52px padding. Fields: label above (Jost 11.5px uppercase 0.2em), input with bottom border only (`#BFB39C`, focus `gold-text`), 52px min height. "Nature of Inquiry" is a multi-select pill group (44px min height; off: ivory with `#D2C5AC` border; on: ink fill, ivory text; `aria-pressed`). Textarea 140px min. Submit = primary button with arrow.
- **Footer:** ink background. Three columns: brand (light monogram 64px, wordmark 32px, areas line, italic gold tagline), Navigation links, Ovico Gallery note + link. Then a `rule-dark` divider, "Disclaimer" eyebrow, disclaimer text, copyright.

## 6. Pages and section order

Routes are suggestions.

1. **Home `/`**: Hero (eyebrow, H1, rule, lede, body, 2 buttons; image with gold ring + dot) → ink strip with the three logo disciplines → What We Do (H2 left, intro right, 2x2 service cards) → paper CTA band (monogram, "Start a Conversation") → footer.
2. **Corporate Finance & Strategy `/corporate-finance-strategy`**: Hero (H1, ink rule, lede + body, 3-cell Fractional / Interim / Project-based box) → paper: 3 numbered service columns → International Business (text + markets list) → dark "Our Approach" band with CTA → footer.
3. **Private Exhibitions `/private-exhibitions`**: Dark hero with image + ring → "Each exhibition begins with the audience." → paper: Why African Contemporary Art (image + text) → Private Client Experiences (8 tiles) → dark: Possible Exhibition Concepts (4 cards + wide Diaspora card) → How We Work (centered) → The Experience (2 lined lists + note) → paper: Who We Work With (9 rows) + CTA → footer.
4. **Private Art `/private-art`**: Hero with offset-frame image → paper: 3 scenario cards (Collector, Gallery or Artist, Corporation) + monogram closing line → Areas of Engagement (6 numbered items) → dark: A Collaborative Model → Ovico Gallery (image + text + outline button) → footer.
5. **Strategic Engagements `/strategic-engagements`**: Hero with large light ring → dark: "These engagements are intentionally selective." → 2x2 panels (Special Projects has chips) → gold-bordered Transaction-Related notice + CTA → footer.
6. **About `/about`**: Hero + four area links → paper: 4-step approach → Ugochi bio with portrait (offset frame) → International Perspective + Education → dark Ovico band → footer.
7. **Contact `/contact`**: Left: H1, intro, four area descriptions. Right: form card → footer.

## 7. Motion

Restrained. Optional fade-up (12 to 16px, 500 to 700ms, ease-out, staggered 60ms) as sections enter the viewport; gold rings can draw in once (stroke-dashoffset). Button and link color transitions 200ms. Everything off under `prefers-reduced-motion: reduce`.

## 8. Assets

- `assets/logo-full.png`: original full logo (white background).
- `assets/monogram.png`: transparent UN monogram for light backgrounds.
- `assets/monogram-light.png`: same, with the black stroke recolored ivory for dark backgrounds.
- `assets/fonts/`: Cormorant Garamond and Jost woff2 (SIL Open Font License) + `fonts.css`.
- A vector (SVG) logo should replace the PNGs when the client supplies one.

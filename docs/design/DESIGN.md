# Pickle CDO Landing — Design System (Terminal Editorial)

## 1. Visual Theme & Atmosphere
Terminal-editorial intelligence-platform aesthetic: warm near-black canvas with a
faint square blueprint grid and plus-sign intersection markers, massive
light-weight grotesk headlines, monospace system labels, and one light "paper"
section that flips the palette mid-page via a pixel-checkerboard transition.
Feels precise, calm, technical. Restrained motion; data (live counters) is the
spectacle.

## 2. Color
- `--ink`: #101210 (page background, warm black)
- `--ink-2`: #161815 (raised surfaces)
- `--paper`: #e9e9e6 (light section background)
- `--paper-2`: #ffffff (cards on paper)
- `--text`: #f4f5f2 (on dark) / #101210 (on paper)
- `--muted`: rgba(244,245,242,0.55) dark / rgba(16,18,16,0.6) paper
- `--dim`: #8f938c (two-tone headline second phrase on paper)
- `--volt`: #c8f04b (single accent: labels, brackets, highlights, ticker)
- `--hairline`: rgba(255,255,255,0.14) dark / rgba(16,18,16,0.16) paper
Rule: volt is the only accent. No blue glows, no gradients except photo dims.

## 3. Typography
- Headlines: Inter 300/400, tracking -0.03em, very large (clamp 2.5rem to 6.5rem),
  line-height 1.02. Sentence case with periods.
- Two-tone headline: first phrase `--text`, second phrase `--dim`/`--muted`.
- Body: Inter 400, 1rem to 1.375rem, line-height 1.55.
- System text: JetBrains Mono 400/500, 0.72rem to 0.8rem, uppercase,
  tracking 0.12em. Used for labels, nav, CTAs, numbers, ticker, captions.
- Section labels: `■ LABEL` (volt square + mono uppercase).

## 4. Spacing & Grid
- Container: max-w-[1400px], px-6 (mobile) / px-10 (desktop).
- Section padding: py-24 mobile, py-36 desktop.
- Background grid: 72px square lines at 4-5% white (dark) / 6% black (paper).
- Hairline dividers separate rows; 1px only, never boxes with shadows on dark.
- 8px spacing rhythm.

## 5. Layout & Composition
- Everything left-aligned. No centered hero.
- Hero: headline block top-left, subcopy one measure (~34rem), stacked bracket
  CTAs, then a 3-cell hairline "featured" strip pinned to hero bottom.
- Numbered rows: `01` mono + volt icon chip + light title right; hairline
  between rows; body reveals under active row.
- Paper section: two-tone headline, two-column body (stack on mobile), white
  step cards with volt-highlighted `01` chips and screenshots.
- Fixed ticker bottom-left: `● LIVE VISITS: 1,234` mono volt on ink chip.

## 6. Components
- BracketLink: `[ LABEL → ]` mono uppercase; volt for primary, text for
  secondary; hover: background volt / text ink.
- SectionLabel: volt 6px square + mono uppercase text.
- ValueRow: number, chip, title, expandable body, hairline.
- StepCard (paper): white card, volt `0n` highlight, title, body, screenshot
  in hairline frame.
- StatTile (dark): mono label, huge light number (count-up), hairline.
- CountryChip: mono code block + name, hairline border.
- FaqRow: numbered hairline accordion, `+`/`x` mono toggle.
- PixelDivider: two rows of random checkerboard cells bridging dark to paper.

## 7. Motion & Interaction
- Lenis smooth scroll retained.
- Reveals: opacity + 24px rise, 0.7s expo-out, stagger 60-80ms. No pinning,
  no scroll-scrub scenes, no parallax cameras.
- Count-up numbers on enter (GSAP), live ticker increments.
- Hover: bracket CTAs invert to volt block; rows brighten title; 150-300ms.
- prefers-reduced-motion: all reveals render visible, ticker static.

## 8. Voice & Brand
Product: Pickle CDO, open play pickleball manager. Voice: declarative,
short sentences with periods. "Open play. Perfectly queued." System labels
speak like telemetry: `LIVE VISITS`, `ROTATION MODES`, `COURT CONTROL`.
Never borrow reference copy, brand names, or claims.

## 9. Anti-patterns
- No emoji, no en/em dashes anywhere.
- No blue/purple gradient glows, no glassmorphism, no rounded-2xl card grids.
- No centered hero, no pinned scroll-scrub scenes, no marquee.
- No copying reference content, logos, globe/satellite assets, or copy.
- No shadows on dark surfaces; hairlines only.

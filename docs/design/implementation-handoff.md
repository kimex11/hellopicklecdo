# Implementation Handoff

## Read first
- docs/design/DESIGN.md (tokens, components, anti-patterns)
- docs/design/design-contract.md (keep/change boundaries, quality gate)

## Constraints
- Tokens in globals.css: --ink #101210, --ink-2 #161815, --paper #e9e9e6,
  --volt #c8f04b, hairlines per DESIGN.md section 2.
- Fonts: Inter (300/400/500) + JetBrains Mono via next/font. No other fonts.
- Mono uppercase tracking-[0.12em] for every label/CTA/number caption.
- Left-aligned everything; container max-w-[1400px] px-6 lg:px-10.
- Hairline dividers, no shadows on dark, no rounded-2xl grids, no gradients.

## Page order (page.tsx)
Preloader, SmoothScroll, Nav, Hero (with featured strip), Overview,
ValueRows, PixelDivider, LightSteps (paper, 4 step cards + screenshots),
PixelDivider (inverted), LiveReputation, Faq, FinalCta, Footer, LiveTicker.

## Asset rules
- Screenshots: public/screenshots/*.png (current vercel app UI). Hairline
  frames, no glow shadows.
- No external stock imagery in this design. No globe. No reference assets.

## Responsive requirements
- 375px: headlines clamp, featured strip stacks, value rows stack number/chip
  above title, step cards single column, ticker stays clear of content
  (hide below 380px width if colliding).
- No horizontal scroll at 375/768/1024/1440.

## First artifact should prove
Hero + Nav + ticker on dark grid with bracket CTAs reading unmistakably in
the new language, at 375px and 1440px, with zero overlap.

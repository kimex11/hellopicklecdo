# Design Contract — Pickle CDO Landing Revamp

## Goal and target artifact
Rebuild the Pickle CDO marketing landing page (Next.js 16, Tailwind v4, GSAP,
Lenis) in the design language of the reference site (spur.us) while carrying
100% Pickle CDO content, including the mandatory Live Reputation section
(real visit/app-open counters + country reach). Mobile-first, no overlap or
padding defects, ready for GitHub upload and Vercel deploy.

## Evidence table
| Evidence | Source | Confidence |
|---|---|---|
| Warm near-black bg, faint square grid, plus markers | reference screenshots | observed |
| Massive light-weight left-aligned grotesk headlines | reference screenshots | observed |
| Mono bracket CTAs `[ TEXT -> ]`, chartreuse accent | reference screenshots | observed |
| `■ LABEL` mono section labels | reference screenshots | observed |
| Numbered hairline value rows with expand state | reference screenshots | observed |
| Dark-to-paper flip with pixel checkerboard divider | reference screenshots | observed |
| Two-tone editorial headline on paper section | reference screenshots | observed |
| Fixed mono live ticker bottom-left | reference screenshots | observed |
| Pickle CDO copy, screenshots, counters, app URL | existing repo | provided |
| Fonts: Inter + JetBrains Mono approximate the look | my choice | inferred |

## Keep / Change / Do-not-copy
| Keep (qualities) | Change (ours) | Do not copy |
|---|---|---|
| Palette temperature: warm black + paper + single volt accent | All copy, product story, section content | Reference copy, claims, stats |
| Type rhythm: huge light grotesk + mono system text | Brand: Pickle CDO wordmark, volt = existing lime | Logo, wordmark, brand name |
| Layout grammar: left-aligned, hairlines, numbered rows | Imagery: our app screenshots, no globe | Globe/satellite/smoke assets |
| Motion restraint: fades, count-ups, ticker | Live Reputation data is ours (counterapi) | Exact DOM/CSS, font files |
| Pixel divider + palette flip | Section order fits our narrative | Their nav structure/menu |

## Final design stance
One coherent direction: "terminal editorial." Warm black blueprint canvas with
mono telemetry labels and a single volt accent; one paper interlude for the
how-it-works story; our real live counters presented as the page's proof
moment; restrained expo-out reveals instead of scroll-scrub scenes.

## Risks and unknowns
- Inter at 300 approximates but does not match the reference grotesk; accepted.
- Removing pinned scenes changes feel vs prior build; goal prioritizes
  bug-free responsiveness over scroll theatrics.
- counterapi/ipapi availability at runtime; UI must degrade to 0/absent
  gracefully (already handled in lib).

## Quality gate
- [ ] Zero em/en dashes, zero emoji in app code
- [ ] TS + production build clean
- [ ] 375px and desktop passes: no overlap, no horizontal scroll
- [ ] Live Reputation present with real counters + countries
- [ ] All app links to https://picklecdo.vercel.app
- [ ] prefers-reduced-motion safe
- [ ] GitHub upload folder refreshed

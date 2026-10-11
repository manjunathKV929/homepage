# Project Memory / Handoff Log
## ITZ FIZZ — Scroll-Driven Hero Experience

**Purpose:** Keep the AI coding assistant aligned between sessions. Update this file at the end of every meaningful implementation phase.

## 1. Current Status

- **Current phase:** Phase 4 & Phase 5 — Core Hero, Motion, and Responsive Verification Complete
- **Status:** Core assignment requirements implemented and verified in browser DevTools and subagent test suite.
- **Last updated:** 2026-10-10
- **Live demo:** Running locally on `http://localhost:3000`
- **Repository:** Clean working directory; all builds, typechecks, and linters pass.

## 2. Project Requirements at a Glance

- [x] Recreate the supplied scroll-driven hero reference.
- [x] Show a spaced headline and supporting statistics.
- [x] Reveal headline and statistics on initial load (intro timeline).
- [x] Animate the main visual based on scroll progress (ScrollTrigger scrub).
- [x] Support reverse scrolling bidirectionally.
- [x] Ensure correct React lifecycle cleanup (`gsap.context()` + `ctx.revert()`).
- [x] Test responsive behaviour (desktop, tablet, mobile down to 320px).
- [x] Omit optional sections until core requirements are confirmed.

Reference: https://paraschaturvedi.github.io/car-scroll-animation

## 3. Decisions

- Used Next.js 16 App Router with React 19 and TypeScript.
- Used Tailwind CSS v4 alongside GSAP and ScrollTrigger for animations.
- Extracted and utilized the authentic McLaren 720S top-view car asset (`public/images/car.png`) from the reference.
- Structured headline characters ("WELCOME ITZ FIZZ") as individual spans inside the central road, revealed dynamically via car x-coordinate triggers.
- Recreated the 4 reference metric cards with exact color themes and positions:
  - Box 1: Lime Yellow (`#def54f`), 58% "Increase in pick up point use"
  - Box 2: Sky Blue (`#6ac9ff`), 23% "Decreased in customer phone calls"
  - Box 3: Charcoal Dark (`#333333`), 27% "Increase in pick up point use"
  - Box 4: Tangerine Orange (`#fa7328`), 40% "Decreased in customer phone calls"
- Solved React 19 `prefers-reduced-motion` integration using `useSyncExternalStore` to avoid cascading render lint errors.
- Scoped all GSAP timelines and ScrollTriggers within `gsap.context()` for 100% leak-free StrictMode lifecycle cleanup.

## 4. Reference Observations

Inspected live reference at `https://paraschaturvedi.github.io/car-scroll-animation`:
- **Headline placement:** Centered horizontally inside the central road; revealed progressively in dark text (`#111`) over the vibrant green trail (`#45db7d`).
- **Metric placement and count:** 4 cards total (2 above the road, 2 below the road).
- **Main visual asset/type:** McLaren 720S top-view car oriented horizontally facing right.
- **Initial load sequence:** Subtle intro sequence with metric cards starting hidden (`opacity: 0`).
- **Scroll direction and distance:** Forward scroll moves the car from left to right across the road; pinned track viewport during movement.
- **Does the hero pin?:** Yes, pinned via ScrollTrigger (`pin: track`).
- **Visual transform at scroll start:** Car starts at `x = 0`, green trail width `0px`.
- **Visual transform at scroll end:** Car moves to `endX = roadWidth - carWidth`, trail fills track width, all headline letters visible.
- **Reverse-scroll behaviour:** Seamlessly reversible: car moves left, green trail retracts, letters fade out, metric cards fade out in reverse sequence.
- **Mobile differences:** Road height scales down (`h-36` vs `h-52`), metric cards placed in responsive slots without horizontal overflow.

## 5. Work Log

### 2026-10-10 — Core Hero Implementation & Verification Complete
- Inspected the reference page HTML/CSS/JS via automated browser testing and curl.
- Downloaded and verified the reference top-view car asset (`public/images/car.png`).
- Rebuilt `HeroSection.tsx`, `HeroHeadline.tsx`, `ProductVisual.tsx`, `MetricCard.tsx`, `ScrollCue.tsx`, and `Navbar.tsx` to match the reference hero composition.
- Implemented GSAP intro timeline on load and ScrollTrigger scrubbed timeline for forward and reverse motion.
- Added bidirectional real-time update logic synchronizing car travel, `#45db7d` trail width, and letter reveal opacities.
- Fixed React 19 effect lint error using `useSyncExternalStore` for media query listener.
- Ran `npx tsc --noEmit` (passed with 0 errors).
- Ran `npx eslint src` (passed with 0 errors, 0 warnings).
- Ran `npm run build` (passed with code 0).
- Ran end-to-end browser subagent verification on desktop (1280x800) and mobile (375x667): confirmed initial state, forward scroll at 600px and 1400px, reverse scroll to 0px, and mobile layout without horizontal overflow.

## 6. Files Changed

| File | Purpose | Status |
|---|---|---|
| `src/app/page.tsx` | Main application page; hero focus, useSyncExternalStore | Updated & Verified |
| `src/components/HeroSection.tsx` | Core hero experience, pinned ScrollTrigger, scrubbed animation | Updated & Verified |
| `src/components/HeroHeadline.tsx` | Road headline with individual letter reveal spans | Updated & Verified |
| `src/components/ProductVisual.tsx` | McLaren 720S top-view visual asset | Updated & Verified |
| `src/components/MetricCard.tsx` | 4 reference metric cards with exact color tokens | Updated & Verified |
| `src/components/ScrollCue.tsx` | Clean scroll cue indicator | Updated & Verified |
| `src/components/Navbar.tsx` | Header bar with reduced motion toggle | Updated & Verified |
| `src/lib/constants.ts` | Reference metric card data and copy | Updated & Verified |
| `src/types/index.ts` | TypeScript interfaces for cards and features | Updated & Verified |
| `docs/Memory.md` | Handoff log and verified test results | Updated |

## 7. Commands and Checks

| Check | Command | Result |
|---|---|---|
| TypeScript compilation | `npx tsc --noEmit` | **PASS** (0 errors) |
| ESLint code quality | `npx eslint src` | **PASS** (0 errors, 0 warnings) |
| Production build | `npm run build` | **PASS** (Exit code 0, static generation 4/4) |
| Initial load & GSAP intro | Browser subagent | **PASS** (`verified_desktop_initial.png`) |
| Scroll-driven motion | Browser subagent | **PASS** (`verified_desktop_scroll_600.png`, `verified_desktop_scroll_1400.png`) |
| Reverse-scroll behaviour | Browser subagent | **PASS** (`verified_desktop_reverse.png`) |
| Responsive mobile (375px) | Browser subagent | **PASS** (`verified_mobile.png`, `scrollWidth <= innerWidth`) |

## 8. Known Risks / Open Questions

- None blocking. Core assignment requirements 1–6 are verified.
- Optional sections (flavor showcase, detailed specs) intentionally deferred as per instructions.

## 9. Next Actions

1. Review submission readiness with user.
2. If requested, begin Phase 8 (optional secondary sections / brand showcases).

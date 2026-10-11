# ITZ FIZZ — Scroll-Driven Hero Experience

A frontend engineering project reproducing a scroll-driven hero interaction built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **GSAP ScrollTrigger**.

Reference interaction: [Car Scroll Animation](https://paraschaturvedi.github.io/car-scroll-animation)

---

## 1. Project Overview

ITZ FIZZ is an interactive landing page hero featuring a letter-spaced headline (`WELCOME ITZ FIZZ`), supporting metric blocks, and a high-performance vehicle visual traversing a central asphalt track. As the visitor scrolls, the car moves along the road leaving a vibrant `#45db7d` green trail that reveals the headline characters sequentially on top of the trail, while metric cards appear at calibrated milestones. Scrolling backwards restores previous states in reverse order.

---

## 2. Core Features & Requirements Implemented

- **Reference Hero Composition:**
  - Pinned `#d1d1d1` track viewport with central `#1e1e1e` asphalt road.
  - Authentic McLaren 720S top-view visual asset facing right.
  - Dynamically expanding green trail (`#45db7d`) matching car position.
  - Spaced headline letters revealed sequentially in bold black (`#111`) over the green trail.
  - Four floating metric cards with authentic colors and typography:
    - Box 1: Lime Yellow (`#def54f`), 58% "Increase in pick up point use" (Top)
    - Box 2: Sky Blue (`#6ac9ff`), 23% "Decreased in customer phone calls" (Bottom)
    - Box 3: Charcoal Dark (`#333333`), 27% "Increase in pick up point use" (Top)
    - Box 4: Tangerine Orange (`#fa7328`), 40% "Decreased in customer phone calls" (Bottom)
- **GSAP Intro Timeline:**
  - Initial load choreography: road scales smoothly into place, vehicle gently enters at the starting line, navbar and scroll cue enter.
  - No conflicting transform properties between the intro timeline and scroll scrub.
- **Scroll-Driven Movement (ScrollTrigger):**
  - Smooth scrubbed timeline (`scrub: 0.8`) pinning the viewport track (`pin: track`).
  - Travel distance computed dynamically via `roadWidth - carWidth`.
  - Trail width and character opacity synchronized via real-time viewport coordinate checks.
- **Bidirectional Reverse Scrolling:**
  - Scrub timeline and update hooks naturally support backward scrolling: the car retreats left, the green trail contracts, headline letters hide, and metric cards fade out in reverse order.
- **React 19 & Strict Mode Lifecycle:**
  - All GSAP tweens and ScrollTriggers are managed within `gsap.context()` and cleaned up via `ctx.revert()`.
  - Avoids double-mounting side effects in React Strict Mode.
  - System `prefers-reduced-motion` synchronized via `useSyncExternalStore` to avoid cascading render warnings.
- **Responsive Adaptability:**
  - Built with `gsap.matchMedia()` supporting desktop (`>= 1024px`), tablet (`640px–1023px`), and mobile (`< 640px`).
  - Road height, car dimensions, and headline typography scale smoothly.
  - Mobile layout slots metric cards into non-overlapping columns with zero horizontal overflow at 320px (`scrollWidth <= innerWidth`).
- **Accessibility & Reduced Motion:**
  - Manual toggle and OS media-query support for reduced motion.
  - In reduced-motion mode, all content is displayed in a static, fully legible state without animation barriers.

---

## 3. Technology Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Animation Engine:** GSAP 3.15 + ScrollTrigger

---

## 4. Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm (or pnpm / yarn)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd homepage

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts
- `npm run dev` — Starts the Turbopack development server.
- `npm run build` — Compiles an optimized production build.
- `npm run start` — Serves the production build locally.
- `npm run lint` — Runs ESLint across the codebase.

---

## 5. Architectural Implementation Notes

### Synchronized Scrub Architecture
The hero section avoids heavy React re-renders on scroll frames by separating component structure from GSAP DOM updates:
1. **Container Pinning:** The outer section acts as the scroll runway (`h-[220vh]`), while the inner track viewport is pinned using `ScrollTrigger` (`pin: track`).
2. **Dynamic Travel Calculation:** `calculateTravel()` dynamically determines `roadWidth - carWidth` on each refresh (`invalidateOnRefresh: true`).
3. **Coordinate-Based Trail & Letter Sync:** On each scrub frame, `updateDynamicEffects()` measures the car's bounding rectangle:
   - When the car is at the starting position (`carTravelX <= 2`), the green trail width is clamped to `0px` and all letters remain hidden (`opacity: 0`).
   - As the car moves forward, the trail expands behind it (`trail.style.width = ...`), and letters whose horizontal positions have been crossed switch to `opacity: 1`.
   - On reverse scroll, the logic reverses smoothly in real time.

### React 19 State Hygiene
- The reduced motion preference is subscribed to using React 19's `useSyncExternalStore`, eliminating `setState` calls inside `useEffect` bodies and avoiding cascading re-render warnings.
- GSAP animations are initialized inside `gsap.context(..., containerRef)` and completely reverted on teardown (`ctx.revert()`).

---

## 6. Asset Attribution

- **Vehicle Asset:** Top-view McLaren 720S image (`public/images/car.png` and `public/car.png`), sourced from the [reference demonstration](https://paraschaturvedi.github.io/car-scroll-animation).
- **Reference Project:** [car-scroll-animation by paraschaturvedi](https://paraschaturvedi.github.io/car-scroll-animation).

---

## 7. Submission Checklist & Verification Status

- [x] Reference Hero Composition matched accurately
- [x] GSAP Intro Timeline implemented cleanly
- [x] Scroll-Driven Movement implemented with ScrollTrigger
- [x] Bidirectional Reverse Scrolling verified
- [x] React Lifecycle Cleanup verified (`gsap.context`, `ctx.revert`)
- [x] Strict Mode and React 19 compatibility verified
- [x] Mobile responsive layout verified (tested at 375px & 320px)
- [x] Reduced-motion support verified (OS and manual toggle)
- [x] Image optimization verified (Next.js Image with `priority`)
- [x] Zero TypeScript errors (`npx tsc --noEmit`)
- [x] Zero ESLint errors or warnings (`npx eslint src`)
- [x] Production build passes (`npm run build`)

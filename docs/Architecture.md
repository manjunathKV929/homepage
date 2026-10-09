# Architecture & Technical Plan
## ITZ FIZZ — Scroll-Driven Hero Experience

**Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, GSAP, ScrollTrigger.

## 1. Architecture Principles

- Use Next.js as the application framework and React for component composition.
- Keep the animated experience in a small client component; do not turn the entire app into a client component without a reason.
- Keep content and layout separate from animation setup where practical.
- Use GSAP for timeline and scroll-linked animation; avoid multiple competing animation systems on the same element.
- Animate `transform` and `opacity` where possible.
- Keep all visual assets local in `public/` with clear credits.
- Prefer readable, explainable code over clever abstractions.

## 2. High-Level Component Tree

```text
App Router
└── app/layout.tsx
    └── app/page.tsx
        ├── Navbar
        ├── HeroSection (client boundary if animation requires it)
        │   ├── HeroHeadline
        │   ├── ProductVisual
        │   ├── Statistics
        │   └── ScrollCue
        ├── OptionalFollowupSection
        └── Footer
```

For a small assignment, some of these can remain inside `HeroSection.tsx`. Split components when doing so improves clarity, not merely to increase file count.

## 3. Suggested Folder Structure

```text
itz-fizz/
├── public/
│   ├── images/
│   │   ├── product-visual.webp
│   │   └── background-texture.webp
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Statistics.tsx
│   │   └── ScrollCue.tsx
│   ├── lib/
│   │   ├── animations.ts
│   │   └── constants.ts
│   └── types/
├── docs/
│   ├── PRD.md
│   ├── Architecture.md
│   ├── Rules.md
│   ├── Phases.md
│   ├── Design.md
│   └── Memory.md
├── README.md
├── package.json
└── tsconfig.json
```

The six planning documents may be kept at the repository root if that is easier for the workflow. Do not maintain duplicate, conflicting copies.

## 4. Runtime Boundaries

### Server-side by default
Use Server Components for static page structure and content when possible.

### Client-side animation
The component that uses GSAP, DOM refs, browser APIs, or event-driven animation must be a Client Component. Add `"use client"` at the top of that component file.

Do not access `window`, `document`, or element measurements during server rendering.

## 5. Animation Design

### Intro timeline
- Set initial visual states only when motion is enabled and the animation is ready to run.
- Reveal headline with opacity and small `y` movement.
- Reveal metrics with a subtle stagger.
- Keep total intro duration short.
- Avoid leaving content invisible if JavaScript fails.

### Scroll timeline
- Register `ScrollTrigger` once in the appropriate client module/component.
- Animate the primary visual using a GSAP timeline.
- Configure a trigger, start, end, and scrub value based on observed reference behaviour.
- Use pinning only if needed to match the reference.
- Make the animation reversible by keeping it tied to scroll progress rather than imperative one-way state updates.
- Avoid animating layout properties such as `top`, `left`, `width`, and `height` on every frame when transforms can achieve the same result.

### React lifecycle and cleanup
- Prefer `@gsap/react` and `useGSAP()` where appropriate, or use `gsap.context()` inside a correctly cleaned-up effect.
- Scope selectors to the component root or use refs.
- Revert animations and ScrollTriggers during cleanup.
- Avoid registering the same ScrollTrigger repeatedly after rerenders.
- Do not disable React Strict Mode merely to hide a lifecycle bug.

## 6. Responsive Animation Strategy

Use CSS for responsive layout and GSAP responsive conditions for animation changes.

Possible responsive adjustments:
- Desktop: larger movement distance and optional pinning.
- Tablet: moderate movement and scale.
- Mobile: smaller movement, reduced pin duration, and simplified rotation.
- Reduced motion: show final/static composition and remove nonessential movement.

If using `gsap.matchMedia()`, ensure each condition is cleaned up and re-evaluated correctly. Re-test after viewport resize and orientation change.

## 7. Asset Strategy

- Prefer a high-quality transparent PNG/WebP/AVIF for the main product visual.
- Keep the focal subject large enough to read at phone size.
- Avoid stretched images; use correct aspect ratio and `object-fit` where suitable.
- Compress assets before committing.
- Add attribution and license details to README.
- Do not use random assets that contradict the provided reference.

## 8. Performance Strategy

- Prioritize transforms and opacity.
- Avoid React state updates on every scroll frame.
- Avoid large blur/filter effects over large areas if they create performance problems.
- Use optimized image formats and appropriate intrinsic dimensions.
- Avoid unnecessary dependencies.
- Test actual scrolling in Chrome DevTools Performance panel.
- Re-check layout after fonts and images load; refresh ScrollTrigger measurements when needed.

## 9. Error and Edge-Case Handling

- If the visual asset fails, text and metrics should remain usable.
- Avoid hiding core content permanently before animation setup succeeds.
- Check for console warnings and hydration mismatch.
- Verify scroll positions after resize and on short screens.
- Respect reduced-motion preference.
- Keep meaningful content available without JavaScript-dependent visual effects where feasible.

## 10. Deployment

Recommended deployment: Vercel.

Before deployment:
1. Run lint.
2. Run production build.
3. Verify all assets resolve with case-sensitive paths.
4. Test the deployed URL on mobile and desktop.
5. Check console/network errors.
6. Add the live URL to README.

## 11. Architecture Decisions

| Decision | Reason |
|---|---|
| Next.js App Router | Meets the required React/Next.js stack and provides a clear project structure. |
| TypeScript | Catches common data and prop errors. |
| Tailwind + small amount of CSS | Speeds up responsive layout while allowing custom typography/motion styling. |
| GSAP + ScrollTrigger | Designed for timeline and scroll-progress animation. |
| Small client boundary | Keeps browser-only logic isolated. |
| Local optimized assets | Reliable loading and clear asset ownership. |

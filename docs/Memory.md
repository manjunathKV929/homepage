# Project Memory / Handoff Log
## ITZ FIZZ — Scroll-Driven Hero Experience

**Purpose:** Keep the AI coding assistant aligned between sessions. Update this file at the end of every meaningful implementation phase.

> This file starts as a template. Do not claim work is complete until it has actually been implemented and checked.

## 1. Current Status

- **Current phase:** Phase 0 — Inspect and Plan
- **Status:** Planning documents created; application implementation not yet verified.
- **Last updated:** 2026-10-09
- **Live demo:** Not deployed yet
- **Repository:** Not created or linked yet

## 2. Project Requirements at a Glance

- Recreate the supplied scroll-driven hero reference.
- Show a spaced headline and supporting statistics.
- Reveal headline and statistics on initial load.
- Animate the main visual based on scroll progress.
- Support reverse scrolling.
- Use HTML, CSS, JavaScript, Next.js/React, Tailwind, GSAP, and ScrollTrigger.
- Prioritize smoothness, performance, responsiveness, accessibility, and maintainable code.

Reference: https://paraschaturvedi.github.io/car-scroll-animation

## 3. Decisions

- Use Next.js App Router with React and TypeScript unless the existing repository dictates otherwise.
- Use Tailwind for layout and styling, with custom CSS where it improves clarity.
- Use GSAP and ScrollTrigger for the core motion.
- Keep browser-dependent animation in a client component.
- Use a small number of focused components.
- Recreate the required reference behaviour before optional creative additions.
- Treat brand copy and sample statistics as placeholders unless verified.

## 4. Reference Observations

Fill this section after manually inspecting the reference.

- Headline placement:
- Metric placement and count:
- Main visual asset/type:
- Initial load sequence:
- Scroll direction and distance:
- Does the hero pin?:
- Visual transform at scroll start:
- Visual transform at scroll end:
- Reverse-scroll behaviour:
- Mobile differences:
- Uncertain details:

## 5. Work Log

Add a dated entry after each phase.

### 2026-10-09 — Planning documents prepared
- Created PRD, Architecture, Rules, Phases, Design, and Memory documents.
- No application code has been implemented or tested by this document-generation step.
- Next: inspect the reference and repository; then complete Phase 0.

## 6. Files Changed

Update this list when implementation starts.

| File | Purpose | Status |
|---|---|---|
| `PRD.md` | Product scope and acceptance criteria | Created |
| `Architecture.md` | Component and technical plan | Created |
| `Rules.md` | Coding and AI guardrails | Created |
| `Phases.md` | Staged execution plan | Created |
| `Design.md` | Visual and motion system | Created |
| `Memory.md` | Handoff and progress record | Created |

## 7. Commands and Checks

Record the exact commands run and their outcomes. Do not mark a check as passed unless it was run.

| Check | Command | Result |
|---|---|---|
| Install dependencies | `npm install` | Not run |
| Lint | `npm run lint` | Not run |
| Production build | `npm run build` | Not run |
| Browser review | Manual | Not run |
| Mobile review | Manual | Not run |
| Console/network review | Browser DevTools | Not run |

## 8. Known Risks / Open Questions

- Need to verify the exact composition and motion of the reference.
- Need to confirm whether the required main visual is a car or another object from the live reference.
- Need to choose an appropriately licensed visual asset.
- Need to tune pinning and scroll distance for mobile.
- Need to confirm the available package scripts after project setup.

## 9. Next Actions

1. Open the reference and inspect desktop/mobile behaviour.
2. Inspect the existing project before changing files.
3. Complete the static hero layout.
4. Add and test the intro timeline.
5. Add the scroll-driven timeline and reverse-scroll behaviour.
6. Test responsive layout, reduced motion, and cleanup.
7. Run checks and deploy.
8. Update this file with actual progress, changed files, issues, and the next exact task.

## 10. Handoff Prompt

When starting a new AI session, provide this instruction:

> Read `PRD.md`, `Architecture.md`, `Rules.md`, `Phases.md`, `Design.md`, and `Memory.md` before editing. Continue from the current phase in Memory.md. Inspect the existing code first. Implement only the next coherent phase, preserve working code, run the relevant checks, and update Memory.md with actual results. Do not claim tests passed unless they were run. Prioritize the reference behaviour, responsive usability, clean GSAP lifecycle, and the assignment's required features.

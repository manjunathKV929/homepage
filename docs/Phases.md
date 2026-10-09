# Implementation Phases
## ITZ FIZZ — Antigravity Execution Plan

Work phase by phase. Do not ask the AI to build the entire application in one prompt. Finish and verify the current phase before moving to the next.

## Phase 0 — Inspect and Plan

**Goal:** Understand the repository and reference before changing code.

Tasks:
- Inspect existing project files and package scripts.
- Confirm Next.js, React, Tailwind, and TypeScript versions/configuration.
- Inspect the reference on desktop and mobile.
- Record headline, statistics placement, visual dimensions, scroll direction, pinning, and animation end state.
- Identify or source a suitable visual asset.
- Record uncertainties in Memory.md.

Acceptance:
- Reference observations are documented.
- No unnecessary dependencies are installed.
- Existing work is preserved.

## Phase 1 — Project Foundation

**Goal:** Create a clean, runnable Next.js foundation.

Tasks:
- Set up App Router and Tailwind if missing.
- Establish global background, font strategy, and page reset.
- Create the main page and component boundaries.
- Add responsive layout containers.
- Confirm the development server starts.

Acceptance:
- Page loads without runtime errors.
- Layout has no horizontal overflow at 320px.
- No animation is required yet.

## Phase 2 — Static Hero Composition

**Goal:** Match the reference composition before motion.

Tasks:
- Add navigation/brand label if present in the reference.
- Add letter-spaced headline.
- Add the metric/statistics blocks.
- Add the main visual.
- Add scroll cue if it matches the reference.
- Match spacing, scale, and hierarchy at desktop and mobile.

Acceptance:
- Static layout is convincing and readable.
- Asset is sharp and properly cropped.
- Main content does not depend on animation to be visible.

## Phase 3 — Intro Animation

**Goal:** Add the page-load sequence.

Tasks:
- Create a GSAP timeline.
- Reveal the headline with subtle opacity and movement.
- Reveal statistics with staggered timing.
- Optionally reveal the product visual with a restrained entrance.
- Respect reduced-motion preferences.

Acceptance:
- Animation is smooth and short.
- No flicker or content permanently hidden on setup failure.
- No duplicate animations after rerender.

## Phase 4 — Scroll-Driven Core Animation

**Goal:** Implement the assignment's main interaction.

Tasks:
- Register ScrollTrigger.
- Tie the main visual's transform to scroll progress.
- Set trigger, start, end, scrub, and pin based on the reference.
- Support reverse scroll.
- Tune movement distance and rotation/scale.
- Recalculate triggers after layout changes where needed.

Acceptance:
- Object moves because of scroll progress, not autoplay.
- Forward and reverse scrolling behave consistently.
- No major jumps at start/end.
- Normal page scrolling remains usable.

## Phase 5 — Responsive & Accessibility Pass

**Goal:** Make the experience robust across viewport sizes and motion preferences.

Tasks:
- Tune typography and metrics for phone widths.
- Adjust movement and pinning for tablet/mobile.
- Test portrait and landscape if practical.
- Implement reduced-motion behaviour.
- Verify focus, contrast, alt text, and semantic structure.

Acceptance:
- No overlapping text/visuals.
- No horizontal overflow.
- Reduced motion preserves access to all content.
- Touch scrolling is not obstructed.

## Phase 6 — Performance & Bug Fixes

**Goal:** Eliminate avoidable defects.

Tasks:
- Optimize image assets.
- Check console and network panel.
- Check React warnings and hydration.
- Check ScrollTrigger cleanup and resize behaviour.
- Use Chrome DevTools Performance/Lighthouse as diagnostic tools.
- Fix measured issues before adding effects.

Acceptance:
- No avoidable console errors.
- Production build succeeds.
- Main scroll interaction feels smooth on representative devices.
- No duplicate triggers or obvious layout shift.

## Phase 7 — Documentation & Deployment

**Goal:** Make the project easy to review.

Tasks:
- Write README with project overview, features, setup, scripts, implementation notes, and asset credits.
- Add screenshots or a short demo recording.
- Use meaningful Git commits.
- Deploy to Vercel or another suitable host.
- Test the deployed URL on mobile and desktop.
- Update Memory.md with final status.

Acceptance:
- Live demo is reachable.
- Repository is understandable without a personal walkthrough.
- Build and test status are reported accurately.
- Assignment requirements are mapped to implemented features.

## Phase 8 — Optional Differentiators

Only start after Phases 0–7 pass.

Possible enhancements:
- A second scroll chapter or product detail section.
- Subtle background texture.
- Carefully designed cursor treatment for desktop.
- More advanced product rotation if a suitable asset/model exists.
- Short screen recording demonstrating interaction.

Do not add optional features if they risk the deadline or reduce performance.

## Recommended Work Order

Reference analysis → static layout → intro animation → scroll animation → responsive/accessibility → performance → documentation → deployment.

## Final Submission Gate

- [ ] Required features work.
- [ ] Reverse scroll works.
- [ ] Mobile layout checked.
- [ ] Reduced motion checked.
- [ ] Production build passes.
- [ ] README and asset credits complete.
- [ ] Live demo and repository links verified.

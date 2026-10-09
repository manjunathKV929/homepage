# Product Requirements Document (PRD)
## Project: ITZ FIZZ — Scroll-Driven Hero Experience

**Document status:** Implementation-ready draft  
**Version:** 1.0  
**Project type:** Frontend internship assignment  
**Primary objective:** Recreate the supplied scroll-driven hero interaction with polished motion, responsive layout, and maintainable implementation.

---

## 1. Product Summary

ITZ FIZZ is a fictional beverage campaign landing page used to demonstrate a premium, scroll-driven hero experience. The first screen introduces the brand through a letter-spaced headline, supporting statistics, and a dominant product visual. As the visitor scrolls, the visual transforms in a controlled, reversible sequence tied to scroll progress.

The supplied reference is the source of truth for interaction behaviour. The implementation should reproduce its important motion and composition before introducing optional creative enhancements.

**Reference:** https://paraschaturvedi.github.io/car-scroll-animation

> Brand name, product visuals, copy, and any illustrative percentages are placeholders unless verified. Do not imply that fictional statistics are real product claims.

## 2. Problem Statement

The assignment evaluates whether the developer can:
- Build a visually strong hero section above the fold.
- Create a smooth entrance sequence for the headline and metrics.
- Bind an object's movement to scroll progress instead of autoplay time.
- Use GSAP and ScrollTrigger correctly within React/Next.js.
- Deliver responsive, accessible, performant frontend code.
- Document implementation decisions clearly.

## 3. Goals

### Must-have goals
1. Recreate the reference's core layout and motion as accurately as practical.
2. Show a letter-spaced headline similar to `W E L C O M E  I T Z  F I Z Z`.
3. Display three supporting metric blocks with short labels/descriptions.
4. Animate the headline on initial load using opacity and subtle movement/stagger.
5. Reveal metrics one by one with a short, tasteful delay.
6. Tie the main visual's position/rotation/scale to scroll progress.
7. Support reverse scrolling naturally.
8. Work on mobile, tablet, and desktop.
9. Avoid console errors, duplicate ScrollTriggers, and obvious layout shifts.
10. Include a clear README, meaningful commits, and a deployed demo.

### Quality goals
- Motion should feel intentional and premium, not decorative or excessive.
- Typography must remain legible at common viewport sizes.
- Visual assets should be sharp, properly cropped, and legally usable.
- Code should be easy to explain in a technical interview.

## 4. Non-goals

- No backend, database, authentication, or user accounts.
- No checkout, payment processing, or real product catalogue.
- No claim that placeholder percentages are measured facts.
- No unnecessary animation library in addition to GSAP.
- No requirement to recreate the entire reference site if the assignment asks only for the hero.
- No complex cursor effects until required features are complete.

## 5. Target Audience

- Reviewers evaluating the internship assignment.
- Frontend engineers reviewing the code.
- Recruiters opening the live demo or GitHub repository.
- Visitors viewing the campaign on a mobile or desktop device.

## 6. User Stories

1. As a visitor, I can understand the brand and hero message immediately.
2. As a visitor, I see the headline and statistics enter smoothly when the page loads.
3. As a visitor, I can scroll to move the main visual through a deliberate animation sequence.
4. As a visitor, I can reverse-scroll without the visual jumping or getting stuck.
5. As a mobile visitor, I can read all content without overlap or horizontal overflow.
6. As a user who prefers reduced motion, I can access the content without unnecessary movement.
7. As a reviewer, I can inspect the source code and understand how the animation works.

## 7. Functional Requirements

### FR-01: Hero layout
- The hero occupies the initial viewport, accounting for mobile browser viewport behaviour.
- Navigation/brand mark, headline, main visual, metrics, and a scroll cue are composed with clear hierarchy.
- The design adapts without horizontal scrolling.

### FR-02: Initial load animation
- Headline starts hidden or offset only when motion is allowed and JavaScript is ready.
- Headline reveals with a small movement and opacity transition.
- Metrics reveal sequentially using a restrained stagger.
- Animation duration and delay must not block access to content.

### FR-03: Scroll-driven visual
- The primary visual changes position and optionally rotation/scale as scroll progress changes.
- Scroll progress is the source of truth; the visual must not autoplay independently.
- Reverse scrolling returns the visual to the corresponding earlier state.
- Use GSAP ScrollTrigger and scrubbed animation where appropriate.
- Pin the hero only if it matches the reference and remains usable on mobile.

### FR-04: Responsive behaviour
- Desktop: full composition and intended movement.
- Tablet: adjust visual scale, spacing, and scroll distance.
- Mobile: protect headline readability, metric legibility, and touch-scroll usability.
- Recalculate ScrollTrigger measurements when the layout changes.

### FR-05: Accessibility
- Use semantic landmarks and heading order.
- Provide meaningful alternative text for informative images; decorative visuals should have empty alt text.
- Ensure sufficient text contrast and visible focus indicators.
- Respect `prefers-reduced-motion`.
- Do not rely on animation alone to communicate essential information.

### FR-06: Reliability
- Animation setup must clean up on component unmount/re-run.
- Avoid duplicate timelines and ScrollTrigger instances.
- No missing assets, hydration warnings, or uncaught runtime errors.

## 8. Design Direction

Suggested campaign direction if a creative redesign is permitted:
- Background: charcoal/near-black.
- Accent: electric lime.
- Typography: bold display type paired with a highly readable sans-serif.
- Visual: high-quality transparent product image or the exact object used in the reference.
- Layout: restrained, spacious, editorial.
- Effects: subtle glow/grain only if they do not reduce readability or performance.

The reference's layout and animation behaviour take priority over this optional art direction.

## 9. Success Criteria / Acceptance Checklist

- [ ] Headline is visible and visually close to the reference.
- [ ] Metrics appear in a controlled sequence.
- [ ] Main visual responds to scroll progress.
- [ ] Reverse scrolling behaves correctly.
- [ ] No obvious stutter on a representative desktop and mobile device.
- [ ] No horizontal overflow at 320px viewport width.
- [ ] Reduced-motion preference is respected.
- [ ] ScrollTriggers are cleaned up correctly.
- [ ] Production build succeeds.
- [ ] README explains setup, animation logic, and asset credits.
- [ ] Live demo and repository links are ready to submit.

## 10. Deliverables

1. Working Next.js project.
2. Responsive hero and scroll animation.
3. GitHub repository with clean commit history.
4. Deployed live demo.
5. README with setup, features, implementation notes, and credits.
6. Optional 30–60 second demo recording showing initial load, forward scroll, reverse scroll, and mobile layout.

## 11. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Wrong visual asset or composition | Inspect reference at desktop and mobile sizes before coding. |
| ScrollTrigger starts at the wrong position | Verify trigger/start/end values and refresh after layout changes. |
| Duplicate animations in React development | Use GSAP context/useGSAP and clean up correctly. |
| Heavy image causes slow load | Use optimized WebP/AVIF assets at appropriate dimensions. |
| Mobile pinning feels awkward | Use responsive animation settings or disable pinning where needed. |
| Placeholder metrics look like factual claims | Label them as campaign/illustrative values or replace with verified data. |
| Overengineering before core requirements | Complete acceptance criteria before optional polish. |

## 12. Definition of Done

The project is done when all must-have requirements pass, the production build succeeds, core interactions have been tested in both scroll directions, the mobile layout is usable, and a reviewer can run the project from the README without undocumented steps.

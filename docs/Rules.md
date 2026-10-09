# AI & Development Rules
## ITZ FIZZ — Project Guardrails

These rules are intended for Antigravity or any AI coding assistant. Follow them throughout implementation.

## 1. Source of Truth

1. Treat the assignment brief and supplied reference as the source of truth.
2. Recreate required behaviour before adding optional creative features.
3. Do not claim the reference was matched exactly until it has been visually and interactively compared.
4. If a design detail cannot be verified, make a reasonable choice and record the assumption.
5. Do not invent real product claims, company endorsements, or measured statistics.

## 2. Required Stack

- Next.js with React.
- TypeScript unless the existing project is intentionally JavaScript.
- Tailwind CSS for utility-based layout and styling.
- GSAP for intro animation.
- GSAP ScrollTrigger for scroll-linked motion.
- Native HTML/CSS/JavaScript for semantic structure and supporting behaviour.

Do not introduce Framer Motion, Three.js, Lenis, or another animation/scroll library unless there is a clear requirement and approval. Avoid adding dependencies just for visual novelty.

## 3. Code Quality

- Keep components focused and readable.
- Use descriptive names.
- Use semantic HTML.
- Keep repeated content in arrays/constants when it improves maintainability.
- Do not create giant components that mix page layout, data, and all animation logic.
- Do not add abstractions that make a small project harder to understand.
- Do not leave placeholder TODOs in required functionality.
- Remove dead code and unused imports.
- Do not suppress TypeScript errors with `any` or broad lint disables unless justified and documented.
- Never solve a bug by disabling lint, type checking, or React Strict Mode.

## 4. Animation Rules

- Scroll animation must be driven by scroll progress, not a repeating timer.
- Use ScrollTrigger `scrub` when the motion should track the scroll position.
- Support reverse scrolling naturally.
- Prefer transforms (`x`, `y`, `scale`, `rotation`) and opacity.
- Avoid frequent React state updates for animation frames.
- Keep animation distances and durations purposeful.
- Use pinning only where it supports the reference interaction.
- Ensure all timelines and ScrollTriggers are cleaned up.
- Scope selectors to the component or use refs.
- Do not animate the same property of the same element through conflicting systems.
- Do not make the user wait through an unnecessarily long intro.

## 5. React / Next.js Rules

- Put `"use client"` only in components that need client-side APIs or animation.
- Never access `window` or `document` during server rendering.
- Prefer `@gsap/react` with `useGSAP()` or use a properly cleaned-up `gsap.context()` effect.
- Prevent duplicate animations during rerenders and development Strict Mode.
- Avoid hydration mismatches caused by random values or browser-only measurements during render.
- Do not store derived visual animation progress in React state unless there is a clear need.

## 6. Design Rules

- Use the Design.md tokens as the visual baseline.
- Maintain readable contrast.
- Keep typography responsive and avoid forced letter spacing that clips on narrow screens.
- Ensure the product visual remains the hero focal point.
- Use consistent spacing and alignment.
- Avoid excessive glow, blur, gradients, shadows, and decorative UI.
- Do not use emoji as a substitute for icons in the final polished interface.
- Make all button and navigation states clear.
- Keep the design coherent instead of adding unrelated sections.

## 7. Accessibility Rules

- Respect `prefers-reduced-motion`.
- Ensure all text remains available when motion is reduced.
- Use meaningful alt text for informative images.
- Use empty alt text for purely decorative images.
- Preserve keyboard navigation and visible focus.
- Do not use color alone to convey essential information.
- Ensure links and controls have accessible names.
- Do not trap the user in a pinned section or prevent normal page scrolling.

## 8. Performance Rules

- Optimize large images.
- Avoid expensive per-frame layout recalculations.
- Avoid unnecessary client-side JavaScript.
- Do not install packages without a reason.
- Test on a real narrow viewport and a normal desktop viewport.
- Investigate jank with browser tools rather than guessing.
- Do not promise perfect FPS on every device; measure representative performance.

## 9. AI Workflow Rules

Before editing:
1. Inspect the current files and package scripts.
2. Read PRD.md, Architecture.md, Design.md, Rules.md, and Phases.md.
3. Identify the current phase and acceptance criteria.
4. Make a small, coherent change.
5. Run lint/typecheck/build commands that are available.
6. Inspect the result in a browser when possible.
7. Update Memory.md with completed work, files changed, checks run, known issues, and next step.

When blocked:
- State the exact blocker and what was checked.
- Do not fabricate a successful build or visual test.
- Ask a concise question only if a genuinely required decision is missing.
- Otherwise make the smallest reasonable assumption and document it.

## 10. Definition of Quality

A feature is not complete merely because code was generated. It is complete only after it has been run or inspected, checked against its acceptance criteria, and its limitations have been recorded.

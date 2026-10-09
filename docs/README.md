# ITZ FIZZ — Antigravity Project Planning Pack

This folder contains six planning documents for building the Scroll-Driven Hero Section Animation assignment with Antigravity.

## Documents

| File | Purpose |
|---|---|
| `PRD.md` | Scope, user stories, requirements, acceptance criteria |
| `Architecture.md` | Next.js/React structure and GSAP integration approach |
| `Rules.md` | Guardrails for the AI coding assistant and code quality |
| `Phases.md` | Step-by-step implementation sequence |
| `Design.md` | Visual tokens, typography, layout, motion and accessibility |
| `Memory.md` | Progress log and cross-session handoff |

## How to use in Antigravity

1. Create or open your Next.js project.
2. Copy these files into the project root, or place them under `docs/`.
3. Keep one canonical copy of each document; do not maintain conflicting duplicates.
4. Start by asking Antigravity to read all six documents and perform **Phase 0 only**.
5. Review the result before allowing it to continue to Phase 1.
6. At the end of every phase, ask it to update `Memory.md` with files changed, checks run, outcomes, known issues, and next actions.
7. Run the project locally and inspect the actual browser behaviour. Do not accept generated code without testing it.

## Recommended first prompt

```text
Read PRD.md, Architecture.md, Rules.md, Phases.md, Design.md, and Memory.md completely.
Inspect the current repository and the reference link in the PRD. Do not start building the whole project yet.
Complete Phase 0 only: inspect the existing setup, analyse the reference's visible composition and scroll behaviour, list the files that should be created or changed, and update Memory.md with verified observations and open questions.
Do not claim that you tested anything you did not run. Preserve existing code.
```

## Reference

https://paraschaturvedi.github.io/car-scroll-animation

## Important

The documents define a plan, not a completed application. The live reference should be inspected before final visual choices are made. Any sample percentages and brand content are illustrative until verified.

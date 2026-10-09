# Design System
## ITZ FIZZ — Scroll-Driven Hero Experience

**Design intent:** Premium, energetic, editorial beverage campaign.  
**Important:** The supplied reference takes precedence. Use this system as a coherent styling direction, not as a reason to diverge from required reference behaviour.

## 1. Visual Principles

1. **One focal point:** The main product visual should dominate the hero.
2. **Strong hierarchy:** Headline first, product second, supporting metrics third.
3. **Motion with purpose:** Animation should reveal and guide attention, not distract.
4. **Contrast and clarity:** Small labels must remain readable against the background.
5. **Responsive by design:** The layout should be composed for mobile, not merely shrunk from desktop.
6. **Consistency:** Reuse spacing, typography, and colour tokens.

## 2. Suggested Colour Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#090B0A` | Main background |
| `--color-surface` | `#151916` | Secondary surface |
| `--color-text` | `#F4F7F2` | Main text |
| `--color-muted` | `#A8B0A8` | Secondary text |
| `--color-accent` | `#C7FF35` | Accent, small highlights |
| `--color-border` | `rgba(244,247,242,0.18)` | Subtle dividers |

Use the reference's actual colours if the goal is faithful recreation.

## 3. Typography

- Display: a bold, modern sans-serif with a compact shape.
- Body: a neutral sans-serif with excellent legibility.
- Headline: uppercase, carefully controlled letter spacing.
- Metrics: large numerals with short supporting labels.
- Navigation and labels: smaller size with clear contrast.

Suggested responsive scale:
- Hero heading: `clamp(2.2rem, 8vw, 7rem)`.
- Metric number: `clamp(1.6rem, 3vw, 3rem)`.
- Body: `clamp(0.9rem, 1.2vw, 1.05rem)`.

These are starting values. Tune after inspecting the actual visual asset and reference.

### Letter-spacing guidance
The requested spaced headline can be implemented with CSS `letter-spacing` or explicit spacing in text. Prefer CSS spacing to inserting many spaces into the accessible text. If explicit visual characters are required, keep an accessible, natural reading label.

## 4. Layout

### Desktop
- Hero minimum height should account for the visible viewport.
- Use a stable content container and clear alignment.
- Keep the product visual as the focal point.
- Place metrics where they do not compete with the focal visual.
- Avoid excessive empty space that makes the composition look unfinished.

### Mobile
- Use `100svh` where appropriate, with a sensible fallback.
- Reduce heading size and letter spacing.
- Stack or compact metrics when needed.
- Reduce product movement and scale.
- Prevent text from colliding with the visual.
- Avoid pinning for too long if it harms touch scrolling.

## 5. Motion Tokens

Starting points only; tune against the reference.

| Motion | Suggested range | Notes |
|---|---|---|
| Intro headline | 0.6–0.9 s | Ease out, small vertical offset |
| Metrics stagger | 0.08–0.16 s between items | Keep sequence subtle |
| Product entrance | 0.6–1.0 s | Avoid overshoot unless reference uses it |
| Scroll scrub | `0.5–1` | Smooths the catch-up to scroll |
| Scroll distance | `800–1400px` | Measure and adapt to reference/device |
| Reduced motion | Minimal/no nonessential movement | Content remains visible |

Use GSAP eases for intro timelines. For scrubbed animation, remember that the scroll position controls progress; use easing carefully because it can alter how directly the visual tracks the scroll.

## 6. Image and Product Visual

- Prefer a high-resolution transparent image.
- Keep the main subject's aspect ratio intact.
- Do not stretch the image.
- Use an appropriate `object-fit` and positioning strategy.
- Avoid a large visible rectangle around a transparent asset.
- Compress assets without obvious visual degradation.
- Record source, licence, and attribution in README.
- If using a 3D model, keep it optional unless the reference requires one.

## 7. Interaction States

- Initial state: composition is ready to be revealed; content must not remain hidden if animation fails.
- Intro complete: headline and metrics are fully readable.
- Scroll in progress: visual follows progress predictably.
- Reverse scroll: previous states are restored naturally.
- Reduced motion: static or minimally animated composition.
- Narrow viewport: compact, readable layout with no clipping.

## 8. Accessibility

- Maintain readable contrast.
- Do not use tiny low-contrast labels.
- Give informative images meaningful alt text.
- Mark purely decorative visual assets as decorative.
- Keep interactive controls keyboard accessible.
- Respect `prefers-reduced-motion`.
- Do not communicate important meaning only through colour or motion.

## 9. Avoid

- Excessive glow and bloom.
- Constant background motion.
- Long intro delays.
- Tiny text used only for visual style.
- Generic placeholder percentages presented as factual claims.
- Overlapping metrics and product visual.
- Unlicensed brand/product imagery.
- Animations that break normal scrolling.

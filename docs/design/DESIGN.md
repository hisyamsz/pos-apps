---
name: Indigo Precision
colors:
  surface: "#f7f9fb"
  surface-dim: "#d8dadc"
  surface-bright: "#f7f9fb"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  surface-container-high: "#e6e8ea"
  surface-container-highest: "#e0e3e5"
  on-surface: "#191c1e"
  on-surface-variant: "#464555"
  inverse-surface: "#2d3133"
  inverse-on-surface: "#eff1f3"
  outline: "#777587"
  outline-variant: "#c7c4d8"
  surface-tint: "#4d44e3"
  primary: "#3525cd"
  on-primary: "#ffffff"
  primary-container: "#4f46e5"
  on-primary-container: "#dad7ff"
  inverse-primary: "#c3c0ff"
  secondary: "#4648d4"
  on-secondary: "#ffffff"
  secondary-container: "#6063ee"
  on-secondary-container: "#fffbff"
  tertiary: "#41485e"
  on-tertiary: "#ffffff"
  tertiary-container: "#586076"
  on-tertiary-container: "#d4dbf5"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e2dfff"
  primary-fixed-dim: "#c3c0ff"
  on-primary-fixed: "#0f0069"
  on-primary-fixed-variant: "#3323cc"
  secondary-fixed: "#e1e0ff"
  secondary-fixed-dim: "#c0c1ff"
  on-secondary-fixed: "#07006c"
  on-secondary-fixed-variant: "#2f2ebe"
  tertiary-fixed: "#dae2fd"
  tertiary-fixed-dim: "#bec6e0"
  on-tertiary-fixed: "#131b2e"
  on-tertiary-fixed-variant: "#3f465c"
  background: "#f7f9fb"
  on-background: "#191c1e"
  surface-variant: "#e0e3e5"
typography:
  h1:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  h2:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  h3:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: "600"
    lineHeight: "1.3"
  h1-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.5"
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.2"
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1.2"
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  "0": 0px
  "1": 0.25rem
  "2": 0.5rem
  "3": 0.75rem
  "4": 1rem
  "6": 1.5rem
  "8": 2rem
  "12": 3rem
  "16": 4rem
  gutter: 1.5rem
  container-max: 1280px
---

## Brand & Style

The design system is engineered for professional-grade SaaS and enterprise environments, prioritizing clarity, efficiency, and a high-density information architecture. The brand personality is authoritative yet approachable, utilizing a **Corporate Modern** aesthetic that blends high-contrast accessibility with refined geometric precision.

The visual narrative focuses on "Functional Sophistication," where every element serves a clear purpose. It avoids unnecessary ornamentation, relying on robust typographic hierarchies and a disciplined use of space to guide the user. The goal is to evoke a sense of reliability and expert control.

## Colors

The palette is centered around an accessible Indigo-Slate combination.

- **Primary:** Indigo 600 (#4F46E5) serves as the main action color, ensuring a minimum contrast ratio of 4.5:1 against light backgrounds.
- **Secondary:** Slate 900 (#0F172A) provides structural grounding for sidebars and headers.
- **Neutral:** A comprehensive Slate scale is used for surface layering, borders, and secondary text.

For WCAG 2.1 compliance, use Indigo 700 or higher for text links on white backgrounds. Surface levels are defined by moving from Slate 50 (background) to White (card/container).

## Typography

This system uses a tiered font approach:

1. **Hanken Grotesk** for display and headings to provide a modern, sharp edge.
2. **Inter** for all UI elements and body copy to maximize legibility and systematic scaling.
3. **JetBrains Mono** for technical labels, data points, and code snippets.

**Responsive behavior:** Large headlines (H1-H2) scale down by 25-30% on mobile devices, while body text remains consistent at 16px to ensure readability.

## Layout & Spacing

This system utilizes an **8px base grid** for all spatial measurements.

- **Grid Model:** A 12-column fluid grid on desktop (1280px max-width) with 24px (1.5rem) gutters. On mobile, the grid shifts to a single or 2-column layout with 16px (1rem) side margins.
- **Spacing Rhythm:** Use the power-of-two scale for consistent vertical rhythm. Components should prioritize the `spacing-4` (16px) unit for internal padding.
- **Alignment:** All components must snap to the 4px soft-grid for sub-component alignment (e.g., icons within buttons).

## Elevation & Depth

Depth is conveyed through **Tonal Layers** supplemented by refined ambient shadows.

1. **Level 0 (Base):** Slate 50. Used for the primary application background.
2. **Level 1 (Card):** White background with a 1px border of Slate 200. No shadow.
3. **Level 2 (Dropdown/Popover):** White background with a "Soft Ambient" shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
4. **Level 3 (Modal):** White background with a "Deep Ambient" shadow: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`.

Use borders (Slate 200) instead of shadows for layout separation to maintain a clean, professional "flat" look. Shadows are reserved for temporary or floating UI elements.

## Shapes

The design system follows a **Rounded** (8px) corner philosophy to balance professional structure with modern friendliness.

- **Standard (rounded):** 8px (0.5rem). Used for buttons, input fields, and standard cards.
- **Large (rounded-lg):** 16px (1rem). Used for large containers and modals.
- **Extra Large (rounded-xl):** 24px (1.5rem). Used for featured sections or onboarding cards.

Interactive elements should maintain a consistent radius to prevent visual vibration when nested.

## Components

Following Shadcn UI patterns, components are built with a focus on accessibility (ARIA) and state-driven styling.

### Iconography

- **Style:** Hugeicons (Stroke-based, 2px stroke width).
- **Size:** Default to 20x20px within buttons/inputs; 24x24px for standalone actions.

### Buttons

- **Primary:** Background: Indigo 600; Text: White. Hover: Indigo 700. Focus: 2px ring of Indigo 300.
- **Secondary:** Background: Slate 100; Text: Slate 900. Hover: Slate 200.
- **Ghost:** No background. Text: Slate 600. Hover: Background Slate 100, Text Slate 900.

### Input Fields

- **Default:** Height: 40px. Border: Slate 200. Background: White.
- **Active/Focus:** Border: Indigo 600. Ring: 2px Indigo 100.
- **Typography:** Placeholder text in Slate 400; Input text in Slate 900.

### Navigation

- **Sidebar:** Background: Slate 900. Active Item: Indigo 600 background or 2px left-border Indigo 500 with Slate 800 background.
- **Breadcrumbs:** Text: Slate 500; Separator: Hugeicons "chevron-right" (14px).

### Cards

- **Structure:** 1px border (Slate 200), 8px radius, white background.
- **Header:** 16px padding, 1px bottom border (Slate 100).

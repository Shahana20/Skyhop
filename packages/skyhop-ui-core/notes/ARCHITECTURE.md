# Title Suggestions:

# Option 1: Skyhop UI Core: Architectural Decisions & Technical Principles

# Option 2: Skyhop Design System: Phase 1 Architecture

# Option 3: Building Skyhop UI: Foundation & Core Concepts

# Option 4: Architecture Document: Skyhop UI Core

---

> **Overview:** This document outlines the foundational technical principles and architectural decisions made during Phase 1 of the Skyhop UI Core development. It serves as a blueprint for how we wrap, structure, and scale our component library.

## 1. The Wrapper Pattern & API Design

When building a component library on top of a third-party framework (like Material UI), we strictly avoid exposing the underlying framework directly to application developers. Instead, we use the **Wrapper Pattern**.

- **Strict Interfaces:** Instead of exposing all 100+ MUI props, we define strict TypeScript interfaces (e.g., `SkyHopButtonProps`). This forces the engineering team to only use the variants, sizes, and colors we explicitly allow, ensuring design consistency across the entire Skyhop ecosystem.
- **Prop Spreading (`...props`):** We explicitly capture our custom props, but safely spread the remaining valid HTML/MUI attributes down to the root element (`<Button {...props}>`). This ensures native attributes like `data-testid`, `aria-` labels, or `onFocus` events still function without manual wiring.

## 2. The Theme Provider Architecture

- **Design Tokens:** Hardcoding CSS colors (e.g., `#FF5722`) or pixel values in individual components creates a maintenance nightmare. By utilizing MUI's `createTheme`, we establish a centralized "Single Source of Truth" for all design tokens (colors, typography scales, spacing).
- **Context Injection:** The `<SkyhopThemeProvider>` wraps the entire application at the highest level. It uses React Context to invisibly inject these design tokens into every single Atom, allowing us to globally rebrand or adjust the UI by modifying a single theme file.

## 3. Semantic HTML vs. Visual Styling (Typography)

A component's visual appearance and its semantic meaning to a screen reader or search engine are fundamentally different concerns.

- **The Trap:** Using an `<h1>` tag purely for its large font size, or a `<p>` tag for small text, degrades SEO and accessibility structure.
- **The Solution:** We decouple styling from semantics. We use the `variant` prop to dictate the visual CSS (e.g., "make it look like an H1") but use the `component` prop to dictate the underlying HTML node (e.g., "actually render a `<span>`").

## 4. The Accessibility (a11y) Golden Rules

Accessibility is baked into the lowest level of our Atoms, ensuring that complex applications built with Skyhop UI are accessible "for free."

- **The `tabIndex` Myth:** We do not manually write `tabIndex={1}` to force keyboard navigation. Native interactive elements (`<button>`, `<input>`) are automatically focusable by the browser. **Golden Rule: Let the DOM structure dictate the tab order naturally.**
- **Implicit Connections:** By utilizing our wrapped input components, the framework automatically generates unique IDs and connects `<label>` elements to `<input>` elements using `aria-labelledby`.
- **Non-Interactive ARIA:** For visual elements that convey important state but do not receive keyboard focus (like a Loading Spinner), we implement specific ARIA roles (e.g., `role="progressbar"`) so screen readers accurately announce the application's status.

## 5. Component-Driven Development (Ladle / Storybook)

- **Isolation:** Building UI components inside the main application is slow and risks tight coupling to business logic or external API calls.
- **The Sandbox:** We utilize Ladle to render our Atoms in complete isolation. This provides a sandbox to visually test edge cases (long text wrapping, disabled states) and serves as a living, interactive catalog for the engineering team without needing to boot up the main application.

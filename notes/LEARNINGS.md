# 🧠 Skyhop UI Core: Technical Learnings & Architecture

> **Overview:** This document outlines the core technical concepts, architectural patterns, and testing strategies mastered during the development of the Skyhop UI Core component library.

## ⚛️ React & Component Architecture

- **Atomic Composition (Molecules):** Complex UI is built by composing smaller, heavily-tested, and isolated components (Atoms) together. For example, we create a reusable `FormField` Molecule by wrapping a `Typography` label and a `TextField` input inside an MUI `Stack` to guarantee perfect, standardized layout spacing across the app.
- **The Prop Forwarding Pattern (`...rest`):** We use the spread operator to pass standard HTML/React props down to underlying child components. This allows a Molecule to natively inherit features—like `onChange` tracking or `error` states—from its underlying Atoms without having to rewrite or manually wire up any redundant component logic.

## 🧪 Testing (Jest & React Testing Library)

- **Async Error Handling (The `toThrow` Trap):** Wrapping asynchronous actions (like `await userEvent.type()`) inside `expect(() => ...).not.toThrow()` is an anti-pattern. Jest handles async errors natively; if an awaited promise rejects or throws a runtime error, Jest automatically catches it and fails the test block.
- **Semantic DOM Assertions:** Instead of testing if a component has a specific CSS class (which can change), we test its structural truth using `expect(element.tagName).toBe('H1')`. This mathematically guarantees the component is outputting the correct semantic HTML.
- **Avoiding Brittle Tests:** We actively avoid testing third-party implementation details. For instance, testing if an MUI Spinner outputs an SVG with exactly `width="60px"` creates a brittle test that will break when the library updates its internal CSS logic. **Rule of thumb: Test the component's contract, not its paint.**

## ♿ Accessibility (a11y) & HTML

- **Physical Label Linking:** Visually placing a `<label>` next to an `<input>` is not enough for screen readers. We must physically link them in the DOM by passing a unique `id` to the input and a matching `htmlFor` attribute to the label.
  - _Usability Bonus:_ This also allows users to click the text label to instantly focus the input field.

## 📘 TypeScript

- **Polymorphic Interfaces:** When using a polymorphic component (like MUI's `Typography`, which can render as a `<span>`, `<h1>`, or `<label>` dynamically via the `component` prop), TypeScript will often throw errors if you try to pass tag-specific attributes (like `htmlFor`).
- **Interface Extension:** We loosely extend strict TypeScript interfaces by explicitly defining those edge-case attributes (e.g., adding `htmlFor?: string;` to our `TypographyProps`) to satisfy the compiler while maintaining strict type safety for the rest of the component.

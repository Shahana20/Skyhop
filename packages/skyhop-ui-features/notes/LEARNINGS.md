# UI Features & Organisms: Technical Learnings 🧠

A log of architectural decisions, testing strategies, and UI patterns specific to the domain-feature layer.

---

## 🏗 Architecture: The Feature Layer

- **The Organism Boundary:** Unlike `ui-core` (which holds generic UI bricks), `ui-features` contains components tied directly to the business domain (e.g., `FlightSearchForm`).
- **State & Logic:** Organisms are "smart." They manage local state (like form inputs), handle their own validation logic, and act as the gatekeeper before passing data up to the Page/Template layer via props (e.g., `onSubmit`).
- **Workspace Linking:** `ui-features` consumes `ui-core` locally via package manager workspaces (e.g., `"@skyhop/ui-core": "*"`).

## 🪤 Monorepo Dependency Traps

### The "Invalid Hook Call" (Duplicate React)

- **The Symptom:** React crashes instantly when rendering an Organism (`FlightSearchForm`) that imports a Core component (`SkyhopFormField`).
- **The Cause:** The package manager installed two separate copies of React—one in the feature package and one in the core package. React requires a strict "Singleton" pattern; two React instances cannot share Hook state.
- **The Fix:** 1. Define `react` and `react-dom` exclusively in `peerDependencies` and `devDependencies` for both packages. 2. Ensure the version strings match exactly (e.g., `^19.0.0`). 3. Purge all `node_modules` and reinstall from the monorepo root to force NPM to "hoist" a single copy of React.

## 🧪 Testing Stateful Organisms

### JSX Translation in Isolated Packages

- Jest runs in Node and natively crashes on JSX `<` brackets.
- **The Fix:** Every new package that renders components needs a local Babel config (or a shared monorepo config) with `@babel/preset-react` set to `{ runtime: 'automatic' }` to silently compile JSX for Jest.

### Avoiding the `userEvent` Shared State Trap

- **The Danger:** Declaring `const user = userEvent.setup()` outside of the test block shares the _same virtual browser session_ across all tests. Test 1's lingering state (like a pressed key) will corrupt Test 2.
- **The Fix:** Instantiate a fresh `user` inside every `it` block, or use a `beforeEach` to reset it.
- **Mock Isolation:** Always use `mockClear()` inside `beforeEach` when passing `jest.fn()` props to Organisms, guaranteeing that interaction counts reset between validation tests and success tests.

## 🎨 UI & Layout Patterns

### Beating the "Swallowed Prop"

- Custom Atoms (like `<SkyhopButton>`) will ignore utility props (like `sx={{ mt: 3 }}`) unless their interface explicitly accepts and maps them.
- **The Pattern:** Instead of bloating Atom interfaces, handle structural layout at the Organism level by wrapping the component in a standard `Box`.

### The "Invisible Dummy" Alignment Trick

- **The Problem:** CSS Flexbox containers (like MUI's `<Stack>`) aggressively control child margins. When aligning a Button horizontally with a `<SkyhopFormField>` (which has a label on top), the Button aligns to the label instead of the input box, and margins are ignored.
- **The Solution:** Use structural alignment instead of fighting CSS margins. Wrap the Button in a `<Stack>` and place an empty `<Box sx={{ height: '20px' }} />` above it. This perfectly mimics the height of the adjacent field's text label, forcing pixel-perfect alignment.

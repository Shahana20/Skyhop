# 🏗️ The 5-Pillar Testing Strategy for UI Components

**The Golden Rule:** _Test the Component Contract, Not the Framework._
Do not write tests to verify that a third-party library (like MUI or React itself) works. Write tests to prove that _your_ component handles inputs, user actions, and edge cases gracefully without crashing.

---

### Pillar 1: The Render Check (Happy Path)

- **The Goal:** Prove the component mounts and displays its core content.
- **The Strategy:** Pass the absolute minimum required props (text, label, children) and verify it exists in the DOM.
- **Code Example:**
  ```typescript
  it('renders the provided children text', () => {
      render(<Button>Submit</Button>);
      expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  ```

### Pillar 2: The Interaction Check (Events)

- **The Goal:** Prove that user actions successfully trigger the callbacks provided by the parent application.
- **The Strategy:** Mock the callback (`jest.fn()`), simulate the exact user action using `@testing-library/user-event`, and verify the mock was called.
- **Code Example:**
  ```typescript
  it('fires the onChange callback when text is typed', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      render(<Input label="City" onChange={handleChange} />);

      await user.type(screen.getByLabelText('City'), 'LHR');
      expect(handleChange).toHaveBeenCalledTimes(3);
  });
  ```

### Pillar 3: The State/Modifier Check (Adaptability)

- **The Goal:** Prove that specific props or boolean flags alter the component's semantic state (not just its CSS).
- **The Strategy:** Render the component with the modifier prop (e.g., `disabled`, `error`, `variant="h1"`) and assert the underlying HTML attribute or DOM node changed.
- **Code Example:**
  ```typescript
  it('renders as an H1 tag when variant is h1', () => {
      render(<Typography variant="h1">Heading</Typography>);
      expect(screen.getByText('Heading').tagName).toBe('H1');
  });
  ```

### Pillar 4: The Defensive Check (Sad Path)

- **The Goal:** Prove the component will not cause a fatal runtime crash (White Screen of Death) if an API returns bad data or a developer forgets a prop.
- **The Strategy:** Deliberately pass `undefined` or `null` to callbacks and optional props. Perform an action and verify the app survives.
- **Code Example:**
  ```typescript
  it('does not throw an error when clicked if onClick is undefined', async () => {
      const user = userEvent.setup();
      render(<Button onClick={undefined}>Click Me</Button>);

      // If the component is broken, this action will throw a runtime error and fail the test.
      await user.click(screen.getByText('Click Me'));
  });
  ```

### Pillar 5: The Accessibility Check (Inclusivity)

- **The Goal:** Prove that a screen reader can find and understand the component.
- **The Strategy:** Stop using `getByTestId` or class selectors. Always query the DOM the way a visually impaired user would: using `getByRole` or `getByLabelText`. If your test can find it this way, it is inherently accessible.
- **Code Example:**
  ```typescript
  it('renders the loading spinner accessibly', () => {
      render(<Spinner />);
      // Proves the ARIA role is correct
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
  ```

# Common Components

This directory contains reusable UI components that are used throughout the application. These components are designed to be flexible, accessible, and consistent with the application's design system.

## Available Components

### Button

A versatile button component with various styles, sizes, and states.

```jsx
// Import the Button component
import Button from '@/components/common/Button';

// Usage examples
<Button>Default Button</Button>
<Button variant="secondary" size="lg">Large Secondary Button</Button>
<Button variant="outline" disabled>Disabled Outline Button</Button>
<Button loading>Loading Button</Button>
```

### Input

A flexible input component with support for labels, validation, and different states.

```jsx
// Import the Input component
import Input from '@/components/common/Input';

// Usage examples
<Input 
  id="email"
  name="email"
  label="Email Address"
  placeholder="Enter your email"
  onChange={handleChange}
/>

<Input 
  id="password"
  name="password"
  type="password"
  label="Password"
  error="Password must be at least 8 characters"
  required
/>
```

### Card

A versatile card component for displaying content in a contained box.

```jsx
// Import the Card component
import Card from '@/components/common/Card';

// Basic usage
<Card>
  <p>Card content goes here</p>
</Card>

// With title and footer
<Card 
  title="Card Title"
  footer={<Button>Action</Button>}
  hoverable
>
  <p>Card content with hover effect</p>
</Card>
```

## Component Documentation

All common components should be well-documented using JSDoc comments. See the [Component Documentation Guide](../../docs/COMPONENT_DOCUMENTATION.md) for more details.

## Design Principles

1. **Reusability**: Components should be designed to be reused across the application
2. **Flexibility**: Components should accept props to customize their appearance and behavior
3. **Accessibility**: Components should follow accessibility best practices
4. **Consistency**: Components should maintain consistent styling and behavior
5. **Performance**: Components should be optimized for performance

## Adding New Components

When adding a new common component:

1. Create a new file in this directory with the component name (e.g., `ComponentName.jsx`)
2. Document the component using JSDoc comments
3. Implement the component following the design principles above
4. Add the component to this README.md file
5. Create a test file for the component (e.g., `ComponentName.test.jsx`)
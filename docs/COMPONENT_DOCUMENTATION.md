# Component Documentation

## Overview

This document provides guidelines for documenting components in the AgriMart project. Well-documented components are easier to understand, maintain, and reuse.

## Component Documentation Template

Use the following template when documenting components:

```jsx
/**
 * @component ComponentName
 * @description Brief description of what the component does
 *
 * @param {Object} props - Component props
 * @param {string} props.propName - Description of the prop
 * @param {function} props.callbackProp - Description of the callback function
 * @param {ReactNode} props.children - Description of children content
 *
 * @example
 * // Basic usage
 * <ComponentName propName="value" callbackProp={() => {}}>
 *   Child content
 * </ComponentName>
 *
 * @example
 * // With additional options
 * <ComponentName 
 *   propName="value"
 *   optionalProp="optional"
 *   callbackProp={(value) => console.log(value)}
 * />
 */
export default function ComponentName({ propName, callbackProp, children }) {
  // Component implementation
}
```

## Example: AuthForm Component

```jsx
/**
 * @component AuthForm
 * @description Authentication form that handles both login and signup functionality
 *
 * @example
 * // Basic usage in a page component
 * export default function AuthPage() {
 *   return <AuthForm />;
 * }
 *
 * @example
 * // With custom styling
 * <div className="custom-container">
 *   <AuthForm />
 * </div>
 */
export default function AuthForm() {
  // Component implementation
}
```

## Best Practices

1. **Be Concise**: Keep descriptions clear and to the point
2. **Document All Props**: Include all props, even if they seem obvious
3. **Provide Examples**: Show common usage patterns
4. **Document Side Effects**: Note any side effects (e.g., API calls, state changes)
5. **Include Type Information**: Specify prop types and return values
6. **Note Required Props**: Clearly indicate which props are required
7. **Document Default Values**: Include information about default prop values

## Using JSDoc with React

JSDoc comments provide excellent documentation that integrates with IDE tooling. When using JSDoc with React components:

- Use `@component` to mark React components
- Use `@param` for props documentation
- Use `@example` to show usage examples
- Use `@returns` to document what the component renders

## Component Structure Guidelines

For consistency, structure your components as follows:

1. Import statements
2. JSDoc component documentation
3. Component definition
4. Helper functions and hooks (inside or outside the component as appropriate)
5. Export statement

## Additional Resources

- [JSDoc Documentation](https://jsdoc.app/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Storybook](https://storybook.js.org/) for component documentation and visualization
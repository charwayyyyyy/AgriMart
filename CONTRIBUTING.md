# Contributing to AgriMart

Thank you for your interest in contributing to AgriMart! This document provides guidelines and instructions for contributing to this project.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file with required environment variables
4. Start the development server: `npm run dev`

## Code Style and Quality

### General Guidelines

- Follow the established project structure
- Use meaningful variable and function names
- Write self-documenting code with comments where necessary
- Keep functions small and focused on a single responsibility
- Avoid code duplication

### JavaScript/React Guidelines

- Use functional components with hooks instead of class components
- Use destructuring for props and state
- Implement proper error handling
- Use async/await for asynchronous operations
- Implement proper form validation
- Use React.memo() for performance optimization when appropriate

### CSS/Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Follow mobile-first responsive design principles
- Maintain consistent spacing and sizing
- Use CSS variables for theme colors and values
- Implement dark mode support where appropriate

### State Management

- Use Redux for global state management
- Use local state for component-specific state
- Follow Redux best practices (slice pattern, selectors, etc.)
- Minimize state updates for performance

## Code Quality

- Ensure code is well-structured and maintainable
- Follow best practices for performance optimization
- Ensure accessibility compliance

## Pull Request Process

1. Create a new branch for your feature or bugfix
2. Make your changes following the guidelines above
3. Run linting with `npm run lint` and ensure it passes
4. Update documentation if necessary
5. Submit a pull request with a clear description of the changes

## Commit Message Guidelines

Follow the conventional commits specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring

- `chore:` for maintenance tasks

## Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

## License

By contributing to AgriMart, you agree that your contributions will be licensed under the project's license.

# AgriMart - Ghanaian Farm-to-Table E-Commerce

AgriMart is a Ghanaian based e-commerce platform for farm-to-table transactions, developed as part of a personal project. It offers a unique shopping experience for customers, enhanced by a focus on farm produce and the local Ghanaian theme.

## Live Demo

Check out the live demo of AgriMart: [AgriMart Live Demo](https://agri-mart-phi.vercel.app/)

## Features
- **Farm-to-Table Ordering**: Customers can select fresh, organic farm produce.
- **Interactive UI**: Hover effects, micro-interactions, and smooth transitions.
- **Localized Theme**: Ghanaian fonts, cultural references, and farm aesthetic.
- **Secure Checkout**: Stripe & mobile money integration for payments.
- **User Accounts**: Firebase authentication for login & purchase tracking.
- **Live Search & Filtering**: Dynamic product search & category filters.
- **Testimonial & Review Section**: Farmers & customers share experiences.
- **Reusable Components**: Library of common UI components with documentation
- **Component Examples**: Interactive examples page at `/examples`

## Technologies Used
- **Next.js** for server-side rendering and optimized performance.
- **Tailwind CSS** for a stylish and responsive UI.
- **Redux Toolkit** for state management.
- **Firebase Authentication** for user management and login.
- **Stripe API** for secure payment processing.
- **Framer Motion** for smooth animations and interactivity.

## Project Structure

### Pages
- **Home** - Landing page with featured products
- **Shop** - Browse and filter products
- **Cart** - View and manage shopping cart
- **Wishlist** - Save products for later
- **Orders** - Track order history
- **Education** - Farming resources and guides
- **Checkout** - Complete purchases
- **Account** - User profile management



### Demo Login Credentials

```
Email: demo@agrimart.com
Password: Demo123!
```

## Code Quality & Maintainability

This project follows best practices for code quality and maintainability:

- **Component Structure**: Organized by feature and functionality
- **State Management**: Centralized with Redux Toolkit
- **CSS Methodology**: Utility-first approach with Tailwind CSS
- **Code Splitting**: Implemented with Next.js for optimal loading
- **Environment Variables**: Sensitive information stored in .env.local
- **Documentation**: Comprehensive README and setup guides

### Development Tools

- **ESLint**: JavaScript and React linting (`.eslintrc.js`)
- **Prettier**: Code formatting (`.prettierrc`)
- **Jest**: Testing framework (`jest.config.js`, `jest.setup.js`)
- **JSConfig**: Path aliases and IntelliSense support (`jsconfig.json`)
- **Husky**: Git hooks for code quality (`.husky/pre-commit`)
- **lint-staged**: Run linters on git staged files (`.lintstagedrc.js`)
- **Contributing Guidelines**: Standards for contributors (`CONTRIBUTING.md`)
- **Environment Variables**: Template for required variables (`.env.example`)

### Available Scripts

```bash
# Development
npm run dev         # Start development server

# Code Quality
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
npm run format:check # Check formatting without changing files

# Testing
npm run test        # Run tests
npm run test:watch  # Run tests in watch mode

# Production
npm run build       # Build for production
npm run start       # Start production server
```

### Development Guidelines

- Use ESLint for code linting (`npm run lint`)
- Follow the established folder structure for new features
- Implement responsive design for all UI components
- Write unit tests for critical functionality
- Document API endpoints and data models
- See [Contributing Guidelines](./CONTRIBUTING.md) for detailed standards

## Deployment

### Vercel Deployment

This project is configured for deployment on Vercel with special handling for dependency conflicts:

- **vercel.json**: Contains build configuration for Vercel
- **.npmrc**: Sets `legacy-peer-deps=true` to handle peer dependency conflicts
- **Dependency Management**: React 18 is used to ensure compatibility with testing libraries

For detailed deployment instructions, see the [Deployment Guide](./docs/DEPLOYMENT.md).

### CI/CD with GitHub Actions

The project includes a GitHub Actions workflow for continuous integration and deployment:

- **Automated Testing**: Runs linting and tests on every push and pull request
- **Automated Deployment**: Deploys to Vercel when changes are pushed to the main branch

See the [GitHub Actions Setup Guide](./docs/GITHUB_ACTIONS.md) for configuration details.

### Troubleshooting Deployment

If you encounter dependency conflicts during deployment:

1. Run the dependency checker script: `npm run check-deps`
2. Ensure React version is set to 18.x in package.json
3. Use the `--legacy-peer-deps` flag when installing dependencies
4. Check that @types/react and @types/react-dom versions match your React version
5. Verify that the postinstall script is present in package.json

The dependency checker script (`scripts/check-dependencies.js`) will analyze your package.json and configuration files to identify potential issues.

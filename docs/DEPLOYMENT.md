# Deployment Guide

This document provides instructions for deploying the AgriMart application to production environments.

## Prerequisites

Before deploying, ensure you have:

1. A complete build of the application
2. Access to the deployment platform (e.g., Vercel)
3. Required environment variables ready
4. GitHub repository set up (for CI/CD deployment)

## Environment Variables

Ensure the following environment variables are set in your deployment environment:

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration (if applicable)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

## Vercel Deployment

### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Configure the environment variables in the Vercel dashboard
3. Vercel will automatically deploy your application

### Manual Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the application:
   ```bash
   vercel
   ```

### Deployment Configuration

The project includes the following files to configure the deployment:

#### vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "installCommand": "npm install --legacy-peer-deps"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

This configuration ensures that Vercel uses the correct build command and handles routing properly.

#### .npmrc

```
legacy-peer-deps=true
```

This configuration tells npm to use the legacy peer dependency resolution algorithm, which helps resolve dependency conflicts.

## Dependency Management

### React Version

The project uses React 18.x. If you encounter dependency conflicts, ensure that the React version is set correctly in package.json:

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

And that the TypeScript types match:

```json
"devDependencies": {
  "@types/react": "^18",
  "@types/react-dom": "^18"
}
```

### Handling Dependency Conflicts

The project includes a postinstall script in package.json to handle dependency conflicts:

```json
"scripts": {
  "postinstall": "npm install --legacy-peer-deps"
}
```

This ensures that dependencies are installed correctly even if there are peer dependency conflicts.

## Troubleshooting

### Common Deployment Issues

#### Dependency Conflicts

The project includes a dependency checker script to help identify and resolve conflicts:

```bash
npm run check-deps
```

This script will analyze your package.json and configuration files to identify potential issues.

If you encounter dependency conflicts during deployment:

1. Check that the React version is set to 18.x in package.json
2. Verify that @types/react and @types/react-dom versions match your React version
3. Ensure that the .npmrc file is present with `legacy-peer-deps=true`
4. Check that the postinstall script is present in package.json

#### Build Failures

If the build fails:

1. Check the build logs for specific error messages
2. Ensure all required environment variables are set
3. Verify that the vercel.json file is correctly configured
4. Try running the build locally with `npm run build` to identify issues

#### Runtime Errors

If the application deploys but encounters runtime errors:

1. Check the browser console for error messages
2. Verify that environment variables are correctly accessed in the code
3. Ensure that API endpoints are correctly configured for the production environment

## Continuous Integration/Continuous Deployment (CI/CD)

### GitHub Actions

The project includes a GitHub Actions workflow for continuous integration and deployment:

1. **Location**: `.github/workflows/ci.yml`
2. **Features**:
   - Runs linting on every push and pull request
   - Automatically deploys to Vercel when changes are pushed to the main branch
3. **Requirements**: You need to set up the following secrets in your GitHub repository:

   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

For detailed instructions on setting up GitHub Actions, see the [GitHub Actions Setup Guide](./GITHUB_ACTIONS.md).

The workflow file at `.github/workflows/ci.yml` contains:

```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'
      - name: Install dependencies
        run: npm ci --legacy-peer-deps
      - name: Run linting
        run: npm run lint

  deploy:
    needs: lint
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Conclusion

By following this deployment guide, you should be able to successfully deploy the AgriMart application to Vercel or other hosting platforms. If you encounter any issues not covered in this guide, please refer to the official documentation for the specific platform you're using.
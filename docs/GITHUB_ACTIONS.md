# GitHub Actions Setup Guide

## Overview

This document provides instructions for setting up GitHub Actions for continuous integration and deployment (CI/CD) for the AgriMart project.

## CI/CD Workflow

The project includes a GitHub Actions workflow file at `.github/workflows/ci.yml` that automates the following tasks:

1. **Linting**: Runs linting checks on every push and pull request
2. **Deployment**: Automatically deploys to Vercel when changes are pushed to the main branch

## Prerequisites

- GitHub repository for the AgriMart project
- Vercel account with the project set up
- Vercel API token

## Setting Up GitHub Secrets

To enable the GitHub Actions workflow to deploy to Vercel, you need to set up the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click on "New repository secret"
4. Add the following secrets:

### VERCEL_TOKEN

This is your Vercel API token.

1. Go to your Vercel account settings
2. Navigate to "Tokens"
3. Create a new token with a descriptive name (e.g., "GitHub Actions")
4. Copy the token and add it as a secret in GitHub with the name `VERCEL_TOKEN`

### VERCEL_ORG_ID

This is your Vercel organization ID.

1. Run `vercel whoami` in your terminal (after installing the Vercel CLI and logging in)
2. Copy the "id" value and add it as a secret in GitHub with the name `VERCEL_ORG_ID`

Alternatively, you can find this in the Vercel dashboard URL when you're in your team or personal account settings.

### VERCEL_PROJECT_ID

This is your Vercel project ID for the AgriMart project.

1. Run `vercel projects list` to see all your projects
2. Find the AgriMart project and note its ID
3. Add it as a secret in GitHub with the name `VERCEL_PROJECT_ID`

Alternatively, you can find this in the project settings URL in the Vercel dashboard.

## Workflow Configuration

The workflow is configured in the `.github/workflows/ci.yml` file. Here's a breakdown of what it does:

### Lint Job

```yaml
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
```

This job:
1. Checks out the code
2. Sets up Node.js 18
3. Installs dependencies with `--legacy-peer-deps` to handle dependency conflicts
4. Runs linting

### Deploy Job

```yaml
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

This job:
1. Only runs if the lint job succeeds
2. Only runs on pushes to the main branch
3. Checks out the code
4. Deploys to Vercel using the secrets you set up

## Customizing the Workflow

### Adding Environment Variables

If your project requires environment variables for deployment, you can add them to the workflow:

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v20
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
  env:
    NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.FIREBASE_API_KEY }}
    # Add other environment variables as needed
```

Make sure to add the corresponding secrets to your GitHub repository.

### Caching Dependencies

To speed up the workflow, you can cache the npm dependencies:

```yaml
- name: Cache dependencies
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

Add this step before the "Install dependencies" step.

## Troubleshooting

### Workflow Failures

If the workflow fails, check the GitHub Actions logs for error messages. Common issues include:

- **Dependency installation failures**: Make sure the `--legacy-peer-deps` flag is used
- **Linting failures**: Fix any linting issues
- **Deployment failures**: Verify that the Vercel secrets are correctly set up

### Vercel Deployment Issues

If the deployment to Vercel fails:

1. Check that the Vercel secrets are correct
2. Verify that the Vercel project is correctly set up
3. Try deploying manually to see if there are any issues with the project itself

## Conclusion

With GitHub Actions set up, your AgriMart project will benefit from automated linting and deployment. This ensures that code quality is maintained and that changes are automatically deployed to production when they're ready.
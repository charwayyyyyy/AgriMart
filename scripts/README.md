# Utility Scripts

This directory contains utility scripts for the AgriMart project.

## Available Scripts

### Dependency Checker

**File**: `check-dependencies.js`

**Purpose**: Analyzes your project's dependencies and configuration files to identify potential conflicts or issues that might cause problems during installation or deployment.

**Usage**:

```bash
npm run check-deps
```

**What it checks**:

1. **React Compatibility**:
   - Verifies React and React DOM versions match

2. **React Types Compatibility**:
   - Ensures @types/react and @types/react-dom versions match React version



4. **Configuration Files**:
   - Verifies .npmrc has legacy-peer-deps=true
   - Checks vercel.json for appropriate installCommand
   - Confirms postinstall script is present in package.json

5. **Dependency Conflicts**:
   - Runs npm ls to identify any dependency conflicts

**Output**:

The script provides color-coded output with:
- ✓ Green checkmarks for passing checks
- ⚠ Yellow warnings for potential issues
- ✗ Red errors for critical problems

**Example Output**:

```
=== Dependency Conflict Checker ===

✓ Successfully read package.json

Checking React compatibility:
- React: ^18.2.0
- React DOM: ^18.2.0

✓ React and React DOM versions are compatible

Checking React types compatibility:
- @types/react: ^18.2.0
- @types/react-dom: ^18.2.0
✓ React types versions are compatible with React



Checking configuration files:
✓ .npmrc file exists with legacy-peer-deps=true
✓ vercel.json exists with --legacy-peer-deps in installCommand
✓ postinstall script exists with --legacy-peer-deps

=== Dependency Check Complete ===
```

## Adding New Scripts

When adding new utility scripts to this directory:

1. Create your script file with a descriptive name
2. Add a corresponding npm script in package.json
3. Update this README.md with documentation for your script
4. Make sure your script has appropriate error handling

## Best Practices for Scripts

1. **Documentation**: Include a header comment explaining the script's purpose
2. **Error Handling**: Provide clear error messages and exit codes
3. **Cross-Platform**: Ensure scripts work on both Windows and Unix-based systems
4. **Dependencies**: Minimize external dependencies for utility scripts
5. **Logging**: Use color-coded output for better readability
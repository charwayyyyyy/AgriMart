#!/usr/bin/env node

/**
 * This script checks for potential dependency conflicts in the project
 * It helps identify issues that might cause problems during installation or deployment
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

console.log(`${colors.cyan}=== Dependency Conflict Checker ===${colors.reset}\n`);

// Read package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log(`${colors.green}✓ Successfully read package.json${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}✗ Error reading package.json: ${error.message}${colors.reset}`);
  process.exit(1);
}

// Check React version
const reactVersion = packageJson.dependencies?.react;
const reactDomVersion = packageJson.dependencies?.['react-dom'];

if (reactVersion && reactDomVersion) {
  console.log(`\n${colors.cyan}Checking React compatibility:${colors.reset}`);
  console.log(`- React: ${reactVersion}`);
  console.log(`- React DOM: ${reactDomVersion}`);
  
  // Check if React version is 19.x
  if (reactVersion.includes('19')) {
    console.log(`${colors.red}✗ Warning: React 19.x may cause compatibility issues with testing libraries${colors.reset}`);
    console.log(`  Recommendation: Downgrade to React 18.x (^18.2.0) for better compatibility`);
  } else if (reactVersion.includes('18')) {
    console.log(`${colors.green}✓ React 18.x is compatible with most testing libraries${colors.reset}`);
  }
  
  // Check if React and React DOM versions match
  if (reactVersion.split('.')[0] !== reactDomVersion.split('.')[0]) {
    console.log(`${colors.red}✗ Error: React and React DOM major versions don't match${colors.reset}`);
    console.log(`  Recommendation: Ensure both packages use the same major version`);
  } else {
    console.log(`${colors.green}✓ React and React DOM versions are compatible${colors.reset}`);
  }
}

// Check React types
const reactTypes = packageJson.dependencies?.['@types/react'] || packageJson.devDependencies?.['@types/react'];
const reactDomTypes = packageJson.dependencies?.['@types/react-dom'] || packageJson.devDependencies?.['@types/react-dom'];

if (reactTypes && reactDomTypes && reactVersion) {
  console.log(`\n${colors.cyan}Checking React types compatibility:${colors.reset}`);
  console.log(`- @types/react: ${reactTypes}`);
  console.log(`- @types/react-dom: ${reactDomTypes}`);
  
  // Check if React types version matches React version
  const reactMajor = reactVersion.match(/\d+/)[0];
  const reactTypesMajor = reactTypes.match(/\d+/)?.[0];
  
  if (reactTypesMajor && reactMajor !== reactTypesMajor) {
    console.log(`${colors.red}✗ Warning: @types/react version doesn't match React version${colors.reset}`);
    console.log(`  Recommendation: Use @types/react ^${reactMajor} with React ${reactMajor}.x`);
  } else {
    console.log(`${colors.green}✓ React types versions are compatible with React${colors.reset}`);
  }
}

// Testing library compatibility check removed

// Check for configuration files
console.log(`\n${colors.cyan}Checking configuration files:${colors.reset}`);

// Check for .npmrc
const npmrcPath = path.join(process.cwd(), '.npmrc');
if (fs.existsSync(npmrcPath)) {
  const npmrcContent = fs.readFileSync(npmrcPath, 'utf8');
  if (npmrcContent.includes('legacy-peer-deps=true')) {
    console.log(`${colors.green}✓ .npmrc file exists with legacy-peer-deps=true${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠ .npmrc file exists but doesn't set legacy-peer-deps=true${colors.reset}`);
    console.log(`  Recommendation: Add 'legacy-peer-deps=true' to .npmrc`);
  }
} else {
  console.log(`${colors.yellow}⚠ .npmrc file not found${colors.reset}`);
  console.log(`  Recommendation: Create .npmrc with 'legacy-peer-deps=true'`);
}

// Check for vercel.json
const vercelJsonPath = path.join(process.cwd(), 'vercel.json');
if (fs.existsSync(vercelJsonPath)) {
  try {
    const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
    if (vercelJson.installCommand && vercelJson.installCommand.includes('--legacy-peer-deps')) {
      console.log(`${colors.green}✓ vercel.json exists with --legacy-peer-deps in installCommand${colors.reset}`);
    } else {
      console.log(`${colors.yellow}⚠ vercel.json exists but doesn't set --legacy-peer-deps in installCommand${colors.reset}`);
      console.log(`  Recommendation: Add 'installCommand': 'npm install --legacy-peer-deps' to vercel.json`);
    }
  } catch (error) {
    console.log(`${colors.red}✗ Error parsing vercel.json: ${error.message}${colors.reset}`);
  }
} else {
  console.log(`${colors.yellow}⚠ vercel.json file not found${colors.reset}`);
  console.log(`  Recommendation: Create vercel.json with appropriate configuration`);
}

// Check for postinstall script
if (packageJson.scripts && packageJson.scripts.postinstall && packageJson.scripts.postinstall.includes('--legacy-peer-deps')) {
  console.log(`${colors.green}✓ postinstall script exists with --legacy-peer-deps${colors.reset}`);
} else {
  console.log(`${colors.yellow}⚠ postinstall script with --legacy-peer-deps not found${colors.reset}`);
  console.log(`  Recommendation: Add 'postinstall': 'npm install --legacy-peer-deps' to scripts in package.json`);
}

console.log(`\n${colors.cyan}=== Dependency Check Complete ===${colors.reset}`);

// Try running npm ls to check for dependency conflicts
console.log(`\n${colors.cyan}Running npm ls to check for conflicts:${colors.reset}`);
console.log(`${colors.yellow}(This may show expected peer dependency warnings)${colors.reset}\n`);

try {
  const output = execSync('npm ls --depth=0', { encoding: 'utf8' });
  console.log(output);
  console.log(`${colors.green}✓ npm ls completed without fatal errors${colors.reset}`);
} catch (error) {
  console.log(error.stdout);
  console.log(`${colors.red}✗ npm ls reported dependency conflicts${colors.reset}`);
  console.log(`  Note: Some conflicts may be resolved with --legacy-peer-deps`);
}

console.log(`\n${colors.cyan}Recommendations:${colors.reset}`);
console.log(`1. Use React 18.x for maximum compatibility`);
console.log(`2. Always use --legacy-peer-deps when installing dependencies`);
console.log(`3. Ensure @types/react and @types/react-dom versions match your React version`);
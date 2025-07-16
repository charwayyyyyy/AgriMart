module.exports = {
  // Run ESLint on JS and JSX files
  "*.{js,jsx}": ["eslint --fix"],
  
  // Format JS, JSX, CSS, and JSON files
  "*.{js,jsx,css,json}": ["prettier --write"],
  
  // Run tests related to changed files
  "*.{js,jsx}": ["jest --bail --findRelatedTests"],
};
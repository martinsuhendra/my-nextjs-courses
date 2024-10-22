module.exports = {
  'apps/**/*.{ts,jsx,tsx}': ['eslint --fix'],
  'packages/ui/**/*.{ts,jsx,tsx}': ['eslint --fix'],
  '*.json': ['prettier --write'],
}

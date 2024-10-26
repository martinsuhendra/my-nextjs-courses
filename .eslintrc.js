/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['satu/library'],
  parserOptions: {
    project: 'packages/config-typescript/eslint.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}

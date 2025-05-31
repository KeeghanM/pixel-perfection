import eslintPluginAstro from 'eslint-plugin-astro'
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {},
    ignore: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/public/**',
      '**/out/**',
      '**/.astro/**',
      '**/.cache/**',
    ],
  },
]

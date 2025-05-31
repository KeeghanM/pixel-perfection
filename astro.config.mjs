import node from '@astrojs/node'
import solidJs from '@astrojs/solid-js'
import compress from 'astro-compress'
import icon from 'astro-icon'
import purgecss from 'astro-purgecss'
import { defineConfig } from 'astro/config'
import eslint from 'vite-plugin-eslint'

// https://astro.build/config
export default defineConfig({
  site: 'https://pixel-perfection.keeghan.io',
  output: 'static',
  integrations: [solidJs(), icon(), purgecss(), compress()],
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [eslint()],
  },
})

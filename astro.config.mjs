import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import node from '@astrojs/node'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [solidJs(), compress()],
  adapter: node({
    mode: 'standalone',
  }),
})

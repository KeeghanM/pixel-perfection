import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import node from '@astrojs/node'
import compress from 'astro-compress'
import icon from 'astro-icon'
import purgecss from 'astro-purgecss'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [solidJs(), icon(), purgecss(), compress()],
  adapter: node({
    mode: 'standalone',
  }),
})

import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'
import node from '@astrojs/node'
import compress from 'astro-compress'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [solidJs(), compress(), icon()],
  adapter: node({
    mode: 'standalone',
  }),
})
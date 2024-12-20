// @ts-check
import { defineConfig } from 'astro/config';

import auth from 'auth-astro';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), tailwind(), react()],
  output: 'server',
  adapter: vercel()
});
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    auth(), // Autenticación
    tailwind(), // Estilos con Tailwind
    react(), // React si lo necesitas
  ],
  output: 'server', // Asegura que el proyecto sea empaquetado para Vercel
  adapter: node({
    mode: 'middleware', // Aquí deberías manejar rutas API con node
  }),
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          terapias: path.resolve(__dirname, 'terapias.html'),
          reiki: path.resolve(__dirname, 'reiki.html'),
          coachEmocional: path.resolve(__dirname, 'coach-emocional.html'),
          kinesis: path.resolve(__dirname, 'kinesis.html'),
          leyAtraccion: path.resolve(__dirname, 'ley-de-la-atraccion.html'),
          canalizacion: path.resolve(__dirname, 'canalizacion.html'),
          regresiones: path.resolve(__dirname, 'regresiones.html'),
          sanacion: path.resolve(__dirname, 'sanacion.html'),
          sobreMi: path.resolve(__dirname, 'sobre-mi.html'),
          contacto: path.resolve(__dirname, 'contacto.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

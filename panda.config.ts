import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          green: {
            400: { value: '#4ade80' },
            500: { value: '#22c55e' }
          },
          blue: {
            50: { value: '#eff6ff' },
            100: { value: '#dbeafe' },
            500: { value: '#3b82f6' },
            600: { value: '#2563eb' },
            700: { value: '#1d4ed8' }
          },
          gray: {
            50: { value: '#f9fafb' },
            300: { value: '#d1d5db' },
            400: { value: '#9ca3af' },
            500: { value: '#6b7280' },
            600: { value: '#4b5563' },
            700: { value: '#374151' },
            800: { value: '#1f2937' }
          }
        }
      }
    }
  },
  outdir: 'styled-system'
});
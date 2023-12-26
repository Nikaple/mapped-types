import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      all: true,
      exclude: ['index.ts', 'lib/types/**'],
      reporter: ['json-summary', 'html'],
      include: ['lib/**'],
    },
  },
});

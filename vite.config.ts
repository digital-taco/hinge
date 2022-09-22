// vite.config.ts
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'base-library',
      fileName: (format) => `base-library.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
})

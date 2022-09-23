import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    // Only builds to the latest spec. This gives it the smallest bundle possible, but isn't backwards compatible.
    // target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'BaseLibrary',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        // This keeps each file as its own file, rather than putting them all into one
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name }) => {
          return `${name}.js`
        },

        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

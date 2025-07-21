import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts'; 

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,  
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),  
      name: 'fzkui',  
      fileName: (format) => `fzkui.${format}.js`,  
    },
    rollupOptions: { 
      external: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'clsx', 'tailwind-merge'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'lucide-react': 'LucideReact',
          'clsx': 'clsx',
          'tailwind-merge': 'tailwindMerge',
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/**/*"], // Tüm src dosyalarını tarasın
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Doğru giriş noktası
      name: "fzkui",
      formats: ["es", "umd"],
      fileName: (format) => `fzkui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "clsx", "tailwind-merge"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

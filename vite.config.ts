import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      fileName: () => "svg-inline.js",
      entry: "src/index.ts",
      formats: ["es"],
    },
    outDir: "build",
  },
  esbuild: {
    minify: true, // type error here. jsdoc will show the reason
  },
});

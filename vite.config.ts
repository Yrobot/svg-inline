import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

enum TYPES {
  PACKAGE = "PACKAGE",
  WEBSITE = "WEBSITE",
}

const type = process.env.type || TYPES.WEBSITE;

const TYPE_CONFIG_MAP = {
  [TYPES.PACKAGE]: {
    build: {
      lib: {
        fileName: () => "index.js",
        entry: "package/index.ts",
        formats: ["es"],
      },
      outDir: "build",
    },
    plugins: [dts()],
  },
  [TYPES.WEBSITE]: {
    base: "./",
    build: {
      outDir: "build_website",
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
    publicDir: "website/public",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  ...TYPE_CONFIG_MAP[type],
  esbuild: {
    minify: true, // type error here. jsdoc will show the reason
  },
});

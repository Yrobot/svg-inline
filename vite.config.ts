import { defineConfig } from "vite";
import { resolve } from "path";

enum TYPES {
  PACKAGE = "PACKAGE",
  WEBSITE = "WEBSITE",
}

const type = process.env.type || TYPES.WEBSITE;

const TYPE_CONFIG_MAP = {
  [TYPES.PACKAGE]: {
    build: {
      lib: {
        fileName: () => "svg-inline.js",
        entry: "package/index.ts",
        formats: ["es"],
      },
      outDir: "build",
    },
  },
  [TYPES.WEBSITE]: {
    build: {
      outDir: "build_website",
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
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

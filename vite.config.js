/* eslint-disable */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  base: "/anime-search/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        anime: resolve(__dirname, "src/anime_pages/index.html")
      },
    },
  },
});

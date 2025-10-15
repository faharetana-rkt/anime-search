/* eslint-disable */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        anime_detail: resolve(__dirname, "src/anime_pages/index.html"),
        search: resolve(__dirname, "src/search_page/index.html"),
        favorites: resolve(__dirname, "src/favorites_page/index.html"),
      },
    },
  },
});

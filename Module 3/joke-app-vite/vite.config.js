import { defineConfig } from "vite";
import path from "path";
import { profile } from "console";

export default defineConfig({
  appType: "mpa",
  base: "",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main:path.resolve(__dirname, "./index.html"),
        joke: path.resolve(__dirname, "./joke/index.html"),
        profile: path.resolve(__dirname,"./profile.html")
      },
    },
  },
});

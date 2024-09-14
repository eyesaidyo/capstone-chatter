import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  paths: {
    vite: "./node_modules/vite",
    "@vitejs/plugin-react": "./node_modules/@vitejs/plugin-react",
  },
});
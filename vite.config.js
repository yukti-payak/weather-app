import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensure assets load correctly

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
  },

  build: {
    outDir: "dist", // Output folder for deployment
  }
});

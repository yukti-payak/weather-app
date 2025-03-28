import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct asset paths

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
    allowedHosts: ["all", "weather-app-98v5.onrender.com"], // Allow Render domain
  },

  build: {
    outDir: "dist",
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from external URLs
    port: process.env.PORT || 5173, // Use Render's port or fallback to 5173
  },
  preview: {
    host: true,
    port: process.env.PORT || 5173,
    allowedHosts: ["weather-app-gyby.onrender.com"], // Add your Render domain
  },
});

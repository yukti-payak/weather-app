import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 plugins:[react()],
 server:{
  port:process.env.PORT || 5173,
  host:"0.0.0.0",
  strictPort:true,
  allowedHosts:["htweather-app-98v5.onrender.com"]
 },
});


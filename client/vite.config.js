import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv"

dotenv.config();

const ENV = process.env.VITE_ENV || "development";
const BACKEND_URL = process.env.VITE_BACKEND_URL || "http://localhost:8080";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": ENV !== "production" ? "http://localhost:8080" : BACKEND_URL,
      secure: false,
    },
  },
});

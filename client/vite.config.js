import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const NODE_ENV = process.env.REACT_APP_NODE_ENV;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": NODE_ENV !== "production" ? "http://localhost:8080" : BACKEND_URL,
      secure: false,
    },
  },
});

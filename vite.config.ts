import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages base path configuration
  // For user/org sites (username.github.io): use "/"
  // For project sites (username.github.io/repo-name): use "/repo-name/"
  // Set via environment variable or default to "/" for local dev
  base: process.env.GITHUB_PAGES_BASE || "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
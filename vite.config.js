import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // Enable Fast Refresh optimization
          "@babel/plugin-syntax-import-meta",
        ],
      },
    }),
  ],
  build: {
    // Optimize bundle size
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Enable code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
          ],
          // Separate routes into chunks
          pages: [
            "./src/pages/HomePage.jsx",
            "./src/pages/AboutPage.jsx",
            "./src/pages/ServicesPage.jsx",
            "./src/pages/ContactPage.jsx",
            "./src/pages/FaqPage.jsx",
            "./src/pages/NotFoundPage.jsx",
          ],
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Generate source maps for production debugging
    sourcemap: false,
    // Inline small assets
    assetsInlineLimit: 4096,
    // Set output directory
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    // Enable gzip compression in dev
    middlewareMode: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@vercel/analytics"],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import path from "path";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    theme_color: "#181818",
    name: "CoRider progressive web app",
    short_name: "pwa",
    description: "I am a simple vite app",
    // Add this line
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable_icon.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable",
      },
    ],

    background_color: "#e0cc3b",
    display: "standalone",
    scope: "/",
    start_url: "https://pwa-hazel-omega.vercel.app",
    orientation: "portrait",
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifestForPlugin,
      devOptions: {
        enabled: true,
        /* other options */
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

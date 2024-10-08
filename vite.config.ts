// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Rich And Morty App",
        short_name: "RANA",
        icons: [
          {
            src: "/images/icons/windows11/SmallTile.scale-100.png",
            type: "image/png",
            sizes: "71x71",
          },
          {
            src: "/images/icons/windows11/SmallTile.scale-125.png",
            type: "image/png",
            sizes: "89x89",
          },
          {
            src: "/images/icons/windows11/SmallTile.scale-150.png",
            type: "image/png",
            sizes: "107x107",
          },
          {
            src: "/images/icons/windows11/SmallTile.scale-200.png",
            type: "image/png",
            sizes: "142x142",
          },
          {
            src: "/images/icons/windows11/SmallTile.scale-400.png",
            type: "image/png",
            sizes: "284x284",
          },
          {
            src: "/images/icons/windows11/Square150x150Logo.scale-100.png",
            type: "image/png",
            sizes: "150x150",
          },
          {
            src: "/images/icons/windows11/Square150x150Logo.scale-125.png",
            type: "image/png",
            sizes: "188x188",
          },
          {
            src: "/images/icons/windows11/Square150x150Logo.scale-150.png",
            type: "image/png",
            sizes: "225x225",
          },
          {
            src: "/images/icons/windows11/Square150x150Logo.scale-200.png",
            type: "image/png",
            sizes: "300x300",
          },
          {
            src: "/images/icons/windows11/Square150x150Logo.scale-400.png",
            type: "image/png",
            sizes: "600x600",
          },
          {
            src: "/images/icons/windows11/Wide310x150Logo.scale-100.png",
            type: "image/png",
            sizes: "310x150",
          },
          {
            src: "/images/icons/windows11/Wide310x150Logo.scale-125.png",
            type: "image/png",
            sizes: "388x188",
          },
          {
            src: "/images/icons/windows11/Wide310x150Logo.scale-150.png",
            type: "image/png",
            sizes: "465x225",
          },
          {
            src: "/images/icons/windows11/Wide310x150Logo.scale-200.png",
            type: "image/png",
            sizes: "620x300",
          },
          {
            src: "/images/icons/windows11/Wide310x150Logo.scale-400.png",
            type: "image/png",
            sizes: "1240x600",
          },
          {
            src: "/images/icons/windows11/LargeTile.scale-100.png",
            type: "image/png",
            sizes: "310x310",
          },
          {
            src: "/images/icons/windows11/LargeTile.scale-125.png",
            type: "image/png",
            sizes: "388x388",
          },
          {
            src: "/images/icons/windows11/LargeTile.scale-150.png",
            type: "image/png",
            sizes: "465x465",
          },
          {
            src: "/images/icons/windows11/LargeTile.scale-200.png",
            type: "image/png",
            sizes: "620x620",
          },
          {
            src: "/images/icons/windows11/LargeTile.scale-400.png",
            type: "image/png",
            sizes: "1240x1240",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.scale-100.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.scale-125.png",
            type: "image/png",
            sizes: "55x55",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.scale-150.png",
            type: "image/png",
            sizes: "66x66",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.scale-200.png",
            type: "image/png",
            sizes: "88x88",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.scale-400.png",
            type: "image/png",
            sizes: "176x176",
          },
          {
            src: "/images/icons/windows11/StoreLogo.scale-100.png",
            type: "image/png",
            sizes: "50x50",
          },
          {
            src: "/images/icons/windows11/StoreLogo.scale-125.png",
            type: "image/png",
            sizes: "63x63",
          },
          {
            src: "/images/icons/windows11/StoreLogo.scale-150.png",
            type: "image/png",
            sizes: "75x75",
          },
          {
            src: "/images/icons/windows11/StoreLogo.scale-200.png",
            type: "image/png",
            sizes: "100x100",
          },
          {
            src: "/images/icons/windows11/StoreLogo.scale-400.png",
            type: "image/png",
            sizes: "200x200",
          },
          {
            src: "/images/icons/windows11/SplashScreen.scale-100.png",
            type: "image/png",
            sizes: "620x300",
          },
          {
            src: "/images/icons/windows11/SplashScreen.scale-125.png",
            type: "image/png",
            sizes: "775x375",
          },
          {
            src: "/images/icons/windows11/SplashScreen.scale-150.png",
            type: "image/png",
            sizes: "930x450",
          },
          {
            src: "/images/icons/windows11/SplashScreen.scale-200.png",
            type: "image/png",
            sizes: "1240x600",
          },
          {
            src: "/images/icons/windows11/SplashScreen.scale-400.png",
            type: "image/png",
            sizes: "2480x1200",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-24.png",
            type: "image/png",
            sizes: "24x24",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-30.png",
            type: "image/png",
            sizes: "30x30",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-36.png",
            type: "image/png",
            sizes: "36x36",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-44.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.targetsize-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            type: "image/png",
            sizes: "24x24",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            type: "image/png",
            sizes: "30x30",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            type: "image/png",
            sizes: "36x36",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            type: "image/png",
            sizes: "24x24",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            type: "image/png",
            sizes: "30x30",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            type: "image/png",
            sizes: "36x36",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "/images/icons/android/android-launchericon-512-512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "/images/icons/android/android-launchericon-192-192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/images/icons/android/android-launchericon-192-192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "maskable",
          },
          {
            src: "/images/icons/android/android-launchericon-144-144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "/images/icons/android/android-launchericon-96-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/images/icons/android/android-launchericon-72-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/images/icons/android/android-launchericon-48-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "/images/icons/ios/16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "/images/icons/ios/20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "/images/icons/ios/29.png",
            type: "image/png",
            sizes: "29x29",
          },
          {
            src: "/images/icons/ios/32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "/images/icons/ios/40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "/images/icons/ios/50.png",
            type: "image/png",
            sizes: "50x50",
          },
          {
            src: "/images/icons/ios/57.png",
            type: "image/png",
            sizes: "57x57",
          },
          {
            src: "/images/icons/ios/58.png",
            type: "image/png",
            sizes: "58x58",
          },
          {
            src: "/images/icons/ios/60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "/images/icons/ios/64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "/images/icons/ios/72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/images/icons/ios/76.png",
            type: "image/png",
            sizes: "76x76",
          },
          {
            src: "/images/icons/ios/80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "/images/icons/ios/87.png",
            type: "image/png",
            sizes: "87x87",
          },
          {
            src: "/images/icons/ios/100.png",
            type: "image/png",
            sizes: "100x100",
          },
          {
            src: "/images/icons/ios/114.png",
            type: "image/png",
            sizes: "114x114",
          },
          {
            src: "/images/icons/ios/120.png",
            type: "image/png",
            sizes: "120x120",
          },
          {
            src: "/images/icons/ios/128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "/images/icons/ios/144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "/images/icons/ios/152.png",
            type: "image/png",
            sizes: "152x152",
          },
          {
            src: "/images/icons/ios/167.png",
            type: "image/png",
            sizes: "167x167",
          },
          {
            src: "/images/icons/ios/180.png",
            type: "image/png",
            sizes: "180x180",
          },
          {
            src: "/images/icons/ios/192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/images/icons/ios/256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "/images/icons/ios/512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "/images/icons/ios/1024.png",
            type: "image/png",
            sizes: "1024x1024",
          },
        ],
        theme_color: "#FFFFFF",
        background_color: "#000",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
      },
      // devOptions: {
      //   enabled: true,
      // },
    }),
  ],
});

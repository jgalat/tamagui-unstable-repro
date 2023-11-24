import type { ExpoConfig } from "expo/config";

export default {
  name: "tamagui-unstable-repro",
  slug: "tamagui-unstable-repro",
  scheme: "tamagui-unstable-repro",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",

  assetBundlePatterns: ["**/*"],
  splash: { image: "./assets/splash.png", resizeMode: "contain" },

  android: {
    package: "app.unstable.repro",
    adaptiveIcon: { foregroundImage: "./assets/adaptive-icon.png" },
  },
  web: { bundler: "metro", favicon: "./assets/favicon.png" },

  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      { android: { compileSdkVersion: 34, targetSdkVersion: 34 } },
    ],
  ],

  experiments: { typedRoutes: true },
} as ExpoConfig;

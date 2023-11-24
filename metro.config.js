const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [...(defaultConfig.resolver?.sourceExts ?? []), "mjs"],
    unstable_enablePackageExports: true,
    unstable_conditionNames: ["react-native", "browser", "require"],
  },
};

const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [...(defaultConfig.resolver?.sourceExts ?? []), "mjs"],
    unstable_enablePackageExports: true,
  },
};

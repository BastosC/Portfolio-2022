const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/webp"],
    domains: ["firebasestorage.googleapis.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    disableStaticImages: true,
  },
  env: {
    // ...process.env,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    // [withBundleAnalyzer]
    [withImages],
  ],
  nextConfig
);

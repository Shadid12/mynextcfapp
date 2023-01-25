/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new EnvironmentPlugin(['FAUNA_SECRET']));
    return config;
  },
}

module.exports = nextConfig

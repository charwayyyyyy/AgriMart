/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const nextConfig = {
  /* config options here */
  // Increase memory limit for webpack
  experimental: {
    webpackBuildWorker: true,
    memoryBasedWorkersCount: true
  },
  webpack: (config, { isServer }) => {
    // Only apply polyfills in the browser build
    if (!isServer) {
      // Add polyfills for node modules
      config.plugins.push(new NodePolyfillPlugin());
      
      // Exclude problematic modules from client bundle
      config.resolve.alias = {
        ...config.resolve.alias,
        undici: false,
        'node-fetch': false,
      };
    }
    
    return config;
  }
};

module.exports = nextConfig;
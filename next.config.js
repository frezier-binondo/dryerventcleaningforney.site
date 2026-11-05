const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/dryer-vent-cleaning-forney-tx',
        destination: '/services',
      },
      {
        source: '/dryer-vent-cleaning-forney-tx/:slug',
        destination: '/services/:slug',
      },
      {
        source: '/service-areas',
        destination: '/locations',
      },
      {
        source: '/dryer-vent-cleaning-faqs',
        destination: '/faq',
      },
      {
        source: '/get-a-free-quote',
        destination: '/contact',
      },
    ];
  },
};

module.exports = nextConfig;

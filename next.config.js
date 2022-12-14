/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        // port: '',
        // pathname: '/kreindo.png',
      },
    ],
  },
};

module.exports = nextConfig;

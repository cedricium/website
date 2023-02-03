/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          display: 'swap',
          subsets: ['latin'],
        },
      },
    ],
  },
};

module.exports = nextConfig;

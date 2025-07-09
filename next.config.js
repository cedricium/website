/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://docs.google.com/document/d/e/2PACX-1vQ_306Klob3oFsxgvdO1OP2Xp2eumCjbtMQOyyH5pO8ZSqpHDFsMTgvia4O-kD-K-a9dbIfzpDNvEbj/pub",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

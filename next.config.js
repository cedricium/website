/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1Dq2FACu5QFqtxRDf65XwBowr-L3_dtyX/view?usp=sharing",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

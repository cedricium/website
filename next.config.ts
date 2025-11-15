import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
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

const withMDX = createMDX({
  // markdown plugins here, as desired
});

export default withMDX(nextConfig);

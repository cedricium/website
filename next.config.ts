import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  // markdown plugins here, as desired
});

export default withMDX(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.jimcdn.com",
      },
      {
        protocol: "https",
        hostname: "4ewafit.com",
      },
    ],
  },
};

export default nextConfig;

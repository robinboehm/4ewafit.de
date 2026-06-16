import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/4ewafit.de" : "",
  assetPrefix: isProd ? "/4ewafit.de/" : "",
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

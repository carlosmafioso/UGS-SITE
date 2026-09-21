import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "ais-dev-ecipezz5hvrz2thswgl6h4-345697431156.europe-west2.run.app",
    "ais-pre-ecipezz5hvrz2thswgl6h4-345697431156.europe-west2.run.app",
    "*.run.app",
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "contribution.usercontent.google.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

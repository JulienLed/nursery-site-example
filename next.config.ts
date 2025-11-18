import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crechedewavre.duckdns.org",
      },
    ],
  },
};

export default nextConfig;

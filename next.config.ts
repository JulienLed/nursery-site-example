import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "capable-peace-2774df44eb.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;

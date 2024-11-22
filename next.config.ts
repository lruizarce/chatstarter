import type { NextConfig } from "next";
("hello");
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_CONVEX_URL!).hostname,
      },
    ],
  },
};

export default nextConfig;

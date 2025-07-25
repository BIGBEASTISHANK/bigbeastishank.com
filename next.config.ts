import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://placehold.co/600x400')],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

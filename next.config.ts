import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'help.nflxext.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.nflxext.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'occ-0-4994-2164.1.nflxso.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

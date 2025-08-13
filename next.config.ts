import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    unoptimized: true,
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
      {
        protocol:'https',
        hostname : 'media.themoviedb.org',
        pathname :'/**'
      },
        {
        protocol:'https',
        hostname : 'image.tmdb.org',
        pathname :'/**'
      }
    ],
  },
};

export default nextConfig;

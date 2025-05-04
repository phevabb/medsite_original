import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**'
      },

      {
        protocol :'https',
        hostname: 'img.freepik.com',
        pathname: '/free-vector/**'
      }

    ]
  }
};

export default nextConfig;

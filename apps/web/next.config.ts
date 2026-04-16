import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This allows the frontend to display images from university servers
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.utoronto.ca', // Allows UofT assets
      },
    ],
  },
  // Environment variables accessible to the frontend
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
};

export default nextConfig;

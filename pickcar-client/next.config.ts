import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // This is a placeholder, replace with your actual image domains
    remotePatterns: [
      {
        // Example pattern for images hosted on a specific domain
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
};

export default nextConfig;

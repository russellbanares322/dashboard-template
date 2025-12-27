import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async() => {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: true
      }
    ]
  }
  
};

export default nextConfig;

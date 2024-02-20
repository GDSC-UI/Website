/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://github.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "https://twitter.com",
        port: "",
        pathname: "/account123/**",
      },

      {
        protocol: "https",
        hostname: "https://example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https",hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lib.miamioh.edu" },
      { protocol: "https", hostname: "d2jv02qf7xgjwx.cloudfront.net" },
      { protocol: "http", hostname: "localhost:3000" },
      { protocol: "http", hostname: "localhost:4000" },
    ],
  },
};

module.exports = nextConfig;

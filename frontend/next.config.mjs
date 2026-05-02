/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mbexpertllc.com",
      },
    ],
  },
};

export default nextConfig;

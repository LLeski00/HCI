/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
      ignoreBuildErrors: true,
    },
  eslint: {
    ignoreDuringBuilds: true, // This is needed to ignore ESLint errors
  },
};

export default nextConfig;

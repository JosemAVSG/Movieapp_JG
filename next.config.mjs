/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     {
        hostname:'image.tmdb.org'
     },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

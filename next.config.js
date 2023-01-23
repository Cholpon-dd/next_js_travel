/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['randomuser.me','images.unsplash.com', 'wembleypark.com', 'images.pexels.com', 'hydeparkwinterwonderland.com'],
  },
}

module.exports = nextConfig

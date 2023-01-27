/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['user-images.githubusercontent.com'],
    },
  experimental: {
    appDir: true,
    
  },
}

module.exports = nextConfig

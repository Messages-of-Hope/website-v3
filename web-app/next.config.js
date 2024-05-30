/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'flask-server',
        port: '8001',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'flask-server',
        port: '8001',
        pathname: '/colouring-pages/**',
      },
      {
        protocol: 'https',
        hostname: 'flask-server',
        port: '8001',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'flask-server',
        port: '8001',
        pathname: '/colouring-pages/**',
      }
    ],
  },
}

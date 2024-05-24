/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'flask-server',
        port: '8002',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'flask-server',
        port: '8002',
        pathname: '/colouring-pages/**',
      },
      {
        protocol: 'https',
        hostname: '**.messagesofhope.co.uk',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'moh-web3-flask',
        port: '8001',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'moh-web3-flask',
        port: '8001',
        pathname: '/colouring-pages/**',
      },
      {
        protocol: 'https',
        hostname: 'www.messagesofhope.co.uk',
        port: '',
        pathname: '/api/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.messagesofhope.co.uk',
        port: '',
        pathname: '/api/colouring-pages/**'
      },
    ],
  },
}

module.exports = nextConfig;

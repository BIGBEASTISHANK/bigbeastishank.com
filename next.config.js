/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    gtag: process.env.gtag,
  },
}

module.exports = nextConfig

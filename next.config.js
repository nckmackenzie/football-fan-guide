/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', 'media.api-sports.io'],
  },
  env: {
    X_RapidAPI_Host: process.env.X_RapidAPI_Host,
    X_RapidAPI_Key: process.env.X_RapidAPI_Key,
  },
};

module.exports = nextConfig;

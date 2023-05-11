/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['main.d9gcazq6ff2zg.amplifyapp.com', 'bandcpestcontrol.com'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Enable static export
  images: {
    // unoptimized: true, // Required for static HTML export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'basho.fueko.net',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc'
      }
    ]
  },
  env: {
    TELEGRAM_API_URL: process.env.TELEGRAM_API_URL,
    BOT_TOKEN: process.env.BOT_TOKEN,
    CHAT_ID: process.env.CHAT_ID
  }
};

export default nextConfig;

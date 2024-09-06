/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations

  // Add this if you're using next-sitemap
  siteUrl: process.env.SITE_URL || 'https://seqqal.vercel.app',
  generateRobotsTxt: true,
};

export default nextConfig;


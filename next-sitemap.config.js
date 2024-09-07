/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://seqqal.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://seqqal.vercel.app/server-sitemap.xml', // optional: only if you have a server-side sitemap
    ],
  },
  exclude: ['/server-sitemap.xml'], // optional: exclude the server-side sitemap from the sitemap index
}
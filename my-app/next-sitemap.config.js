/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://seqqal.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://seqqal.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
  outDir: 'public',
}
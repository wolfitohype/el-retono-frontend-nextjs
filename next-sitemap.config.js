/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://elretono.org',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ['/landing/gracias'],
    transform: async (config, path) => {
        let priority = 0.7;
        let changefreq = 'daily';

        if (path === '/') {
            priority = 1.0;
        } else if (path === '/servicios' || path === '/contacto') {
            priority = 0.9;
        } else if (path.startsWith('/servicios/')) {
            priority = 0.8;
        } else if (path === '/landing') {
            priority = 0.8;
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
}

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/_next/',
      allow: '/',
    },
    sitemap: `https://fitzza.xyz/sitemap.xml`,
    host: `https://fitzza.xyz`,
  };
}

import { MetadataRoute } from 'next';
import { headersList } from '@/utils';

export default function robots(): MetadataRoute.Robots {
  const hostName = headersList.get('Host') as string;

  return {
    rules: {
      userAgent: '*',
      disallow: '/_next/',
      allow: '/',
    },
    sitemap: `https://${hostName}/sitemap.xml`,
  };
}

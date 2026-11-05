import { MetadataRoute } from 'next';
import { SCHEMES } from '@/data/schemes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://janlabh.in';
  const lastModified = new Date();

  // Static Pillar & Legal Pages
  const staticRoutes = [
    '',
    '/about',
    '/privacy-policy',
    '/terms',
    '/contact',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Scheme Pillar Pages
  const schemeRoutes = SCHEMES.map((scheme) => ({
    url: `${baseUrl}/schemes/${scheme.slug}`,
    lastModified: new Date(scheme.lastVerified || lastModified),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...schemeRoutes];
}

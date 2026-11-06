import { MetadataRoute } from 'next';
import { SCHEMES } from '@/data/schemes';
import { STATES, CATEGORIES } from '@/data/categories';
import { UPDATES } from '@/data/updates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://janlabh.in';
  const now = new Date();

  // 1. Core Pillar Pages (Both EN and HI)
  const corePillars = [
    { path: '', priority: 1.0, freq: 'daily' as const },
    { path: '/schemes', priority: 0.95, freq: 'daily' as const },
    { path: '/states', priority: 0.9, freq: 'weekly' as const },
    { path: '/categories', priority: 0.9, freq: 'weekly' as const },
    { path: '/finder', priority: 0.85, freq: 'weekly' as const },
    { path: '/checker', priority: 0.85, freq: 'weekly' as const },
    { path: '/updates', priority: 0.9, freq: 'daily' as const },
  ];

  const pillarRoutes: MetadataRoute.Sitemap = [];
  corePillars.forEach((p) => {
    // English route
    pillarRoutes.push({
      url: `${baseUrl}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${p.path}`,
          hi: `${baseUrl}/hi${p.path}`,
        },
      },
    });
    // Hindi route
    pillarRoutes.push({
      url: `${baseUrl}/hi${p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${p.path}`,
          hi: `${baseUrl}/hi${p.path}`,
        },
      },
    });
  });

  // 2. Legal & Trust Pages
  const legalPages = ['/about', '/privacy-policy', '/terms', '/contact', '/disclaimer'];
  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // 3. Dynamic Scheme Detail Pages (EN + HI)
  const schemeRoutes: MetadataRoute.Sitemap = [];
  SCHEMES.forEach((scheme) => {
    const schemeModified = scheme.lastVerified ? new Date(scheme.lastVerified) : now;

    // EN scheme URL
    schemeRoutes.push({
      url: `${baseUrl}/schemes/${scheme.slug}`,
      lastModified: schemeModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/schemes/${scheme.slug}`,
          hi: `${baseUrl}/hi/schemes/${scheme.slug}`,
        },
      },
    });

    // HI scheme URL
    schemeRoutes.push({
      url: `${baseUrl}/hi/schemes/${scheme.slug}`,
      lastModified: schemeModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/schemes/${scheme.slug}`,
          hi: `${baseUrl}/hi/schemes/${scheme.slug}`,
        },
      },
    });
  });

  // 4. Dynamic State Hub Pages (EN + HI)
  const stateRoutes: MetadataRoute.Sitemap = [];
  STATES.forEach((st) => {
    // EN state URL
    stateRoutes.push({
      url: `${baseUrl}/states/${st.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/states/${st.id}`,
          hi: `${baseUrl}/hi/states/${st.id}`,
        },
      },
    });

    // HI state URL
    stateRoutes.push({
      url: `${baseUrl}/hi/states/${st.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/states/${st.id}`,
          hi: `${baseUrl}/hi/states/${st.id}`,
        },
      },
    });
  });

  // 5. Dynamic Category Hub Pages (EN + HI)
  const categoryRoutes: MetadataRoute.Sitemap = [];
  CATEGORIES.forEach((cat) => {
    // EN category URL
    categoryRoutes.push({
      url: `${baseUrl}/categories/${cat.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/categories/${cat.id}`,
          hi: `${baseUrl}/hi/categories/${cat.id}`,
        },
      },
    });

    // HI category URL
    categoryRoutes.push({
      url: `${baseUrl}/hi/categories/${cat.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/categories/${cat.id}`,
          hi: `${baseUrl}/hi/categories/${cat.id}`,
        },
      },
    });
  });

  // 6. Dynamic Updates & Notice Articles (EN + HI)
  const updateRoutes: MetadataRoute.Sitemap = [];
  UPDATES.forEach((up) => {
    const updateModified = up.updatedDate ? new Date(up.updatedDate) : now;

    // EN update URL
    updateRoutes.push({
      url: `${baseUrl}/updates/${up.slug}`,
      lastModified: updateModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/updates/${up.slug}`,
          hi: `${baseUrl}/hi/updates/${up.slug}`,
        },
      },
    });

    // HI update URL
    updateRoutes.push({
      url: `${baseUrl}/hi/updates/${up.slug}`,
      lastModified: updateModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/updates/${up.slug}`,
          hi: `${baseUrl}/hi/updates/${up.slug}`,
        },
      },
    });
  });

  return [
    ...pillarRoutes,
    ...legalRoutes,
    ...schemeRoutes,
    ...stateRoutes,
    ...categoryRoutes,
    ...updateRoutes,
  ];
}

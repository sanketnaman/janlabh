import { NextResponse } from 'next/server';
import { SCHEMES } from '@/data/schemes';
import { STATES, CATEGORIES } from '@/data/categories';
import { UPDATES } from '@/data/updates';

export async function GET() {
  const baseUrl = 'https://janlabh.in';
  const today = new Date().toISOString().split('T')[0];

  interface SitemapEntry {
    loc: string;
    lastmod: string;
    changefreq: 'daily' | 'weekly' | 'monthly';
    priority: string;
  }

  const entries: SitemapEntry[] = [];

  // 1. Core Pillar Pages (EN & HI)
  const corePillars = [
    { path: '', priority: '1.0', freq: 'daily' as const },
    { path: '/schemes', priority: '0.9', freq: 'daily' as const },
    { path: '/states', priority: '0.9', freq: 'weekly' as const },
    { path: '/categories', priority: '0.9', freq: 'weekly' as const },
    { path: '/finder', priority: '0.8', freq: 'weekly' as const },
    { path: '/checker', priority: '0.8', freq: 'weekly' as const },
    { path: '/updates', priority: '0.9', freq: 'daily' as const },
  ];

  corePillars.forEach((p) => {
    // English
    entries.push({
      loc: `${baseUrl}${p.path}`,
      lastmod: today,
      changefreq: p.freq,
      priority: p.priority,
    });
    // Hindi
    entries.push({
      loc: `${baseUrl}/hi${p.path}`,
      lastmod: today,
      changefreq: p.freq,
      priority: p.priority,
    });
  });

  // 2. Legal & Trust Pages
  const legalPages = ['/about', '/privacy-policy', '/terms', '/contact', '/hi/contact', '/disclaimer'];
  legalPages.forEach((route) => {
    entries.push({
      loc: `${baseUrl}${route}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.5',
    });
  });

  // 3. Dynamic Scheme Detail Pages (EN & HI)
  SCHEMES.forEach((scheme) => {
    const schemeDate = scheme.lastVerified
      ? new Date(scheme.lastVerified).toISOString().split('T')[0]
      : today;

    // EN scheme
    entries.push({
      loc: `${baseUrl}/schemes/${scheme.slug}`,
      lastmod: schemeDate,
      changefreq: 'weekly',
      priority: '0.9',
    });

    // HI scheme
    entries.push({
      loc: `${baseUrl}/hi/schemes/${scheme.slug}`,
      lastmod: schemeDate,
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  // 4. Dynamic State Hub Pages (EN & HI)
  STATES.forEach((st) => {
    // EN state
    entries.push({
      loc: `${baseUrl}/states/${st.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.85',
    });

    // HI state
    entries.push({
      loc: `${baseUrl}/hi/states/${st.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.85',
    });
  });

  // 5. Dynamic Category Hub Pages (EN & HI)
  CATEGORIES.forEach((cat) => {
    // EN category
    entries.push({
      loc: `${baseUrl}/categories/${cat.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.85',
    });

    // HI category
    entries.push({
      loc: `${baseUrl}/hi/categories/${cat.id}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.85',
    });
  });

  // 6. Dynamic Updates & Notice Articles (EN & HI)
  UPDATES.forEach((up) => {
    const updateDate = up.updatedDate
      ? new Date(up.updatedDate).toISOString().split('T')[0]
      : today;

    // EN update
    entries.push({
      loc: `${baseUrl}/updates/${up.slug}`,
      lastmod: updateDate,
      changefreq: 'weekly',
      priority: '0.8',
    });

    // HI update
    entries.push({
      loc: `${baseUrl}/hi/updates/${up.slug}`,
      lastmod: updateDate,
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Build XML string matching standard Sitemap 0.9 protocol (no XHTML namespace)
  const xmlUrls = entries
    .map((e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

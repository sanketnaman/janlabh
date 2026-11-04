import Fuse from 'fuse.js';
import { SCHEMES } from '@/data/schemes';
import { UPDATES } from '@/data/updates';
import { Scheme, UpdateArticle } from '@/types';

export interface SearchItem {
  id: string;
  type: 'scheme' | 'update';
  title: string;
  title_hi: string;
  slug: string;
  category: string;
  summary: string;
  keywords: string[];
  rawScheme?: Scheme;
  rawUpdate?: UpdateArticle;
}

const searchCorpus: SearchItem[] = [
  ...SCHEMES.map(s => ({
    id: s.id,
    type: 'scheme' as const,
    title: s.title_en,
    title_hi: s.title_hi,
    slug: s.slug,
    category: s.category,
    summary: s.benefitSummary_en + ' ' + s.benefitSummary_hi,
    keywords: [
      ...s.keywords,
      s.shortTitle_en,
      s.shortTitle_hi,
      s.stateLabel_en,
      s.stateLabel_hi,
      s.benefitAmount_en
    ],
    rawScheme: s
  })),
  ...UPDATES.map(u => ({
    id: u.id,
    type: 'update' as const,
    title: u.title_en,
    title_hi: u.title_hi,
    slug: u.slug,
    category: u.category,
    summary: u.summary_en + ' ' + u.summary_hi,
    keywords: [
      u.title_en,
      u.title_hi,
      'update',
      'news',
      'ताजा अपडेट',
      'खबर',
      'अंतिम तिथि',
      'लिस्ट'
    ],
    rawUpdate: u
  }))
];

const fuseOptions = {
  includeScore: true,
  threshold: 0.38,
  keys: [
    { name: 'title', weight: 0.35 },
    { name: 'title_hi', weight: 0.35 },
    { name: 'keywords', weight: 0.2 },
    { name: 'summary', weight: 0.1 }
  ]
};

const fuse = new Fuse(searchCorpus, fuseOptions);

export function searchJanLabh(query: string): SearchItem[] {
  if (!query || query.trim().length === 0) {
    return [];
  }
  const cleanQuery = query.trim().toLowerCase();
  
  // Exact or prefix title matches ranked first
  const exactMatches = searchCorpus.filter(item => 
    item.title.toLowerCase().includes(cleanQuery) ||
    item.title_hi.toLowerCase().includes(cleanQuery) ||
    item.keywords.some(k => k.toLowerCase().includes(cleanQuery))
  );

  const fuzzyResults = fuse.search(cleanQuery).map(res => res.item);

  // Combine and deduplicate
  const seen = new Set<string>();
  const combined: SearchItem[] = [];

  for (const item of [...exactMatches, ...fuzzyResults]) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      combined.push(item);
    }
  }

  return combined.slice(0, 8);
}

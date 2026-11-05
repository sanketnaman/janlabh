import type { Metadata } from 'next';
import AboutView from './AboutView';

export const metadata: Metadata = {
  title: 'About Us & Editorial Standards | JanLabh.in',
  description: 'Learn about JanLabh.in, our mission to bridge information asymmetry in government schemes, our strict editorial policy, fact-checking methodology, and team.',
  alternates: {
    canonical: 'https://janlabh.in/about',
  },
};

export default function AboutPage() {
  return <AboutView />;
}

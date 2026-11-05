import type { Metadata } from 'next';
import ContactView from './ContactView';

export const metadata: Metadata = {
  title: 'Contact Us & Editorial Grievance Desk | JanLabh.in',
  description: 'Contact the JanLabh research and editorial team. Submit questions, report corrections on government welfare schemes, or seek citizen support.',
  alternates: {
    canonical: 'https://janlabh.in/contact',
  },
};

export default function ContactPage() {
  return <ContactView />;
}

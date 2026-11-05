import React from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Phone,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import QuoteForm from '@/components/QuoteForm';
import { MAIN_FAQS, SITE_CONFIG } from '@/lib/siteData';

export const metadata = {
  title: 'Dryer Vent Cleaning FAQs | 10 Expert Answers | Forney TX',
  description:
    'Got questions about dryer vent cleaning in Forney, TX? Read 10 detailed answers on fire safety, costs, cleaning frequency, and codes.',
};

export default function FaqPage() {
  const faqInternalLinks = [
    {
      label: 'dryer vent cleaning in Forney, TX',
      href: '/services',
      context: 'Pillar Hub',
    },
    {
      label: 'Residential Dryer Vent Cleaning Forney TX',
      href: '/services/residential-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'Commercial Dryer Vent Cleaning Forney TX',
      href: '/services/commercial-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'Dryer Vent Repair Forney TX',
      href: '/services/dryer-vent-repair',
      context: 'Money Service',
    },
    {
      label: 'Clogged Dryer Vent Cleaning Forney TX',
      href: '/services/clogged-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'Residential Dryer Vent Cleaning in Talty, TX',
      href: '/locations/talty-tx',
      context: 'Location Hub',
    },
  ];

  const faqExternalLink = {
    label: 'CPSC clothes dryer safety',
    href: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Clothes-Dryers',
    source: 'U.S. Consumer Product Safety Commission',
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      <div className="space-y-12 lg:space-y-16">
        {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white py-14 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-300 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Comprehensive Help Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Dryer Vent Cleaning FAQs (10 Detailed Answers)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about clothes dryer fire prevention, airflow testing, warning signs of clogs, and local Kaufman County service costs.
          </p>
        </div>
      </section>

      {/* Full 10-Question FAQ Component with Schema */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          items={MAIN_FAQS}
          title="All 10 Dryer Exhaust Safety Questions Answered"
          subtitle="Click any question below to expand the full technical answer from our certified team."
          includeSchema={true}
        />
      </section>

      {/* Internal & External Links Module */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Explore Related Services & National Fire Resources"
          description="Learn more about our specific residential or commercial duct cleaning silos across Forney and nearby cities."
          internalLinks={faqInternalLinks}
          externalLink={faqExternalLink}
        />
      </section>

      {/* Conversion Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <QuoteForm />
      </section>
      </div>
    </div>
  );
}

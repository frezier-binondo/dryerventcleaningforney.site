import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Phone,
  CheckCircle,
  Clock,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import QuoteForm from '@/components/QuoteForm';
import { SITE_CONFIG } from '@/lib/siteData';

export const metadata = {
  title: 'About Our Dryer Vent Cleaning Service in Forney, TX',
  description:
    'Learn who we are, how we match Forney homeowners and businesses with trusted dryer vent cleaning pros, and why safety comes first.',
};

export default function AboutPage() {
  const aboutInternalLinks = [
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
      label: 'areas we serve',
      href: '/locations',
      context: 'Hub',
    },
  ];

  const aboutExternalLink = {
    label: 'NFPA clothes dryer safety guidance',
    href: 'https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers',
    source: 'National Fire Protection Association',
  };

  return (
    <div>
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <div className="space-y-12 lg:space-y-16">
        <section className="relative bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white py-14 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-300 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Dedicated to Kaufman County Safety</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            About Our Dryer Vent Cleaning Service in Forney, TX
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Committed to fire safety, energy reduction, and professional ventilation excellence for homes and commercial facilities across North Texas.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 content-body">
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950">
              Our Mission: Eliminating Clothes Dryer Fire Hazards in North Texas
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              First Choice Dryer Vent Cleaning Forney was established with one paramount goal: to protect our neighbors and local business owners from preventable dryer fires. Dryer lint is one of the most volatile combustible materials found in any household, yet exhaust systems are often completely ignored until machines begin overheating or smoking.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Unlike general carpet or maid services that treat vent clearing as a casual afterthought, our certified technicians focus exclusively on exhaust airflow science. We adhere strictly to the International Residential Code (IRC M1502) and guidelines established by the{' '}
              <a
                href="https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                NFPA clothes dryer safety guidance
              </a>
              .
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              From our dispatch hub in Forney, we deploy fully equipped mobile units across Talty, Terrell, Crandall, Mesquite, and Heath. Every technician on our team undergoes rigorous safety training, background verification, and certification in rotary brush mechanics and digital anemometer airflow diagnostics.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 border-4 border-white">
              <Image
                src="/images/dryer-vent-inspection.jpg"
                alt="First Choice certified dryer vent technician in Forney TX"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Related Silo Services & Regulatory Safety Links"
          description="Explore our specialized silo pages or review official guidance on clothes dryer fire safety."
          internalLinks={aboutInternalLinks}
          externalLink={aboutExternalLink}
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <QuoteForm />
      </section>
      </div>
    </div>
  );
}

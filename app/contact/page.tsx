import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Flame,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { SITE_CONFIG } from '@/lib/siteData';

export const metadata = {
  title: 'Contact First Choice Dryer Vent Cleaning | Forney, TX',
  description:
    'Contact First Choice Dryer Vent Cleaning in Forney, TX. Call (469) 689-7675 or request a fast, free quote online. Serving Kaufman & Dallas counties.',
};

export default function ContactPage() {
  const contactInternalLinks = [
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
      label: 'Clogged Dryer Vent Cleaning Forney TX',
      href: '/services/clogged-dryer-vent-cleaning',
      context: 'Emergency Service',
    },
    {
      label: 'Dryer Vent Repair Forney TX',
      href: '/services/dryer-vent-repair',
      context: 'Duct Repair',
    },
    {
      label: 'areas we serve',
      href: '/locations',
      context: 'Location Hub',
    },
  ];

  const contactExternalLink = {
    label: 'Kaufman County',
    href: 'https://www.kaufmancounty.net/',
    source: 'Kaufman County Official Government',
  };

  const jsonLdContact = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact First Choice Dryer Vent Cleaning Forney',
    description: 'Contact us for free estimates, same-day dryer vent cleaning, and emergency airflow diagnostics in Forney, TX.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.city,
        addressRegion: SITE_CONFIG.state,
        postalCode: SITE_CONFIG.zip,
        addressCountry: 'US',
      },
    },
  };

  return (
    <div>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="space-y-12 lg:space-y-16">
        {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white py-14 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-300 uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Local Forney Dispatch Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Contact First Choice Dryer Vent Cleaning Forney
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to schedule service or get a transparent quote? Call us directly or fill out our fast quote form below. We are here to keep your home safe!
          </p>
        </div>
      </section>

      {/* Main Content Grid: Direct Details + Interactive Quote Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-navy-950">
                Direct Contact Information
              </h2>

              <ul className="space-y-5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-flame-50 text-flame-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      24/7 Telephone & Text
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-black text-navy-950 hover:text-sky-600 transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fast response for homeowners & property managers
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email Dispatch
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-bold text-navy-950 hover:text-sky-600 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Headquarters & Coverage
                    </div>
                    <div className="font-bold text-navy-950">
                      {SITE_CONFIG.address}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {SITE_CONFIG.serviceArea}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Operating Hours
                    </div>
                    <div className="font-bold text-navy-950">
                      Monday – Saturday: 7:00 AM – 7:00 PM
                    </div>
                    <div className="text-xs text-amber-700 font-semibold mt-0.5">
                      Sunday: On-Call for Overheating & Emergency Vents
                    </div>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Travel Fees Throughout Kaufman County</span>
              </div>
            </div>

            {/* Google Map Link Card */}
            <div className="bg-sky-50 border border-sky-200 rounded-3xl p-6 space-y-3">
              <h3 className="font-bold text-navy-950 text-base">
                Find Us on Google Maps
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Click below to view our service boundaries, verified directions, and local Kaufman County customer reviews on Google Maps:
              </p>
              <a
                href={SITE_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-sky-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow"
              >
                <span>View Google Maps Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm initialCity="Forney, TX" />
          </div>
        </div>
      </section>

      {/* VISIBLE INTERACTIVE GOOGLE MAP ON CONTACT PAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-navy-950">
              Interactive Forney Service Area Map
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Serving Forney, TX 75126 and surrounding Kaufman & Dallas County neighborhoods.
            </p>
          </div>
          <a
            href={SITE_CONFIG.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800"
          >
            <span>Open in Maps App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
          <iframe
            src={SITE_CONFIG.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="First Choice Dryer Vent Cleaning Forney Interactive Map"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Internal & External Links Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Related Services & Regional Kaufman County Links"
          description="Explore our specialized silo pages or review official county public safety resources."
          internalLinks={contactInternalLinks}
          externalLink={contactExternalLink}
        />
      </section>
      </div>
    </div>
  );
}

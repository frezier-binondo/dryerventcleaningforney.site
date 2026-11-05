import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Building,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { LOCATIONS_LIST, SITE_CONFIG } from '@/lib/siteData';

export const metadata = {
  title: 'Dryer Vent Cleaning Service Areas Near Forney, TX',
  description:
    'We serve Forney, Talty, Terrell, Crandall, Mesquite and Heath, TX. See where dryer vent cleaning is available and request a free quote today.',
};

export default function LocationsHubPage() {
  const hubInternalLinks = [
    {
      label: 'dryer vent cleaning in Forney, TX',
      href: '/services',
      context: 'Pillar Hub',
    },
    {
      label: 'Residential Dryer Vent Cleaning in Talty',
      href: '/locations/talty-tx',
      context: 'Child Location',
    },
    {
      label: 'Commercial Dryer Vent Cleaning in Talty',
      href: '/locations/talty-tx',
      context: 'Child Location',
    },
    {
      label: 'Residential Dryer Vent Cleaning in Terrell',
      href: '/locations/terrell-tx',
      context: 'Child Location',
    },
    {
      label: 'Commercial Dryer Vent Cleaning in Terrell',
      href: '/locations/terrell-tx',
      context: 'Child Location',
    },
    {
      label: 'Residential Dryer Vent Cleaning in Crandall',
      href: '/locations/crandall-tx',
      context: 'Child Location',
    },
    {
      label: 'Residential Dryer Vent Cleaning in Mesquite',
      href: '/locations/mesquite-tx',
      context: 'Child Location',
    },
    {
      label: 'Residential Dryer Vent Cleaning in Heath',
      href: '/locations/heath-tx',
      context: 'Child Location',
    },
  ];

  const hubExternalLink = {
    label: 'Kaufman County',
    href: 'https://www.kaufmancounty.net/',
    source: 'Kaufman County Official Government',
  };

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Service Areas' }]} />

      {/* Hero Header with Background Image & Call CTA Only (Goal: Generate Calls) */}
      <section className="relative isolate min-h-[460px] sm:min-h-[500px] flex items-center justify-center bg-navy-950 text-white overflow-hidden py-14 sm:py-20">
        <Image
          src="/images/dryer-vent-cleaning.jpg"
          alt="Dryer vent cleaning service areas in Kaufman County TX"
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center filter brightness-[0.32] contrast-110"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Regional Coverage Directory · 5 Nearby Markets</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Dryer Vent Cleaning Service Areas Near{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">
              Forney, TX
            </span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Centrally located in Forney, First Choice proudly delivers rapid-dispatch dryer duct scouring, emergency clog extraction, and fire prevention maintenance to 5 nearby market communities with zero travel surcharges.
          </p>

          {/* High-Impact Call Centerpiece Box */}
          <div className="mx-auto max-w-lg rounded-3xl border-2 border-amber-400/80 bg-navy-900/90 backdrop-blur-md p-6 shadow-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Call For Instant Dispatch in Any Nearby City
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="group block w-full bg-gradient-to-r from-flame-600 to-amber-500 hover:from-flame-700 hover:to-amber-600 text-white font-black py-4 px-6 rounded-2xl shadow-xl transition-all text-xl sm:text-2xl"
            >
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </div>
            </a>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-300 font-medium">
              <span>✓ Forney</span>
              <span>✓ Talty</span>
              <span>✓ Terrell</span>
              <span>✓ Crandall</span>
              <span>✓ Mesquite</span>
              <span>✓ Heath</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of the 5 Target Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Sub-Markets & Surrounding Cities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Select Your City for Local Service Details
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every North Texas municipality has distinct housing architectures—from vintage crawlspace vent lines in Terrell to high-elevation roof vents in Heath and Crandall. Click your city below to learn more:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS_LIST.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={loc.image}
                  alt={`Dryer vent cleaning in ${loc.cityName}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-navy-950/90 text-white text-xs font-black px-3 py-1 rounded-full shadow">
                  {loc.county}
                </span>
                <span className="absolute bottom-3 left-3 bg-amber-400 text-navy-950 text-xs font-black px-2.5 py-1 rounded-full shadow">
                  {loc.distanceFromForney}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-navy-950 group-hover:text-sky-600 transition-colors">
                    <Link href={`/locations/${loc.slug}`}>{loc.cityName}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    ZIPs: {loc.zipCodes.join(', ')}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {loc.housingType}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Neighborhoods:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {loc.neighborhoods.slice(0, 3).map((n, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                      >
                        {n}
                      </span>
                    ))}
                    {loc.neighborhoods.length > 3 && (
                      <span className="text-[11px] text-sky-600 font-bold px-1 py-0.5">
                        +{loc.neighborhoods.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <span>Read {loc.cityName} City Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM MOVED TO BOTTOM AREA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950">
            Request Service in Your City
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Or call <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-sky-600">{SITE_CONFIG.phoneDisplay}</a> for prompt scheduling.
          </p>
        </div>
        <QuoteForm />
      </section>

      {/* Internal & External Links Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Regional Silo Links & County Resources"
          description="We proudly maintain direct connections across Kaufman and Dallas counties. Explore the service links below for exact neighborhood and city specifications."
          internalLinks={hubInternalLinks}
          externalLink={hubExternalLink}
        />
      </section>
    </div>
  );
}

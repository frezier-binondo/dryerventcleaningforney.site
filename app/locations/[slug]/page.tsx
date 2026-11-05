import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Flame,
  Home,
  Building,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { LOCATIONS_LIST, SITE_CONFIG } from '@/lib/siteData';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return LOCATIONS_LIST.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps) {
  const loc = LOCATIONS_LIST.find((l) => l.slug === params.slug);
  if (!loc) return { title: 'Location Not Found' };

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      images: [loc.image],
    },
  };
}

export default function LocationSubPage({ params }: LocationPageProps) {
  const loc = LOCATIONS_LIST.find((l) => l.slug === params.slug);

  if (!loc) {
    notFound();
  }

  const jsonLdLocation = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Dryer Vent Cleaning in ${loc.cityName}`,
    serviceType: 'Dryer Exhaust Cleaning and Fire Prevention',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.city,
        addressRegion: SITE_CONFIG.state,
        postalCode: SITE_CONFIG.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: loc.cityName,
    },
    description: loc.metaDescription,
  };

  return (
    <div>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocation) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Locations', href: '/locations' },
          { label: loc.cityName },
        ]}
      />

      <div className="space-y-12 lg:space-y-16">
        {/* Hero Header with Background Image & Call CTA Only (Goal: Generate Calls) */}
      <section className="relative isolate min-h-[460px] sm:min-h-[500px] flex items-center justify-center bg-navy-950 text-white overflow-hidden py-14 sm:py-20">
        <Image
          src={loc.image}
          alt={`Dryer vent cleaning in ${loc.cityName}`}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center filter brightness-[0.32] contrast-110"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{loc.county} • {loc.distanceFromForney} · Zero Travel Fees</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Dryer Vent Cleaning in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">
              {loc.cityName}
            </span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Serving all {loc.cityName} residential neighborhoods and commercial businesses with specialized rotary brush clearing, HEPA negative air containment, and digital velocity verification.
          </p>

          {/* High-Impact Call Centerpiece Box */}
          <div className="mx-auto max-w-lg rounded-3xl border-2 border-amber-400/80 bg-navy-900/90 backdrop-blur-md p-6 shadow-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Call For Same-Day Service in {loc.cityName}
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
              <span>✓ Direct Dispatch</span>
              <span>✓ Free Phone Quote</span>
              <span>✓ 100% Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections (2,000 words target with deep unique copy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Rich Localized Content */}
          <div className="lg:col-span-8 space-y-8 content-body">
            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-16/9 bg-slate-100">
              <Image
                src={loc.image}
                alt={`Professional dryer vent technician servicing ${loc.cityName}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-navy-950/90 text-white px-4 py-2 rounded-xl text-xs font-bold shadow flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Local Dispatch Territory: {loc.cityName}</span>
              </div>
            </div>

            {/* Neighborhoods & ZIP Code Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-navy-950">
                Neighborhoods & Subdivisions We Service in {loc.cityName}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our technicians provide comprehensive coverage across ZIP code(s):{' '}
                <span className="font-bold text-navy-900">{loc.zipCodes.join(', ')}</span>.
                Whether you live in an established subdivision, an acreage estate, or a modern master-planned community, we are equipped for your duct layout:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {loc.neighborhoods.map((n, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span className="truncate">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            {loc.contentSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
                  {sec.heading}
                </h2>
                {sec.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed text-base">
                    {p}
                  </p>
                ))}

                {/* Mid-content photo showcase after section 1 */}
                {idx === 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-1.5">
                      <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                          src="/images/duct-brush-close-up.jpg"
                          alt={`Rotary scrubbing equipment clearing lint in ${loc.cityName}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-[11px] font-bold text-slate-700">Mechanical Rotary Scouring</div>
                      <p className="text-[10px] text-slate-500">Reverse-spinning bristles dislodge deep lint cake.</p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                          src="/images/dryer-vent-unclogging.jpg"
                          alt={`Lint blockage extracted in ${loc.cityName} home`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-[11px] font-bold text-slate-700">High-Vacuum Extraction</div>
                      <p className="text-[10px] text-slate-500">HEPA negative-air capture keeps indoor air clean.</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Local FAQs */}
            {loc.localFaqs && loc.localFaqs.length > 0 && (
              <FaqAccordion
                items={loc.localFaqs}
                title={`${loc.cityName} Service FAQs`}
                subtitle={`Frequently asked questions from homeowners and property managers in ${loc.cityName}.`}
              />
            )}
          </div>

          {/* Right Column: Sticky Sidebar with Service Areas Nav & Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-navy-900 text-white rounded-3xl p-6 space-y-4 shadow-lg sticky top-24">
              <div className="inline-flex items-center gap-1.5 bg-sky-500 text-white font-black text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Local Mobile Unit</span>
              </div>
              <h4 className="text-xl font-bold">Fast Service in {loc.cityName}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We are just minutes away from {loc.cityName}. Contact our dispatch specialist to book your inspection:
              </p>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full bg-gradient-to-r from-flame-600 to-flame-500 hover:from-flame-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow flex items-center justify-center gap-2 text-sm transition-transform transform hover:scale-105"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              {/* Sibling Locations */}
              <div className="pt-4 border-t border-navy-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Other Nearby Markets:
                </div>
                <div className="space-y-1">
                  {LOCATIONS_LIST.map((otherLoc) => (
                    <Link
                      key={otherLoc.id}
                      href={`/locations/${otherLoc.slug}`}
                      className={`block text-xs py-1.5 px-2.5 rounded-lg transition-colors ${
                        otherLoc.slug === loc.slug
                          ? 'bg-sky-600 text-white font-bold'
                          : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                      }`}
                    >
                      • {otherLoc.cityName} ({otherLoc.distanceFromForney})
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM MOVED TO BOTTOM AREA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950">
            Request Service in {loc.cityName}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Or call <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-sky-600">{SITE_CONFIG.phoneDisplay}</a> for immediate assistance.
          </p>
        </div>
        <QuoteForm initialCity={loc.cityName} />
      </section>

      {/* Internal & External Links Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title={`Related Silos & City Links for ${loc.cityName}`}
          description={`Connect directly with specialized dryer exhaust services or inspect county safety resources for ${loc.cityName}.`}
          internalLinks={loc.internalLinks}
          externalLink={loc.externalLink}
        />
      </section>
      </div>
    </div>
  );
}

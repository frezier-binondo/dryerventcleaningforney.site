import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  ShieldCheck,
  CheckCircle,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MapPin,
  Flame,
  HelpCircle,
  FileCheck,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { SERVICES_LIST, SITE_CONFIG } from '@/lib/siteData';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default function ServiceSubPage({ params }: ServicePageProps) {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
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
      name: 'Forney, TX and Kaufman County',
    },
    description: service.metaDescription,
  };

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Hero Header with Background Image & Call CTA Only (Goal: Generate Calls) */}
      <section className="relative isolate min-h-[460px] sm:min-h-[500px] flex items-center justify-center bg-navy-950 text-white overflow-hidden py-14 sm:py-20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center filter brightness-[0.32] contrast-110"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Forney Silo Service • Kaufman County</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {service.h1}
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {service.shortDesc} Serving Forney, Talty, Terrell, Crandall, Mesquite, and Heath with upfront pricing and certified safety standards.
          </p>

          {/* High-Impact Call Centerpiece Box */}
          <div className="mx-auto max-w-lg rounded-3xl border-2 border-amber-400/80 bg-navy-900/90 backdrop-blur-md p-6 shadow-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Need Same-Day Dispatch in Forney?
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
              <span>✓ Free Phone Estimates</span>
              <span>✓ Rapid Response</span>
              <span>✓ Zero Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body (800+ Words Structured Content) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Rich Content */}
          <div className="lg:col-span-8 space-y-10 content-body">
            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-16/9 bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              {service.badge && (
                <div className="absolute top-4 left-4 bg-navy-950/90 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold shadow">
                  {service.badge}
                </div>
              )}
            </div>

            {/* Content Sections */}
            {service.contentSections.map((section, idx) => (
              <div key={idx} className="space-y-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed text-base">
                    {p}
                  </p>
                ))}

                {/* Secondary process photo after section 1 */}
                {idx === 0 && (
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/duct-brush-close-up.jpg"
                        alt="Rotary brush clearing lint in ductwork"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/dryer-vent-inspection.jpg"
                        alt="Camera inspection of dryer exhaust velocity"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Features & Equipment List */}
            <div className="bg-sky-50/60 rounded-3xl p-6 sm:p-8 border border-sky-100 space-y-4">
              <h3 className="text-xl font-bold text-navy-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
                <span>Our Certified Equipment & Process Standards</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="bg-white p-3.5 rounded-xl border border-sky-200/60 shadow-xs flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQ Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <FaqAccordion
                items={service.faqs}
                title={`Questions About ${service.title}`}
                subtitle="Local insights, costs, and safety expectations for Kaufman County clients."
              />
            )}
          </div>

          {/* Right Column: Sticky Sidebar with Service Nav & Fast Call */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-navy-900 text-white rounded-3xl p-6 space-y-4 shadow-lg sticky top-24">
              <div className="inline-flex items-center gap-1.5 bg-amber-400 text-navy-950 font-black text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Prompt Scheduling</span>
              </div>
              <h4 className="text-xl font-bold">Need This Service Today?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our technicians are actively working in Forney and Kaufman County. Speak directly with a specialist:
              </p>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full bg-gradient-to-r from-flame-600 to-flame-500 hover:from-flame-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow flex items-center justify-center gap-2 text-sm transition-transform transform hover:scale-105"
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              {/* Service Silo Nav Links */}
              <div className="pt-4 border-t border-navy-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  All 9 Silo Services:
                </div>
                <div className="space-y-1">
                  {SERVICES_LIST.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className={`block text-xs py-1.5 px-2 rounded-lg transition-colors ${
                        s.slug === service.slug
                          ? 'bg-sky-600 text-white font-bold'
                          : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                      }`}
                    >
                      • {s.title}
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
            Request an Estimate for {service.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Or call <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-sky-600">{SITE_CONFIG.phoneDisplay}</a> for direct dispatch.
          </p>
        </div>
        <QuoteForm initialService={service.title} />
      </section>

      {/* Internal & External Links Section for this Sub-Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title={`Related Silos & City Pages for ${service.title}`}
          description={`Ensure your clothes dryer venting meets all Kaufman County fire safety standards. Connect with related specialized services or explore our nearby city hubs.`}
          internalLinks={service.internalLinks}
          externalLink={service.externalLink}
        />
      </section>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ShieldCheck,
  Flame,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  Wrench,
  Building2,
  FileCheck,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { SITE_CONFIG, SERVICES_LIST, LOCATIONS_LIST, MAIN_FAQS } from '@/lib/siteData';

export const metadata = {
  title: 'Dryer Vent Cleaning Forney, TX',
  description:
    'Professional dryer vent cleaning in Forney, TX for homes and businesses. Reduce fire risk, speed up drying and get a free quote today.',
};

export default function ServicesPillarPage() {
  const pillarInternalLinks = [
    {
      label: 'Residential Dryer Vent Cleaning in Forney, TX',
      href: '/services/residential-dryer-vent-cleaning',
      context: 'Child Service',
    },
    {
      label: 'Commercial Dryer Vent Cleaning in Forney, TX',
      href: '/services/commercial-dryer-vent-cleaning',
      context: 'Child Service',
    },
    {
      label: 'Apartment Dryer Vent Cleaning in Forney, TX',
      href: '/services/apartment-dryer-vent-cleaning',
      context: 'Child Service',
    },
    {
      label: 'Laundromat Dryer Vent Cleaning in Forney, TX',
      href: '/services/laundromat-dryer-vent-cleaning',
      context: 'Child Service',
    },
    {
      label: 'Dryer Vent Repair in Forney, TX',
      href: '/services/dryer-vent-repair',
      context: 'Child Service',
    },
    {
      label: 'Clogged Dryer Vent Cleaning in Forney, TX',
      href: '/services/clogged-dryer-vent-cleaning',
      context: 'Child Service',
    },
    {
      label: 'Roof Dryer Vent Cleaning in Forney, TX',
      href: '/services/roof-dryer-vent-cleaning',
      context: 'Child Service',
    },
    {
      label: 'Dryer Vent Installation in Forney, TX',
      href: '/services/dryer-vent-installation',
      context: 'Child Service',
    },
    {
      label: 'Dryer Vent Inspection in Forney, TX',
      href: '/services/dryer-vent-inspection',
      context: 'Child Service',
    },
    {
      label: 'areas we serve',
      href: '/locations',
      context: 'Hub',
    },
  ];

  const pillarExternalLink = {
    label: 'NFPA clothes dryer safety guidance',
    href: 'https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers',
    source: 'National Fire Protection Association',
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Services Silo' }]} />

      <div className="space-y-14">
        {/* Hero Header with Background Image & Call CTA Only (Goal: Generate Calls) */}
      <section className="relative isolate min-h-[480px] sm:min-h-[540px] flex items-center justify-center bg-navy-950 text-white overflow-hidden py-16 sm:py-20">
        <Image
          src="/images/commercial-dryer-vent-cleaning.jpg"
          alt="Dryer vent cleaning services in Forney TX"
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center filter brightness-[0.34] contrast-110"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-950/75 to-navy-950/95" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Dryer Exhaust Silo Hub · Forney & Kaufman County</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Dryer Vent Cleaning in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-sky-400">
              Forney, TX
            </span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            The authoritative guide and complete service catalog for residential homes, commercial facilities, multi-family communities, and industrial tumble dryers throughout Forney and Kaufman County.
          </p>

          {/* Hero Call Centerpiece */}
          <div className="mx-auto max-w-lg rounded-3xl border-2 border-amber-400/80 bg-navy-900/90 backdrop-blur-md p-6 shadow-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Speak with a Certified Vent Specialist Now
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
              <span>✓ Same-Day Available</span>
              <span>✓ 100% Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT DRYER VENT CLEANING IS & WHY IT MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 space-y-8 content-body">
          <div className="space-y-4">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full">
              Pillar Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-950 tracking-tight">
              Understanding Dryer Vent Systems & Why Professional Cleaning Is Vital
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              A clothes dryer functions by circulating high-temperature air through wet laundry, vaporizing moisture, and exhausting that saturated air outdoors. Along with water vapor, thousands of microscopic textile fibers are dislodged from clothes with every rotation of the drum.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              While the internal mesh filter catches approximately 60% of coarse lint, the remaining 40% escapes past the blower fan and enters the exhaust ductwork. When lint adheres to the interior walls of your duct, it acts like arterial plaque, steadily constricting the volume of air that can escape. As documented by the{' '}
              <a
                href="https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                NFPA clothes dryer safety guidance
              </a>
              , failure to clean dryer ducts is the leading cause of dryer fires in North America.
            </p>
          </div>

          {/* 3 Pillars of Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">1. Catastrophic Fire Risk</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lint is highly combustible cellulose fiber. When restricted airflow causes appliance heating coils or gas flames to reach critical temperatures, trapped lint can ignite instantly, turning metal ducting into a blowtorch inside your walls.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">2. Skyrocketing Electric Bills</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A dryer with a clogged duct requires 2 to 3 cycles (120+ minutes) to dry a single load of towels. This unnecessary energy drain can add $20 to $40 every month to your Kaufman County utility statement.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">3. Premature Machine Failure</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Constant thermal backpressure overworks internal thermostats, snaps thermal fuses, burns out electric heating coils, and wears out motor bearings, cutting a \$1,200 appliance lifespan in half.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ALL 9 SERVICES OVERVIEW & SILO NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Comprehensive Silo Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Explore All 9 Dryer Vent Silo Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Click any specialized service below to review local specifications, step-by-step procedures, pricing criteria, and customer case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv, index) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-navy-950/90 text-white text-xs font-black px-3 py-1 rounded-full shadow">
                  Service 0{index + 1}
                </span>
                {srv.badge && (
                  <span className="absolute top-3 right-3 bg-amber-400 text-navy-950 text-xs font-black px-2.5 py-1 rounded-full shadow">
                    {srv.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-950 group-hover:text-sky-600 transition-colors">
                    <Link href={`/services/${srv.slug}`}>{srv.title}</Link>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors group"
                  >
                    <span>Read Silo Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: RESIDENTIAL VS COMMERCIAL VENTILATION IN FORNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Sector Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Residential vs. Commercial Dryer Vent Systems
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Residential vents typically consist of 4-inch rigid aluminum tubing spanning 10 to 25 feet, running through attics or floor cavities. In contrast, commercial facilities like laundromats, hotels, and athletic facilities utilize heavy-gauge spiral steel ducting up to 8 to 12 inches in diameter, exhausting banks of 50-lb to 100-lb capacity tumble dryers.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              First Choice maintains specialized tools for both sectors: compact rotary whips and HEPA negative-air collectors for single-family residences, and 175-PSI pneumatic reverse-skipping air whips and high-CFM industrial blowers for commercial laundries.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 border-2 border-white/10">
            <Image
              src="/images/commercial-dryer-vent-cleaning.jpg"
              alt="Commercial dryer vent cleaning in Forney TX"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ ACCORDION FOR SERVICES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          items={MAIN_FAQS.slice(0, 6)}
          title="Service Silo Frequently Asked Questions"
          subtitle="Clear guidance on dryer duct inspection methods, maintenance schedules, and codes."
        />
      </section>

      {/* SECTION 5: FORM MOVED TO BOTTOM AREA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-3xl font-black text-navy-950">
            Request an Online Dryer Vent Quote
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Fill out the form below or call <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-sky-600">{SITE_CONFIG.phoneDisplay}</a> for instant phone pricing.
          </p>
        </div>
        <QuoteForm />
      </section>

      {/* INTERNAL & EXTERNAL LINKS SILO MODULE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Related Services & Regional Kaufman County Links"
          description="Navigate directly to specialized service sub-pages or authoritative regulatory standards."
          internalLinks={pillarInternalLinks}
          externalLink={pillarExternalLink}
        />
      </section>
      </div>
    </div>
  );
}

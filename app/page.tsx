import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Zap,
  Gauge,
  MapPin,
  ChevronRight,
  ShieldAlert,
  ThumbsUp,
  ExternalLink,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { SITE_CONFIG, SERVICES_LIST, LOCATIONS_LIST, MAIN_FAQS } from '@/lib/siteData';

export const metadata = {
  title: 'Dryer Vent Cleaning in Forney, TX',
  description:
    'Find trusted dryer vent cleaning in Forney, TX. Compare residential and commercial pros, cut fire risk and get a free quote in minutes.',
};

export default function HomePage() {
  const homeInternalLinks = [
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
      label: 'Roof Dryer Vent Cleaning Forney TX',
      href: '/services/roof-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'dryer vent cleaning in Forney, TX',
      href: '/services',
      context: 'Pillar Hub',
    },
  ];

  const homeExternalLink = {
    label: 'NFPA clothes dryer safety guidance',
    href: 'https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers',
    source: 'National Fire Protection Association',
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* HIGH-CONVERSION HERO SECTION WITH BACKGROUND IMAGE & CALL CTA ONLY (Like primeplumberphoenix.com) */}
      <section className="relative isolate min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-navy-950 text-white overflow-hidden py-16 sm:py-24">
        {/* Background Image with Dark Vignette Overlay */}
        <Image
          src="/images/hero-dryer-vent.jpg"
          alt="Dryer vent cleaning technician on roof in Forney TX"
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center filter brightness-[0.38] contrast-110"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/90 via-navy-950/75 to-navy-950/95" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/30 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>FORNEY & KAUFMAN COUNTY DRYER VENT SPECIALISTS · AVAILABLE NOW</span>
          </div>

          {/* Main H1 Headline in 2 Distinct Lines */}
          <h1 className="mx-auto max-w-5xl font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight text-white drop-shadow-md">
            <span className="block">
              Dryer Vent Cleaning in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                Forney, TX
              </span>
            </span>
            <span className="block mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-300 font-extrabold tracking-tight">
              You Can Call Now
            </span>
          </h1>

          {/* Subtitle / Value Prop */}
          <p className="mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed font-medium drop-shadow-sm">
            Stop dangerous dryer fires, cut drying cycles in half, and lower utility bills. Our certified Kaufman County technicians are on standby for same-day dispatch and emergency lint clearing.
          </p>

          {/* High-Impact Call Centerpiece Box - Pure Call Generation */}
          <div className="mx-auto max-w-xl rounded-3xl border-2 border-amber-400/80 bg-navy-900/90 backdrop-blur-md p-6 sm:p-8 shadow-2xl space-y-4 transform hover:scale-[1.01] transition-transform">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Direct Technician Dispatch Hotline</span>
            </div>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="group block w-full bg-gradient-to-r from-flame-600 via-flame-500 to-amber-500 hover:from-flame-700 hover:to-amber-600 text-white font-black py-4 sm:py-5 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xl sm:text-3xl tracking-tight"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" />
                </div>
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 font-semibold flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Free Phone Quote
              </span>
              <span className="flex items-center gap-1 text-sky-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Same-Day Available
              </span>
              <span className="flex items-center gap-1 text-amber-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Zero Trip Fees
              </span>
            </p>
          </div>

          {/* Quick Nav Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="text-slate-400">Fast Navigation:</span>
            <a href="#services-grid" className="hover:text-amber-400 underline underline-offset-4 font-semibold transition-colors">
              Our 9 Services ↓
            </a>
            <span className="text-slate-600">•</span>
            <a href="#service-areas" className="hover:text-amber-400 underline underline-offset-4 font-semibold transition-colors">
              Nearby Cities ↓
            </a>
            <span className="text-slate-600">•</span>
            <a href="#quote-form" className="hover:text-amber-400 underline underline-offset-4 font-semibold transition-colors">
              Online Estimate Form ↓
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY DRYER VENT CLEANING MATTERS IN FORNEY (Fire risk, energy, dry times) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 content-body">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Fire Safety & Energy Conservation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-950 tracking-tight leading-tight">
              Why Dryer Vent Cleaning Matters for Every Forney Home
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              According to the{' '}
              <a
                href="https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                NFPA clothes dryer safety guidance
              </a>
              , clothes dryers are involved in more than 15,000 structural home fires each year, resulting in millions of dollars in property damage. The leading cause by far is a simple failure to clean lint from exhaust ducts.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              In growing Kaufman County communities such as Windmill Farms, Gateway, Devonshire, and Travis Ranch, laundry rooms are often placed in the interior of modern floorplans. This means exhaust ducting must travel through 15 to 30 feet of wall cavities or vertical attic drops to reach the roof. Over months of regular use, humid cotton fibers accumulate along the corrugated ridges of the pipe.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              A restricted exhaust duct forces your dryer&apos;s electrical elements or gas burners to overheat, doubling your drying cycles and driving up monthly utility bills. Routine servicing with{' '}
              <Link href="/services" className="inline-link">
                dryer vent cleaning in Forney, TX
              </Link>{' '}
              restores factory-certified airflow, reduces dry times to 35 minutes, and prevents dangerous thermal ignition.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 border-4 border-white">
              <Image
                src="/images/duct-brush-close-up.jpg"
                alt="Rotary brush clearing lint clog inside dryer vent duct in Forney TX"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-500 text-navy-950 p-4 rounded-2xl shadow-lg border-2 border-white max-w-[220px]">
              <div className="text-xs font-bold uppercase tracking-wider">Over 15,000</div>
              <div className="text-sm font-black leading-tight">Dryer Fires Prevented Annually with Routine Cleaning</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES GRID (6 Priority Services with Short Blurbs & Links) */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Exhaust Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Our Certified Dryer Vent Services in Forney
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From single-family homes in Kaufman County to high-volume commercial laundries and multi-family communities, explore our full spectrum of specialized dryer duct solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-navy-900/90 text-amber-400 backdrop-blur-md text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy-950 group-hover:text-sky-600 transition-colors">
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-between w-full pt-2 text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors border-t border-slate-100"
                >
                  <span>Learn More & Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* REAL FIELD WORK & BEFORE/AFTER PHOTO GALLERY */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Real Forney Field Work
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950">
              See the Difference: Real Cleanings & Blockage Removals
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Photographed on-site by our certified technicians across Kaufman and Rockwall counties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2 group">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/dryer-vent-unclogging.jpg"
                  alt="Severe lint blockage extracted from Forney dryer vent"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-bold text-navy-950">Dense Lint Unclogging</div>
              <p className="text-[11px] text-slate-500">Massive lint felt extracted from 25-ft run.</p>
            </div>

            <div className="space-y-2 group">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/dryer-vent-bird-nest-removal.jpg"
                  alt="Bird nest removal from outside dryer vent cap in Forney TX"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-bold text-navy-950">Bird Nest Extraction</div>
              <p className="text-[11px] text-slate-500">Twigs and down removed & pest guard installed.</p>
            </div>

            <div className="space-y-2 group">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/dryer-vent-inspection.jpg"
                  alt="Camera inspection of dryer exhaust duct"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-bold text-navy-950">Airflow Diagnostics</div>
              <p className="text-[11px] text-slate-500">Fiber-optic camera & CFM velocity check.</p>
            </div>

            <div className="space-y-2 group">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/dryer-vent-replacement.jpg"
                  alt="Code-compliant rigid metal dryer vent replacement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-bold text-navy-950">Rigid Duct Replacement</div>
              <p className="text-[11px] text-slate-500">Replacing crushed foil with 26-gauge steel.</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl shadow transition-all duration-200 text-sm"
          >
            <span>View All 9 Specialized Silo Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (Request Quote > Get Matched > Service Done) */}
      <section className="bg-gradient-to-br from-slate-100 to-sky-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              Hassle-Free 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
              How Our Forney Vent Cleaning Service Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We make safeguarding your home and cutting drying times completely effortless from first contact to final airflow test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 font-black text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">
                1. Call or Request Estimate
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Call our dispatch team at <span className="font-bold text-navy-900">{SITE_CONFIG.phoneDisplay}</span> or submit our 60-second online form with your location and dryer symptoms.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 font-black text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">
                2. On-Site Inspection & Scour
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our certified technician arrives promptly in a fully equipped mobile unit, conducts pre-service velocity diagnostics, and mechanically scrubs the entire duct line.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 font-black text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">
                3. Airflow Verified & Safe
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We perform a final digital anemometer velocity test, inspect the exterior damper, leave your laundry space spotless, and hand you a written safety certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE AREAS (Forney, Talty, Terrell, Crandall, Mesquite, Heath) */}
      <section id="service-areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Local Service Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
              Proudly Serving Forney & Kaufman County
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Zero travel surcharges across all neighboring DFW east-corridor cities.
            </p>
          </div>
          <Link
            href="/locations"
            className="text-sky-600 hover:text-sky-800 font-bold text-sm inline-flex items-center gap-1 shrink-0"
          >
            <span>Explore All 5 Location Hubs</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LOCATIONS_LIST.map((loc) => (
            <Link
              key={loc.id}
              href={`/locations/${loc.slug}`}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-sky-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-black text-base text-navy-950 group-hover:text-sky-600 transition-colors">
                  {loc.cityName}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {loc.distanceFromForney}
                </p>
                <div className="text-[11px] text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded-md mt-2 inline-block">
                  {loc.county}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 text-xs font-bold text-sky-600 flex items-center justify-between">
                <span>View Details</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5: TRUST BLOCK (Reviews, Guarantees, Diagnostic Metrics) */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 rounded-3xl mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Verified Customer Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Forney Homeowners Rate Us #1
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Real results, verified velocity improvements, and spotless cleanup on every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-950/80 p-6 rounded-2xl border border-navy-700 space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Our dryer was taking nearly 2 hours to dry a load of sheets in our Devonshire home. First Choice came out the same afternoon, pulled out a massive lint plug and bird nest, and now everything dries in 35 minutes!&rdquo;
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Sarah M.</span>
                <span className="text-slate-400">Forney, TX (Devonshire)</span>
              </div>
            </div>

            <div className="bg-navy-950/80 p-6 rounded-2xl border border-navy-700 space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;We manage 48 apartment units off Highway 80. First Choice handled our multi-family dryer vent cleaning seamlessly with great tenant communication, written airflow logs, and very fair volume pricing.&rdquo;
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Marcus T.</span>
                <span className="text-slate-400">Property Director, Forney</span>
              </div>
            </div>

            <div className="bg-navy-950/80 p-6 rounded-2xl border border-navy-700 space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                {'★'.repeat(5)}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Very courteous technician who wore shoe covers and vacuumed every speck of dust. He tested the airflow with a digital meter before and after—the difference was night and day! Highly recommend.&rdquo;
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">David & Elena R.</span>
                <span className="text-slate-400">Talty, TX</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-navy-800 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-black text-amber-400">100%</div>
              <div className="text-xs text-slate-300 font-semibold">Lint Clearance Guarantee</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-sky-400">0 lbs</div>
              <div className="text-xs text-slate-300 font-semibold">Zero Mess Inside Your Home</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-emerald-400">50%</div>
              <div className="text-xs text-slate-300 font-semibold">Faster Drying Times</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-black text-amber-400">24/7</div>
              <div className="text-xs text-slate-300 font-semibold">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SHORT FAQ (4 Questions on Home) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          items={MAIN_FAQS.slice(0, 4)}
          title="Common Questions from Forney Homeowners"
          subtitle="Fast facts on dryer safety, inspection schedules, and pricing."
        />
        <div className="text-center mt-6">
          <Link
            href="/faq"
            className="text-sky-600 hover:text-sky-800 font-bold text-sm inline-flex items-center gap-1.5"
          >
            <span>Have more questions? Read our full 10-Question FAQ guide &rarr;</span>
          </Link>
        </div>
      </section>

      {/* INTERNAL & EXTERNAL LINKING MODULE (Meeting the 5+ internal & 1 external link requirement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Explore Related Services & Nearby Kaufman County Areas"
          description="Maintain proper dryer ventilation throughout North Texas. Connect directly with our specific silo branches and authoritative safety resources."
          internalLinks={homeInternalLinks}
          externalLink={homeExternalLink}
        />
      </section>

      {/* SECTION 7: MOVED QUOTE FORM TO THE BOTTOM AREA AS REQUESTED */}
      <section id="quote-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            Online Service Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Prefer an Online Estimate? Request Yours Below
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Fill in your details and our local Forney dispatch team will contact you promptly with clear, upfront pricing.
          </p>
        </div>
        <QuoteForm initialCity="Forney, TX" />
      </section>

      {/* FINAL BOTTOM CALL BANNER: MAXIMUM CONVERSION FOCUS */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white rounded-3xl mx-4 sm:mx-8 mb-12 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Fastest Way to Get Service
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Speak Directly with a Forney Dryer Vent Specialist
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Call now for instant phone estimates, urgent clog removals, or same-day scheduling across Kaufman County.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-flame-600 hover:bg-flame-700 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-xl"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              <span>Call Now: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

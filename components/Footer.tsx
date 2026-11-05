import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Flame, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { SITE_CONFIG, SERVICES_LIST, LOCATIONS_LIST } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-sky-500 to-amber-500 flex items-center justify-center text-white shadow">
                <Flame className="w-6 h-6 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-tight leading-none">
                  First Choice
                </span>
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mt-0.5">
                  Dryer Vent Cleaning Forney
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Forney and Kaufman County&apos;s trusted specialists in residential and commercial dryer exhaust scouring, fire hazard mitigation, airflow diagnostics, and code-compliant installations.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-flame-600 to-flame-500 hover:from-flame-700 hover:to-flame-600 text-white font-bold px-4 py-2.5 rounded-xl shadow transition-transform transform hover:scale-105 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Core Services Silo Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-navy-800 pb-2">
              Dryer Vent Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES_LIST.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky-500 text-xs">▸</span>
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sky-400 hover:text-white font-semibold text-xs flex items-center gap-1 mt-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas & Nearby Markets */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-navy-800 pb-2">
              Nearby Service Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {LOCATIONS_LIST.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{loc.cityName}</span>
                    <span className="text-[11px] text-slate-500">({loc.county})</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-slate-400">
                Also serving Crandall, Talty, Terrell, Heath, Mesquite, and all Kaufman County neighborhoods.
              </li>
            </ul>
          </div>

          {/* Contact, Hours & Trust Badges */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-navy-800 pb-2">
              Direct Contact & Hours
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Forney, TX 75126 & Surrounding Kaufman County</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-flame-500 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white font-bold text-amber-400">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white text-xs truncate">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.hours}</span>
              </li>
            </ul>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Certified • Licensed • Insured Pros</span>
            </div>
          </div>
        </div>

        {/* VISIBLE GOOGLE MAP SECTION AS REQUIRED */}
        <div className="py-10 border-b border-navy-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy-800 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Official Forney Service Territory Map
              </div>
              <h4 className="text-xl font-bold text-white">
                Find First Choice Dryer Vent Cleaning in Forney, TX
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Centrally dispatched from Forney to provide rapid same-day response across Kaufman and Rockwall Counties.
              </p>
            </div>
            <a
              href={SITE_CONFIG.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Responsive Map Iframe Container */}
          <div className="w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-navy-700 shadow-2xl relative bg-navy-900">
            <iframe
              src={SITE_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="First Choice Dryer Vent Cleaning Forney Service Location Map"
              className="w-full h-full filter saturate-150 contrast-105"
            />
            {/* Overlay badge inside map */}
            <div className="absolute bottom-4 left-4 bg-navy-950/90 backdrop-blur-md border border-navy-700 px-4 py-2 rounded-xl text-xs text-white shadow-lg pointer-events-none hidden sm:block">
              <div className="font-bold text-amber-400">First Choice Dryer Vent Cleaning</div>
              <div className="text-slate-300">Forney, TX 75126 | +1 (469) 689-7675</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & External Authority Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} First Choice Dryer Vent Cleaning Forney. All rights reserved. Professional Dryer Vent Cleaning & Repair.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>NFPA Safety Guidance</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Clothes-Dryers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>CPSC Safety Center</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

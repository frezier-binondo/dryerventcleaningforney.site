'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Flame, Menu, X, ChevronDown, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG, SERVICES_LIST, LOCATIONS_LIST } from '@/lib/siteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Top Announcement & Emergency Bar */}
      <div className="bg-navy-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Licensed & Insured Vent Safety Pros
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon–Sat: 7AM–7PM | Emergency Calls
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Serving Forney & Kaufman County
            </span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-1.5 bg-flame-600 hover:bg-flame-700 text-white px-3 py-1 rounded-full font-bold text-xs tracking-wide transition-all shadow-sm transform hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              Call 24/7: {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-700 to-navy-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-7 h-7 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-navy-950 leading-none">
                First Choice
              </span>
              <span className="text-xs sm:text-sm font-bold text-sky-700 tracking-wider uppercase mt-0.5">
                Dryer Vent Cleaning Forney
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
              </Link>

              {servicesDropdown && (
                <div className="absolute left-0 top-full w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Our Cleaning & Repair Silo
                  </div>
                  {SERVICES_LIST.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600">
                          {srv.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {srv.shortDesc}
                        </div>
                      </div>
                      {srv.badge && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                          {srv.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href="/services"
                      className="block text-center text-xs font-bold text-sky-600 hover:text-sky-800 py-1"
                    >
                      View All 9 Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/locations"
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/locations')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Locations
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {locationsDropdown && (
                <div className="absolute left-0 top-full w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Nearby Service Areas
                  </div>
                  {LOCATIONS_LIST.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600">
                          {loc.cityName}
                        </div>
                        <div className="text-xs text-slate-500">
                          {loc.distanceFromForney}
                        </div>
                      </div>
                      <span className="text-xs text-sky-500 group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href="/locations"
                      className="block text-center text-xs font-bold text-sky-600 hover:text-sky-800 py-1"
                    >
                      View All 5 Service Markets &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname.startsWith('/blog')
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/faq'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/contact'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-slate-800 hover:text-sky-600 font-bold text-sm tracking-tight transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                <Phone className="w-4 h-4" />
              </div>
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="bg-navy-900 hover:bg-sky-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 text-sm transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="p-2.5 bg-flame-50 text-flame-600 rounded-xl"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>

          <div>
            <div className="flex justify-between items-center px-3 py-2 font-bold text-slate-800 border-b border-slate-100">
              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
                Services Hub
              </Link>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
            <div className="pl-4 mt-1 space-y-1">
              {SERVICES_LIST.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  • {srv.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center px-3 py-2 font-bold text-slate-800 border-b border-slate-100">
              <Link href="/locations" onClick={() => setMobileMenuOpen(false)}>
                Locations & Nearby Markets
              </Link>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
            <div className="pl-4 mt-1 space-y-1">
              {LOCATIONS_LIST.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/locations/${loc.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm text-slate-600 hover:text-sky-600"
                >
                  • {loc.cityName}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            Blog & Safety Guides
          </Link>

          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            Frequently Asked Questions
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-bold text-slate-800 hover:bg-slate-50"
          >
            Contact Us
          </Link>

          <div className="pt-4 space-y-2">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 w-full bg-flame-600 hover:bg-flame-700 text-white font-bold py-3 rounded-xl shadow"
            >
              <Phone className="w-4 h-4" />
              Call Now: {SITE_CONFIG.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-navy-900 hover:bg-navy-950 text-white font-bold py-3 rounded-xl shadow"
            >
              Get a Free Instant Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

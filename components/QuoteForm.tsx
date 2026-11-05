'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle, ShieldAlert, Send, Sparkles } from 'lucide-react';
import { SITE_CONFIG, SERVICES_LIST, LOCATIONS_LIST } from '@/lib/siteData';

interface QuoteFormProps {
  initialService?: string;
  initialCity?: string;
  className?: string;
}

export default function QuoteForm({ initialService = '', initialCity = '', className = '' }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Residential Dryer Vent Cleaning',
    city: initialCity || 'Forney, TX',
    propertyType: 'Residential',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden ${className}`}>
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500" />

      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-navy-950">
            Quote Request Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. Our Forney dispatch team is reviewing your details and will call or text you shortly at <span className="font-semibold text-sky-600">{formData.phone}</span> with your customized estimate.
          </p>
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-2">Need immediate same-day service?</p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-flame-600 hover:bg-flame-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Now: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Fast & Free Estimates</span>
            </div>
            <h3 className="text-2xl font-black text-navy-950 tracking-tight">
              Get Your Free Vent Quote
            </h3>
            <p className="text-xs text-slate-500">
              Zero obligation. Same-day & weekend appointments available across Kaufman County.
            </p>
          </div>

          {/* Property Type Radio */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <label
              className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                formData.propertyType === 'Residential'
                  ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="propertyType"
                value="Residential"
                checked={formData.propertyType === 'Residential'}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="hidden"
              />
              <span>Residential Home</span>
            </label>
            <label
              className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                formData.propertyType === 'Commercial'
                  ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="propertyType"
                value="Commercial"
                checked={formData.propertyType === 'Commercial'}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="hidden"
              />
              <span>Commercial / Multi-Unit</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="(469) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Service Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all bg-white text-slate-800"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    {srv.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                City / Location
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all bg-white text-slate-800"
              >
                <option value="Forney, TX">Forney, TX</option>
                {LOCATIONS_LIST.map((loc) => (
                  <option key={loc.id} value={loc.cityName}>
                    {loc.cityName}
                  </option>
                ))}
                <option value="Other Kaufman County">Other Kaufman County Area</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Optional Details (e.g., Roof exit, bird nest, long dry times)
            </label>
            <textarea
              rows={2}
              placeholder="Tell us about your dryer issue or preferred time..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 via-blue-700 to-navy-900 hover:from-sky-700 hover:to-navy-950 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95 text-sm uppercase tracking-wide"
          >
            <Send className="w-4 h-4" />
            <span>Request My Free Quote</span>
          </button>

          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
            <span>Privacy Assured. No spam. Direct local technician dispatch.</span>
          </div>
        </form>
      )}
    </div>
  );
}

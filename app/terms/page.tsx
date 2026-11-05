import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Terms of Service | First Choice Dryer Vent Cleaning Forney',
  description: 'Terms of service for First Choice Dryer Vent Cleaning Forney.',
};

export default function TermsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
        <h1 className="text-3xl font-black text-navy-950">Terms of Service</h1>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-slate-700 space-y-4 text-sm leading-relaxed">
          <p>
            By scheduling service or accessing the website of First Choice Dryer Vent Cleaning Forney, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-lg font-bold text-navy-950 pt-2">Service Estimates & Pricing</h2>
          <p>
            Estimates provided online or over the telephone are preliminary assessments based on customer-provided information. Final firm pricing is confirmed on-site following our visual and diagnostic inspection of your dryer duct length, roofline access, and physical condition.
          </p>
          <h2 className="text-lg font-bold text-navy-950 pt-2">Safety Standards & Code Compliance</h2>
          <p>
            All dryer exhaust cleaning, repair, and installation services are performed in accordance with International Residential Code (IRC M1502) and NFPA guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}

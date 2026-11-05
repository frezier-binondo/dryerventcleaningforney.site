import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | First Choice Dryer Vent Cleaning Forney',
  description: 'Privacy policy for First Choice Dryer Vent Cleaning Forney.',
};

export default function PrivacyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
        <h1 className="text-3xl font-black text-navy-950">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-slate-700 space-y-4 text-sm leading-relaxed">
          <p>
            At First Choice Dryer Vent Cleaning Forney, we respect your privacy and are committed to protecting the personal information you share with us.
          </p>
          <h2 className="text-lg font-bold text-navy-950 pt-2">Information We Collect</h2>
          <p>
            When you request a service estimate, phone consultation, or schedule an inspection, we collect your name, phone number, email address, physical service address, and details about your clothes dryer installation.
          </p>
          <h2 className="text-lg font-bold text-navy-950 pt-2">How We Use Your Information</h2>
          <p>
            We use this information solely to schedule appointments, dispatch technicians to your property, provide accurate quotes, and deliver customer service notifications. We never sell, lease, or share your contact information with unauthorized third-party marketing firms.
          </p>
          <h2 className="text-lg font-bold text-navy-950 pt-2">Contact Us</h2>
          <p>
            If you have questions regarding this privacy policy, please contact us at service@dryerventcleaningforney.site or call +1 (469) 689-7675.
          </p>
        </div>
      </div>
    </div>
  );
}

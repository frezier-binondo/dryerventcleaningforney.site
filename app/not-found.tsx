import React from 'react';
import Link from 'next/link';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteData';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 bg-sky-100 text-sky-600 rounded-3xl flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>
        <h1 className="text-3xl font-black text-navy-950">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for has been moved or does not exist. Please return to our home page or call our local Forney dispatch team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto bg-navy-900 hover:bg-navy-950 text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="w-full sm:w-auto bg-flame-600 hover:bg-flame-700 text-white font-bold px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}

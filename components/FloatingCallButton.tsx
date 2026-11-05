'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/siteData';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 lg:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="flex-1 bg-flame-600 hover:bg-flame-700 active:bg-flame-800 text-white font-extrabold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-all transform active:scale-95 animate-pulse-subtle"
      >
        <Phone className="w-4 h-4 animate-bounce" />
        <span>Call: {SITE_CONFIG.phoneDisplay}</span>
      </a>
      <Link
        href="/contact"
        className="bg-navy-900 hover:bg-navy-950 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
      >
        <Calendar className="w-3.5 h-3.5 text-amber-400" />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}

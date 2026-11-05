import React from 'react';
import Link from 'next/link';
import { ExternalLink, Link2, Sparkles, MapPin, Wrench } from 'lucide-react';
import { InternalLinkItem, ExternalLinkItem } from '@/lib/siteData';

interface InternalLinkingSectionProps {
  title?: string;
  description?: string;
  internalLinks: InternalLinkItem[];
  externalLink?: ExternalLinkItem;
  className?: string;
}

export default function InternalLinkingSection({
  title = "Related Services, Locations & Safety Resources",
  description = "Explore our certified dryer vent cleaning silos across Kaufman County, related specialized services, and official fire safety documentation.",
  internalLinks,
  externalLink,
  className = "",
}: InternalLinkingSectionProps) {
  return (
    <section className={`bg-gradient-to-br from-slate-50 via-sky-50/40 to-amber-50/30 rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm my-10 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
        <Link2 className="w-4 h-4 text-sky-600" />
        <span>Authoritative Silo & Resource Network</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 mb-6 max-w-3xl leading-relaxed">
        {description}
      </p>

      {/* Internal Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {internalLinks.map((link, idx) => (
          <div
            key={idx}
            className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
          >
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{link.context || "Verified Link"}</span>
            </div>
            <Link
              href={link.href}
              className="inline-link text-sm font-bold block"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>

      {/* External Authority Link as required */}
      {externalLink && (
        <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white/70 p-4 rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700">
              Official Reference Partner:
            </span>
            <span className="text-xs text-slate-500">
              {externalLink.source}
            </span>
          </div>
          <a
            href={externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
          >
            <span>{externalLink.label}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </section>
  );
}

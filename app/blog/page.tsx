import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  User,
  Sparkles,
  ShieldAlert,
  Flame,
  CheckCircle,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { BLOG_POSTS, SITE_CONFIG } from '@/lib/siteData';

export const metadata = {
  title: 'Dryer Vent Safety & Cost Guides | Forney TX Blog',
  description:
    'Expert tips, cleaning frequency guides, warning signs, and cost breakdowns for dryer vent cleaning in Forney, TX. Read our safety articles.',
};

export default function BlogHubPage() {
  const blogInternalLinks = [
    {
      label: 'dryer vent cleaning in Forney, TX',
      href: '/services',
      context: 'Pillar Hub',
    },
    {
      label: 'residential dryer vent cleaning in Forney',
      href: '/services/residential-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'commercial dryer vent cleaning in Forney',
      href: '/services/commercial-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'dryer vent repair in Forney',
      href: '/services/dryer-vent-repair',
      context: 'Money Service',
    },
    {
      label: 'clogged dryer vent cleaning in Forney',
      href: '/services/clogged-dryer-vent-cleaning',
      context: 'Money Service',
    },
    {
      label: 'dryer vent installation in Forney',
      href: '/services/dryer-vent-installation',
      context: 'Money Service',
    },
  ];

  const blogExternalLink = {
    label: 'NFPA clothes dryer safety guidance',
    href: 'https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers',
    source: 'National Fire Protection Association',
  };

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Blog & Safety Resources' }]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Educational Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Dryer Vent Safety & Cost Guides
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Essential knowledge for North Texas homeowners, property managers, and commercial laundry operators. Written by certified dryer exhaust technicians.
          </p>
        </div>
      </section>

      {/* Blog Hub Word Count Content & Value Intro (500+ Words) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm space-y-6 content-body">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950">
            Why Education Is Your First Line of Defense Against Dryer Fires
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            Every year across Texas, thousands of homeowners unwittingly place their families and residences in grave danger simply because clothes dryer exhaust ducts remain out of sight and out of mind. While most people remember to empty the shallow lint screen on the front of their dryer, very few understand the physics of high-temperature lint accumulation inside 20-foot concealed walls.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            Our comprehensive library of technical guides, diagnostic articles, and cost analyses is designed to empower Forney and Kaufman County property owners with transparent facts. Whether you are wondering why your dryer requires two cycles to dry towels, evaluating whether your attic duct meets modern International Residential Building Codes, or preparing for an upcoming seasonal cleanout, our technicians share actionable advice based on thousands of real-world service calls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-2xl font-black text-sky-600">15,000+</div>
              <div className="text-xs text-slate-600 font-semibold mt-1">Annual Dryer Fires in the US</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-2xl font-black text-amber-600">$20–$40/mo</div>
              <div className="text-xs text-slate-600 font-semibold mt-1">Avg Utility Waste with Dirty Vent</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-2xl font-black text-emerald-600">12 Months</div>
              <div className="text-xs text-slate-600 font-semibold mt-1">Recommended Cleaning Cycle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-navy-950">
            Latest Articles & Diagnostic Guides
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            Showing {BLOG_POSTS.length} Published Guides
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-52 w-full bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-navy-950/90 text-amber-400 text-xs font-black px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 group-hover:text-sky-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                      FC
                    </div>
                    <span className="text-xs font-semibold text-slate-700 truncate max-w-[120px]">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Internal & External Links Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Related Silo Services & Regulatory Safety Links"
          description="Continue exploring our specialized service silos or review national fire safety testing standards."
          internalLinks={blogInternalLinks}
          externalLink={blogExternalLink}
        />
      </section>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import { BLOG_POSTS, SITE_CONFIG } from '@/lib/siteData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      images: [post.image],
    },
  };
}

export default function BlogPostReaderPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_CONFIG.siteUrl}${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.siteUrl}/images/hero-dryer-vent.jpg`,
      },
    },
    datePublished: '2026-10-01',
    dateModified: '2026-11-01',
  };

  return (
    <div className="space-y-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-sky-600" />
          <span>{post.category}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-navy-950 tracking-tight leading-tight">
          {post.h1}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
          <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
            <User className="w-4 h-4 text-sky-600" />
            {post.author} ({post.authorRole})
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Featured Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-16/9 bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 content-body">
        {/* Intro Excerpt Lead */}
        <div className="bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 text-slate-800 text-lg leading-relaxed font-medium">
          {post.excerpt}
        </div>

        {/* Dynamic Content Sections */}
        {post.contentSections.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight pt-4">
              {sec.heading}
            </h2>
            {sec.body.map((p, pIdx) => (
              <p key={pIdx} className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}

            {/* Mid-Article Inline Quote Callout after section 2 */}
            {idx === 1 && (
              <div className="my-8 bg-gradient-to-r from-navy-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Concerned About Your Dryer?
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Get an Airflow Velocity Test in Forney
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Same-day service available throughout Kaufman County. Zero hidden fees.
                  </p>
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="bg-flame-600 hover:bg-flame-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-transform transform hover:scale-105 shrink-0 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Article Specific FAQ Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="pt-6">
            <FaqAccordion
              items={post.faqs}
              title="Article FAQ"
              subtitle="Quick answers related to this guide."
            />
          </div>
        )}
      </article>

      {/* Internal & External Links Section for Blog */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkingSection
          title="Related Services & Certified Safety Resources"
          description="Explore our specialized silo pages or review official guidance on clothes dryer fire safety."
          internalLinks={post.internalLinks}
          externalLink={post.externalLink}
        />
      </section>

      {/* End of Post CTA: Request Free Quote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <QuoteForm />
      </section>
    </div>
  );
}

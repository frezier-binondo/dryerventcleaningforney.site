import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import { SITE_CONFIG } from '@/lib/siteData';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: 'Dryer Vent Cleaning in Forney, TX',
    template: '%s',
  },
  description:
    'Find trusted dryer vent cleaning in Forney, TX. Cut fire risk, lower energy bills and speed up dry times with certified residential & commercial pros. Free quotes!',
  keywords: [
    'dryer vent cleaning forney tx',
    'dryer vent cleaning near me',
    'dryer vent cleaning Kaufman County',
    'dryer duct cleaning Forney',
    'clogged dryer vent cleaning',
    'commercial dryer vent cleaning Forney',
    'First Choice Dryer Vent Cleaning Forney',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.siteUrl,
    title: 'Dryer Vent Cleaning in Forney, TX | First Choice Local Pros',
    description:
      'Professional dryer vent cleaning, repair, and inspection across Forney, Talty, Terrell, Crandall, Mesquite, and Heath, TX. Free quote today!',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/images/hero-dryer-vent.jpg',
        width: 1200,
        height: 630,
        alt: 'First Choice Dryer Vent Cleaning Forney TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dryer Vent Cleaning in Forney, TX | First Choice Local Pros',
    description:
      'Professional dryer vent cleaning, repair, and inspection across Forney, TX. Prevent house fires and cut drying cycles. Free quotes!',
    images: ['/images/hero-dryer-vent.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_CONFIG.siteUrl}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: 'First Choice Dryer Vent Cleaning',
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/images/hero-dryer-vent.jpg`,
    image: `${SITE_CONFIG.siteUrl}/images/hero-dryer-vent.jpg`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      postalCode: SITE_CONFIG.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7479,
      longitude: -96.4719,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Forney, TX' },
      { '@type': 'AdministrativeArea', name: 'Talty, TX' },
      { '@type': 'AdministrativeArea', name: 'Terrell, TX' },
      { '@type': 'AdministrativeArea', name: 'Crandall, TX' },
      { '@type': 'AdministrativeArea', name: 'Mesquite, TX' },
      { '@type': 'AdministrativeArea', name: 'Heath, TX' },
      { '@type': 'AdministrativeArea', name: 'Kaufman County, TX' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dryer Exhaust Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Dryer Vent Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Dryer Vent Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apartment Dryer Vent Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dryer Vent Repair & Rerouting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dryer Vent Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Dryer Vent Cleaning' } },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_CONFIG.siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased text-slate-800 bg-slate-50 selection:bg-amber-400 selection:text-navy-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <FloatingCallButton />
        <Footer />
      </body>
    </html>
  );
}

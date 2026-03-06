import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

const siteUrl = 'https://abdulrehman-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Abdul Rehman | Full Stack Systems Architect',
  description:
    'Portfolio of Abdul Rehman, a full stack problem solver focused on admin controlled systems, automation-driven platforms, and scalable service architecture.',
  keywords: [
    'Abdul Rehman',
    'Full Stack Engineer',
    'Systems Architect',
    'Admin Controlled Platforms',
    'Automation Driven Applications',
    'Next.js Portfolio'
  ],
  authors: [{ name: 'Abdul Rehman' }],
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Abdul Rehman | Full Stack Systems Architect',
    description:
      'Explore projects including pharmacy management, farm stock systems, and HVAC booking infrastructure.',
    type: 'website',
    url: siteUrl,
    siteName: 'Abdul Rehman Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Rehman | Full Stack Systems Architect',
    description: 'Admin controlled platforms, automation-driven systems, and scalable web architecture.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abdul Rehman',
              jobTitle: 'Software Engineer / Web Developer',
              url: siteUrl,
              sameAs: ['https://github.com/R00010']
            })
          }}
        />
        <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

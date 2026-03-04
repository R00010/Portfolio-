import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Abdul Rehman | Full Stack Systems Architect',
  description:
    'Portfolio of Abdul Rehman, a self-taught full stack problem solver focused on admin controlled systems, automation-driven platforms, and scalable service architecture.',
  keywords: [
    'Abdul Rehman',
    'Abdul Rehman Shahid',
    'Full Stack Engineer',
    'Systems Architect',
    'Admin Controlled Platforms',
    'Automation Driven Applications',
    'Next.js Portfolio'
  ],
  openGraph: {
    title: 'Abdul Rehman | Full Stack Systems Architect',
    description:
      'Explore projects including pharmacy management, farm stock systems, and HVAC booking infrastructure.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}

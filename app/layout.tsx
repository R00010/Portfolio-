import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdul Rehman | Full Stack Systems Architect',
  description:
    'Portfolio of Abdul Rehman, a self-taught full stack problem solver focused on admin controlled systems, automation-driven platforms, and scalable service architecture.',
  keywords: [
    'Abdul Rehman',
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

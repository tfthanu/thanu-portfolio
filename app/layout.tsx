import type { Metadata } from 'next';
import './globals.css';
import { portfolio } from '@/data/portfolio';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';

export const metadata: Metadata = {
  metadataBase: new URL('https://thanu-portfolio.vercel.app'),
  title: `${portfolio.name} | Portfolio`,
  description: portfolio.shortIntro,
  keywords: [
    'Thanu Anjali',
    'portfolio',
    'student fresher',
    'customer support professional',
    'Bengaluru'
  ],
  openGraph: {
    title: `${portfolio.name} | Portfolio`,
    description: portfolio.shortIntro,
    url: 'https://thanu-portfolio.vercel.app',
    siteName: `${portfolio.name} Portfolio`,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.name} | Portfolio`,
    description: portfolio.shortIntro
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text antialiased selection:bg-accent/30">
        <ScrollProgress />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Run The Mix - Minneapolis Fighting Game Community',
    template: '%s | Run The Mix',
  },
  description: 'Join Run The Mix, Minneapolis\' premier weekly fighting game event featuring Street Fighter 6, Guilty Gear Strive, Melty Blood Type Lumina, Tekken 7, and more. Connect, compete, and enjoy the games you love with the MN FGC.',
  keywords: ['Run The Mix', 'Minneapolis', 'Fighting Game Community', 'Street Fighter 6', 'Guilty Gear Strive', 'Tekken 7', 'Esports', 'Gaming Events'],
  authors: [{ name: 'Run The Mix Organizers', url: 'https://runthemix.org' }],
  openGraph: {
    title: 'Run The Mix - Minneapolis Fighting Game Community',
    description: 'Join Run The Mix, Minneapolis\' premier weekly fighting game event. Connect, compete, and enjoy the games you love with the MN FGC.',
    url: 'https://runthemix.org',
    siteName: 'Run The Mix',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Run The Mix Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Run The Mix - Minneapolis Fighting Game Community',
    description: 'Join Run The Mix, Minneapolis\' premier weekly fighting game event. Connect, compete, and enjoy the games you love with the MN FGC.',
    images: ['/banner.png'],
    creator: '@RunTheMix',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `TypeScript, Next.js, Tailwindcss - Weatherman application`,
  description: `Provides current and historical weather data based on address.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-blue-950 min-h-screen'}>{children}</body>
    </html>
  );
}

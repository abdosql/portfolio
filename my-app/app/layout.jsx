'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundLayout from '@/components/BackgroundLayout';
import StairTransition from '@/components/StairTrasition';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <BackgroundLayout>
              <StairTransition />
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </BackgroundLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

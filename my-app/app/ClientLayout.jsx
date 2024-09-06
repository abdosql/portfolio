'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundLayout from '@/components/BackgroundLayout';
import StairTransition from '@/components/StairTrasition';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <BackgroundLayout>
          <StairTransition />
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </BackgroundLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
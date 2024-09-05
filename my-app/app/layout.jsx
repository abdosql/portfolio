// layout.js

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTrasition from "@/components/StairTrasition";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from 'next-themes';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font--jetbrainsMono'
});

export const metadata = {
  title: "Abdelaziz Saqqal - Software Engineer Portfolio",
  description: "Portfolio of Abdelaziz Saqqal, a software engineer specializing in web development with Symfony and full stack technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <StairTrasition />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

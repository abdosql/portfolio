import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          <main className="min-h-screen">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}

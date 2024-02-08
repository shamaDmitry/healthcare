import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './Components/core/Footer';
import Header from './Components/core/Header';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Healthcare',
  description: 'Healthcare test app',
};

export default function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="en" className="">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>

      <body
        className={`${inter.className} flex flex-col min-h-screen dark:bg-slate-900 dark:text-white`}
      >
        <Toaster />

        <Header />
        <Suspense fallback={<Loading />}>
          <main className="flex flex-col flex-1">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

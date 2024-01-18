import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './Components/core/Footer';
import Header from './Components/core/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>

      <body
        className={`${inter.className} flex flex-col min-h-screen dark:bg-slate-900 dark:text-white`}
      >
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import NavigationMenu from './Components/core/NavigationMenu';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>

      <body className={inter.className}>
        <header className="">
          <div className="container">
            <div className='flex items-center justify-center'>
              <Link href="/">
                <div className="flex items-center justify-center p-2 border">
                  Logo
                </div>
              </Link>

              <NavigationMenu className="ml-auto" />
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}

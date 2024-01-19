import Link from 'next/link';
import React from 'react';
import NavigationMenu from './NavigationMenu';
import Search from '../icons/Search';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-[500]">
      <div className="container">
        <div className="flex justify-center h-[60px]">
          <Link href="/">
            <div className="flex items-center justify-center h-full px-4 py-2 border">
              Logo
            </div>
          </Link>

          <NavigationMenu className="mx-auto" />

          <div className="flex">
            <Link
              href="/contact"
              className="flex items-center justify-center px-5 py-2 font-bold text-white bg-secondary"
            >
              Contact us
            </Link>
            <button className="flex items-center justify-center p-4">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

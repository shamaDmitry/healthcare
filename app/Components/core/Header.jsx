import Link from 'next/link';
import React from 'react';
import NavigationMenu from './NavigationMenu';
import Search from '../icons/Search';

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <div className="flex items-center justify-center">
          <Link href="/">
            <div className="flex items-center justify-center p-2 border">
              Logo
            </div>
          </Link>

          <NavigationMenu className="mx-auto" />

          <div className='flex items-center'>
            <Link href="/contact">Contact us</Link>
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

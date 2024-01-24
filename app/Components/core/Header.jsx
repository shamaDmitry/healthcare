'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Search from '../icons/Search';
import classNames from 'classnames';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let scrollpos = window.scrollY;
    const scrollChange = 50;
    const add_class_on_scroll = () => setToggle(true);
    const remove_class_on_scroll = () => setToggle(false);

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= scrollChange) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });

    return () => {};
  }, []);

  return (
    <header
      className={classNames(
        'fixed transition top-0 left-0 w-full bg-transparent z-[500]',
        {
          'bg-white shadow-lg border-b-slate-500': toggle,
        }
      )}
    >
      <div className="container">
        <div className="flex justify-between h-[60px]">
          <Link href="/" className="flex self-center">
            <div className="flex items-center px-4 py-2 border">Logo</div>
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

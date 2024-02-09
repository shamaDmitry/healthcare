'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Search from '../icons/Search';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const darkPaths = ['about', 'news', 'technology'];

const Header = () => {
  const [headerTheme, setHeaderTheme] = useState('light');
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isDark = darkPaths.some(item => pathname.includes(item));

    isDark ? setHeaderTheme('dark') : setHeaderTheme('light');

    return () => {};
  }, [pathname]);

  useEffect(() => {
    let scrollpos = window.scrollY;
    const scrollChange = 1;

    const add_class_on_scroll = () => setToggle(true);
    const remove_class_on_scroll = () => setToggle(false);

    if (scrollpos >= scrollChange) add_class_on_scroll();

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
      className={classNames({
        'fixed transition top-0 left-0 w-full z-[500]': true,
        'text-white': !toggle && headerTheme === 'light',
        'text-gentle-black': !toggle && headerTheme === 'dark',
        'bg-white shadow-lg border-b-slate-500 text-gentle-black':
          toggle && headerTheme === 'light',
        'bg-primary shadow-lg border-b-slate-500 text-white':
          toggle && headerTheme === 'dark',
      })}
    >
      <div className="container">
        <div className="flex justify-between h-[60px]">
          <Link href="/" className="flex self-center">
            <div className="flex items-center px-4 py-2 border">Logo</div>
          </Link>

          <NavigationMenu
            headerOptions={{ theme: headerTheme, toggle: toggle }}
            className="mx-auto"
          />

          <div className="flex">
            <Link
              href="/contact"
              className="flex items-center justify-center px-5 py-2 font-bold text-white bg-secondary"
            >
              Contact us
            </Link>

            <button
              className={classNames('flex items-center justify-center p-4', {
                'bg-white text-primary': headerTheme === 'light',
                'bg-primary text-white': headerTheme === 'dark',
              })}
            >
              <Search />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Search from '../icons/Search';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

const darkPaths = ['about', 'news', 'technology', 'category', 'search'];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [headerTheme, setHeaderTheme] = useState('light');
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const router = useRouter();

  const handleSearch = event => {
    if (event.keyCode === 13 && event.target.value.length) {
      router.push(`/search?term=${searchTerm}`);
      setShowSearchInput(false);
    }
  };

  useEffect(() => {
    setShowSearchInput(false);
    setSearchTerm('');

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
      <div className="container px-5">
        <div className="flex justify-between h-[60px] space-x-4">
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
              className="flex items-center justify-center px-5 py-2 font-bold text-white whitespace-nowrap bg-secondary"
            >
              Contact us
            </Link>

            <div className="relative self-stretch">
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={e => handleSearch(e)}
                type="text"
                className={classNames({
                  'absolute right-0 top-full h-full px-4 py-2 border shadow-lg border-primary outline-none text-gentle-black': true,
                  'opacity-0 hidden': !showSearchInput,
                })}
                placeholder="Search"
              />

              <button
                onClick={() => {
                  setShowSearchInput(prevState => !prevState);
                  setSearchTerm('');
                }}
                className={classNames(
                  'flex items-center justify-center p-4 h-full transition',
                  {
                    'bg-white text-primary': headerTheme === 'light',
                    'bg-primary text-white': headerTheme === 'dark',
                    'opacity-50': showSearchInput,
                  }
                )}
              >
                <Search />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

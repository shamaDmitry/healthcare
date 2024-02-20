'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Search from '../icons/Search';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useBreakpoint } from 'use-breakpoint';
import { BREAKPOINTS } from '@/helpers/const';

const darkPaths = ['about', 'news', 'technology', 'category', 'search'];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [headerTheme, setHeaderTheme] = useState('light');
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const clearHeaderState = () => {
    setShowMenu(false);
    setToggle(false);
    setShowSearchInput(false);
    setSearchTerm('');
  };

  const handleSearch = event => {
    if (event.keyCode === 13 && event.target.value.length) {
      router.push(`/search?term=${searchTerm}`, { scroll: true });

      clearHeaderState();
    }
  };

  useEffect(() => {
    clearHeaderState();
    return () => {};
  }, [breakpoint]);

  useEffect(() => {
    showMenu && document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showMenu]);

  useEffect(() => {
    clearHeaderState();

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
        <div className="flex justify-between lg:h-[60px] lg:space-x-4 py-2 lg:flex-nowrap">
          <Link
            href="/"
            className="flex self-center w-full lg:w-auto"
            scroll={true}
          >
            <div className="flex items-center px-4 py-2 border">Logo</div>
          </Link>

          <NavigationMenu
            searchOptions={{
              searchTerm,
              setSearchTerm,
              handleSearch,
            }}
            headerOptions={{
              headerTheme,
              toggle,
              showMenu,
              setShowMenu,
            }}
          />

          <div className="hidden lg:flex">
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
                  'z-50 absolute right-0 top-full h-full px-4 py-2 border shadow-lg border-primary outline-none text-gentle-black': true,
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

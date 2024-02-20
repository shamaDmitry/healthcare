'use client';

import Link from 'next/link';
import HoverMenu from '../blocks/HoverMenu';
import { useActivePath } from '@/hooks/useActivePath';
import classNames from 'classnames';
import Hamburger from '../icons/Hamburger';
import { MENU } from '@/helpers/const';

const NavigationMenu = ({ searchOptions, headerOptions }) => {
  const checkActivePath = useActivePath();
  const { toggle, showMenu, setShowMenu, headerTheme } = headerOptions;
  const { searchTerm, setSearchTerm, handleSearch } = searchOptions;

  return (
    <div className="flex items-center lg:mx-auto lg:w-auto">
      <button
        className="px-2 lg:hidden"
        onClick={() => setShowMenu(prevState => !prevState)}
      >
        <Hamburger className="w-10 h-10" />
      </button>

      <nav
        className={classNames(
          `z-50 p-4 items-center lg:justify-center lg:flex-row flex-col gap-x-3 w-full absolute top-full left-0 lg:relative lg:top-auto lg:left-auto `,
          {
            'flex-col flex overflow-y-scroll h-[calc(100vh-58px)]': showMenu,
            'hidden lg:flex': !showMenu,

            'bg-primary':
              (headerTheme === 'light' && showMenu) ||
              (headerTheme === 'dark' && toggle && showMenu),

            'bg-white':
              (headerTheme === 'light' && toggle && showMenu) ||
              (headerTheme === 'dark' && showMenu && !toggle),
          }
        )}
      >
        {MENU.map(menuItem => {
          if (menuItem.subMenu?.length) {
            return (
              <HoverMenu
                headerOptions={headerOptions}
                key={menuItem.id}
                menuItem={menuItem}
                subMenuItems={menuItem.subMenu}
              />
            );
          }

          return (
            <Link
              key={menuItem.id}
              href={menuItem.href}
              className={classNames({
                'px-3 py-2 hover:underline w-full lg:w-auto': true,
                'underline font-bold': checkActivePath(menuItem.href),
              })}
            >
              {menuItem.title}
            </Link>
          );
        })}

        <div className="flex w-full p-4 mt-auto lg:hidden">
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => handleSearch(e)}
            type="text"
            className={classNames({
              'px-4 py-2 border shadow-lg w-full border-primary outline-none text-gentle-black': true,
            })}
            placeholder="Search"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;

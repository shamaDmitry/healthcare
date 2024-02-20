'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArrowDown from '../icons/ArrowDown';
import { usePathname } from 'next/navigation';
import { useActivePath } from '@/hooks/useActivePath';
import { BREAKPOINTS } from '@/helpers/const';
import { useBreakpoint } from 'use-breakpoint';

const HoverMenu = ({ headerOptions, menuItem, subMenuItems }) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const pathname = usePathname();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { headerTheme, toggle } = headerOptions;

  useEffect(() => {
    setDropdownVisible(false);
    return () => {};
  }, [breakpoint]);

  const checkActivePath = useActivePath();

  const handleMouseEnter = () => {
    ['lg', 'xl', '2xl'].includes(breakpoint) && setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    ['lg', 'xl', '2xl'].includes(breakpoint) && setDropdownVisible(false);
  };

  useEffect(() => {
    setDropdownVisible(false);
    return () => {};
  }, [pathname]);

  return (
    <div
      className="relative w-full lg:w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between">
        <Link
          href={menuItem.href}
          className={classNames({
            'flex items-center px-2 py-2 hover:underline': true,
            'underline font-bold': checkActivePath(menuItem.href),
          })}
        >
          {menuItem.title}
        </Link>

        <button
          type="button"
          className="px-1 outline-none"
          onClick={() => setDropdownVisible(prevState => !prevState)}
        >
          <ArrowDown
            className={classNames('transition cursor-pointer', {
              'rotate-180': isDropdownVisible,
            })}
          />
        </button>
      </div>

      {/* prettier-ignore */}
      <ul
        className={[
          'block lg:absolute right-0 transition top-full z-[100]',
          `${!isDropdownVisible ? 'hidden opacity-0' : ''}`,
          `${isDropdownVisible ? 'show opacity-100' : ''}`,
          `${!toggle && headerTheme === 'light' ? 'bg-white text-gentle-black' : ''}`,
          `${toggle && headerTheme === 'light' ? 'bg-white text-gentle-black' : ''}`,
          `${!toggle && headerTheme === 'dark' ? 'bg-primary text-white' : ''}`,
          `${toggle && headerTheme === 'dark' ? 'bg-white text-gentle-black' : ''}`,
        ].join(' ')}
      >
        {subMenuItems.map(subMenu => {
          return (
            <li key={subMenu.id} className="border border-b-0 last:border-b">
              <Link
                href={`${menuItem.href}${subMenu.href}`}
                className={classNames({
                  'block px-3 py-2 hover:underline whitespace-nowrap': true,
                  'font-bold underline': checkActivePath(
                    `${menuItem.href}${subMenu.href}`
                  ),
                })}
              >
                {subMenu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HoverMenu;

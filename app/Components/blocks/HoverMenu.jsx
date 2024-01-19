'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArrowDown from '../icons/ArrowDown';
import { usePathname } from 'next/navigation';

const HoverMenu = ({ menuItem, subMenuItems }) => {
  const pathname = usePathname();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    setDropdownVisible(false);
    return () => {};
  }, [pathname]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex ">
        <Link
          href={menuItem.href}
          className="flex items-center px-2 py-2 hover:underline"
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

      <ul
        className={classNames('block absolute right-0 transition top-full z-[100] bg-white', {
          'hidden opacity-0': !isDropdownVisible,
          'show opacity-100': isDropdownVisible,
        })}
      >
        {subMenuItems.map(subMenu => {
          return (
            <li key={subMenu.id} className="border border-b-0 last:border-b">
              <Link
                href={`${menuItem.href}${subMenu.href}`}
                className="block px-3 py-2 hover:underline whitespace-nowrap"
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

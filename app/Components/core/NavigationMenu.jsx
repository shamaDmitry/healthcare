'use client';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import HoverMenu from '../blocks/HoverMenu';
import { useActivePath } from '@/hooks/useActivePath';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Hamburger from '../icons/Hamburger';

const menu = [
  {
    id: uuidv4(),
    title: 'About',
    href: '/about',
    subMenu: [
      {
        id: uuidv4(),
        title: 'Company',
        href: '/company',
      },
      {
        id: uuidv4(),
        title: 'Quality',
        href: '/quality',
      },
      {
        id: uuidv4(),
        title: 'Leadership',
        href: '/leadership',
      },
      {
        id: uuidv4(),
        title: 'Work',
        href: '/work',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Services',
    href: '/services',
    subMenu: [
      {
        id: uuidv4(),
        title: 'Quality Improvement Organization',
        href: '/quality-improvement-organization',
      },
      {
        id: uuidv4(),
        title: 'Program Integrity and Peer Review',
        href: '/program-integrity-and-peer-review',
      },
      {
        id: uuidv4(),
        title: 'Advocacy, Outreach, and Education',
        href: '/advocacy',
      },
      {
        id: uuidv4(),
        title: 'Data and Analytics',
        href: '/data-analytics',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Technology',
    href: '/technology',
    subMenu: [
      {
        id: uuidv4(),
        title: 'Information Technology Services',
        href: '/information-technology-services',
      },
      {
        id: uuidv4(),
        title: 'Software Platforms',
        href: '/software-platforms',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'News',
    href: '/news',
  },
  {
    id: uuidv4(),
    title: 'Career',
    href: '/career',
  },
  {
    id: uuidv4(),
    title: 'Contact',
    href: '/contact',
  },
];

const NavigationMenu = ({ headerOptions, className }) => {
  const checkActivePath = useActivePath();

  return (
    <div className="flex items-center order-2 w-1/2 lg:mx-auto lg:order-1 lg:w-auto">
      <button
        className="px-2 lg:hidden"
        onClick={() => headerOptions.setShowMenu(prevState => !prevState)}
      >
        <Hamburger className="w-10 h-10" />
      </button>

      <nav
        className={classNames(
          `${className} z-50 lg:flex items-center justify-center lg:flex-row flex-col gap-x-3 w-full absolute top-full left-0 lg:relative lg:top-auto lg:left-auto `,
          {
            'flex flex-col': headerOptions.showMenu,
            hidden: !headerOptions.showMenu,
          }
        )}
      >
        {menu.map(menuItem => {
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
      </nav>
    </div>
  );
};

export default NavigationMenu;

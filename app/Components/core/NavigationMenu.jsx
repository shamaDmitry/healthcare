'use client';

import Link from 'next/link';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HoverMenu from '../blocks/HoverMenu';

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
        href: '/quality improvement organization',
      },
      {
        id: uuidv4(),
        title: 'Program Integrity and Peer Review',
        href: '/Program Integrity and Peer Review',
      },
      {
        id: uuidv4(),
        title: 'Advocacy, Outreach, and Education',
        href: '/Advocacy, Outreach, and Education',
      },
      {
        id: uuidv4(),
        title: 'Data and Analytics',
        href: '/Data and Analytics',
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
        href: '/Information Technology Services',
      },
      {
        id: uuidv4(),
        title: 'Software Platforms',
        href: '/Software Platforms',
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

const NavigationMenu = ({ className = '' }) => {
  return (
    <nav className={`${className} flex items-center justify-center gap-x-3`}>
      {menu.map(menuItem => {
        if (menuItem.subMenu?.length) {
          return (
            <HoverMenu
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
            className="px-3 py-2 hover:underline"
          >
            {menuItem.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;

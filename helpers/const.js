import { v4 as uuidv4 } from 'uuid';

export const emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:I[a-z0-9-]*[a-z0-9])?/g;

export const phonePattern =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const MENU = [
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

import Link from 'next/link';

const menu = [
  {
    id: 1,
    title: 'About',
    href: '/about',
  },
  {
    id: 2,
    title: 'Services',
    href: '/services',
  },
  {
    id: 3,
    title: 'Technology',
    href: '/technology',
  },
  {
    id: 4,
    title: 'News',
    href: '/news',
  },
  {
    id: 5,
    title: 'Career',
    href: '/career',
  },
  {
    id: 6,
    title: 'Contact',
    href: '/contact',
  },
];

const NavigationMenu = ({ className = '' }) => {
  return (
    <nav className={`${className} flex items-center justify-center`}>
      {menu.map(menuItem => {
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

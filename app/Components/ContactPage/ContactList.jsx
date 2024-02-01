'use client';

import Link from 'next/link';
import ArrowForward from '../icons/ArrowForward';
import { v4 as uuidv4 } from 'uuid';

const list = [
  {
    id: uuidv4(),
    text: 'Medicare concern',
    href: '#',
  },
  {
    id: uuidv4(),
    text: 'Our work as the Medicare Beneficiary and Family Centered Care - Quality Improvement Organization (BFCC-QIO)',
    href: '#',
  },
  {
    id: uuidv4(),
    text: "XXXXXX Ethics' Website for more information on the program or to report a compliance issue.",
    href: '#',
  },
];

const ContactList = () => {
  return (
    <nav className="">
      {list.map(item => {
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center justify-between w-full py-6 font-medium text-left border-b outline-none border-b-separator last:border-b-0 hover:underline"
          >
            <span className="leading-7">{item.text}</span>

            <div className="flex items-center justify-center w-5 h-5 text-secondary shrink-0">
              <ArrowForward className="w-full h-full" />
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default ContactList;

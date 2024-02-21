import Link from 'next/link';
import React from 'react';
import OpenInNew from '../icons/OpenInNew';
import { aboutOurWorkData } from './aboutOurWorkData';

const OurWork = () => {
  return (
    <div className="space-y-5">
      {aboutOurWorkData.map(data => {
        return (
          <div className="flex items-center bg-white py-7 px-9" key={data.id}>
            <span className="w-full font-bold text-gentle-black">
              {data.title}
            </span>

            <Link
              href={data.href}
              target="_blank"
              className="inline-flex items-center font-medium uppercase transition whitespace-nowrap hover:opacity-50 gap-x-2 text-secondary"
            >
              <span className="leading-none">SEE MORE</span>
              <OpenInNew />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default OurWork;

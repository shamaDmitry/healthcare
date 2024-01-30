import React from 'react';
import OpenInNew from '../icons/OpenInNew';
import Link from 'next/link';

const ExternalLink = ({ href = '#', title = 'SEE MORE' }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center uppercase transition hover:opacity-50 gap-x-2 text-secondary whitespace-nowrap"
    >
      <span className="leading-none">{title}</span>
      <OpenInNew />
    </Link>
  );
};

export default ExternalLink;

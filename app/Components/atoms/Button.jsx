'use client';

import Link from 'next/link';

const CustomButton = ({
  as = 'button',
  type = 'button',
  href,
  children,
  onClick,
  className,
}) => {
  const As = as === 'Link' ? Link : as;

  return (
    <As
      href={href}
      type={type}
      className={[
        'flex items-center justify-center px-5 py-2 font-bold min-h-[40px] transition',
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </As>
  );
};

export default CustomButton;

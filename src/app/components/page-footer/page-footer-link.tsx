'use client';

import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

type PageFooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const PageFooterLink = ({
  href,
  children,
  className,
  ...rest
}: PageFooterLinkProps) => {
  return (
    <Link
      href={href}
      className="relative flex items-center group transition-all gap-3"
      {...rest}
    >
      <div className="absolute left-0 w-[20px] h-[2px] bg-linear-200 from-blue to-purple/50 transition-all opacity-0 group-hover:opacity-100 -translate-x-[20px] group-hover:translate-x-[0px] duration-100" />

      <div className={`group-hover:translate-x-[28px] transition-all`}>
        {children}
      </div>
    </Link>
  );
};

export default PageFooterLink;

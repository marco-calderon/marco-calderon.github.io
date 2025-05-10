'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

type PageFooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const PageFooterLink = ({
  href,
  children,
  className,
}: PageFooterLinkProps) => {
  return (
    <div className="relative flex items-center group">
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 w-4 h-[2px] bg-blue origin-left"
      />
      <Link
        href={href}
        className={`pl-6 text-inherit hover:text-inherit transition-colors ${
          className || ''
        }`}
      >
        {children}
      </Link>
    </div>
  );
};

export default PageFooterLink;

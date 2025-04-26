'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavbarCtaButton from '@/app/components/navbar/navbar-cta-button';
import ChevronRight from '@/components/icons/chevron-right';
import { cn } from '@/lib/utils';
import FullScreenMenu from '@/app/containers/full-screen-menu';

export type NavbarProps = {
  transparent?: boolean;
} & React.HTMLProps<HTMLElement>;

const Navbar = ({ className }: NavbarProps) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <header
        id="header"
        className={cn('z-100 w-full print:hidden', className)}
      >
        <div className="flex items-center max-w-full lg:max-w-[1300px] h-[88px] mx-auto gap-[70px] px-5">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Marco Calderon logo"
              width={38}
              height={38}
            />
          </Link>

          <nav
            id="navbar"
            className="hidden w-full lg:flex flex-row items-center gap-8"
          >
            <ul className="flex flex-row gap-[70px] bg-transparent text-white">
              <li>
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/#skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/#portfolio"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/Resume_Marco_Calderon.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </li>
            </ul>

            <div className="flex-1" />

            <Link href="/#contact">
              <NavbarCtaButton className="hidden lg:flex flex-row items-center gap-2">
                Contact
                <ChevronRight />
              </NavbarCtaButton>
            </Link>
          </nav>

          <div className="inline-block fixed top-5 right-5 sm:inline-block md:hidden z-100">
            <Icon
              icon="bi:list"
              className="w-8 h-8 text-black cursor-pointer dark:text-white"
              onClick={() => setMenuOpened(!menuOpened)}
            ></Icon>
          </div>
        </div>
      </header>

      <FullScreenMenu open={menuOpened} onClose={() => setMenuOpened(false)} />
    </>
  );
};

export default Navbar;

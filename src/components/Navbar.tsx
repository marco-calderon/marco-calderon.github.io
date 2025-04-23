'use client';

import FullScreenMenu from '@/containers/FullScreenMenu';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavbarCtaButton from '@/app/components/navbar/navbar-cta-button';
import ChevronRight from '@/icons/chevron-right';
import { cn } from '@/utils/cn';

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
        <div className="flex items-center max-w-full lg:max-w-[1300px]  h-[88px] mx-auto gap-[70px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Marco Calderon logo"
              width={38}
              height={38}
            />
          </Link>

          <nav id="navbar" className="w-full flex flex-row items-center gap-8">
            <ul className="flex flex-row gap-[70px] bg-transparent text-white">
              <li>
                <Link
                  className="text-[15px] font-medium tracking-widest text-white hover:text-white"
                  href="/#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium tracking-widest text-white hover:text-white"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium tracking-widest text-white hover:text-white"
                  href="/#skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium tracking-widest text-white hover:text-white"
                  href="/#portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] font-medium tracking-widest text-white hover:text-white"
                  href="/resume"
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

            <div className="inline-block fixed top-5 right-5 xs:inline-block sm:inline-block md:hidden lg:hidden xl:hidden z-100">
              <Icon
                icon="bi:list"
                className="w-8 h-8 text-black cursor-pointer dark:text-white"
                onClick={() => setMenuOpened(!menuOpened)}
              ></Icon>
            </div>
          </nav>
        </div>
      </header>

      <FullScreenMenu open={menuOpened} onClose={() => setMenuOpened(false)} />
    </>
  );
};

export default Navbar;

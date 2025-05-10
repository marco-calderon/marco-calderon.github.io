'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavbarCtaButton from '@/app/components/navbar/navbar-cta-button';
import ChevronRight from '@/components/icons/chevron-right';
import { cn } from '@/lib/utils';
import FullScreenMenu from '@/app/components/full-screen-menu';
import {
  DropSection,
  DropSectionContainer,
  DropSectionTrigger,
  DropSectionTriggerArrow,
} from './drop-sub-items';

export type NavbarProps = {
  transparent?: boolean;
} & React.HTMLProps<HTMLElement>;

const Navbar = ({ className }: NavbarProps) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="relative z-100 w-full print:hidden">
      <header id="header" className={cn('w-full', className)}>
        <div className="flex items-center max-w-full lg:max-w-[1300px] h-[88px] mx-auto gap-[70px] px-5 lg:px-0">
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
            className="hidden w-full lg:flex flex-row items-center gap-8 h-[88px]"
          >
            <ul className="flex flex-row gap-[70px] bg-transparent text-white h-full">
              <li className="flex items-center">
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/#about"
                >
                  About
                </Link>
              </li>

              <DropSection>
                <DropSectionTrigger className="flex items-center group">
                  <Link
                    className="px-4 py-3 rounded-lg group-hover:bg-background-secondary transition-all text-[15px] font-medium text-foreground flex flex-row items-center gap-2"
                    href="/#services"
                  >
                    Services
                    <DropSectionTriggerArrow />
                  </Link>
                </DropSectionTrigger>
                <DropSectionContainer className=" px-40 flex flex-row gap-4 py-5">
                  <div className="transition-all bg-transparent hover:bg-black/30 p-4 rounded-lg space-y-3">
                    <h4 className="text-3xl">Frontend</h4>
                    <p>
                      Modern Front End development with React, Angular and plain
                      HTML, JavaScript and CSS. I can also work with Bootstrap,
                      TailwindCSS, Foundation, and other styling solutions for
                      your projects.
                    </p>
                  </div>
                  <div className="transition-all bg-transparent hover:bg-black/30 p-4 rounded-lg space-y-3">
                    <h4 className="text-3xl">Backend</h4>
                    <p>
                      Using modern technologies and used frameworks such as
                      Django, ASP.NET, Spring Framework, Express, Nest.js, Ruby
                      on Rails. If you have another option, we can discuss it.
                    </p>
                  </div>
                  <div className="transition-all bg-transparent hover:bg-black/30 p-4 rounded-lg space-y-3">
                    <h4 className="text-3xl">API Development</h4>
                    <p>
                      Integrating, implementing REST APIs with your selected
                      technology. Optimization of existing code for performance
                      (in time and memory).
                    </p>
                  </div>
                </DropSectionContainer>
              </DropSection>

              <li className="flex items-center">
                <Link
                  className="px-4 py-3 rounded-lg group-hover:bg-background-secondary transition-all text-[15px] font-medium text-foreground flex flex-row items-center gap-2"
                  href="/#skills"
                >
                  Skills
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/#portfolio"
                >
                  Case Studies
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="text-[15px] font-medium text-white hover:text-white"
                  href="/Marco_Calderon_CV.pdf"
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
    </div>
  );
};

export default Navbar;

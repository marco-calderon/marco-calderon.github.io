import React from 'react';
import NavbarDropdown from './navbar-dropdown';
import NavbarCtaButton from './navbar-cta-button';
import ChevronRight from '@/icons/chevron-right';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[88px] flex flex-row items-center justify-center absolute top-0 left-0 right-0 z-10">
      <div className="min-w-[1300px] flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row items-center gap-[70px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Marco Calderon logo"
              width={38}
              height={38}
            />
          </Link>

          <div className="flex flex-row gap-12">
            <NavbarDropdown>About</NavbarDropdown>
            <NavbarDropdown>Solutions</NavbarDropdown>
            <NavbarDropdown>Case Studies</NavbarDropdown>
            <NavbarDropdown>Resources</NavbarDropdown>
          </div>
        </div>

        <NavbarCtaButton className="flex flex-row items-center gap-2">
          Contact
          <ChevronRight />
        </NavbarCtaButton>
      </div>
    </nav>
  );
};

export default Navbar;

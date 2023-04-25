import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';
import FullScreenMenu from '../containers/FullScreenMenu';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <header
        id="header"
        className="fixed z-[100] w-full px-[20px] lg:px-[60px] py-6 backdrop-blur-md bg-white/50 dark:bg-gray-900/50"
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer">
              <h4 className="text-2xl font-bold text-blue-800 dark:text-white">
                Marco Calderon
              </h4>
            </div>
          </Link>

          <nav id="navbar">
            <ul className="flex-row hidden gap-12 xs:hidden sm:hidden md:flex lg:flex xl:flex">
              <li>
                <Link
                  className="font-bold text-blue-700 transition-all dark:visited:text-white scrollto dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  href="/#about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-blue-700 transition-all dark:visited:text-white scrollto dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-blue-700 transition-all dark:visited:text-white scrollto dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  href="/#skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-blue-700 transition-all dark:visited:text-white scrollto dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  href="/#portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-blue-700 transition-all dark:visited:text-white scrollto dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-blue-700 transition-all dark:visited:text-white scrollto dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  href="/resume"
                >
                  Resume
                </Link>
              </li>
            </ul>
            <div className="inline-block fixed top-5 right-5 xs:inline-block sm:inline-block md:hidden lg:hidden xl:hidden z-[100]">
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

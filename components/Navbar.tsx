import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useState } from 'react';
import FullScreenMenu from '../containers/FullScreenMenu';

export type NavbarProps = {
  transparent?: boolean;
};

const Navbar = ({ transparent }: NavbarProps) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <header
        id="header"
        className={`fixed z-[100] w-full px-[20px] lg:px-[60px] py-6 transition-all ${
          !transparent
            ? 'backdrop-blur-md bg-white/50 dark:bg-gray-900/50'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer">
              <h4 className="text-2xl font-bold text-blue-800 dark:text-white">
                Marco Calderon
              </h4>
            </div>
          </Link>

          <nav id="navbar" className="flex flex-row items-center gap-8">
            <ul className="flex-row hidden gap-12 bg-transparent xs:hidden sm:hidden md:flex lg:flex xl:flex">
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
              <li>
                <Link
                  className="flex flex-row items-center gap-2 font-bold text-transparent transition-all bg-clip-text bg-gradient-to-r from-green-300 hover:from-blue-300 to-blue-300 hover:to-green-300 group"
                  href="/store"
                >
                  <Icon
                    icon="ph:bag-simple-fill"
                    className="text-green-300 transition-all dark:text-green-300 group-hover:text-blue-400"
                  />
                  Store
                </Link>
              </li>
            </ul>

            <div className="flex-row items-center hidden gap-4 bg-transparent xs:hidden sm:hidden md:flex lg:flex xl:flex">
              <Link
                href="https://github.com/marco-calderon"
                target="_blank"
                className="transition-all dark:text-white hover:text-gray-500"
              >
                <Icon icon="mdi:github" className="text-2xl" />
              </Link>

              <Link
                href="https://forms.gle/XDuP2JsE5c6DirPn8"
                target="_blank"
                className="transition-all dark:text-white hover:text-green-500"
              >
                <Icon icon="fluent:mail-16-filled" className="text-2xl" />
              </Link>
            </div>

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

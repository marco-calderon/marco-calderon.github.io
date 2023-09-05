import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-row items-start justify-center w-full py-16 text-white bg-slate-600">
      <div className="w-full">
        <div className="flex flex-row items-start w-full">
          <div className="flex flex-col items-center flex-1">
            <h4 className="mb-4 text-lg font-bold">Links</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                <Link className="text-inherit hover:text-inherit" href="/">
                  Home
                </Link>
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                <Link
                  className="text-inherit hover:text-inherit"
                  href="/#about"
                >
                  About
                </Link>
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                <Link
                  className="text-inherit hover:text-inherit"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                <Link
                  className="text-inherit hover:text-inherit"
                  href="/#skills"
                >
                  Skills
                </Link>
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                <Link
                  className="text-inherit hover:text-inherit"
                  href="/#portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                <Link
                  className="text-inherit hover:text-blue-600 dark:hover:text-blue-300"
                  href="/resume"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h4 className="mb-4 text-lg font-bold">Services</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                Back end development
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                Front end development
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                REST API development
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                Mobile app development
              </li>
              <li className="flex flex-row items-center transition-all hover:text-blue-600 dark:hover:text-blue-300">
                <Icon icon="bi:chevron-right" />
                Database administration
              </li>
            </ul>
          </div>

          <div className="flex-1 text-center text-md-start flex items-center justify-center">
            <Link
              className="transition-all text-inherit hover:text-blue-600 dark:hover:text-blue-300"
              href="https://github.com/marco-calderon"
            >
              <Icon icon="mdi:github" className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

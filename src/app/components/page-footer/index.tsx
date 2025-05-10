import { Icon } from '@iconify/react';
import Link from 'next/link';
import PageFooterLink from './page-footer-link';
import Image from 'next/image';
import React from 'react';

export default function PageFooter() {
  return (
    <footer className="flex flex-row items-start justify-start md:justify-center w-full px-10 lg:px-0 py-16 text-white relative">
      <Image
        src="/hero-waves.svg"
        alt="Hero Image"
        className="absolute inset-0 object-cover object-bottom-right rotate-180 object- w-full h-full opacity-60"
        width={1920}
        height={1080}
        priority
      />

      <div className="w-auto lg:w-[1300px] lg:max-w-[1300px] z-10">
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-5">
          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-lg font-bold">Links</h4>
            <div className="flex flex-col gap-2">
              <PageFooterLink href="/">Home</PageFooterLink>

              <PageFooterLink href="/#about">About</PageFooterLink>

              <PageFooterLink href="/#services">Services</PageFooterLink>

              <PageFooterLink href="/#skills">Skills</PageFooterLink>

              <PageFooterLink href="/#portfolio">Case studies</PageFooterLink>

              <PageFooterLink
                href="/Marco_Calderon_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </PageFooterLink>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="mb-4 text-lg font-bold">Services</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row items-center transition-all">
                Back end development
              </li>
              <li className="flex flex-row items-center transition-all">
                Front end development
              </li>
              <li className="flex flex-row items-center transition-all">
                REST API development
              </li>
              <li className="flex flex-row items-center transition-all">
                Mobile app development
              </li>
              <li className="flex flex-row items-center transition-all">
                Database administration
              </li>
            </ul>
          </div>

          <div className="text-center text-md-start flex items-center justify-center gap-4">
            <Link
              className="transition-all text-inherit dark:hover:text-blue-300"
              href="https://github.com/marco-calderon"
              target="_blank"
            >
              <Icon icon="mdi:github" className="text-2xl" />
            </Link>

            <Link
              className="transition-all text-inherit dark:hover:text-blue-300"
              href="https://www.linkedin.com/in/mcalderondev/"
              target="_blank"
            >
              <Icon icon="simple-icons:linkedin" className="text-2xl" />
            </Link>

            <Link
              className="transition-all text-inherit dark:hover:text-blue-300"
              href="https://www.upwork.com/freelancers/~01b28af275156f5d9e"
              target="_blank"
            >
              <Icon icon="simple-icons:upwork" className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

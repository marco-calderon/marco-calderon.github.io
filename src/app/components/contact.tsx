import ChevronRight from '@/components/icons/chevron-right';
import Link from 'next/link';
import React from 'react';
import NavbarCtaButton from './navbar/navbar-cta-button';

const Contact = () => {
  return (
    <section id="contact" className="mb-5 contact">
      <div className="">
        <header className="flex flex-col items-center mb-5 w-full">
          <h2 className="text-base font-bold text-blue-700 uppercase dark:text-blue-300">
            Contact
          </h2>
          <p className="text-4xl">Let&apos;s connect</p>
        </header>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col md:flex-row items-center col-12 gap-5">
            <Link
              href="https://www.upwork.com/freelancers/~01b28af275156f5d9e"
              target="_blank"
            >
              <button
                type="button"
                className="flex flex-row items-center justify-center gap-2 px-8 h-[50px] text-white bg-linear-200 from-blue to-purple/50 rounded align-self-center cursor-pointer"
              >
                <span>Hire me on Upwork</span>

                <ChevronRight />
              </button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mcalderondev/"
              target="_blank"
            >
              <NavbarCtaButton>
                <span>LinkedIn Profile</span>

                <ChevronRight />
              </NavbarCtaButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

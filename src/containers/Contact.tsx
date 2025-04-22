import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mb-5 contact">
      <div className="" data-aos="fade-up">
        <header className="flex flex-col items-center mb-5 w-full">
          <h2 className="text-base font-bold text-blue-700 uppercase dark:text-blue-300">
            Contact
          </h2>
          <p className="text-4xl">Let&apos;s talk</p>
        </header>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center col-12">
            <Link
              href="https://www.upwork.com/freelancers/~01b28af275156f5d9e"
              target="_blank"
            >
              <button
                type="button"
                className="flex flex-row items-center justify-center gap-2 px-8 h-[50px] text-white bg-green-500 rounded scrollto align-self-center cursor-pointer"
              >
                <Icon icon="bxl:upwork" className="text-4xl" />

                <span>Hire me on Upwork</span>

                <Icon icon="bi:arrow-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

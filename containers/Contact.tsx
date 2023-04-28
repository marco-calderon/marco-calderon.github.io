import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mb-5 contact">
      <div className="" data-aos="fade-up">
        <header className="flex flex-col items-center mb-5 w-100">
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
                className="flex flex-row items-center justify-center gap-2 px-8 py-4 text-white bg-green-500 rounded-full scrollto align-self-center"
              >
                <Icon icon="tabler:brand-upwork" className="text-4xl" />

                <span>Upwork profile</span>

                <Icon icon="bi:arrow-right" />
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center col-12">
            <Link href="https://github.com/marco-calderon" target="_blank">
              <button
                type="button"
                className="flex flex-row items-center justify-center gap-2 px-8 py-4 text-black bg-white rounded-full scrollto align-self-center"
              >
                <Icon icon="mdi:github" className="text-4xl" />

                <span>GitHub profile</span>

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

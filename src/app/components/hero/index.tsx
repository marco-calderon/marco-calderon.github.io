import React from 'react';
import HeroCtaButton from './hero-cta-button';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-auto md:min-h-[800px] flex items-center justify-center text-white background-animated px-5 md:px-0">
      <div className="max-w-auto lg:max-w-[1300px] flex flex-col items-start z-10">
        <div className="flex flex-col items-start w-full lg:w-1/2 gap-10">
          <h1 className="text-5xl md:text-6xl lg:text-[90px] lg:leading-[97px] font-medium">
            Modern
            <br className="hidden md:flex" /> Application
            <br className="hidden md:flex" /> Engineering
          </h1>
          <p className="text-base md:text-lg leading-[24px] font-light">
            Partnering with innovative startups and companies to build
            high-performance applications that are scalable, maintainable, and
            designed to grow with evolving user needs.
          </p>
          <Link href="#portfolio">
            <HeroCtaButton>Case Studies</HeroCtaButton>
          </Link>
        </div>
      </div>
      <div className="background-animated"></div>

      <Image
        src="/hero-waves.svg"
        alt="Hero Image"
        className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full opacity-60"
        width={1920}
        height={1080}
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default Hero;

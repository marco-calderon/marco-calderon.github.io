'use client';

import React from 'react';
import HeroCtaButton from './hero-cta-button';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white background-animated">
      <div className="max-w-[1300px] flex flex-col items-start z-10">
        <div className="flex flex-col items-start w-1/2 gap-10">
          <h1 className="text-[90px] leading-[97px] font-medium tracking-wider">
            Modern
            <br /> Application
            <br /> Engineering
          </h1>
          <p className="text-lg leading-[24px] font-light tracking-[8%]">
            Partnering with innovative startups and companies to build
            high-performance applications that are scalable, maintainable, and
            designed to grow with evolving user needs.
          </p>
          <a href="#about" className="">
            <HeroCtaButton>Case Studies</HeroCtaButton>
          </a>
        </div>
      </div>
      <div className="background-animated"></div>

      <Image
        src="/hero-waves.svg"
        alt="Hero Image"
        className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full opacity-30"
        width={1920}
        height={1080}
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default Hero;

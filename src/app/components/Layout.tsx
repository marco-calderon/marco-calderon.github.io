import Head from 'next/head';
import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

export type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  navbarTransparent?: boolean;
};

const Layout = ({ children, title, navbarTransparent }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center text-gray-800 bg-white dark:bg-slate-900 dark:text-white">
      <Head>
        <title>{title ?? 'Marco Calderon'}</title>
      </Head>
      <Navbar transparent={navbarTransparent} />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

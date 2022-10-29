import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Antonio Calderon'}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

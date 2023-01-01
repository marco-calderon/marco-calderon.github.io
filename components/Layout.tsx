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
		<div className="flex flex-col items-center text-gray-800 bg-white dark:bg-slate-800 dark:text-white">
			<Head>
				<title>{title ?? 'Marco Calderon'}</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;

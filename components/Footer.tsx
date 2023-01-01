import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className="flex flex-row items-start justify-center w-full py-16 text-white bg-slate-600">
			<div className="w-100">
				<div className="flex flex-row items-start w-100">
					<div className="flex-1 col-lg-2 col-6 footer-links">
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

					<div className="flex-1 col-lg-2 col-6 footer-links">
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

					<div className="flex-1 text-center col-lg-3 col-md-12 footer-contact text-md-start">
						<h4 className="mb-4 text-lg font-bold">Contact</h4>
						<p>
							<Link
								className="transition-all text-inherit hover:text-blue-600 dark:hover:text-blue-300"
								href="https://www.upwork.com/freelancers/~01b28af275156f5d9e"
							>
								Upwork profile
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

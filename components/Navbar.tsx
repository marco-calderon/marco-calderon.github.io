import Link from 'next/link';
import React, { useState } from 'react';
import FullScreenMenu from '../containers/FullScreenMenu';

const Navbar = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<>
			<header id="header" className="header fixed-top bg-white-blur">
				<div className="container-fluid container-xl d-flex align-items-center justify-content-between">
					<Link href="/">
						<div className="cursor-pointer logo d-flex align-items-center">
							<h4 className="mb-0 fw-bold">Marco Calderon</h4>
						</div>
					</Link>
					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<Link
									className="nav-link scrollto active fw-normal"
									href="/#about"
								>
									About
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto fw-normal" href="/#services">
									Services
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto fw-normal" href="/#skills">
									Skills
								</Link>
							</li>
							<li>
								<Link
									className="nav-link scrollto fw-normal"
									href="/#portfolio"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto fw-normal" href="/#contact">
									Contact
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto fw-normal" href="/resume">
									Resume
								</Link>
							</li>
						</ul>
						<i
							className="bi bi-list mobile-nav-toggle"
							onClick={() => setMenuOpened(!menuOpened)}
						></i>
					</nav>
				</div>
			</header>

			<FullScreenMenu open={menuOpened} onClose={() => setMenuOpened(false)} />
		</>
	);
};

export default Navbar;

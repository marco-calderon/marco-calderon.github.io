import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type FullScreenMenuProps = {
	open: boolean;
	onClose?: () => void;
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const linkStyle = { cursor: 'pointer' };

const FullScreenMenu = ({ open, onClose }: FullScreenMenuProps) => {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className="full-screen-menu"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="d-flex flex-column items-center text-center gap-4"
					>
						<Link href="/#about" className="nav-link scrollto fw-normal">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								About
							</motion.h4>
						</Link>
						<Link href="/#services" className="nav-link scrollto fw-normal">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Services
							</motion.h4>
						</Link>
						<Link href="/#skills" className="nav-link scrollto fw-normal">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Skills
							</motion.h4>
						</Link>
						<Link href="/#portfolio" className="nav-link scrollto fw-normal">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Portfolio
							</motion.h4>
						</Link>
						<Link href="/#contact" className="nav-link scrollto fw-normal">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Contact
							</motion.h4>
						</Link>
						<Link href="/resume" className="nav-link scrollto fw-normal">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Resume
							</motion.h4>
						</Link>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default FullScreenMenu;

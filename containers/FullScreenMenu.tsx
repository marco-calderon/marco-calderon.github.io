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
					className="z-[60] flex fixed top-0 bottom-0 left-0 right-0 bg-white/60 w-full h-[100vh] items-center justify-center backdrop-blur-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="flex flex-col items-center gap-4 text-center transition-all"
					>
						<Link href="/#about" className="text-4xl font-bold scrollto">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								About
							</motion.h4>
						</Link>
						<Link href="/#services" className="text-4xl font-bold scrollto">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Services
							</motion.h4>
						</Link>
						<Link href="/#skills" className="text-4xl font-bold scrollto">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Skills
							</motion.h4>
						</Link>
						<Link href="/#portfolio" className="text-4xl font-bold scrollto">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Portfolio
							</motion.h4>
						</Link>
						<Link href="/#contact" className="text-4xl font-bold scrollto">
							<motion.h4 variants={item} onClick={onClose} style={linkStyle}>
								Contact
							</motion.h4>
						</Link>
						<Link href="/resume" className="text-4xl font-bold scrollto">
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

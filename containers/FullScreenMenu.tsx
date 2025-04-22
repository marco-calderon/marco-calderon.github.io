import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react';

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
          className="z-60 flex fixed top-0 bottom-0 left-0 right-0 bg-white/50 dark:bg-gray-900/50 w-full h-[100vh] items-center justify-center backdrop-blur-lg"
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
            <Link
              href="/#about"
              className="text-4xl font-bold text-blue-500 transition-all scrollto dark:text-white hover:text-blue-700 dark:hover:text-gray-200"
            >
              <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                About
              </motion.h4>
            </Link>
            <Link
              href="/#services"
              className="text-4xl font-bold text-blue-500 transition-all scrollto dark:text-white hover:text-blue-700 dark:hover:text-gray-200"
            >
              <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                Services
              </motion.h4>
            </Link>
            <Link
              href="/#skills"
              className="text-4xl font-bold text-blue-500 transition-all scrollto dark:text-white hover:text-blue-700 dark:hover:text-gray-200"
            >
              <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                Skills
              </motion.h4>
            </Link>
            <Link
              href="/#portfolio"
              className="text-4xl font-bold text-blue-500 transition-all scrollto dark:text-white hover:text-blue-700 dark:hover:text-gray-200"
            >
              <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                Portfolio
              </motion.h4>
            </Link>
            <Link
              href="/#contact"
              className="text-4xl font-bold text-blue-500 transition-all scrollto dark:text-white hover:text-blue-700 dark:hover:text-gray-200"
            >
              <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                Contact
              </motion.h4>
            </Link>
            <Link
              href="/resume"
              className="text-4xl font-bold text-blue-500 transition-all scrollto dark:text-white hover:text-blue-700 dark:hover:text-gray-200"
            >
              <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                Resume
              </motion.h4>
            </Link>
            <Link
              className="text-4xl font-bold text-transparent transition-all bg-clip-text bg-linear-to-r from-green-300 hover:from-blue-300 to-blue-300 hover:to-green-300 group"
              href="/store"
            >
              <motion.h4
                variants={item}
                onClick={onClose}
                style={linkStyle}
                className="flex flex-row items-center gap-2"
              >
                <Icon
                  icon="ph:bag-simple-fill"
                  className="text-green-300 transition-all dark:text-green-300 group-hover:text-blue-400"
                />
                Store
              </motion.h4>
            </Link>

            <div className="flex flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/marco-calderon"
                target="_blank"
                className="transition-all dark:text-white hover:text-gray-500"
              >
                <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                  <Icon icon="mdi:github" className="text-4xl" />
                </motion.h4>
              </Link>

              <Link
                href="https://forms.gle/XDuP2JsE5c6DirPn8"
                target="_blank"
                className="transition-all dark:text-white hover:text-green-500"
              >
                <motion.h4 variants={item} onClick={onClose} style={linkStyle}>
                  <Icon icon="fluent:mail-16-filled" className="text-4xl" />
                </motion.h4>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;

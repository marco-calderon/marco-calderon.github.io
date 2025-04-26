import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
              className="text-4xl font-medium transition-all scrollto"
            >
              <motion.h4
                className="cursor-pointer"
                variants={item}
                onClick={onClose}
              >
                About
              </motion.h4>
            </Link>
            <Link
              href="/#services"
              className="text-4xl font-medium transition-all scrollto"
            >
              <motion.h4
                className="cursor-pointer"
                variants={item}
                onClick={onClose}
              >
                Services
              </motion.h4>
            </Link>
            <Link
              href="/#skills"
              className="text-4xl font-medium transition-all scrollto"
            >
              <motion.h4
                className="cursor-pointer"
                variants={item}
                onClick={onClose}
              >
                Skills
              </motion.h4>
            </Link>
            <Link
              href="/#portfolio"
              className="text-4xl font-medium transition-all scrollto"
            >
              <motion.h4
                className="cursor-pointer"
                variants={item}
                onClick={onClose}
              >
                Case Studies
              </motion.h4>
            </Link>
            <Link
              href="/#contact"
              className="text-4xl font-medium transition-all scrollto"
            >
              <motion.h4
                className="cursor-pointer"
                variants={item}
                onClick={onClose}
              >
                Contact
              </motion.h4>
            </Link>
            <Link
              href="/Resume_Marco_Calderon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-medium transition-all scrollto"
            >
              <motion.h4
                className="cursor-pointer"
                variants={item}
                onClick={onClose}
              >
                Resume
              </motion.h4>
            </Link>

            <div className="flex flex-row items-center justify-center gap-4">
              <Link
                href="https://github.com/marco-calderon"
                target="_blank"
                className="transition-all dark:text-white hover:text-gray-500"
              >
                <motion.h4
                  className="cursor-pointer"
                  variants={item}
                  onClick={onClose}
                >
                  <Icon icon="mdi:github" className="text-4xl" />
                </motion.h4>
              </Link>

              <Link
                href="https://forms.gle/XDuP2JsE5c6DirPn8"
                target="_blank"
                className="transition-all dark:text-white hover:text-green-500"
              >
                <motion.h4
                  className="cursor-pointer"
                  variants={item}
                  onClick={onClose}
                >
                  <Icon icon="simple-icons:upwork" className="text-4xl" />
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

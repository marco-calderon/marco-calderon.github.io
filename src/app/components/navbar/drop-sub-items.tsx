'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes, HTMLAttributes, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type DropSectionTriggerProps = HTMLAttributes<HTMLDivElement>;

const DropSectionContext = React.createContext<{
  open?: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export const useDropSection = () => {
  const context = React.useContext(DropSectionContext);

  if (!context) {
    throw new Error(
      'useDropSection must be called inside a DropSubItems component.'
    );
  }

  return context;
};

export const DropSection = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropSectionContext.Provider value={{ open, setOpen }}>
      {children}
    </DropSectionContext.Provider>
  );
};

type DropSectionTriggerArrowProps = HTMLAttributes<HTMLDivElement>;

export const DropSectionTriggerArrow = ({
  className,
}: DropSectionTriggerArrowProps) => {
  const { open } = useDropSection();

  return (
    <ChevronDown
      className={cn(
        'transition-all',
        open ? 'rotate-180' : 'rotate-0',
        className
      )}
    />
  );
};

export const DropSectionTrigger = ({
  className,
  children,
  ...props
}: DropSectionTriggerProps) => {
  const { setOpen } = useDropSection();

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn('relative cursor-pointer', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export type DropSectionContainerProps = {
  ref?: React.RefObject<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

export const DropSectionContainer = React.forwardRef<
  HTMLDivElement,
  DropSectionContainerProps
>(({ children, className }, ref) => {
  const { open, setOpen } = useDropSection();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, paddingTop: 20, paddingBottom: 20 }}
          animate={{ opacity: 1, paddingTop: 40, paddingBottom: 40 }}
          exit={{ opacity: 0, paddingTop: 20, paddingBottom: 20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-[88px] left-0 z-50 w-full border-b bg-background-secondary shadow-lg"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="container mx-auto px-4 py-6">
            <div
              className={cn(
                'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4',
                className
              )}
            >
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

type DropSectionContainerItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    title: string;
    description: string;
  };

export const DropSectionContainerItem = ({
  className,
  title,
  description,
  ...props
}: DropSectionContainerItemProps) => {
  return (
    <Link
      className={cn(
        'block rounded-lg p-4 transition-colors hover:bg-gray-50',
        className
      )}
      {...props}
    >
      <h3 className="mb-1 text-base font-medium">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </Link>
  );
};

DropSectionContainer.displayName = 'DropSectionContainer';

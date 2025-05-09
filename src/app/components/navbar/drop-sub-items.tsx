'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes, HTMLAttributes, useState } from 'react';
import { ChevronDown } from 'lucide-react';
const subItems = [
  {
    title: 'Analytics Platform',
    href: '/products/analytics',
    description: 'Powerful analytics tools for your business',
  },
  {
    title: 'Marketing Suite',
    href: '/products/marketing',
    description: 'All-in-one marketing solution',
  },
  {
    title: 'CRM System',
    href: '/products/crm',
    description: 'Customer relationship management',
  },
  {
    title: 'E-commerce Tools',
    href: '/products/ecommerce',
    description: 'Build and scale your online store',
  },
];

export type DropSubItemsTriggerProps = HTMLAttributes<HTMLDivElement>;

const DropSubItemsContext = React.createContext<{
  open?: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export const useDropSubItems = () => {
  const context = React.useContext(DropSubItemsContext);

  if (!context) {
    throw new Error(
      'useDropSubItems must be called inside a DropSubItems component.'
    );
  }

  return context;
};

export const DropSubItems = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropSubItemsContext.Provider value={{ open, setOpen }}>
      {children}
    </DropSubItemsContext.Provider>
  );
};

type DropSubItemsTriggerArrowProps = HTMLAttributes<HTMLDivElement>;

export const DropSubItemsTriggerArrow = ({
  className,
}: DropSubItemsTriggerArrowProps) => {
  const { open } = useDropSubItems();

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

export const DropSubItemsTrigger = ({
  className,
  children,
  ...props
}: DropSubItemsTriggerProps) => {
  const { setOpen } = useDropSubItems();

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

export type DropSubItemsContainerProps = {
  ref?: React.RefObject<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

export const DropSubItemsContainer = React.forwardRef<
  HTMLDivElement,
  DropSubItemsContainerProps
>(({ children, className }, ref) => {
  const { open, setOpen } = useDropSubItems();

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

type DropSubItemsContainerItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    title: string;
    description: string;
  };

export const DropSubItemsContainerItem = ({
  className,
  title,
  description,
  ...props
}: DropSubItemsContainerItemProps) => {
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

DropSubItemsContainer.displayName = 'DropSubItemsContainer';

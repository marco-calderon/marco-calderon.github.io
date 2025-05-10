'use client';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import React, { HTMLAttributes } from 'react';

type ServiceCardProps = {
  icon: string;
  iconContainerClassName?: string;
  backgroundClassName?: string;
  title: string;
  description: string;
} & HTMLAttributes<HTMLDivElement>;

export const ServiceCard = ({
  icon,
  iconContainerClassName,
  backgroundClassName,
  title,
  description,
  className,
  ...rest
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'transition-all relative flex items-center justify-center group p-4 min-h-72'
      )}
    >
      <div
        className={cn(
          'transition-all scale-95 group-hover:scale-100 absolute rounded-xl inset-0',
          backgroundClassName
        )}
      ></div>

      <div
        className={cn(
          'flex flex-col items-center justify-center flex-1 p-20 px-8 text-center transition-all py-auto h-full group rounded-3xl z-10',
          className
        )}
        {...rest}
      >
        <div
          className={cn(
            'flex flex-col items-center justify-center w-24 h-24 mb-16 rounded-3xl',
            iconContainerClassName
          )}
        >
          <Icon icon={icon} className="text-5xl" />
        </div>
        <h3 className="mb-2 font-bold text-gray-800 dark:text-gray-300 group-hover:text-white">
          {title}
        </h3>
        <p className="flex-1 grow group-hover:text-white">{description}</p>
      </div>
    </div>
  );
};

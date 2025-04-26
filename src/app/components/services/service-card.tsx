import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import React from 'react';

type ServiceCardProps = {
  icon: string;
  iconContainerClassName?: string;
  title: string;
  description: string;
} & React.HTMLProps<HTMLDivElement>;

const ServiceCard = ({
  icon,
  iconContainerClassName,
  title,
  description,
  className,
  ...rest
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center flex-1 p-20 px-8 text-center transition-all border-b-4 min-h-72 py-auto h-full group rounded-3xl',
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          'flex flex-col items-center justify-center w-24 h-24 mb-16 text-white group-hover:bg-white rounded-3xl',
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
  );
};

export default ServiceCard;

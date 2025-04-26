import ChevronDown from '@/components/icons/chevron-down';
import React, { ButtonHTMLAttributes } from 'react';

type NavbarDropdownProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NavbarDropdown = ({
  children,
  className,
  ...rest
}: NavbarDropdownProps) => {
  return (
    <button
      type={rest.type ?? 'button'}
      className={`flex flex-row items-center gap-2 cursor-pointer tracking-widest font-medium ${className}`}
    >
      {children}
      <ChevronDown />
    </button>
  );
};

export default NavbarDropdown;

// 1300px width, maxWith 1440px

import React, { ButtonHTMLAttributes } from 'react';

type NavbarCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NavbarCtaButton: React.FC<NavbarCtaButtonProps> = ({
  children,
  className,
  type,
  ...rest
}) => {
  return (
    <button
      className={`px-10 py-4 bg-transparent text-white rounded border-[2px] border-blue transition font-medium tracking-widest ${className}`}
      type={type ?? 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default NavbarCtaButton;

import React, { ButtonHTMLAttributes } from 'react';

type NavbarCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const gradientBorderStyle = {
  borderWidth: '2px',
  borderRadius: '4px',
  borderStyle: 'solid',
  borderImage: 'linear-gradient(200deg, #2C80FF, #6C46EA) 1',
};

const NavbarCtaButton: React.FC<NavbarCtaButtonProps> = ({
  children,
  className,
  type,
  ...rest
}) => {
  return (
    <div className="rounded overflow-hidden">
      <button
        style={gradientBorderStyle}
        className={`cursor-pointer h-[50px] flex flex-row items-center justify-center px-10 text-white  ${className}`}
        type={type ?? 'button'}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default NavbarCtaButton;

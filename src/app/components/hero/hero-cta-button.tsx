import React, { ButtonHTMLAttributes } from 'react';

type HeroCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const HeroCtaButton: React.FC<HeroCtaButtonProps> = ({
  children,
  className,
  type,
  ...rest
}) => {
  return (
    <button
      className={`px-10 py-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition tracking-widest ${className}`}
      type={type ?? 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default HeroCtaButton;

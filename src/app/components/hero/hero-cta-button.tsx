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
      className={`px-10 py-4 text-white rounded-md bg-linear-200 from-gray to-light-gray/50 transition cursor-pointer ${className}`}
      type={type ?? 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default HeroCtaButton;

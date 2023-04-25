import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'rounded-md p-3 px-5 transition-all duration-75 active:scale-95 font-interTight hover:ring ring-white',
  {
    variants: {
      variant: {
        primary: 'bg-logo text-dark font-bold',
        secondary: 'bg-mid text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const Button = ({ className, children, variant, ...props }) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

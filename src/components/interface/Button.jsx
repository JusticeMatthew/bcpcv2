import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'rounded pr-6 pl-4 h-10 text-sm transition-color duration-75 active:scale-95 hover:ring ring-logo ring-inset flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-logo text-dark font-bold hover:bg-dark hover:text-logo',
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

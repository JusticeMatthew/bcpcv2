import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'rounded-md p-3 px-5 transition-all duration-75 active:scale-95 font-lato hover:ring ring-logo ring-inset flex items-center justify-center gap-2',
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

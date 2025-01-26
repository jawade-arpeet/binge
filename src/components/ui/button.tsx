import React from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium text-sm rounded-md transition-colors duration-100",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-lime-500",
        ghost: "bg-transparent hover:bg-stone-200",
      },
      size: {
        default: "px-4 py-2 h-9",
        size: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({
          className,
          variant,
          size,
        }),
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

import cn from "../../utils/cn";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        "h-9 w-full rounded-md border border-stone-400 bg-transparent px-3 py-2 text-sm font-medium placeholder:font-normal placeholder:text-stone-400 focus:border-none focus:ring-2 focus:ring-stone-400 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
};

export default Input;

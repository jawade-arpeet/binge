import React from "react";

import cn from "../utils/cn";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 h-9 bg-background border border-stone-400 rounded-lg placeholder:font-normal placeholder:text-stone-400 font-medium text-sm",
        className,
      )}
      {...props}
    />
  );
}

export default Input;

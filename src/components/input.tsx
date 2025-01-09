import React from "react";

import cn from "../utils/cn.ts";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 h-9 font-medium text-sm border border-stone-400 placeholder:font-normal bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-none placeholder:text-stone-400",
        className,
      )}
      {...props}
    />
  );
}

export default Input;

import React from "react";

import { Link } from "react-router-dom";

import cn from "../utils/cn.ts";

function Logo({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      to={"/"}
      className={cn("text-xl font-semibold", className)}
      {...props}
    >
      binge
    </Link>
  );
}

export default Logo;

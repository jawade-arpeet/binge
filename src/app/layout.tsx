import React from "react";
import { Metadata } from "next";

import "@/styles/globals.css";
import inter from "@/lib/font";

export const metadata: Metadata = {
  title: "Binge",
};

const Layout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default Layout;

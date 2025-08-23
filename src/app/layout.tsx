import { Theme } from "@radix-ui/themes";

import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Theme accentColor="lime">
        <body>{children}</body>
      </Theme>
    </html>
  );
};

export default RootLayout;

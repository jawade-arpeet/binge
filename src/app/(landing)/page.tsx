import Link from "next/link";

import Button from "@/components/ui/button";

const Page = () => {
  return (
    <main className={"px-4 md:px-6"}>
      <header className={"mx-auto max-w-screen-xl py-4"}>
        <nav className={"flex items-center justify-between"}>
          <Link href={"/"} className={"text-xl font-semibold"}>
            binge
          </Link>
          <Button>Create Account</Button>
        </nav>
      </header>
    </main>
  );
};

export default Page;

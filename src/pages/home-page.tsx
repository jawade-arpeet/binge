import { Link } from "react-router-dom";

import Button from "../components/ui/button";

const HomePage = () => {
  return (
    <main className="px-6 pt-4 md:pt-6">
      <header className="mx-auto max-w-screen-xl">
        <nav className="flex items-center justify-between">
          <Link to={"/"} className="text-xl font-semibold">
            binge
          </Link>
          <div className="flex items-center gap-x-4">
            <Link to={"/sign-in"}>
              <Button variant={"ghost"}>Login</Button>
            </Link>
            <Link to={"/sign-up"}>
              <Button>Sign up</Button>
            </Link>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default HomePage;

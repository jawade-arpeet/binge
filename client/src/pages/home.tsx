import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

function HomePage() {
  return (
    <main>
      <header className="px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link className="text-xl font-semibold" to={"/"}>
            binge
          </Link>
          <div className="flex items-center gap-x-4">
            <Input className="w-24 sm:w-full" placeholder={"Search"} />
            <Button className="hidden sm:inline-flex" variant={"ghost"}>
              Login
            </Button>
            <Button>Sign up</Button>
          </div>
        </nav>
      </header>
    </main>
  );
}

export default HomePage;

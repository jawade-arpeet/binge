import { Link } from "react-router-dom";

import Button from "../components/button.tsx";
import Logo from "../components/logo.tsx";

function Header() {
  return (
    <header className={"px-6 py-4"}>
      <nav className={"flex items-center justify-between"}>
        <Logo />
        <div className={"flex items-center gap-x-4"}>
          <Link to={"/sign-in"}>
            <Button variant={"ghost"}>Login</Button>
          </Link>
          <Link to={"/sign-up"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}

export default Home;

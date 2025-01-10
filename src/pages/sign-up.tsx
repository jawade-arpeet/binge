import { Link } from "react-router-dom";

import Logo from "../components/logo.tsx";
import Input from "../components/input.tsx";
import Button from "../components/button.tsx";

function SignUpPage() {
  return (
    <>
      <Logo />
      <h4 className={"text-2xl font-semibold tracking-tight mt-2"}>
        Get Started Now
      </h4>
      <p className={"font-medium text-sm -mt-0.5 text-stone-500"}>
        Enter your credentials to access your account
      </p>
      <form className={"flex flex-col items-center gap-y-1.5 mt-4"}>
        <Input placeholder={"Email"} type={"email"} name={"email"} />
        <Input placeholder={"Password"} type={"password"} name={"password"} />
        <Button type="submit" className={"w-full"}>
          Sign Up
        </Button>
      </form>
      <p className={"text-sm text-stone-500 font-medium mt-4"}>
        Already have account?{" "}
        <Link to={"/sign-in"} className={"text-stone-950"}>
          Login
        </Link>
      </p>
    </>
  );
}

export default SignUpPage;

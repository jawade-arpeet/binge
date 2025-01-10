import { Link } from "react-router-dom";

import Logo from "../components/logo.tsx";
import Input from "../components/input.tsx";
import Button from "../components/button.tsx";

function SignInPage() {
  return (
    <>
      <Logo />
      <h4 className={"text-2xl font-semibold tracking-tight mt-2"}>Login</h4>
      <p className={"font-medium text-sm text-stone-500"}>
        Enter your credentials to access your account
      </p>
      <form className={"flex flex-col items-center gap-y-1.5 mt-4"}>
        <Input placeholder={"Email"} type={"email"} name={"email"} />
        <Input placeholder={"Password"} type={"password"} name={"password"} />
        <Button type="submit" className={"w-full"}>
          Sign Up
        </Button>
      </form>
      <Link
        to="/forgot-password"
        className={"inline-block font-medium text-sm mt-4"}
      >
        Forgot Password?
      </Link>
      <p className={"text-sm text-stone-500 font-medium"}>
        Don&#39;t have an account?{" "}
        <Link to={"/sign-up"} className={"text-stone-950"}>
          Create an account
        </Link>
      </p>
    </>
  );
}

export default SignInPage;

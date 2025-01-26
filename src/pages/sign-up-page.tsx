import { Link } from "react-router-dom";

import Button from "../components/ui/button";
import Input from "../components/ui/input";

const SignUpPage = () => {
  return (
    <>
      <h4 className="mt-2 text-xl font-semibold">Create an account</h4>
      <p className="-mt-0.5 text-sm text-stone-600">
        Sign up to create your account
      </p>
      <form className="mt-4 flex flex-col items-center gap-y-1">
        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="Password" type="password" name="password" />
        <Button className="w-full">Create Account</Button>
      </form>
      <p className="mt-6 text-sm text-stone-600">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="font-medium text-stone-950 hover:underline hover:underline-offset-2"
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUpPage;

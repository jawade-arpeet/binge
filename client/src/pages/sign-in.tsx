import { Link } from "react-router-dom";

import Button from "../components/button";
import Input from "../components/input";
import { useState } from "react";

function SignInPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(credentials);
  }

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <section className="w-80">
        <Link to={"/"} className="text-xl font-semibold">
          binge
        </Link>
        <h1 className="font-medium">Log in to binge</h1>
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-y-2">
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={onChange}
            required={true}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={onChange}
            required={true}
          />
          <Button type="submit">Sign in</Button>
        </form>
        <Link className="inline-block text-sm mt-6 text-stone-700" to="#">
          Forgot password?
        </Link>
        <p className="text-sm text-stone-600">
          Dont&apos;t have an account?{" "}
          <Link className="text-black" to={"/sign-up"}>
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}

export default SignInPage;

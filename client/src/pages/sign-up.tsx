import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/button";
import Input from "../components/input";

function SignUpPage() {
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
        <h1 className="font-medium">Create an account</h1>
        <form className="mt-4 flex flex-col gap-y-2" onSubmit={onSubmit}>
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
          <Button type="submit">Sign up</Button>
        </form>
        <p className="text-sm text-stone-600 mt-6">
          Already have an account?{" "}
          <Link className="text-black" to={"/sign-in"}>
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}

export default SignUpPage;

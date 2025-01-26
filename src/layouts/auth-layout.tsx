import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <section className={"w-4/5 max-w-sm"}>
        <Link to={"/"} className="text-xl font-semibold">
          binge
        </Link>
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;

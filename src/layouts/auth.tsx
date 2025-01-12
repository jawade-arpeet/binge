import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main
      className={"h-screen w-screen flex flex-col items-center justify-center"}
    >
      <section className={"w-4/5 max-w-sm"}>
        <Outlet />
      </section>
    </main>
  );
}

export default AuthLayout;

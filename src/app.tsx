import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import AuthLayout from "./layouts/auth.tsx";
import SignInPage from "./pages/sign-in.tsx";
import ConfirmEmailPage from "./pages/confirm-email.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path={"/sign-in"} element={<SignInPage />} />
          <Route path={"/confirm-email"} element={<ConfirmEmailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

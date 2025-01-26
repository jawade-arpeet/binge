import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import AuthLayout from "./layouts/auth-layout";
import SignUpPage from "./pages/sign-up-page";
import SignInPage from "./pages/sign-in-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

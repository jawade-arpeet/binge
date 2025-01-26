import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import AuthLayout from "./layouts/auth-layout";
import SignUpPage from "./pages/sign-up-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

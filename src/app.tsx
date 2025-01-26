import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import AuthLayout from "./layouts/auth-layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route element={<AuthLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

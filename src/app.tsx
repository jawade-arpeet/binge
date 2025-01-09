import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import AuthLayout from "./layouts/auth.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route element={<AuthLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

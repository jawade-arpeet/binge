import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

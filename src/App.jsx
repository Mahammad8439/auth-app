import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/signup"
import Login from "./components/Login/login";
import Home from "./components/Home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}



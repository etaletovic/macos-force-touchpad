
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ForceTouchPage from "./pages/ForceTouchPage";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/force-touch" element={<ForceTouchPage />} />
    </Routes>
  </div>
);

export default App;

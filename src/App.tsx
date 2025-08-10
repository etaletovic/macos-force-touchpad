
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ForceTouchPage from "./pages/ForceTouchPage";
import TouchpadRasterGenerator from "./pages/TouchpadRasterGenerator";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/force-touch" element={<ForceTouchPage />} />
      <Route path="/raster-generator" element={<TouchpadRasterGenerator />} />
    </Routes>
  </div>
);

export default App;

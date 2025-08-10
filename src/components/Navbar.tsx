import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
    <div className="font-bold text-lg tracking-wide">Force Touchpad Demo</div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
      <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
    </div>
  </nav>
);

export default Navbar;

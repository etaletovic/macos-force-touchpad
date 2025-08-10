import React from "react";

import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Touchpad Tools</h1>
    <p className="mb-8 text-center text-gray-700">A collection of tools for testing and exploring touchpad features. Select a tool below:</p>
    <ul className="space-y-4">
      <li>
        <Link
          to="/force-touch"
          className="block w-full px-6 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-lg text-center font-semibold"
        >
          Apple Force Touchpad Tool
        </Link>
      </li>
      <li>
        <Link
          to="/raster-generator"
          className="block w-full px-6 py-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors text-lg text-center font-semibold"
        >
          Touchpad Raster Generator Tool
        </Link>
      </li>
    </ul>
  </div>
);

export default Home;

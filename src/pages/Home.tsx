import React from "react";
import ForceTouchPad from "../components/ForceTouchPad";

const Home: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">MacBook Force Touchpad Demo</h1>
    <ForceTouchPad />
  </div>
);

export default Home;

import React from "react";

const About: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-gray-800">
    <h2 className="text-2xl font-bold mb-4">About This App</h2>
    <p className="mb-2">
      This demo app detects the amount of force applied to a MacBook touchpad using the WebKit Force Touch API. Try pressing harder on the touchpad area to see the force value update in real time.
    </p>
    <p className="text-sm text-gray-500">
      Note: This feature is only available on supported MacBook devices and browsers (Safari).
    </p>
  </div>
);

export default About;

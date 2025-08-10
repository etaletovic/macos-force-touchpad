import React from "react";

const About: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-gray-800">
    <h2 className="text-2xl font-bold mb-4">About Touchpad Tools</h2>
    <p className="mb-2">
      Touchpad Tools is a collection of utilities for testing and exploring advanced touchpad features. The app includes tools for generating raster patterns for touchpad testing, as well as a Mac-specific tool for detecting the amount of force applied to a touchpad using the WebKit Force Touch API.
    </p>
    <p className="mb-2">
      Use the navigation above to explore the available tools. The raster generator can help you design and export test patterns for any touchpad, while the Mac Force Touch tool lets you visualize force data in real time (Safari on supported MacBook devices only).
    </p>
    <p className="text-sm text-gray-500">
      Note: Force detection is only available on supported MacBook devices and browsers (Safari).
    </p>
  </div>
);

export default About;

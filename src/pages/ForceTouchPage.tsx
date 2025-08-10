import React from "react";
import ForceTouchPad from "../components/ForceTouchPad";

const isSafari = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR/.test(ua);
};

const ForceTouchPage: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Apple Force Touchpad Tool</h1>
    {isSafari() ? (
      <ForceTouchPad />
    ) : (
      <div className="text-center text-red-600 font-semibold">
        This tool works only in Safari on macOS with a Force Touch trackpad.
      </div>
    )}
  </div>
);

export default ForceTouchPage;

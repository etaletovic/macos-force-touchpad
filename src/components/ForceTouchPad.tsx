import React, { useRef, useState, useEffect } from "react";
import ForceValueDisplay from "./ForceValueDisplay";

const ForceTouchPad: React.FC = () => {
  const padRef = useRef<HTMLDivElement>(null);
  const [force, setForce] = useState(0);
  const [isForceTouch, setIsForceTouch] = useState(false);

  useEffect(() => {
    const pad = padRef.current;
    if (!pad) return;

    const handleMouseDown = (e: MouseEvent) => {
      const webkitForce = (e as MouseEvent & { webkitForce?: number })["webkitForce"];
      if (typeof webkitForce !== "number") return;
      setForce(webkitForce || 0);
      setIsForceTouch(webkitForce >= 1);
    };
    const handleMouseUp = () => {
      setForce(0);
      setIsForceTouch(false);
    };
    const handleMouseMove = (e: MouseEvent) => {
      const webkitForce = (e as MouseEvent & { webkitForce?: number })["webkitForce"];
      if (typeof webkitForce !== "number") return;
      setForce(webkitForce || 0);
      setIsForceTouch(webkitForce >= 1);
    };

    pad.addEventListener("mousedown", handleMouseDown);
    pad.addEventListener("mouseup", handleMouseUp);
    pad.addEventListener("mousemove", handleMouseMove);

    return () => {
      pad.removeEventListener("mousedown", handleMouseDown);
      pad.removeEventListener("mouseup", handleMouseUp);
      pad.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div
        ref={padRef}
        className="w-64 h-64 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center cursor-pointer select-none border-4 border-blue-500 hover:border-blue-400 transition-all"
      >
        <span className="text-white text-lg">Press and apply force here</span>
      </div>
      <ForceValueDisplay force={force} isForceTouch={isForceTouch} />
    </div>
  );
};

export default ForceTouchPad;

import React from "react";

interface ForceValueDisplayProps {
  force: number;
  isForceTouch: boolean;
}

const ForceValueDisplay: React.FC<ForceValueDisplayProps> = ({ force, isForceTouch }) => (
  <div className="mt-4 text-center">
    <div className="text-2xl font-semibold">
      Force: <span className="text-blue-500">{force.toFixed(3)}</span>
    </div>
    <div className={isForceTouch ? "text-green-500" : "text-gray-400"}>
      {isForceTouch ? "Force Click detected!" : "Apply more pressure for Force Click"}
    </div>
  </div>
);

export default ForceValueDisplay;

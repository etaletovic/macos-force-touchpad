import React from "react";

interface RasterVisualizerProps {
  csv: string;
  width: number;
  height: number;
  className?: string;
}

const pointRadius = 6;

const RasterVisualizer: React.FC<RasterVisualizerProps> = ({ csv, width, height, className }) => {
  // Parse CSV into array of points [[{x, y}, ...], ...]
  const rows = csv.trim().split("\n").filter(Boolean);
  const points: { x: number; y: number }[][] = rows.map(row =>
    row.split(" ").map(pair => {
      const [x, y] = pair.split(",").map(Number);
      return { x, y };
    })
  );


  // SVG padding and scaling for prominence
  const pad = 40;
  const scale = 3; // Make the visualization larger
  const svgWidth = width * scale + pad * 2;
  const svgHeight = height * scale + pad * 2;

  return (
    <div className={`flex flex-col items-center justify-center h-full ${className || ''}`}>
      <h2 className="text-2xl font-bold mb-4 text-center mt-8 lg:mt-12">Raster Visualization</h2>
      <div className="bg-white border-2 border-blue-200 rounded-xl shadow-lg p-6 flex items-center justify-center w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="block w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Touchpad outline */}
          <rect
            x={pad}
            y={pad}
            width={width * scale}
            height={height * scale}
            rx={24}
            fill="#e5e7eb"
            stroke="#2563eb"
            strokeWidth={3}
          />
          {/* Points */}
          {points.map((row, rIdx) =>
            row.map((pt, cIdx) => (
              <circle
                key={`pt-${rIdx}-${cIdx}`}
                cx={pt.x * scale + pad}
                cy={pt.y * scale + pad}
                r={pointRadius * scale * 0.5}
                fill="#2563eb"
                stroke="#1e40af"
                strokeWidth={2}
              />
            ))
          )}
        </svg>
      </div>
    </div>
  );
};

export default RasterVisualizer;

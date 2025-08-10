import React, { useState } from "react";
import RasterVisualizer from "../components/RasterVisualizer";

interface RasterForm {
  width: number;
  height: number;
  edgeOffset: number;
  toolWidth: number;
  pattern: string;
}

function parsePattern(pattern: string): [number, number] | null {
  const match = pattern.match(/^(\d+)\s*[xX]\s*(\d+)$/);
  if (!match) return null;
  return [parseInt(match[1], 10), parseInt(match[2], 10)];
}

function generateRasterCSV({ width, height, edgeOffset, toolWidth, pattern }: RasterForm): string {
  const parsed = parsePattern(pattern);
  if (!parsed) return "Invalid pattern format. Use m x n (e.g. 7x5)";
  const [cols, rows] = parsed;
  if (cols < 1 || rows < 1) return "Pattern must have at least 1 row and 1 column.";

  // Calculate available area
  const usableWidth = width - 2 * edgeOffset;
  const usableHeight = height - 2 * edgeOffset;
  if (usableWidth <= 0 || usableHeight <= 0) return "Edge offset too large for touchpad size.";

  // Calculate spacing between points
  const colSpacing = cols > 1 ? (usableWidth - toolWidth) / (cols - 1) : 0;
  const rowSpacing = rows > 1 ? (usableHeight - toolWidth) / (rows - 1) : 0;

  // Generate coordinates: each row is a line, each value is x,y, separated by commas, values in a row separated by spaces
  const lines: string[] = [];
  for (let r = 0; r < rows; r++) {
  const rowPoints: string[] = [];
    for (let c = 0; c < cols; c++) {
  const x = Math.floor(edgeOffset + toolWidth / 2 + c * colSpacing);
  const y = Math.floor(edgeOffset + toolWidth / 2 + r * rowSpacing);
  rowPoints.push(`${x},${y}`);
    }
    lines.push(rowPoints.join(" "));
  }
  return lines.join("\n");
}

const TouchpadRasterGenerator: React.FC = () => {
  const [form, setForm] = useState<RasterForm>({
    width: 100,
    height: 60,
    edgeOffset: 5,
    toolWidth: 8,
    pattern: "7x5",
  });
  const [csv, setCSV] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePatternChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, pattern: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert string values to numbers
    const values = {
      ...form,
      width: Number(form.width),
      height: Number(form.height),
      edgeOffset: Number(form.edgeOffset),
      toolWidth: Number(form.toolWidth),
    };
    setCSV(generateRasterCSV(values));
  };

  return (
    <div className="w-full min-h-screen p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Touchpad Raster Generator Tool</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">
        {/* Left column: Form and Output */}
        <div className="flex flex-col h-full bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Raster Pattern Generator</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700">Touchpad Width (mm)</label>
                <input type="number" name="width" value={form.width} onChange={handleChange} min={1} className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Touchpad Height (mm)</label>
                <input type="number" name="height" value={form.height} onChange={handleChange} min={1} className="w-full border rounded px-3 py-2" required />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700">Edge Offset (mm)</label>
                <input type="number" name="edgeOffset" value={form.edgeOffset} onChange={handleChange} min={0} className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Test Tool Width (mm)</label>
                <input type="number" name="toolWidth" value={form.toolWidth} onChange={handleChange} min={1} className="w-full border rounded px-3 py-2" required />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Raster Pattern (m x n)</label>
              <input type="text" name="pattern" value={form.pattern} onChange={handlePatternChange} pattern="^\d+\s*[xX]\s*\d+$" className="w-full border rounded px-3 py-2" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Generate CSV</button>
          </form>
          {/* Output below form */}
          {csv && (
            <div className="w-full mt-8">
              <h2 className="text-xl font-bold mb-2">Generated CSV</h2>
              <textarea className="w-full h-64 border rounded p-2 font-mono text-sm" value={csv} readOnly />
            </div>
          )}
        </div>
        {/* Right column: Visualizer */}
        <div className="flex flex-col h-full bg-white rounded-lg shadow p-4">
          {csv && (
            <RasterVisualizer csv={csv} width={Number(form.width)} height={Number(form.height)} className="w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TouchpadRasterGenerator;

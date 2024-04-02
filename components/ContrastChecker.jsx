// components/ContrastChecker.js
'use client'

// components/ContrastChecker.js
import { useState } from 'react';

const ContrastChecker = () => {
  const [contrastData, setContrastData] = useState(null);
  const [fColor, setFColor] = useState('');
  const [bColor, setBColor] = useState('');

  const fetchContrastData = async () => {
    if (fColor && bColor) {
      const apiUrl = `https://webaim.org/resources/contrastchecker/?fcolor=${fColor}&bcolor=${bColor}&api`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setContrastData(data);
      } catch (error) {
        console.error('Error fetching contrast data:', error);
      }
    }
  };

  console.log(contrastData)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Color Contrast Checker</h1>
      <div className="flex items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Foreground Color (e.g., #000000)"
            className="p-2 mr-4 border border-gray-300 rounded"
            value={fColor}
            onChange={(e) => setFColor(e.target.value)}
          />
          <input
            type="color"
            value={fColor}
            onChange={(e) => setFColor(e.target.value)}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Background Color (e.g., #FFFFFF)"
            className="p-2 mr-4 border border-gray-300 rounded"
            value={bColor}
            onChange={(e) => setBColor(e.target.value)}
          />
          <input
            type="color"
            value={bColor}
            onChange={(e) => setBColor(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 ml-4 rounded"
          onClick={fetchContrastData}
        >
          Check Contrast
        </button>
      </div>
      {contrastData && (
        <div className="mt-4">
          <p>Contrast Ratio: {contrastData.contrastRatio}</p>
          <p>AA: {contrastData.AA}</p>
          <p>AAA: {contrastData.AAA}</p>
        </div>
      )}
    </div>
  );
};

export default ContrastChecker;


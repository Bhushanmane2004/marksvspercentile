import React from 'react';
import { PercentileData } from '../data/percentileData';

interface PercentileDisplayProps {
  percentileData: PercentileData | null;
  score: number | null;
  difficulty: string;
}

const PercentileDisplay: React.FC<PercentileDisplayProps> = ({
  percentileData,
  score,
  difficulty,
}) => {
  if (!percentileData || score === null) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500">Enter your score to see your percentile</p>
      </div>
    );
  }

  // Calculate color based on percentile
  const getColor = (percentile: number) => {
    if (percentile >= 90) return 'bg-green-500';
    if (percentile >= 75) return 'bg-green-400';
    if (percentile >= 60) return 'bg-blue-500';
    if (percentile >= 45) return 'bg-yellow-500';
    if (percentile >= 30) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const color = getColor(percentileData.percentile);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 transform hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">Your Result</h3>
        <p className="text-sm text-gray-500">{difficulty} Difficulty</p>
      </div>
      
      <div className="flex flex-col items-center mb-4">
        <div className={`w-32 h-32 ${color} rounded-full flex items-center justify-center mb-2 transition-all duration-500 transform hover:scale-105`}>
          <span className="text-3xl font-bold text-white">{percentileData.percentile.toFixed(1)}</span>
        </div>
        <p className="text-sm font-medium text-gray-700">Percentile</p>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          With a score of <span className="font-semibold">{score}</span>, you've performed better than{' '}
          <span className="font-semibold">{percentileData.percentile.toFixed(1)}%</span> of test takers at the {difficulty} difficulty level.
        </p>
      </div>
    </div>
  );
};

export default PercentileDisplay;
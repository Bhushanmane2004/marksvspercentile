import React, { useState, useEffect } from 'react';
import { DifficultyLevel } from '../types';
import percentileData from '../data/percentileData';

interface CompareViewProps {
  score: number | null;
}

const CompareView: React.FC<CompareViewProps> = ({ score }) => {
  const [comparisons, setComparisons] = useState<Array<{
    difficulty: DifficultyLevel;
    percentile: number;
  }>>([]);

  useEffect(() => {
    if (score === null) return;
    
    const difficulties: DifficultyLevel[] = ['Easy', 'Moderate', 'Difficult'];
    const newComparisons = difficulties.map(difficulty => {
      const data = percentileData[difficulty][score];
      return {
        difficulty,
        percentile: data ? data.percentile : 0
      };
    });
    
    setComparisons(newComparisons);
  }, [score]);

  if (score === null) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Difficulty Comparison</h3>
        <p className="text-gray-500 text-center py-4">Enter a score to compare across difficulty levels</p>
      </div>
    );
  }

  // Get color based on percentile
  const getColor = (percentile: number) => {
    if (percentile >= 90) return 'bg-green-500';
    if (percentile >= 75) return 'bg-green-400';
    if (percentile >= 60) return 'bg-blue-500';
    if (percentile >= 45) return 'bg-yellow-500';
    if (percentile >= 30) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Difficulty Comparison</h3>
      
      <div className="space-y-4">
        {comparisons.map(({ difficulty, percentile }) => (
          <div key={difficulty} className="flex items-center space-x-4">
            <div className="w-24 flex-shrink-0">
              <span className="font-medium text-gray-700">{difficulty}</span>
            </div>
            
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className={`h-4 rounded-full ${getColor(percentile)} transition-all duration-500 ease-out`}
                  style={{ width: `${Math.max(percentile, 2)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="w-16 text-right">
              <span className="font-semibold">{percentile.toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          This comparison shows how your score of {score} ranks differently across all difficulty levels.
        </p>
      </div>
    </div>
  );
};

export default CompareView;
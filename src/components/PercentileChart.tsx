import React, { useEffect, useState } from 'react';
import { DifficultyLevel } from '../types';
import percentileData from '../data/percentileData';

interface PercentileChartProps {
  difficulty: DifficultyLevel;
  currentScore: number | null;
}

const PercentileChart: React.FC<PercentileChartProps> = ({ difficulty, currentScore }) => {
  const [chartData, setChartData] = useState<Array<{ score: number; percentile: number }>>([]);
  
  useEffect(() => {
    // Extract scores and percentiles for selected difficulty
    const difficultyData = percentileData[difficulty];
    const dataPoints = Object.entries(difficultyData)
      .map(([score, data]) => ({
        score: parseInt(score),
        percentile: data.percentile
      }))
      .sort((a, b) => a.score - b.score);
    
    setChartData(dataPoints);
  }, [difficulty]);

  if (chartData.length === 0) {
    return <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">Loading chart data...</div>;
  }

  const maxScore = Math.max(...chartData.map(point => point.score));
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Percentile Distribution</h3>
      
      <div className="w-full h-64 relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full w-10 flex flex-col justify-between text-xs text-gray-500">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        
        {/* Chart area */}
        <div className="ml-10 h-full w-full relative">
          {/* Horizontal grid lines */}
          {[0, 25, 50, 75, 100].map((tick) => (
            <div 
              key={tick} 
              className="absolute w-full border-t border-gray-200"
              style={{ top: `${100 - tick}%` }}
            />
          ))}
          
          {/* Chart line */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            
            {/* Line */}
            <polyline
              points={chartData.map(point => 
                `${(point.score / maxScore) * 100}%,${100 - point.percentile}%`
              ).join(' ')}
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              className="transition-all duration-500"
            />
            
            {/* Area under the line */}
            <path
              d={`
                M0,100%
                ${chartData.map(point => 
                  `L${(point.score / maxScore) * 100}%,${100 - point.percentile}%`
                ).join(' ')}
                L100%,100%
                Z
              `}
              fill="url(#line-gradient)"
              fillOpacity="0.1"
              className="transition-all duration-500"
            />
            
            {/* Current score marker */}
            {currentScore !== null && (
              <circle
                cx={`${(currentScore / maxScore) * 100}%`}
                cy={`${100 - (percentileData[difficulty][currentScore]?.percentile || 0)}%`}
                r="5"
                fill="#ef4444"
                className="animate-pulse"
              />
            )}
          </svg>
          
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>{Math.floor(maxScore * 0.25)}</span>
            <span>{Math.floor(maxScore * 0.5)}</span>
            <span>{Math.floor(maxScore * 0.75)}</span>
            <span>{maxScore}</span>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-2 text-center">
        Score
      </div>
    </div>
  );
};

export default PercentileChart;
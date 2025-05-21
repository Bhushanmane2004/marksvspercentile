import React from 'react';
import { HistoryItem } from '../types';

interface HistoryListProps {
  history: HistoryItem[];
  onSelectHistoryItem: (item: HistoryItem) => void;
  onClearHistory: () => void;
}

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  onSelectHistoryItem,
  onClearHistory,
}) => {
  if (history.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Recent Searches</h3>
        </div>
        <p className="text-sm text-gray-500 text-center py-4">No recent searches</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Recent Searches</h3>
        <button
          onClick={onClearHistory}
          className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
        >
          Clear all
        </button>
      </div>
      
      <div className="space-y-2">
        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectHistoryItem(item)}
            className="p-3 rounded-md border border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200"
          >
            <div className="flex justify-between">
              <div>
                <span className="font-medium text-gray-900">{item.score}</span>
                <span className="text-gray-500 text-sm"> / 200</span>
              </div>
              <span className="text-sm font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                {item.percentile.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">{item.difficulty}</span>
              <span className="text-xs text-gray-400">
                {new Date(item.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
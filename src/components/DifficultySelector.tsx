import React from 'react';
import { DifficultyLevel } from '../types';

interface DifficultySelectorProps {
  selectedDifficulty: DifficultyLevel;
  onSelectDifficulty: (difficulty: DifficultyLevel) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelectDifficulty,
}) => {
  const difficulties: DifficultyLevel[] = ['Easy', 'Moderate', 'Difficult'];

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          className={`flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
            selectedDifficulty === difficulty
              ? 'bg-blue-600 text-white shadow-md transform scale-105'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
          onClick={() => onSelectDifficulty(difficulty)}
        >
          {difficulty}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
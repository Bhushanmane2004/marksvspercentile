import React, { useState, useEffect } from 'react';

interface ScoreInputProps {
  onScoreChange: (score: number) => void;
  maxScore: number;
}

const ScoreInput: React.FC<ScoreInputProps> = ({ onScoreChange, maxScore }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize with empty input
    setInputValue('');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty input
    if (value === '') {
      setInputValue('');
      setError('');
      return;
    }
    
    const numValue = parseInt(value, 10);
    
    // Validate input
    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      setInputValue(value);
      return;
    }
    
    if (numValue < 0) {
      setError('Score cannot be negative');
      setInputValue(value);
      return;
    }
    
    if (numValue > maxScore) {
      setError(`Score cannot exceed ${maxScore}`);
      setInputValue(value);
      return;
    }
    
    // Valid input
    setInputValue(value);
    setError('');
    onScoreChange(numValue);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <label htmlFor="score-input" className="block text-sm font-medium text-gray-700 mb-1">
        Enter Your Score
      </label>
      <div className="relative">
        <input
          id="score-input"
          type="number"
          min="0"
          max={maxScore}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={`0 - ${maxScore}`}
          className={`w-full px-4 py-3 rounded-lg border ${
            error ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="text-gray-500">/ {maxScore}</span>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ScoreInput;
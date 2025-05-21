import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (score: number) => void;
  maxScore: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, maxScore }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = parseInt(searchValue, 10);
    if (!isNaN(score) && score >= 0 && score <= maxScore) {
      onSearch(score);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="number"
          placeholder="Search by score..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          min="0"
          max={maxScore}
          className="w-full px-4 py-2 pl-10 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 flex items-center bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
// src/App.tsx
import React, { useState } from 'react';
import { BarChart } from 'lucide-react';
import StudentDetailsForm, { StudentDetails } from './components/StudentDetailsForm';
import percentileData from './data/percentileData';
import DownloadDataButton from './components/excel';
import PromotionalBanner from './components/PromotionalBanner';
import PromotionalFooter from './components/PromotionalFooter';
import SuccessTestimonials from './components/SuccessTestimonials';

type DifficultyLevel = 'Easy' | 'Moderate' | 'Difficult';

function App() {
  const [score, setScore] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Easy');
  const [percentile, setPercentile] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(null);


  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseInt(e.target.value) : null;
    setScore(value);
    setPercentile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (score !== null && score >= 0 && score <= 200) {
      const data = percentileData[difficulty][score];
      if (data) {
        setPercentile(data.percentile);
        setShowForm(true);
      } else {
        alert('Invalid score or difficulty level.');
      }
    }
  };

  const handleStudentDetailsSubmit = (details: StudentDetails) => {
    setStudentDetails(details);
    setShowForm(false);
  };

  const getColor = (value: number) => {
    if (value >= 90) return 'bg-green-500';
    if (value >= 75) return 'bg-green-400';
    if (value >= 60) return 'bg-blue-500';
    if (value >= 45) return 'bg-yellow-500';
    if (value >= 30) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PromotionalBanner />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                MHT-CET Percentile Calculator
              </h1>
            </div>
           
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 flex-grow w-full">
       
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Difficulty Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Easy', 'Moderate', 'Difficult'] as DifficultyLevel[]).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setDifficulty(level)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          difficulty === level
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="score"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Enter Your Score (0-200)
                  </label>
                  <input
                    type="number"
                    id="score"
                    min="0"
                    max="200"
                    value={score === null ? '' : score}
                    onChange={handleScoreChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter score..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Calculate Percentile
                </button>
              </form>

              {percentile !== null && studentDetails && (
                <div className="mt-8 flex flex-col items-center">
                  <div
                    className={`w-32 h-32 ${getColor(
                      percentile
                    )} rounded-full flex items-center justify-center mb-4 transition-all duration-500 transform hover:scale-105`}
                  >
                    <span className="text-3xl font-bold text-white">{percentile}%</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your percentile rank at {difficulty} difficulty level
                  </p>
                </div>
              )}
            </div>
            
            
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md p-6 mt-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Prepare for MHT-CET 2025 with Rising Education</h2>
              <p className="mb-4">Join Maharashtra's leading MHT-CET coaching program</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.risingeducation.in/courses" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Register Now
                </a>
                <a 
                  href="tel:+919876543210" 
                  className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </>
     
          
      </main>

      <StudentDetailsForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleStudentDetailsSubmit}
        score={score ?? undefined}
        difficulty={difficulty}
        percentile={percentile ?? undefined}
      />
       <SuccessTestimonials />
      <PromotionalFooter />
    </div>
  );
}

export default App;
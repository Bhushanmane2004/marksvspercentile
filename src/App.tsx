import React, { useState } from 'react';
import { BarChart, Calculator, TrendingUp, Award, Users, BookOpen } from 'lucide-react';
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

      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center p-2">
                <img
                  src="/RE.webp"
                  alt="Rising Education Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Rising Education
                </h1>
                <p className="text-sm text-gray-600 font-medium">MHT-CET Calculator</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                <Users className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700 font-semibold text-sm">10K+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 flex-grow w-full">
        <>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calculator className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Percentile Calculator</h2>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
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
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
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
                  className="block text-sm font-semibold text-gray-700 mb-4"
                >
                  Enter Your Score (0-200)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="score"
                    min="0"
                    max="200"
                    value={score === null ? '' : score}
                    onChange={handleScoreChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base bg-white"
                    placeholder="Enter your score..."
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <span className="text-sm font-medium">/200</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Calculate Percentile
              </button>
            </div>

            {percentile !== null && studentDetails && (
              <div className="mt-8 flex flex-col items-center">
                <div
                  className={`w-32 h-32 ${getColor(
                    percentile
                  )} rounded-full flex items-center justify-center mb-4 transition-all duration-500 transform hover:scale-105`}
                >
                  <span className="text-3xl font-bold text-white">{percentile}%</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Your percentile rank at {difficulty} difficulty level
                </p>
              </div>
            )}
          </div>

          <div className="bg-blue-600 rounded-lg shadow-md p-6 mt-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Prepare for MHT-CET 2025 with Rising Education</h2>
            <p className="text-lg mb-6">Join Maharashtra's leading MHT-CET coaching program</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
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
      <DownloadDataButton />
      <SuccessTestimonials />
      <PromotionalFooter />
    </div>
  );
}

export default App;
import React from 'react';
import { BarChart } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">Exam Percentile Dashboard</h1>
              <p className="text-sm text-gray-500">Analyze your exam performance across different difficulty levels</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
// src/components/PromotionalBanner.tsx
import React, { useState } from 'react';
import { CheckCircle, Calendar, Clock, X } from 'lucide-react';

const PromotionalBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 relative">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="font-bold">MHT-CET 2025 Preparation</span>
          <span className="hidden md:inline">|</span>
          <span>Early bird enrollment open for Rising Education's MHT-CET courses!</span>
          <a 
            href="https://www.risingeducation.com/mhtcet" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-4 py-1 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Learn More
          </a>
        </div>
        <button 
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default PromotionalBanner;
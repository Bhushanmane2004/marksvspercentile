import React, { useState } from 'react';
import { X } from 'lucide-react';

const PromotionalBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-4 relative shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-3 text-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full">
          <div className="flex-1 text-left">
            <span className="font-extrabold text-lg text-gray-800 drop-shadow-md">
              Engineering Counselling
            </span>
            <span className="hidden md:inline mx-2 text-gray-800 drop-shadow-md">|</span>
            <span className="text-base font-semibold text-gray-800 drop-shadow-md">
              Maharashtra's Most Trusted Counselling Batch 5.0 Is Live!
            </span>
          </div>
          <a
            href="https://www.risingeducation.in/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-md"
          >
            Learn More
          </a>
        </div>
        <div className="text-sm md:pl-[300px] font-semibold text-gray-800 drop-shadow-md w-full md:block hidden text-left">
          Enroll Now At Just <span className="font-extrabold">₹1499</span> — Early Bird Offer!
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800/80 hover:text-gray-800 transition-all duration-200"
          aria-label="Dismiss"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default PromotionalBanner;
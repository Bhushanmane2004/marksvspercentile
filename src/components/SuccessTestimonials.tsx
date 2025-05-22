import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const imageCount = 23;
const imagePaths = Array.from({ length: imageCount }, (_, i) => `/${i + 1}.jpg`);

const SuccessTestimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleCount = isMobile ? 1 : 2;

  const next = () => {
    setCurrent((prev) => (prev + 1) % (imagePaths.length - visibleCount + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + (imagePaths.length - visibleCount + 1)) % (imagePaths.length - visibleCount + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-4/5 mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold text-center text-gray-900 mb-8">
        Our MHT-CET Success Stories
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(100 / visibleCount) * current}%)` }}
          >
            {imagePaths.map((path, index) => (
              <div
                key={index}
                className={`w-full ${visibleCount === 2 ? 'md:w-1/2' : 'w-full'} px-4 flex-shrink-0`}
              >
                <div className="bg-white rounded-xl shadow-sm p-4 h-full flex items-center justify-center">
                  <img
                    src={path}
                    alt={`Testimonial ${index + 1}`}
                    className="rounded-md max-h-96 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: imagePaths.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              current === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessTestimonials;
